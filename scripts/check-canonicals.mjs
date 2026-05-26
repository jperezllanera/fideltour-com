#!/usr/bin/env node
/*
 * check-canonicals.mjs — Audita los <link rel="canonical"> del sitio renderizado.
 *
 * Pide /sitemap.xml a la URL base, itera todas las <loc>, hace fetch HTML de
 * cada URL (contra el host base, no contra el dominio del canonical), y
 * verifica:
 *
 *   1. Existe exactamente UN <link rel="canonical"> en el <head>.
 *   2. El href apunta al dominio canónico esperado (no a staging, no a
 *      localhost, no a la URL legacy del WP).
 *   3. El path del canonical coincide con el path de la URL fetcheada
 *      (detecta canonicals copiados de otra página).
 *
 * Uso:
 *   node scripts/check-canonicals.mjs --base=https://staging.x.com
 *   node scripts/check-canonicals.mjs --base=https://staging.x.com \
 *     --expected-canonical=https://www.fideltour.com
 *
 * Por defecto el dominio esperado se lee de lib/seo/site.ts (siteConfig.url).
 *
 * Exit: 0 si todo OK, 1 si hay fallos, 2 si no se puede parsear el sitemap.
 */

import fs from "node:fs";
import path from "node:path";

const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, "").split("=");
    return [k, v ?? true];
  }),
);

const BASE = (args.base ?? "http://127.0.0.1:3000").replace(/\/$/, "");
const CONCURRENCY = Number(args.concurrency ?? 10);
const VERBOSE = Boolean(args.verbose);
const LIMIT = args.limit ? Number(args.limit) : null;

const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const DIM = "\x1b[2m";
const RESET = "\x1b[0m";

// ----- 1. Resolver dominio canónico esperado -----

let expectedCanonical = args["expected-canonical"];
if (!expectedCanonical) {
  const sitePath = path.join(process.cwd(), "lib", "seo", "site.ts");
  const siteSrc = fs.readFileSync(sitePath, "utf8");
  const match = siteSrc.match(/url:\s*["']([^"']+)["']/);
  if (!match) {
    console.error(`${RED}ERROR${RESET} No se pudo leer siteConfig.url de lib/seo/site.ts`);
    process.exit(2);
  }
  expectedCanonical = match[1];
}
expectedCanonical = expectedCanonical.replace(/\/$/, "");

// ----- 2. Descargar y parsear sitemap -----

console.log(
  `Auditing canonicals on ${YELLOW}${BASE}${RESET} (expected canonical host: ${YELLOW}${expectedCanonical}${RESET})\n`,
);

const sitemapRes = await fetch(`${BASE}/sitemap.xml`);
if (!sitemapRes.ok) {
  console.error(`${RED}ERROR${RESET} /sitemap.xml returned ${sitemapRes.status}`);
  process.exit(2);
}
const sitemapXml = await sitemapRes.text();

const locs = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (locs.length === 0) {
  console.error(`${RED}ERROR${RESET} El sitemap no contiene <loc> entries`);
  process.exit(2);
}

const urlsToCheck = LIMIT ? locs.slice(0, LIMIT) : locs;
console.log(
  `Sitemap contains ${YELLOW}${locs.length}${RESET} URLs${LIMIT ? ` (testing first ${LIMIT})` : ""}\n`,
);

// ----- 3. Para cada URL, fetch + extract canonical -----

function extractCanonicals(html) {
  // Captura todas las apariciones de <link rel="canonical" href="...">
  // Tolerante a orden de atributos y comillas.
  const matches = [
    ...html.matchAll(
      /<link\s+(?=[^>]*\brel=["']canonical["'])[^>]*\bhref=["']([^"']+)["'][^>]*>/gi,
    ),
  ];
  return matches.map((m) => m[1]);
}

async function check(sitemapUrl) {
  // sitemapUrl es la URL absoluta como aparece en sitemap (apunta al dominio
  // canónico). Para fetcharla contra BASE necesitamos solo el pathname+search.
  let urlObj;
  try {
    urlObj = new URL(sitemapUrl);
  } catch (err) {
    return {
      ok: false,
      sitemapUrl,
      reasons: [`URL inválida en sitemap: ${err.message}`],
    };
  }
  const pathAndQuery = urlObj.pathname + urlObj.search;
  const fetchUrl = BASE + pathAndQuery;

  try {
    const res = await fetch(fetchUrl);
    if (!res.ok) {
      return {
        ok: false,
        sitemapUrl,
        fetchUrl,
        reasons: [`page returned ${res.status}`],
      };
    }
    const html = await res.text();
    const canonicals = extractCanonicals(html);

    const reasons = [];

    if (canonicals.length === 0) {
      reasons.push("no <link rel=canonical> found");
    } else if (canonicals.length > 1) {
      reasons.push(
        `multiple canonicals found (${canonicals.length}): ${canonicals.join(", ")}`,
      );
    } else {
      const canonical = canonicals[0];
      let canonicalUrl;
      try {
        canonicalUrl = new URL(canonical);
      } catch {
        reasons.push(`canonical href no es URL absoluta: ${canonical}`);
      }

      if (canonicalUrl) {
        const canonicalHost = `${canonicalUrl.protocol}//${canonicalUrl.host}`;
        if (canonicalHost !== expectedCanonical) {
          reasons.push(
            `canonical host mismatch: got ${canonicalHost}, expected ${expectedCanonical}`,
          );
        }
        const expectedPath = pathAndQuery;
        const actualPath = canonicalUrl.pathname + canonicalUrl.search;
        if (actualPath !== expectedPath) {
          reasons.push(
            `canonical path mismatch: got ${actualPath}, expected ${expectedPath}`,
          );
        }
      }
    }

    return {
      ok: reasons.length === 0,
      sitemapUrl,
      fetchUrl,
      canonicals,
      reasons,
    };
  } catch (err) {
    return {
      ok: false,
      sitemapUrl,
      fetchUrl,
      reasons: [`fetch error: ${err.message}`],
    };
  }
}

// ----- 4. Pool concurrente -----

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

const results = await runPool(urlsToCheck, check, CONCURRENCY);

// ----- 5. Reporte -----

const failures = results.filter((r) => !r.ok);
const okCount = results.length - failures.length;

for (const r of failures) {
  console.log(`${RED}FAIL${RESET} ${r.sitemapUrl}`);
  for (const reason of r.reasons) {
    console.log(`     ${YELLOW}${reason}${RESET}`);
  }
  if (VERBOSE && r.canonicals) {
    console.log(`     ${DIM}canonicals seen: ${r.canonicals.join(" | ")}${RESET}`);
  }
  console.log();
}

if (VERBOSE) {
  for (const r of results.filter((x) => x.ok)) {
    console.log(`${GREEN}OK${RESET}   ${r.sitemapUrl} → ${r.canonicals[0]}`);
  }
}

const okColor = failures.length === 0 ? GREEN : YELLOW;
const failColor = failures.length === 0 ? GREEN : RED;
console.log(
  `\n${okColor}${okCount} ok${RESET}, ${failColor}${failures.length} failed${RESET} of ${results.length} URLs`,
);

if (failures.length > 0) process.exit(1);
