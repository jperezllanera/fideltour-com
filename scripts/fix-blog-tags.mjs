#!/usr/bin/env node
/**
 * scripts/fix-blog-tags.mjs
 *
 * Limpia los tags arrastrados desde WordPress:
 *  - Quita tags redundantes con la categoría del post (un post en
 *    `/blog/marketing/` no necesita `marketing` como tag).
 *  - Quita variantes acentuadas/no-acentuadas duplicadas (case-insensitive).
 *  - Limita a 3 tags por post (los más específicos primero).
 *
 * Preserva el resto del frontmatter (title, excerpt, featured, author...) y
 * todo el cuerpo del MDX. Idempotente.
 *
 * Uso:
 *   node scripts/fix-blog-tags.mjs          # ejecuta
 *   node scripts/fix-blog-tags.mjs --dry    # solo reporta
 */

import { readFile, writeFile } from "node:fs/promises";
import { readdirSync, statSync } from "node:fs";
import { dirname, join, resolve, basename as pathBasename } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const CONTENT_ROOT = join(ROOT, "content", "blog");

const DRY = process.argv.includes("--dry");

const MAX_TAGS = 3;

// Por cada categoría, listamos los tags que NO aportan info más allá del
// hecho de estar en esa categoría — los descartamos.
const REDUNDANT_BY_CATEGORY = {
  marketing: ["marketing", "marketing para hoteles", "marketing hotelero"],
  fidelizacion: [
    "fidelizacion",
    "fidelización",
    "fidelizacion hotelera",
    "fidelización hotelera",
  ],
  fideltour: ["fideltour"],
  fideltalks: ["fideltalks"],
  crm: ["crm", "crm para hoteles", "crm hotelero"],
  eventos: ["eventos"],
};

function listMdx(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...listMdx(full));
    else if (full.endsWith(".mdx")) out.push(full);
  }
  return out;
}

/** Normaliza para comparar: sin acentos, minúsculas, trim, espacios colapsados. */
function normalizeTag(tag) {
  return tag
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

function escapeYaml(value) {
  const str = String(value);
  const needsQuoting =
    /[:#\n"'`{}\[\]&*|>%!@,]/.test(str) || /^\s|\s$/.test(str);
  if (!needsQuoting) return str;
  return `"${str.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

/**
 * Lee el array de tags del frontmatter (YAML simple, formato `tags:\n  - ...`).
 * Devuelve { tags, startIdx, endIdx } o null si no hay bloque.
 */
function readTagsBlock(lines) {
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === "tags:" || lines[i].startsWith("tags:")) {
      const startIdx = i;
      const tags = [];
      let j = i + 1;
      while (j < lines.length && /^\s{2}-\s/.test(lines[j])) {
        const raw = lines[j].replace(/^\s{2}-\s+/, "").trim();
        const unquoted = raw.replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1");
        tags.push(unquoted);
        j += 1;
      }
      return { tags, startIdx, endIdx: j };
    }
  }
  return null;
}

function buildTagsBlock(tags) {
  if (tags.length === 0) return [];
  return ["tags:", ...tags.map((t) => `  - ${escapeYaml(t)}`)];
}

async function main() {
  const files = listMdx(CONTENT_ROOT);

  let changed = 0;
  let unchanged = 0;
  const report = [];

  for (const file of files) {
    const slug = pathBasename(file, ".mdx");
    const category = pathBasename(dirname(file));

    const raw = await readFile(file, "utf8");
    const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n?/);
    if (!fmMatch) continue;
    const fmBody = fmMatch[1];
    const rest = raw.slice(fmMatch[0].length);
    const lines = fmBody.split("\n");

    const block = readTagsBlock(lines);
    if (!block) {
      unchanged += 1;
      continue;
    }

    const redundant = new Set(
      (REDUNDANT_BY_CATEGORY[category] ?? []).map(normalizeTag),
    );

    const seen = new Set();
    const clean = [];
    for (const tag of block.tags) {
      const key = normalizeTag(tag);
      if (!key) continue;
      if (redundant.has(key)) continue;
      if (seen.has(key)) continue;
      seen.add(key);
      clean.push(tag.trim());
      if (clean.length >= MAX_TAGS) break;
    }

    // Si no cambia nada, saltar.
    const originalNormalized = block.tags.map(normalizeTag).join("|");
    const cleanNormalized = clean.map(normalizeTag).join("|");
    if (originalNormalized === cleanNormalized) {
      unchanged += 1;
      continue;
    }

    const newTagLines = buildTagsBlock(clean);
    const newLines = [
      ...lines.slice(0, block.startIdx),
      ...newTagLines,
      ...lines.slice(block.endIdx),
    ];
    const next = `---\n${newLines.join("\n")}\n---\n${rest}`;

    if (!DRY) await writeFile(file, next, "utf8");
    changed += 1;
    report.push({
      slug: `${category}/${slug}`,
      before: block.tags,
      after: clean,
    });
  }

  console.log(`Files changed: ${changed}. Unchanged: ${unchanged}.\n`);
  for (const r of report) {
    console.log(
      `${DRY ? "(dry) " : "✓ "}${r.slug}`,
    );
    console.log(`    [${r.before.join(", ")}]`);
    console.log(`  → [${r.after.join(", ")}]`);
  }
  if (DRY) console.log("\n(dry run — no se ha escrito nada)");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
