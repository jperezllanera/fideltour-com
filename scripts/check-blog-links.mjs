#!/usr/bin/env node
/**
 * scripts/check-blog-links.mjs
 *
 * Verifica que todos los enlaces internos a `/blog/...` dentro de los MDX
 * apuntan a un post que existe en disco. Reporta:
 *   - Links a posts que ya no están migrados (probablemente fueron a una
 *     categoría obsoleta del WP original).
 *   - Links externos a `https://www.fideltour.com/blog/...` (se mantuvieron
 *     absolutos por descuido — deberían ser relativos `/blog/...`).
 *
 * Solo reporta. No reescribe nada. Si quieres auto-fix, pasa `--rewrite`:
 * eso convertirá los enlaces externos a fideltour.com en relativos donde el
 * destino exista localmente.
 *
 * Uso:
 *   node scripts/check-blog-links.mjs              # solo audita
 *   node scripts/check-blog-links.mjs --rewrite    # arregla absolutos→relativos
 */

import { readFile, writeFile } from "node:fs/promises";
import { readdirSync, statSync } from "node:fs";
import { dirname, join, resolve, basename as pathBasename } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const CONTENT_ROOT = join(ROOT, "content", "blog");
const REWRITE = process.argv.includes("--rewrite");

function listMdx(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...listMdx(full));
    else if (full.endsWith(".mdx")) out.push(full);
  }
  return out;
}

/**
 * Construye el set de paths `/blog/{cat}/{slug}/` que existen como ficheros
 * MDX, para poder validar links contra él.
 */
function buildExistingPostsIndex(files) {
  const set = new Set();
  for (const file of files) {
    const slug = pathBasename(file, ".mdx");
    const category = pathBasename(dirname(file));
    set.add(`/blog/${category}/${slug}/`);
  }
  return set;
}

function normalizeBlogPath(href) {
  let path = href;
  // Quitar dominio si está presente
  path = path.replace(
    /^https?:\/\/(www\.)?fideltour\.com/i,
    "",
  );
  // Sin query/hash
  path = path.split("?")[0].split("#")[0];
  // Si termina en una extensión de archivo (imagen, doc, etc.), NO añadir
  // trailing slash — eso era el bug que reportaba imágenes como posts rotos.
  if (
    path.startsWith("/blog/") &&
    !path.endsWith("/") &&
    !/\.(webp|png|jpe?g|svg|gif|webm|mp4|pdf|docx?|xlsx?)$/i.test(path)
  ) {
    path += "/";
  }
  return path;
}

function isAssetPath(path) {
  return /\.(webp|png|jpe?g|svg|gif|webm|mp4|pdf|docx?|xlsx?)$/i.test(path);
}

const MD_LINK_RE = /(?<!!)\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
const ABSOLUTE_FIDELTOUR_RE = /https?:\/\/(www\.)?fideltour\.com/i;

async function main() {
  const files = listMdx(CONTENT_ROOT);
  const existing = buildExistingPostsIndex(files);

  const broken = []; // {file, href, target}
  const externalToRewrite = []; // {file, href, replacement}
  let totalLinks = 0;
  let internalLinks = 0;

  for (const file of files) {
    const raw = await readFile(file, "utf8");
    const rel = file.replace(ROOT + "/", "");
    let updated = raw;
    let touched = false;

    for (const match of raw.matchAll(MD_LINK_RE)) {
      const href = match[2];
      totalLinks += 1;

      // Si no es un link al blog, skip.
      if (!ABSOLUTE_FIDELTOUR_RE.test(href) && !href.startsWith("/blog/")) continue;

      const path = normalizeBlogPath(href);
      if (!path.startsWith("/blog/")) continue;
      // Si es un asset (imagen, pdf, etc.), no es un post: ignoramos.
      if (isAssetPath(path)) continue;
      internalLinks += 1;

      // Existe localmente?
      if (existing.has(path)) {
        // Reescribir si era absoluto.
        if (ABSOLUTE_FIDELTOUR_RE.test(href) && REWRITE) {
          updated = updated.replace(href, path);
          touched = true;
          externalToRewrite.push({ file: rel, from: href, to: path });
        } else if (ABSOLUTE_FIDELTOUR_RE.test(href)) {
          externalToRewrite.push({ file: rel, from: href, to: path });
        }
      } else {
        broken.push({ file: rel, href, target: path });
      }
    }

    if (touched && REWRITE) {
      await writeFile(file, updated, "utf8");
    }
  }

  console.log(
    `Auditoría: ${files.length} archivos. Links totales: ${totalLinks}. Internos al blog: ${internalLinks}.`,
  );

  if (externalToRewrite.length > 0) {
    console.log(
      `\n${REWRITE ? "✓ Reescritos" : "⚠ Reescribibles"}: ${externalToRewrite.length} enlaces absolutos a fideltour.com con destino local.`,
    );
    for (const r of externalToRewrite.slice(0, 5)) {
      console.log(`  ${r.file}`);
      console.log(`    ${r.from} → ${r.to}`);
    }
    if (externalToRewrite.length > 5)
      console.log(`  ... y ${externalToRewrite.length - 5} más.`);
    if (!REWRITE)
      console.log(`  (ejecuta con --rewrite para convertirlos en relativos)`);
  }

  if (broken.length > 0) {
    console.log(`\n✗ ROTOS: ${broken.length} links a posts inexistentes.`);
    for (const b of broken) {
      console.log(`  ${b.file}`);
      console.log(`    href: ${b.href}`);
      console.log(`    target: ${b.target}`);
    }
  } else {
    console.log(`\n✓ Ningún enlace interno al blog está roto.`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
