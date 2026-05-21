#!/usr/bin/env node
/**
 * scripts/fix-blog-entities.mjs
 *
 * Una migración temprana dejó entidades HTML numéricas sin decodificar en
 * algunos titulares (p. ej. `Fideltalks 2&#215;01` en vez de `2×01`). Este
 * script recorre todos los `.mdx` bajo `content/blog/` y decodifica TODAS
 * las entidades numéricas (decimales y hex) y las nombradas más comunes
 * sin tocar nada más del archivo — preserva frontmatter, body, ediciones
 * manuales (featured, etc.).
 *
 * Uso:
 *   node scripts/fix-blog-entities.mjs           # ejecuta sobre todos
 *   node scripts/fix-blog-entities.mjs --dry     # solo reporta
 */

import { readFile, writeFile } from "node:fs/promises";
import { readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const CONTENT_ROOT = join(ROOT, "content", "blog");

const DRY = process.argv.includes("--dry");

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
 * Decodifica entidades HTML genéricamente. Numéricas primero (más frecuentes
 * en WP/Yoast), luego las nombradas (`&amp;` el último para evitar bucles).
 */
function decodeEntities(str) {
  return str
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(parseInt(n, 10)))
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

async function main() {
  const files = listMdx(CONTENT_ROOT);

  let changed = 0;
  let untouched = 0;
  const changedFiles = [];

  for (const file of files) {
    const raw = await readFile(file, "utf8");
    const next = decodeEntities(raw);
    if (next === raw) {
      untouched += 1;
      continue;
    }
    changed += 1;
    changedFiles.push(file.replace(ROOT + "/", ""));
    if (!DRY) await writeFile(file, next, "utf8");
  }

  console.log(`Files changed: ${changed}. Untouched: ${untouched}.`);
  for (const f of changedFiles) console.log(`  ${DRY ? "(dry) " : "✓ "}${f}`);
  if (DRY) console.log("\n(dry run — no se ha escrito nada)");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
