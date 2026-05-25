# ADR-003 — Stack base: Next 15 LTS + Hetzner + Coolify + Cloudflare

- **Status**: Accepted
- **Date**: 2026-05-25
- **Sprint**: 0
- **Deciders**: gmoll (owner) + claude (senior advisor)

## Context

Stack actual del repo: Next 16.2.6, React 19, Tailwind v4 CSS-first, shadcn/Base UI, MDX file-based. Hoy se asume deploy a Vercel pero el owner pide Hetzner + Coolify (ya operativo en otro proyecto).

## Decision

- **Runtime**: Next 15 LTS (downgrade desde 16.2.6).
- **Hosting**: Hetzner VPS con Coolify orquestador.
- **CDN/WAF**: Cloudflare delante.
- **DB**: Postgres en Coolify (mismo VPS).
- **Cache**: Redis en Coolify.
- **Assets**: Cloudflare R2 (S3-compatible).
- **Image transforms**: imgproxy self-hosted en Coolify.
- **Analytics**: Plausible self-hosted en Coolify.
- **Feature flags**: GrowthBook self-hosted en Coolify.
- **Observability**: Sentry SaaS (DSN público + consent-gated).
- **Search**: Pagefind (estático, parte del build).

## Next 15 LTS (no Next 16)

### Por qué downgrade

1. **Marketing site con SEO crítico**: no se experimenta en producción cuando el daño es pérdida de ranking orgánico.
2. **No hay feature Next 16-only que justifique el riesgo**:
   - No usamos PPR (Partial Pre-rendering).
   - No necesitamos Turbopack en prod build.
   - cacheLife API no es crítica a esta escala.
3. **next-intl v4 + Payload v3 tienen soporte battle-tested en Next 15**. En Next 16 sería spike obligatorio.
4. **El propio plan v1 admitía "Plan B Next 15"**. Si es plan B viable, es plan A correcto.

### Migración futura

Sprint 13+ o mes 6+ post-launch: spike Next 16 cuando:
- Next 16 sea release stable (no beta).
- `next-intl`, `payload`, `@sentry/nextjs` declaren soporte oficial.
- Existe feature crítica que lo justifique.

## Hosting Hetzner + Coolify

### Por qué (vs Vercel)

1. **Coolify ya operativo** en Hetzner del owner → coste marginal cero de operación.
2. **Data residency EU completa** (RGPD) — VPS Hetzner Frankfurt + Postgres mismo VPS + Cloudflare anonymous proxy.
3. **TCO predecible**: VPS Hetzner ~€16/mes vs Vercel Pro $20/mes + add-ons.
4. **Sin vendor lock-in**: app es Node.js estándar, Postgres estándar, todo portable.
5. **Coherencia operacional**: otra app del owner ya en este stack → patrones reutilizables (migraciones, backups, monitoring).

### Trade-offs aceptados

- Sin Vercel Edge Functions → middleware corre en Node (no edge runtime). Acceptable: middleware es mínimo (i18n routing + CSP nonces).
- Sin Vercel Image Optimization → imgproxy self-hosted cumple equivalente, con cache en Cloudflare.
- Sin Vercel Speed Insights → Plausible + `web-vitals` package emit a Plausible custom events.
- Sin Vercel preview URLs automáticas → Coolify preview environments por branch git.
- Sin Vercel KV → Redis en Coolify.

## Cloudflare delante

### Por qué

- **CDN global**: latencia baja para hoteleros LATAM (Colombia, México) sin replicar infra.
- **WAF + DDoS**: protección automatic, free tier suficiente.
- **R2 storage**: $0 egress, $0.015/GB stored. Sustituye Vercel Blob.
- **IndexNow API**: ping a Bing nativo.
- **Cache layer**: HTML + assets cacheados en el edge.

### Trade-offs

- Cloudflare es proxy externo → un single point of failure adicional. Mitigado: si Cloudflare cae, DNS fallback a origin directo Hetzner (worse perf pero accessible).
- Cloudflare Free tier tiene límites de Workers/transformations → si se cruzan, plan Pro $20/mes.

## Postgres self-hosted

### Por qué (vs Neon cloud)

- **Coherencia con stack self-hosted**: todo en Hetzner.
- **DX que el owner conoce**: migraciones Drizzle, `psql` directo.
- **Coste cero adicional**: incluido en VPS.

### Trade-offs aceptados

- Sin branches copy-on-write nativas (Neon las tenía). Mitigado con scripts `db:pull-prod` (dump sanitizado ~30-60s) + Coolify preview environments con DB efímera por PR.
- DR responsibility tuya: pg_basebackup diario a Hetzner Storage Box + WAL archiving.

## Pagefind (search)

A 1000 posts × N locales `fuse.js` cliente colapsa (5MB índice + 800ms bloqueo main thread mobile). Pagefind genera índices shard-eados que se descargan on-demand, multi-locale nativo. Coste $0, build step +10s.

## GrowthBook self-hosted (feature flags + A/B)

B2B SaaS con conversion KPIs necesita A/B. GrowthBook OSS self-hosted en Coolify mantiene el stack coherente. SDK Node + React. Reads <10ms.

Vs Statsig SaaS: requeriría cloud outbound. Aquí queremos self-hosted full.

## Plausible self-hosted (analytics)

Privacy-first, no cookies, RGPD nativo. Sustituye Vercel Analytics + GA4 (que requieren consent + cookies). Conversion tracking con custom events. Web Vitals emit a Plausible.

Cookiebot + GTM siguen disponibles para tags legacy que marketing necesite, pero detrás de consent banner.

## Sentry SaaS (error monitoring)

Mantenido como SaaS. Self-hosted Sentry es pesado de mantener (Snuba + Kafka + ClickHouse). Plan Developer free tier (5k errores/mes) basta para esta escala. DSN público + consent-gated en cliente para RGPD.

## Consequences

### Positivas

- Stack 100% en tu infra (excepto Sentry y Cloudflare, justificados).
- Coste mensual incremental ~$5-30 vs $45-130 del plan con Vercel + Neon.
- Coherencia total con la otra app del owner.
- Sin vendor lock-in real.
- Data sovereignty EU = ventaja en RFP B2B hoteleros.

### Negativas

- Tú mantienes uptime de Postgres, Redis, Plausible, GrowthBook, imgproxy.
- Sin equivalente directo a Vercel preview deployments magic — Coolify lo cubre con un poco más de config.
- Sin features de Vercel edge (geolocation, A/B en edge sin SDK) — no críticas a esta escala.

### Mitigaciones

- Monitoring + alertas + status page desde Sprint 2-3.
- Runbooks documentados (`docs/RUNBOOK.md`).
- Backups automatizados + test mensual de restore.
- Coolify backup automatic de service variables + volumes.

## Status updates

- 2026-05-25: Aceptado. Coolify confirmado operativo en Hetzner del owner.
