#!/usr/bin/env node
/**
 * scripts/migrate-blog.mjs
 *
 * Migra todos los posts vivos de https://www.fideltour.com/blog/ a archivos
 * `content/blog/{category}/{slug}.mdx` para que la nueva web (Next.js + MDX)
 * sirva esos mismos contenidos en exactamente las mismas URLs y no rompa
 * backlinks ni SEO.
 *
 * Fuente: WP REST API (`/wp-json/wp/v2/posts?_embed&per_page=100`).
 * Solo migra posts en castellano (los `/en/blog/` se ignoran — el sitio
 * todavía no tiene i18n; ver CLAUDE.md, "Cambios futuros").
 *
 * Uso:
 *   node scripts/migrate-blog.mjs           # migra todo
 *   node scripts/migrate-blog.mjs --slug X  # migra solo el slug X (debug)
 *   node scripts/migrate-blog.mjs --dry     # no escribe ficheros
 */

import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { parse as parseHtml } from "node-html-parser";
import TurndownService from "turndown";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT_ROOT = join(ROOT, "content", "blog");

const API = "https://www.fideltour.com/wp-json/wp/v2/posts";
const ARGS = new Set(process.argv.slice(2));
const DRY = ARGS.has("--dry");
const SLUG_FILTER = (() => {
  const args = process.argv.slice(2);
  const idx = args.indexOf("--slug");
  return idx >= 0 && args[idx + 1] ? args[idx + 1] : null;
})();

// Categorías válidas (mismo set que `lib/content/blog.ts`).
const VALID_CATEGORIES = new Set([
  "marketing",
  "fideltour",
  "fidelizacion",
  "fideltalks",
  "crm",
  "eventos",
]);

/* ──────────────────────────────────────────────────────────────────────
   Fetch helpers
   ────────────────────────────────────────────────────────────────────── */

