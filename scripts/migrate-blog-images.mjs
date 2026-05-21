#!/usr/bin/env node
/**
 * scripts/migrate-blog-images.mjs
 *
 * Tras `scripts/migrate-blog.mjs`, este script desconecta los posts del CDN
 * de WordPress origen. Recorre todos los `.mdx` en `content/blog/`, descarga
 * cada imagen referenciada (frontmatter `image:` + inline `![](…)`) que viva
 * en `www.fideltour.com`, la convierte a WebP con `sharp` y la guarda en
 * `public/blog/{category}/{slug}/{basename}.webp`. Después reescribe el MDX
 * para que apunte al path local.
 *
 * Idempotente: si la imagen ya existe localmente o el MDX ya apunta a una
 * ruta local, se salta.
 *
 * Uso:
 *   node scripts/migrate-blog-images.mjs              # ejecuta
 *   node scripts/migrate-blog-images.mjs --dry        # no descarga ni escribe
 *   node scripts/migrate-blog-images.mjs --slug X     # solo el slug X
 *   node scripts/migrate-blog-images.mjs --force      # re-descarga aunque ya exista
 *
 * Compresión: WebP quality 75, effort 6, redimensionado a 1600px de ancho
 * máximo (sin upscaling). Ajusta WEBP_QUALITY / MAX_WIDTH abajo si necesitas
 * mover el equilibrio peso/calidad.
 */

import { mkdir, readFile, writeFile, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, extname, join, resolve, basename as pathBasename } from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const CONTENT_ROOT = join(ROOT, "content", "blog");
const PUBLIC_ROOT = join(ROOT, "public", "blog");

const args = process.argv.slice(2);
const DRY = args.includes("--dry");
const FORCE = args.includes("--force");
const SLUG_FILTER = (() => {
  const i = args.indexOf("--slug");
  return i >= 0 && args[i + 1] ? args[i + 1] : null;
})();

// Parámetros de compresión. Ajustar aquí si los pesos no encajan en el
// presupuesto del proyecto.
const WEBP_QUALITY = 75;
const WEBP_EFFORT = 6;
const MAX_WIDTH = 1600;

// Solo descargamos imágenes del CDN del WP original. Cualquier otra URL
// (youtube/instagram/zoho/…) se deja tal cual en el markdown.
const SOURCE_HOSTS = new Set(["www.fideltour.com", "fideltour.com"]);

/* ──────────────────────────────────────────────────────────────────────
   Walk de archivos .mdx
   ────────────────────────────────────────────────────────────────────── */

import { readdirSync, statSync } from "node:fs";

function listMdx(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...listMdx(full));
    else if (full.endsWith(".mdx")) out.push(full);
  }
  return out;
}

/* ──────────────────────────────────────────────────────────────────────
   Parseo de URLs en un MDX
   ────────────────────────────────────────────────────────────────────── */

function isMigratableUrl(rawUrl) {
  try {
    const url = new URL(rawUrl);
    if (!SOURCE_HOSTS.has(url.host)) return false;
    if (!url.pathname.startsWith("/wp-content/uploads/")) return false;
    return true;
  } catch {
    return false;
  }
}

/**
 * Convierte el basename de una URL WP en un slug válido para nuestro
 * `validate-filename` hook: solo `[a-z0-9-]` y extensión `.webp`.
 * También quita el sufijo `-WxH` que WordPress añade a los resizes
 * (`foo-300x200.png` → `foo.png`).
 */
function sanitizeBasename(rawBasename) {
  const ext = extname(rawBasename).toLowerCase();
  let stem = rawBasename.slice(0, -ext.length || undefined);

  // Quitar sufijo de resize WP (-300x200 al final).
  stem = stem.replace(/-\d{2,4}x\d{2,4}$/, "");

  stem = stem
    .toLowerCase()
    // Tildes y diacríticos → ASCII básico.
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[ñ]/g, "n")
    // Cualquier carácter fuera de a-z0-9- → guion.
    .replace(/[^a-z0-9-]+/g, "-")
    // Comprimir guiones múltiples.
    .replace(/-+/g, "-")
    // Quitar guiones al inicio/final.
    .replace(/^-+|-+$/g, "");

  if (stem.length < 3) stem = `post-${stem || "img"}`;
  if (stem.length > 55) stem = stem.slice(0, 55).replace(/-+$/, "");

  // Slugs genéricos prohibidos por el hook validate-filename.sh
  if (/^(img|image|foto|photo|picture|screenshot|captura|untitled|sin-titulo|sin-nombre|new-file|new-|nuevo-|temp|tmp|asset|file|copy|copia)/i.test(stem)) {
    stem = `post-${stem}`;
  }

  return stem;
}

function extractUrlsFromMdx(raw) {
  const found = new Set();

  // 1) Frontmatter image: "https://..."
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
  if (fmMatch) {
    const fm = fmMatch[1];
    const imgLine = fm.match(/^image:\s*"?([^"\n]+)"?/m);
    if (imgLine) found.add(imgLine[1].trim());
  }

  // 2) Inline markdown ![alt](url) y ![alt](url "title")
  const inlineRe = /!\[[^\]]*\]\(\s*(\S+?)(?:\s+"[^"]*")?\s*\)/g;
  let m;
  while ((m = inlineRe.exec(raw)) !== null) {
    found.add(m[1]);
  }

  return Array.from(found).filter(isMigratableUrl);
}

