# ADR-002 — Cutover WordPress → Fideltour-com nuevo

- **Status**: Accepted (procedure)
- **Date**: 2026-05-25
- **Sprint**: 0 (planning) → Sprint 11 (execution)
- **Deciders**: gmoll (owner) + claude (senior advisor)

## Context

El sitio actual `fideltour.com` vive en WordPress. El proyecto Next 15 que estamos construyendo será el reemplazo. Los redirects 301 que ya existen en `next.config.ts` (líneas `/en/blog → /blog/`, `/blog/*-en/* → /blog/{category}/`) son legado de URLs WP.

Riesgo principal del proyecto: si el cutover sale mal, se pierde el 30-60% del tráfico orgánico el día del lanzamiento. En B2B SaaS hotelero, el tráfico orgánico es el motor de demand gen — pérdida material.

## Decision

Cutover en ventana planificada con procedure documentado, rollback automático, y mitigación SEO pre/post-launch.

## Pre-requisitos (Sprint 0)

1. **Inventario completo de URLs WP** que rankean:
   - Screaming Frog crawl de `fideltour.com`.
   - GSC export últimos 6 meses: top URLs por sesiones orgánicas + impresiones + clicks.
2. **Mapping 1:1 en spreadsheet** `docs/wp-url-inventory.csv`:
   - URL WP → URL Next nueva
   - Estado: "migrate 1:1", "redirect 301", "sunset" (sin equivalente, redirige a padre)
3. **Top 200 URLs por tráfico orgánico**: nunca cambian slug. **Inviolable**.
4. **Acceso a GSC** confirmado (propiedad verificada + permisos owner).
5. **Acceso a Bing Webmaster Tools** confirmado (idem).

## Procedure de cutover (Sprint 11)

### T-4 semanas

- Nuevo sitio publicado en `new.fideltour.com` (subdominio temporal).
- `robots.txt` con `Disallow: /` y `<meta name="robots" content="noindex,nofollow">` en cada página.
- Marketing valida copy ES + EN + PT en el nuevo sitio.
- E2E + visual diff + Lighthouse passing en CI.

### T-2 semanas

- DNS TTL de `fideltour.com` bajado a 60s (para que el swap sea instantáneo).
- Inventario final firmado por owner.
- Mapping de redirects 301 cargado en `next.config.ts` con tests E2E que validan cada redirect.

### T-1 semana

- Script `scripts/cutover-pre-warmup.mjs` ejecutado contra `new.fideltour.com`:
  - Fetch a las top 200 URLs con `cache: 'force-cache'`.
  - Verifica que ISR pre-genera todas.
  - Reporta cualquier 4xx/5xx.
- Backup completo del WordPress (DB + uploads + theme).
- Backup del Postgres nuevo (en case rollback en T+24h).

### T-0 (cutover)

- **00:00** DNS swap: `fideltour.com` → IP Hetzner (Cloudflare proxy).
- **00:05** Verificar propagación (`dig fideltour.com` desde 4 regiones).
- **00:10** `<meta robots>` quitado del nuevo sitio. `robots.txt` permite.
- **00:15** Sitemap submitted a:
  - Google Search Console (`/sitemap.xml`).
  - Bing Webmaster Tools (`/sitemap.xml`).
  - IndexNow API (Bing) con lista de URLs nuevas.
- **00:30** Smoke E2E contra producción (Playwright).
- **00:45** Verificar redirects 301 manualmente sobre 10 URLs sample.

### T+24h

- GSC daily check: coverage, crawl errors, posición media.
- Sentry: errores acumulados.
- Plausible: tráfico orgánico vs baseline 7 días previos.

### T+72h (decisión rollback)

**Trigger rollback** si:
- Pérdida de sesiones orgánicas > 15% vs baseline.
- Error rate > 1% en Sentry sostenido > 1h.
- Coverage GSC con > 20% de páginas en "Error" o "Excluded".

**Procedure rollback**:
1. DNS revert: `fideltour.com` → IP WordPress.
2. Notify GSC con sitemap WP original.
3. Post-mortem en `docs/incident-cutover-{date}.md`.
4. Plan de remediación antes de re-intentar.

### T+4 semanas

- Si todo OK: WordPress apagado (mantener backup 6 meses por compliance).
- Si redirects funcionan: WordPress respondería 301 a Next aunque siga arriba (cinturón + tirantes).

## Mitigación SEO continua

- **Link header** con `rel=canonical` apuntando a URL Next durante 2 semanas posteriores al cutover.
- **Sitemap** con `lastmod` actualizado para señalar a Googlebot que rastree.
- **IndexNow** ping a Bing cada vez que se publica contenido nuevo (post-cutover).
- **robots.txt** verificado accesible diariamente.
- **Schema.org** completo: Organization, WebSite, Article, Product, Breadcrumb, FAQ.
- **hreflang** correcto para EN/PT (cuando se publiquen, Sprint 12).

## Consequences

### Positivas

- Procedure documentado reduce el riesgo de error humano en el momento crítico.
- Rollback automático protege contra catástrofe.
- Pre-warmup elimina el cold start hit en los primeros minutos.

### Negativas

- Ventana de coordinación requerida (DNS, GSC, Bing, equipo técnico).
- Si el inventario WP es incompleto, URLs quedan sin redirect y se rompen.

### Riesgos residuales

- Cambios de comportamiento de Googlebot post-cutover impredecibles (semanas).
- WP shutdown puede revelar URLs olvidadas que rankeaban → audit GSC mensual post-cutover los primeros 3 meses.

## Status updates

- 2026-05-25: Aceptado como Sprint 0 + Sprint 11. Pendiente: inventario URLs WP + acceso GSC del owner.
