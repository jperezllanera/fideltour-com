#!/usr/bin/env node
/**
 * scripts/fix-blog-authors.mjs
 *
 * Las WP REST devuelve siempre el mismo usuario administrador como autor
 * (lo migramos como "Equipo Fideltour"). Pero el blog vivo muestra bylines
 * reales (Yoast SEO los expone como <meta name="author">). Este script
 * recorre los .mdx ya migrados, fetchea la URL pública del post original
 * y reescribe **solo** el bloque `author:` del frontmatter con el byline
 * real. El resto del frontmatter (title, excerpt, featured, etc.) y el
 * cuerpo permanecen intactos.
 *
 * Uso:
 *   node scripts/fix-blog-authors.mjs           # ejecuta sobre todos los posts
 *   node scripts/fix-blog-authors.mjs --slug X  # solo un slug
 *   node scripts/fix-blog-authors.mjs --dry     # no escribe, solo reporta
 */

import { readFile, writeFile } from "node:fs/promises";
import { readdirSync, statSync } from "node:fs";
import { dirname, join, resolve, basename as pathBasename } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const CONTENT_ROOT = join(ROOT, "content", "blog");

const args = process.argv.slice(2);
const DRY = args.includes("--dry");
const SLUG_FILTER = (() => {
  const i = args.indexOf("--slug");
  return i >= 0 && args[i + 1] ? args[i + 1] : null;
})();

function listMdx(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...listMdx(full));
    else if (full.endsWith(".mdx")) out.push(full);
  }
  return out;
}

function splitAuthor(rawName) {
  if (!rawName) return null;
  const match = rawName.match(/^(.+?)\s*\((.+)\)\s*$/);
  if (!match) return { name: rawName.trim() };
  return { name: match[1].trim(), role: match[2].trim() };
}

function escapeYaml(value) {
  if (value == null) return '""';
  const str = String(value);
  const needsQuoting = /[:#\n"'`{}\[\]&*|>%!@,]/.test(str) || /^\s|\s$/.test(str);
  if (!needsQuoting) return str;
  return `"${str.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

function buildAuthorYaml(author) {
  const lines = ["author:"];
  lines.push(`  name: ${escapeYaml(author.name)}`);
  if (author.role) lines.push(`  role: ${escapeYaml(author.role)}`);
  return lines.join("\n");
}

/**
 * Reemplaza el bloque `author:` en el frontmatter de un MDX por la nueva
 * versión, preservando todos los demás campos.
 */
function replaceAuthorBlock(raw, newAuthorYaml) {
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!fmMatch) return raw;
  const fmBody = fmMatch[1];
  const rest = raw.slice(fmMatch[0].length);

  // Detectar el bloque `author:` (top-level + posibles sub-líneas indentadas).
  const lines = fmBody.split("\n");
  const newLines = [];
  let i = 0;
  let replaced = false;
  while (i < lines.length) {
    const line = lines[i];
    if (/^author:/.test(line)) {
      // Engulle líneas indentadas que pertenecen al objeto author.
      i += 1;
      while (i < lines.length && /^\s+/.test(lines[i])) i += 1;
      if (!replaced) {
        newLines.push(newAuthorYaml);
        replaced = true;
      }
    } else {
      newLines.push(line);
      i += 1;
    }
  }
  if (!replaced) newLines.push(newAuthorYaml);

  return `---\n${newLines.join("\n")}\n---\n${rest}`;
}

async function fetchAuthorFromHtml(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (compatible; FideltourMigrator/1.0; +https://fideltour.com)",
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const html = await res.text();
  const meta = html.match(/<meta\s+name="author"\s+content="([^"]+)"/i);
  if (!meta) return null;
  // Decodificar entidades comunes que Yoast suele meter.
  const raw = meta[1]
    .replace(/&amp;/g, "&")
    .replace(/&#039;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "’");
  return splitAuthor(raw);
}

async function main() {
  const files = listMdx(CONTENT_ROOT);

  let updated = 0;
  let unchanged = 0;
  let missing = 0;
  let failed = 0;

  for (const file of files) {
    const slug = pathBasename(file, ".mdx");
    const category = pathBasename(dirname(file));

    if (SLUG_FILTER && slug !== SLUG_FILTER) continue;

    const url = `https://www.fideltour.com/blog/${category}/${slug}/`;

    let author = null;
    try {
      author = await fetchAuthorFromHtml(url);
    } catch (err) {
      failed += 1;
      console.warn(`✗ ${category}/${slug} — fetch fail: ${err.message}`);
      continue;
    }

    if (!author || !author.name) {
      missing += 1;
      continue;
    }

    const raw = await readFile(file, "utf8");
    const currentMatch = raw.match(
      /^author:\s*\n((?:[ \t]+\S.*\n?)+)/m,
    );
    const currentBlock = currentMatch ? currentMatch[0] : "";
    const newBlock = buildAuthorYaml(author);
    if (currentBlock.trim() === newBlock.trim()) {
      unchanged += 1;
      continue;
    }

    const next = replaceAuthorBlock(raw, newBlock);
    if (next === raw) {
      unchanged += 1;
      continue;
    }

    if (DRY) {
      console.log(
        `📝 (dry) ${category}/${slug} — ${author.name}${author.role ? ` (${author.role})` : ""}`,
      );
    } else {
      await writeFile(file, next, "utf8");
      console.log(
        `✓ ${category}/${slug} — ${author.name}${author.role ? ` (${author.role})` : ""}`,
      );
    }
    updated += 1;
  }

  console.log(
    `\nDone. Updated: ${updated}. Unchanged: ${unchanged}. Missing meta: ${missing}. Failed: ${failed}.`,
  );
  if (DRY) console.log("(dry run — no se ha escrito nada)");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
