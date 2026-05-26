#!/usr/bin/env node
/*
 * check-redirects.mjs — Smoke test de los redirects 301/308 de next.config.ts.
 *
 * Parsea las reglas del bloque `redirects()` y verifica contra una URL base
 * (staging local o remoto) que cada `source` devuelva el status esperado
 * (308/301 para `permanent: true`, 307/302 si no) y termine en `destination`.
 *
 * Maneja dos casos no triviales:
 *   - `trailingSlash: true` añade un hop intermedio (`/foo` → `/foo/`) antes
 *     del redirect real. Seguimos hasta 5 hops y verificamos el destino final.
 *   - Patrones `:slug*` / `:rest*` / `:slug` se materializan con placeholders
 *     `sample-slug` y `x` para poder testear que el patrón aplica.
 *
 * Uso:
 *   node scripts/check-redirects.mjs                              # 127.0.0.1:3000
 *   node scripts/check-redirects.mjs --base=https://staging.x.com
 *   node scripts/check-redirects.mjs --base=https://www.fideltour.com --verbose
 *   node scripts/check-redirects.mjs --concurrency=20
 *
 * Exit: 0 si todos OK, 1 si alguno falla, 2 si el parser no encuentra reglas.
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

const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const DIM = "\x1b[2m";
const RESET = "\x1b[0m";

// ----- 1. Parse next.config.ts -----

const configPath = path.join(process.cwd(), "next.config.ts");
const configSrc = fs.readFileSync(configPath, "utf8");

const redirectRegex =
  /\{\s*source:\s*["']([^"']+)["'],\s*destination:\s*["']([^"']+)["'],\s*permanent:\s*(true|false)\s*\}/g;

const rules = [];
for (const m of configSrc.matchAll(redirectRegex)) {
  rules.push({
    source: m[1],
    destination: m[2],
    permanent: m[3] === "true",
  });
}

if (rules.length === 0) {
  console.error(
    `${RED}ERROR${RESET} No redirects parsed from next.config.ts — regex probably out of sync with the file format.`,
  );
  process.exit(2);
}

// ----- 2. Materialize patterns (:slug*, :rest*, :slug) -----

function materialize(pattern) {
  return pattern
    .replace(/:[a-zA-Z]+\*/g, "sample-slug")
    .replace(/:[a-zA-Z]+/g, "x");
}

// ----- 3. Follow up to N hops manually and compare final path -----

async function check(rule) {
  const materialSource = materialize(rule.source);
  const materialDest = materialize(rule.destination);
  const sourceUrl = BASE + materialSource;
  const expectedStatus = rule.permanent ? [301, 308] : [302, 307];

  const hops = [];
  let currentUrl = sourceUrl;

  try {
    for (let i = 0; i < 5; i++) {
      const res = await fetch(currentUrl, { redirect: "manual" });

      if (res.status >= 300 && res.status < 400) {
        const loc = res.headers.get("location") ?? "";
        const next = loc.startsWith("http")
          ? loc
          : new URL(loc, currentUrl).toString();
        hops.push({ from: currentUrl, status: res.status, to: next });
        currentUrl = next;
        continue;
      }

      // Llegó a una página terminal (200, 404, etc.)
      const finalPath =
        new URL(currentUrl).pathname + new URL(currentUrl).search;

      const hadExpectedStatus = hops.some((h) =>
        expectedStatus.includes(h.status),
      );
      const reachedDest = finalPath === materialDest;
      const finalIs200 = res.status === 200;

      return {
        ok: hadExpectedStatus && reachedDest && finalIs200,
        rule,
        sourceUrl,
        expectedDest: materialDest,
        finalPath,
        finalStatus: res.status,
        hops,
        reasons: [
          !hadExpectedStatus &&
            `expected ${expectedStatus.join("/")} somewhere in chain`,
          !reachedDest && `final path mismatch (got ${finalPath})`,
          !finalIs200 && `final page returned ${res.status}`,
        ].filter(Boolean),
      };
    }

    // Si salimos del loop, es porque hicimos 5 hops sin terminar
    return {
      ok: false,
      rule,
      sourceUrl,
      expectedDest: materialDest,
      hops,
      reasons: ["redirect loop or chain longer than 5 hops"],
    };
  } catch (err) {
    return {
      ok: false,
      rule,
      sourceUrl,
      expectedDest: materialDest,
      error: err.message,
      reasons: [`fetch error: ${err.message}`],
    };
  }
}

// ----- 4. Concurrency pool -----

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

// ----- 5. Run + report -----

console.log(
  `Checking ${YELLOW}${rules.length}${RESET} redirects against ${YELLOW}${BASE}${RESET} (concurrency=${CONCURRENCY})\n`,
);

const results = await runPool(rules, check, CONCURRENCY);

const failures = results.filter((r) => !r.ok);
const okCount = results.length - failures.length;

for (const r of failures) {
  console.log(
    `${RED}FAIL${RESET} ${r.rule.source} ${DIM}→${RESET} ${r.rule.destination}`,
  );
  for (const reason of r.reasons ?? []) {
    console.log(`     ${YELLOW}${reason}${RESET}`);
  }
  if (r.hops && r.hops.length > 0) {
    for (const h of r.hops) {
      console.log(`     ${DIM}${h.status}${RESET} ${h.from} → ${h.to}`);
    }
  }
  console.log();
}

if (VERBOSE) {
  for (const r of results.filter((x) => x.ok)) {
    console.log(
      `${GREEN}OK${RESET}   ${r.rule.source} → ${r.finalPath} ${DIM}(${r.hops.length} hop${r.hops.length === 1 ? "" : "s"})${RESET}`,
    );
  }
}

const okColor = failures.length === 0 ? GREEN : YELLOW;
const failColor = failures.length === 0 ? GREEN : RED;
console.log(
  `\n${okColor}${okCount} ok${RESET}, ${failColor}${failures.length} failed${RESET} of ${results.length} rules`,
);

if (failures.length > 0) process.exit(1);
