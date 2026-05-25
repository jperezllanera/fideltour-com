# ADR-001 — CMS: Payload v3 self-hosted en Coolify + Postgres

- **Status**: Accepted
- **Date**: 2026-05-25
- **Sprint**: 0
- **Deciders**: gmoll (owner) + claude (senior advisor)

## Context

Web pública de Fideltour (CDP para hoteles). Marketing edita 100% del contenido. Multi-idioma ES + EN + PT + N futuros. Target 18 meses: ~100 module landings + ~1000 posts. Hosting Hetzner + Coolify ya operativo.

Hoy el contenido vive en `lib/content/*.ts` y `content/blog/**/*.mdx`. Editar requiere PR a git. Marketing no puede hacer eso a escala.

## Decision

**Payload v3** como CMS, self-hosted en Coolify junto a la app Next, con **Postgres** como base de datos (también en Coolify, mismo Hetzner).

## Alternativas consideradas

### Sanity Studio v3 (descartado)

Pros:
- DX para marketing es la mejor del mercado en 2026 (presence en tiempo real, drafts visibles, comments, releases, scheduled publishing).
- Multi-idioma robusto vía `@sanity/document-internationalization`.
- Presentation Tool con click-to-edit overlay.

Contras (decisivos):
- Data hostea en GCP US (réplicas EU solo en plan Enterprise). Para sales B2B EU con equipos legales hoteleros auditando, "tu copy vive en Sanity Inc US" es objection real.
- Plan Growth $99/mes base + $1/GB bandwidth → fácilmente $300+/mes con tráfico orgánico a 1000 posts × N locales.
- Schemas en TS pero queries en GROQ (dialecto propietario).
- Portable Text es dialecto propietario; migrar a Lexical/Markdown requiere transformer custom.

Veredicto: incoherente con la decisión de "stack 100% self-hosted en Hetzner".

### Contentful (descartado)

Caro ($300+/mes a esta escala), peor DX, vendor lock-in fuerte.

### Strapi (descartado)

Open source pero UI menos pulida, multi-idioma con bugs históricos en relaciones, comunidad TypeScript débil.

### Tina CMS (descartado)

Git as source of truth + visual editor. A 1000 posts × N locales, cada edit = commit a git = fricción operativa para marketing. No es first-class multi-locale.

### Payload v3 (elegido)

Pros (decisivos):
1. **Schema-as-TypeScript shared con frontend**: schemas son TS. Frontend importa tipos directamente del config. Single source of truth de tipos. Sin Zod-derivado-de-CMS (frágil).
2. **Data residency EU (RGPD)**: data 100% en tu Hetzner bajo tu jurisdicción. Ventaja material en RFP con hoteleros EU.
3. **Sin vendor lock-in real**: OSS MIT. Schemas TS portables. Datos en Postgres propio.
4. **TCO previsible**: ~$0-30/mes incremental (VPS Hetzner ya pagado). vs Sanity $300+/mes.
5. **Migraciones Drizzle**: idéntico patrón al de tu otra app. Cero curva de aprendizaje.
6. **Operativa Coolify-friendly**: deploy como Node app + Postgres service.

Contras (aceptados):
- DX de marketing ligeramente atrás de Sanity (presence, releases). Mitigado con 1-2 semanas de onboarding en Sprint 8.
- Self-hosted = tú mantienes uptime. Mitigado con SLOs explícitos + monitoring + status page.
- Sin branches Neon copy-on-write → operativa dev↔prod via dumps sanitizados (~30-60s vs 2s). Mitigado con scripts `npm run db:pull-prod`.

## Consequences

### Positivas

- Stack coherente: todo en tu Hetzner + Coolify. Una sola superficie operacional.
- Coste predecible y bajo.
- Schemas TypeScript = type safety end-to-end, sin codegen ni Zod-derivado.
- Multi-idioma nativo con `localized: true` por campo.
- Webhooks `afterChange` → `revalidateTag()` para ISR granular.

### Negativas

- Onboarding marketing requerirá esfuerzo dedicado en Sprint 8.
- DR responsibility tuya: backups pg_basebackup diarios + WAL archiving + test mensual de restore.
- Sin equivalente directo a Sanity Presentation Tool (live preview); Payload tiene Live Preview pero con menos polish.

### Mitigaciones

- Sprint 8 dedicado a marketing onboarding: training + docs + videos Loom + designar CMS owner en marketing.
- Backups automatizados desde día 1 (Sprint 4-5).
- Live Preview en Payload se mejora vía iframe + draftMode() — funcional, no glamoroso.

## Status updates

- 2026-05-25: Aceptado tras review adversarial del plan v2 + confirmación owner de hosting Hetzner+Coolify.
