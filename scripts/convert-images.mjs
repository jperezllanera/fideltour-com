#!/usr/bin/env node
// Convierte todos los PNG/JPG bajo public/brand/ a WebP usando sharp.
// Aplica calidad/budget por familia (cliente-, sello-, caso-, hero-, etc.).
// Reporta tabla antes→después y marca los que se pasan de budget.
//
// Uso:
//   node scripts/convert-images.mjs            # convierte y deja .webp al lado del original
//   node scripts/convert-images.mjs --delete   # tras convertir, borra el original
//   node scripts/convert-images.mjs --dry      # solo simula y reporta
//   node scripts/convert-images.mjs --audit    # solo audita (pre-commit). Sale con código 1 si hay FAIL.

import { promises as fs } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(process.cwd(), "public/brand");
const DELETE = process.argv.includes("--delete");
const DRY = process.argv.includes("--dry");
const AUDIT = process.argv.includes("--audit");

// Excepciones permitidas como PNG (no se exige convertir a WebP).
const PNG_WHITELIST = new Set([
  "fideltour-logo.png",       // El PNG ya es más ligero que el WebP equivalente
]);

// Presupuestos por familia. La primera entrada que matchea gana.
const families = [
  { match: /^fideltour-logo/, name: "logo",         quality: 90, alpha: true,  budgetKB: 15 },
  { match: /^cliente-/,        name: "cliente",     quality: 90, alpha: true,  budgetKB: 30 },
  { match: /^sello-/,          name: "sello",       quality: 90, alpha: true,  budgetKB: 25 },
  { match: /^caso-/,           name: "caso",        quality: 78, alpha: false, budgetKB: 80 },
  { match: /^hero-/,           name: "hero",        quality: 82, alpha: true,  budgetKB: 200 },
  { match: /^bloque-/,         name: "bloque",      quality: 82, alpha: true,  budgetKB: 200 },
  { match: /^escalera-/,       name: "escalera",    quality: 85, alpha: true,  budgetKB: 80 },
  { match: /.*/,               name: "marketplace", quality: 90, alpha: true,  budgetKB: 30 },
];

function classify(basename) {
  for (const f of families) {
    if (f.match.test(basename)) return f;
  }
  return families.at(-1);
}

async function walk(dir) {
  const out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

function fmtKB(bytes) {
  return (bytes / 1024).toFixed(1).padStart(7) + " KB";
}

const rows = [];
const failed = [];
const auditFailures = [];
const all = await walk(ROOT);

// AUDIT mode: solo verifica, no convierte. Falla si:
//  - Hay .png/.jpg fuera de PNG_WHITELIST.
//  - Algún .webp pesa más que el budget de su familia.
if (AUDIT) {
  for (const file of all) {
    const ext = path.extname(file).toLowerCase();
    const basename = path.basename(file);
    const rel = path.relative(process.cwd(), file);

    if ([".png", ".jpg", ".jpeg"].includes(ext)) {
      if (PNG_WHITELIST.has(basename)) continue;
      auditFailures.push({
        kind: "format",
        file: rel,
        reason: `formato ${ext} pendiente de convertir a .webp (ejecuta: node scripts/convert-images.mjs)`,
      });
    } else if (ext === ".webp") {
      const family = classify(basename);
      const size = (await fs.stat(file)).size;
      if (size / 1024 > family.budgetKB) {
        auditFailures.push({
          kind: "budget",
          file: rel,
          reason: `${(size / 1024).toFixed(1)} KB > ${family.budgetKB} KB (familia ${family.name}). Bajar calidad o redimensionar.`,
        });
      }
    }
  }

  if (auditFailures.length === 0) {
    console.log(`✓ check-images OK — todas las imágenes bajo budget y en formato webp/svg.`);
    process.exit(0);
  }

  console.log(`\n✗ check-images FAIL — ${auditFailures.length} problema(s):\n`);
  for (const f of auditFailures) {
    console.log(`  [${f.kind}] ${f.file}`);
    console.log(`     ${f.reason}`);
  }
  console.log(`\nReglas en .claude/skills/seo-assets/SKILL.md`);
  process.exit(1);
}

for (const file of all) {
  const ext = path.extname(file).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;

  const basename = path.basename(file);
  const family = classify(basename);
  const original = (await fs.stat(file)).size;

  const webpPath = file.replace(/\.(png|jpe?g)$/i, ".webp");
  let outSize;

  try {
    if (DRY) {
      const buf = await sharp(file)
        .webp({ quality: family.quality, alphaQuality: family.alpha ? 100 : undefined })
        .toBuffer();
      outSize = buf.length;
    } else {
      await sharp(file)
        .webp({ quality: family.quality, alphaQuality: family.alpha ? 100 : undefined })
        .toFile(webpPath);
      outSize = (await fs.stat(webpPath)).size;
    }
  } catch (err) {
    failed.push({ file: path.relative(process.cwd(), file), reason: err.message });
    continue;
  }

  const overBudget = outSize / 1024 > family.budgetKB;
  rows.push({
    file: path.relative(process.cwd(), file),
    family: family.name,
    before: original,
    after: outSize,
    saving: 100 - (outSize / original) * 100,
    overBudget,
    budget: family.budgetKB,
  });

  if (DELETE && !DRY) {
    await fs.unlink(file);
  }
}

// Reporte
const totalBefore = rows.reduce((s, r) => s + r.before, 0);
const totalAfter = rows.reduce((s, r) => s + r.after, 0);

console.log(
  `\n${"file".padEnd(60)}  ${"family".padEnd(12)}  ${"before".padStart(10)}  ${"after".padStart(10)}  ${"saving".padStart(8)}  budget`,
);
console.log("-".repeat(120));
for (const r of rows.sort((a, b) => b.before - a.before)) {
  const marker = r.overBudget ? "  ⚠ over" : "";
  console.log(
    `${r.file.padEnd(60)}  ${r.family.padEnd(12)}  ${fmtKB(r.before)}  ${fmtKB(r.after)}  ${(r.saving.toFixed(0) + "%").padStart(8)}  ${r.budget}KB${marker}`,
  );
}
console.log("-".repeat(120));
console.log(
  `${"TOTAL".padEnd(60)}  ${"".padEnd(12)}  ${fmtKB(totalBefore)}  ${fmtKB(totalAfter)}  ${((100 - (totalAfter / totalBefore) * 100).toFixed(0) + "%").padStart(8)}`,
);

const overBudgetRows = rows.filter((r) => r.overBudget);
if (overBudgetRows.length) {
  console.log(
    `\n⚠ ${overBudgetRows.length} archivos siguen por encima del budget. Considerar redimensionar a la resolución real de uso.`,
  );
}

if (failed.length) {
  console.log(`\n✗ ${failed.length} archivos fallaron:`);
  for (const f of failed) console.log(`  - ${f.file}: ${f.reason}`);
}

if (DRY) console.log("\n(dry run — no se han escrito archivos)");
if (DELETE && !DRY) console.log("\nOriginales borrados.");