/* ──────────────────────────────────────────────────────────────────────
   Descarga + conversión
   ────────────────────────────────────────────────────────────────────── */

async function downloadAndConvert(sourceUrl, destPath) {
  if (!FORCE && existsSync(destPath)) {
    const st = await stat(destPath);
    if (st.size > 0) return { skipped: true };
  }
  if (DRY) return { dry: true };

  const res = await fetch(sourceUrl);
  if (!res.ok) throw new Error(`HTTP ${res.status} ${sourceUrl}`);
  const buf = Buffer.from(await res.arrayBuffer());

  await mkdir(dirname(destPath), { recursive: true });

  // SVG no se reencoda — lo guardamos tal cual.
  if (sourceUrl.toLowerCase().endsWith(".svg")) {
    const svgDest = destPath.replace(/\.webp$/, ".svg");
    await writeFile(svgDest, buf);
    return { written: true, finalPath: svgDest };
  }

  // GIF: si es animado, sharp puede colapsarlo. Aceptamos pérdida (frame 1)
  // porque la web nueva no quiere GIFs.
  const img = sharp(buf, { animated: false }).resize({
    width: MAX_WIDTH,
    withoutEnlargement: true,
    fit: "inside",
  });
  try {
    await img
      .webp({ quality: WEBP_QUALITY, effort: WEBP_EFFORT })
      .toFile(destPath);
  } catch (err) {
    // Fallback: guardar bytes originales (algo raro como AVIF/HEIC)
    const origExt = extname(new URL(sourceUrl).pathname).toLowerCase() || ".bin";
    const fallbackDest = destPath.replace(/\.webp$/, origExt);
    await writeFile(fallbackDest, buf);
    return { written: true, finalPath: fallbackDest, fallback: err.message };
  }

  return { written: true, finalPath: destPath };
}

/* ──────────────────────────────────────────────────────────────────────
   Main
   ────────────────────────────────────────────────────────────────────── */

async function main() {
  const files = listMdx(CONTENT_ROOT);
  let processedFiles = 0;
  let downloadedImages = 0;
  let skippedImages = 0;
  let failedImages = 0;
  const rewriteCount = { frontmatter: 0, inline: 0 };

  for (const file of files) {
    // file path: .../content/blog/{category}/{slug}.mdx
    const slug = pathBasename(file, ".mdx");
    const category = pathBasename(dirname(file));

    if (SLUG_FILTER && slug !== SLUG_FILTER) continue;

    const raw = await readFile(file, "utf8");
    const urls = extractUrlsFromMdx(raw);

    if (urls.length === 0) continue;

    let updated = raw;
    const postDir = join(PUBLIC_ROOT, category, slug);
    let touched = false;

    for (const sourceUrl of urls) {
      const urlObj = new URL(sourceUrl);
      const rawName = pathBasename(urlObj.pathname);
      const stem = sanitizeBasename(rawName);
      const ext = extname(urlObj.pathname).toLowerCase();

      // Decidir extensión final: SVG → SVG, otros → webp.
      const finalExt = ext === ".svg" ? ".svg" : ".webp";
      const destFilename = `${stem}${finalExt}`;
      const destPath = join(postDir, destFilename);
      const publicHref = `/blog/${category}/${slug}/${destFilename}`;

      try {
        const result = await downloadAndConvert(sourceUrl, destPath);
        if (result?.skipped) skippedImages += 1;
        else if (result?.written) downloadedImages += 1;
      } catch (err) {
        failedImages += 1;
        console.warn(`✗ ${sourceUrl} — ${err.message}`);
        continue;
      }

      // Reescribir todas las apariciones de sourceUrl en el MDX → publicHref.
      const before = updated;
      // Escape conservador para reemplazar literal (sin regex chars problemáticos).
      const safe = sourceUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp(safe, "g");
      updated = updated.replace(re, publicHref);
      if (updated !== before) {
        touched = true;
        // Contabilizar: si el frontmatter ya tenía esta URL, cuenta como fm;
        // si solo aparece en cuerpo, como inline.
        const fmHadIt = /^image:\s*"?[^"\n]+"?$/m.test(before.split("---")[1] ?? "");
        if (fmHadIt) rewriteCount.frontmatter += 1;
        rewriteCount.inline += 1;
      }
    }

    if (touched && !DRY) {
      await writeFile(file, updated, "utf8");
    }
    processedFiles += 1;
  }

  console.log(
    `\nDone. MDX scanned: ${processedFiles}. ` +
      `Downloaded: ${downloadedImages}. Already-local (skipped): ${skippedImages}. ` +
      `Failed: ${failedImages}.`,
  );
  console.log(
    `Rewrites: ~${rewriteCount.frontmatter} frontmatter + ${rewriteCount.inline} inline (puede superponerse).`,
  );
  if (DRY) console.log("(dry run — no se ha escrito nada)");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
