#!/usr/bin/env node
/*
 * check-metadata-parity.mjs — Compara <title> y <meta description> entre el
 * WordPress vivo (Yoast) y el Next nuevo, URL por URL.
 *
 * Mientras el WP siga sirviéndose en --legacy (por defecto www.fideltour.com)
 * y el Next en --base (staging), este script fetchea ambos para cada path del
 * sitemap del Next y reporta:
 *
 *   - TITLE_DIFF      title distinto (ignorando solo el separador del template)
 *   - DESC_DIFF       meta description distinta
 *   - NO_WP           el WP devuelve 404/redirect (URL nueva, sin equivalente)
 *   - OK              title y description equivalentes
 *
 * El objetivo NO es paridad literal (el separador cambió a propósito), sino
 * detectar dónde el Next perdió o cambió el title/description que Yoast tenía
 * posicionado, para decidir caso a caso.
 *
 * Uso:
 *   node scripts/check-metadata-parity.mjs --base=https://staging.x.com
 *   node scripts/check-metadata-parity.mjs --base=https://staging.x.com \
 *     --legacy=https://www.fideltour.com --verbose
 *
 * Exit: 0 siempre que pueda completar (es informativo, no un gate). 2 si no
 * puede leer el sitemap.
 */

import process from "node:process";

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, "").split("=");
    return [k, v ?? true];
  }),
);

const BASE = (args.base ?? "http://127.0.0.1:3000").replace(/\/$/, "");
const LEGACY = (args.legacy ?? "https://www.fideltour.com").replace(/\/$/, "");
const CONCURRENCY = Number(args.concurrency ?? 8);
const VERBOSE = Boolean(args.verbose);
const LIMIT = args.limit ? Number(args.limit) : null;

const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const CYAN = "\x1b[36m";
const DIM = "\x1b[2m";
const RESET = "\x1b[0m";

// ----- Extractores tolerantes -----

function extractTitle(html) {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? decodeEntities(m[1].trim()) : null;
}

function extractDescription(html) {
  // Captura cualquier <meta ...> y filtra el que tenga name="description".
  const metas = html.matchAll(/<meta\s+([^>]*)>/gi);
  for (const m of metas) {
    const attrs = m[1];
    if (/\bname=["']description["']/i.test(attrs)) {
      const c = attrs.match(/\bcontent=["']([\s\S]*?)["']/i);
      if (c) return decodeEntities(c[1].trim());
    }
  }
  return null;
}

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ");
}

// Normaliza un title quitando el sufijo de marca y separadores comunes para
// comparar el "núcleo" del title sin penalizar el cambio de template.
function titleCore(title) {
  if (!title) return "";
  return title
    .replace(/\s*[·\-|–—]\s*Fideltour.*$/i, "")
    .replace(/\s*[·\-|–—]\s*$/, "")
    .trim()
    .toLowerCase();
}

// ----- Sitemap -----

const sitemapRes = await fetch(`${BASE}/sitemap.xml`);
if (!sitemapRes.ok) {
  console.error(`${RED}ERROR${RESET} /sitemap.xml returned ${sitemapRes.status}`);
  process.exit(2);
}
const xml = await sitemapRes.text();
const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => {
    try {
      const u = new URL(m[1]);
      return u.pathname + u.search;
    } catch {
      return null;
    }
  })
  .filter(Boolean);

const toCheck = LIMIT ? paths.slice(0, LIMIT) : paths;

console.log(
  `Comparando metadata Yoast (${YELLOW}${LEGACY}${RESET}) vs Next (${YELLOW}${BASE}${RESET})`,
);
console.log(`${toCheck.length} URLs del sitemap\n`);

// ----- Check por URL -----

async function fetchMeta(url) {
  try {
    const res = await fetch(url, { redirect: "manual" });
    if (res.status >= 300 && res.status < 400) {
      return { status: res.status, redirected: true };
    }
    if (!res.ok) return { status: res.status };
    const html = await res.text();
    return {
      status: res.status,
      title: extractTitle(html),
      description: extractDescription(html),
    };
  } catch (err) {
    return { error: err.message };
  }
}

async function check(path) {
  const [next, wp] = await Promise.all([
    fetchMeta(BASE + path),
    fetchMeta(LEGACY + path),
  ]);

  const flags = [];

  // WP sin equivalente (404 o redirect) → URL nueva
  if (wp.error || wp.status === 404 || wp.redirected || !wp.title) {
    flags.push("NO_WP");
    return { path, next, wp, flags };
  }

  if (titleCore(next.title) !== titleCore(wp.title)) flags.push("TITLE_DIFF");
  if ((next.description ?? "") !== (wp.description ?? "")) flags.push("DESC_DIFF");

  return { path, next, wp, flags };
}

async function runPool(items, fn, concurrency) {
  const results = new Array(items.length);
  let idx = 0;
  const workers = Array.from({ length: concurrency }, async () => {
    while (idx < items.length) {
      const i = idx++;
      results[i] = await fn(items[i]);
      process.stdout.write(`\r${DIM}checking ${i + 1}/${items.length}${RESET}`);
    }
  });
  await Promise.all(workers);
  process.stdout.write("\r" + " ".repeat(40) + "\r");
  return results;
}

const results = await runPool(toCheck, check, CONCURRENCY);

// ----- Reporte -----

const titleDiffs = results.filter((r) => r.flags.includes("TITLE_DIFF"));
const descDiffs = results.filter((r) => r.flags.includes("DESC_DIFF"));
const noWp = results.filter((r) => r.flags.includes("NO_WP"));
const clean = results.filter((r) => r.flags.length === 0);

function printDiff(r) {
  console.log(`${CYAN}${r.path}${RESET} ${DIM}[${r.flags.join(", ")}]${RESET}`);
  if (r.flags.includes("TITLE_DIFF")) {
    console.log(`  ${DIM}title WP  :${RESET} ${r.wp.title ?? "(none)"}`);
    console.log(`  ${DIM}title Next:${RESET} ${r.next.title ?? "(none)"}`);
  }
  if (r.flags.includes("DESC_DIFF")) {
    console.log(`  ${DIM}desc  WP  :${RESET} ${r.wp.description ?? "(none)"}`);
    console.log(`  ${DIM}desc  Next:${RESET} ${r.next.description ?? "(none)"}`);
  }
  console.log();
}

if (titleDiffs.length || descDiffs.length) {
  console.log(`${YELLOW}── Diferencias de metadata ──${RESET}\n`);
  const shown = new Set();
  for (const r of [...titleDiffs, ...descDiffs]) {
    if (shown.has(r.path)) continue;
    shown.add(r.path);
    printDiff(r);
  }
}

if (VERBOSE && noWp.length) {
  console.log(`${DIM}── URLs nuevas (sin equivalente WP) ──${RESET}`);
  for (const r of noWp) console.log(`  ${DIM}${r.path}${RESET}`);
  console.log();
}

console.log(
  `${GREEN}${clean.length} idénticas${RESET}, ` +
    `${YELLOW}${titleDiffs.length} title-diff${RESET}, ` +
    `${YELLOW}${descDiffs.length} desc-diff${RESET}, ` +
    `${DIM}${noWp.length} sin-WP (nuevas)${RESET} ` +
    `de ${results.length} URLs`,
);