async function fetchAllPosts() {
  const all = [];
  let page = 1;
  while (true) {
    const url = `${API}?_embed=1&per_page=100&page=${page}`;
    const res = await fetch(url, {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) {
      if (res.status === 400 || res.status === 404) break;
      throw new Error(`Fetch ${url} failed: ${res.status}`);
    }
    const batch = await res.json();
    if (!Array.isArray(batch) || batch.length === 0) break;
    all.push(...batch);
    const totalPages = Number(res.headers.get("x-wp-totalpages") ?? "1");
    if (page >= totalPages) break;
    page += 1;
  }
  return all;
}

/* ──────────────────────────────────────────────────────────────────────
   Extracción de campos
   ────────────────────────────────────────────────────────────────────── */

/**
 * Parsea el URL canónico del post para sacar la categoría que figura en la
 * ruta (`/blog/{category}/{slug}/`). Si no encaja con una categoría conocida,
 * devolvemos `null` y el post se omite (no queremos terminar con categorías
 * inventadas en la web nueva).
 */
function categoryFromLink(link) {
  try {
    const url = new URL(link);
    // Ignora /en/blog/...
    if (url.pathname.startsWith("/en/")) return { skip: true };
    const match = url.pathname.match(/^\/blog\/([^/]+)\/([^/]+)\//);
    if (!match) return null;
    const [, category, slug] = match;
    if (!VALID_CATEGORIES.has(category)) return null;
    return { category, slug };
  } catch {
    return null;
  }
}

/**
 * Decodifica TODAS las entidades HTML que WordPress mete en `title.rendered`,
 * `excerpt.rendered`, tags, etc. Soporta:
 *  - Entidades numéricas decimales (`&#215;` → ×, `&#8217;` → ’)
 *  - Entidades numéricas hex (`&#x2713;` → ✓)
 *  - Entidades nombradas más comunes (&amp; &lt; &gt; &quot; &apos; &nbsp;)
 *
 * Orden: numéricas primero (la fuente más habitual en WP/Yoast), después las
 * nombradas — al revés desencriptaríamos sub-cadenas en bucle.
 */
function decodeEntities(html) {
  return html
    .replace(/&#(\d+);/g, (_, n) =>
      String.fromCodePoint(parseInt(n, 10)),
    )
    .replace(/&#x([0-9a-fA-F]+);/g, (_, n) =>
      String.fromCodePoint(parseInt(n, 16)),
    )
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function stripHtml(html) {
  return decodeEntities(html.replace(/<[^>]+>/g, "")).trim();
}

function isoDate(iso) {
  // Convierte "2026-01-26T10:26:38" → "2026-01-26"
  return iso.split("T")[0];
}

/* ──────────────────────────────────────────────────────────────────────
   HTML → Markdown
   ────────────────────────────────────────────────────────────────────── */

function buildTurndown() {
  const td = new TurndownService({
    headingStyle: "atx", // ## en vez de subrayado
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
    emDelimiter: "_",
  });

  // NOTA: la limpieza de class/style/data-* ya se hace en `cleanWpHtml`
  // ANTES de pasar el HTML a turndown. No añadimos una regla universal aquí
  // porque sobreescribiría las reglas por defecto de turndown para <p>, <h2>,
  // <strong>, <a>, etc. y colapsaría todo el contenido en un solo bloque.

  // Convertir <figure> con imagen + figcaption en imagen markdown + caption.
  td.addRule("figure-image", {
    filter: (node) => node.nodeName === "FIGURE",
    replacement: (content, node) => {
      const img = node.querySelector("img");
      const caption = node.querySelector("figcaption");
      if (!img) return content;
      const src = img.getAttribute("src") || img.getAttribute("data-src") || "";
      const alt = img.getAttribute("alt") || "";
      const captionMd = caption ? `\n\n_${stripHtml(caption.innerHTML)}_` : "";
      return `\n\n![${alt}](${src})${captionMd}\n\n`;
    },
  });

  // Bloques de cita con `wp:quote` o `blockquote` clase elementor →
  // blockquote markdown estándar.
  td.addRule("preserve-blockquote", {
    filter: ["blockquote"],
    replacement: (content) => {
      return content
        .trim()
        .split("\n")
        .map((line) => `> ${line}`)
        .join("\n") + "\n\n";
    },
  });

  // Drop scripts/style/iframes (no los queremos en el contenido editorial).
  td.remove(["script", "style", "noscript"]);

  return td;
}

/**
 * Limpia el HTML que viene de WP antes de pasárselo a turndown:
 * - quita los `data-*` y `class` que no aportan al MDX
 * - sustituye lazyload `data-src` por `src`
 * - colapsa varios saltos seguidos
 */
function cleanWpHtml(html) {
  const root = parseHtml(html, { lowerCaseTagName: false });

  // lazyload → src
  root.querySelectorAll("img").forEach((img) => {
    const dataSrc = img.getAttribute("data-src");
    if (dataSrc && !img.getAttribute("src")?.startsWith("http")) {
      img.setAttribute("src", dataSrc);
    }
    img.removeAttribute("data-src");
    img.removeAttribute("data-srcset");
    img.removeAttribute("data-sizes");
    img.removeAttribute("loading");
    img.removeAttribute("decoding");
    img.removeAttribute("data-load-mode");
    img.removeAttribute("class");
    img.removeAttribute("srcset");
    img.removeAttribute("sizes");
  });

  // Quitar atributos ruidosos de todos los elementos.
  const NOISE = [
    "class",
    "style",
    "data-id",
    "data-element_type",
    "data-widget_type",
    "data-settings",
    "data-mce-style",
    "data-mce-fragment",
    "aria-hidden",
    "role",
  ];
  root.querySelectorAll("*").forEach((el) => {
    for (const attr of NOISE) el.removeAttribute(attr);
  });

  return root.toString();
}

/* ──────────────────────────────────────────────────────────────────────
   Frontmatter
   ────────────────────────────────────────────────────────────────────── */

function escapeYaml(value) {
  if (value == null) return '""';
  const str = String(value);
  // Si contiene comillas dobles, escapadas o ":" al principio, usar comillas
  // simples y escapar las simples internas.
  const needsQuoting = /[:#\n"'`{}\[\]&*|>%!@,]/.test(str) || /^\s|\s$/.test(str);
  if (!needsQuoting) return str;
  return `"${str.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

function buildFrontmatter({ title, excerpt, date, author, image, tags, featured }) {
  const lines = ["---"];
  lines.push(`title: ${escapeYaml(title)}`);
  lines.push(`excerpt: ${escapeYaml(excerpt)}`);
  lines.push(`date: ${date}`);
  lines.push("author:");
  lines.push(`  name: ${escapeYaml(author.name)}`);
  if (author.role) lines.push(`  role: ${escapeYaml(author.role)}`);
  if (image) lines.push(`image: ${escapeYaml(image)}`);
  if (tags && tags.length > 0) {
    lines.push("tags:");
    for (const tag of tags) lines.push(`  - ${escapeYaml(tag)}`);
  }
  if (featured) lines.push("featured: true");
  lines.push("---", "");
  return lines.join("\n");
}

/* ──────────────────────────────────────────────────────────────────────
   Author: parsear "Estefanía D. (Inbound Marketing Specialist)" en {name, role}
   ────────────────────────────────────────────────────────────────────── */

function splitAuthor(rawName) {
  if (!rawName) return { name: "Equipo Fideltour" };
  const match = rawName.match(/^(.+?)\s*\((.+)\)\s*$/);
  if (!match) return { name: rawName.trim() };
  return { name: match[1].trim(), role: match[2].trim() };
}

/* ──────────────────────────────────────────────────────────────────────
   Main
   ────────────────────────────────────────────────────────────────────── */

async function main() {
  console.log(`📡 Fetching posts from ${API}…`);
  const posts = await fetchAllPosts();
  console.log(`   → ${posts.length} posts received from WP REST.`);

  const turndown = buildTurndown();

  let written = 0;
  let skipped = 0;
  const skipReasons = {};

  for (const post of posts) {
    const link = post.link;
    const parsed = categoryFromLink(link);
    if (!parsed || parsed.skip) {
      const reason = parsed?.skip ? "english" : "no-category";
      skipReasons[reason] = (skipReasons[reason] ?? 0) + 1;
      skipped += 1;
      continue;
    }
    const { category, slug } = parsed;

    if (SLUG_FILTER && slug !== SLUG_FILTER) continue;

    const title = decodeEntities(post.title?.rendered ?? "").trim();
    const excerpt = stripHtml(post.excerpt?.rendered ?? "");
    const date = isoDate(post.date);

    const embeddedAuthor = post._embedded?.author?.[0];
    const author = splitAuthor(embeddedAuthor?.name);

    const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
    const image = featuredMedia?.source_url ?? null;

    const wpTerms = post._embedded?.["wp:term"] ?? [];
    const tagTerms = wpTerms
      .flat()
      .filter((t) => t?.taxonomy === "post_tag")
      .map((t) => decodeEntities(t.name));

    const cleanedHtml = cleanWpHtml(post.content?.rendered ?? "");
    const markdown = turndown
      .turndown(cleanedHtml)
      .replace(/\n{3,}/g, "\n\n")
      .trim();

    const front = buildFrontmatter({
      title,
      excerpt,
      date,
      author,
      image,
      tags: tagTerms,
      featured: false,
    });

    const fileContent = `${front}${markdown}\n`;
    const targetDir = join(OUT_ROOT, category);
    const targetFile = join(targetDir, `${slug}.mdx`);

    if (DRY) {
      console.log(`📝 (dry) ${category}/${slug}.mdx — ${markdown.length} chars`);
    } else {
      if (!existsSync(targetDir)) await mkdir(targetDir, { recursive: true });
      await writeFile(targetFile, fileContent, "utf8");
      console.log(`✓ ${category}/${slug}.mdx`);
    }
    written += 1;
  }

  console.log(
    `\nDone. Wrote ${written} posts. Skipped ${skipped}. Reasons: ${
      Object.entries(skipReasons)
        .map(([k, v]) => `${k}=${v}`)
        .join(", ") || "—"
    }`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
