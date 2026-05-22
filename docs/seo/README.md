# `docs/seo/` — Documentación SEO de Fideltour

Esta carpeta contiene la documentación viva del SEO del sitio. **El SEO no se improvisa: keyword research → mapping firmado → reescritura informada → validación técnica.** Cualquier cambio en titles, descriptions, headings o nuevas landings debe pasar por aquí antes de tocar código.

## Estado actual (mayo 2026)

🔴 **Prioridad PRESERVACIÓN** — el sitio Next.js está en **staging**, pendiente de switchover desde el WP antiguo. **El objetivo único en esta fase es no perder tráfico orgánico ni ranking durante la migración.** La optimización (crecimiento) queda en standby hasta que el switchover esté estable.

📄 **Plan operativo de migración**: [`migration-preservation.md`](./migration-preservation.md) — 5 fases (inventario → mapping → copy → pre-launch → monitoreo).

📄 **Inventario de URLs**: [`url-inventory.csv`](./url-inventory.csv) — vacío hasta recibir exports de GSC y sitemap WP.

**Lo que necesito del equipo para arrancar Fase A**:
1. Sitemap del WP antiguo (URL o XML descargado en `docs/seo/legacy/`).
2. Export CSV de GSC Pages últimos 12 meses.
3. Export CSV de GSC Queries últimos 12 meses.

**En standby (referencia futura, post-migración)**:
- Mapping de KW de crecimiento → [`keyword-map.csv`](./keyword-map.csv).
- Calendario editorial → [`editorial-calendar.md`](./editorial-calendar.md).
- Estrategia de backlinks → [`backlinks-strategy.md`](./backlinks-strategy.md).
- Internal linking diseñado → [`internal-linking.md`](./internal-linking.md).

## Índice de documentos

### 1. [`competitive-audit.md`](./competitive-audit.md)
Auditoría SEO de los 5 competidores directos del sector CDP/CRM hotelero: **Revinate, dailypoint, Profitroom, The Hotels Network** (Cendyn pendiente, bloqueado 403). Para cada uno:
- Estructura de URLs (pillar pages, producto, blog, recursos).
- Patrones de naming, schemas y multi-idioma.
- Aprendizajes aplicables a Fideltour.

Léelo antes de proponer cualquier ruta nueva: si los competidores ya tienen la URL, tendremos que diferenciar el contenido.

### 2. [`keyword-map.csv`](./keyword-map.csv)
**El documento principal.** 45 filas en esta primera ronda:

- **36 URLs existentes**: 13 core + 22 module landings + 1 solape (`/integracion-portal-cautivo-para-hoteles/` está en sitemap core y es módulo Data Import).
- **9 URLs reservadas** (post a redactar — no existen aún, las marcamos `(RESERVADO)`):
  - **5 blog pillars top-of-funnel**: cubren el problema antes de la solución. Sin estos solo capturamos a quien ya nos busca. Ejemplos: "cómo aumentar venta directa hotel", "cómo reducir dependencia OTAs", "estrategia fidelización hotel". Encajan en categorías de blog ya existentes (marketing, fidelizacion, crm, fideltour).
  - **4 blog comparativos**: capturan bottom-funnel high-intent. Competidor + Fideltour. Ejemplos: "alternativa a Revinate", "Fideltour vs Cendyn". Ningún competidor visible posiciona contra otros — oportunidad clara.

**Distribución por prioridad**: 15 P0 · 23 P1 · 7 P2.

Columnas:

| Columna | Quién la rellena |
|---|---|
| `url`, `role`, `current_title` | Claude |
| `kw_principal`, `kw_secundarias`, `intention`, `priority`, `justification` | Claude (propuesta inicial) |
| `volumen_es`, `volumen_co`, `volumen_mx`, `kd` | **Equipo** (vía Keyword Planner) |
| `notes` | Equipo + Claude tras review conjunta |

**Estado**: propuesta inicial generada por Claude. Pendiente que el equipo valide volúmenes y dificultad siguiendo [`keyword-method.md`](./keyword-method.md).

### 3. [`keyword-method.md`](./keyword-method.md)
Guía paso a paso para el equipo: cómo dar de alta una cuenta de Google Ads sin coste, cómo usar Keyword Planner, cómo interpretar los rangos de volumen y cómo estimar KD sin Ahrefs/Semrush. Tiempo estimado para validar las 37 URLs: 30-45 min.

### 4. [`internal-linking.md`](./internal-linking.md)
**Topic clustering explícito**: qué URL enlaza a cuál, con qué anchor text, desde qué bloque. Sin esto las 45 URLs son islas para Google. Cubre: pillar/home recibe links, clusters internos por categoría, blog→módulo, comparativos→home, casos→módulo, reglas de anchor text, verificación con grep.

### 5. [`editorial-calendar.md`](./editorial-calendar.md)
**Calendario de publicación** de los 9 blog posts reservados + cadencia continua (2 posts/mes mínimo) tras esa primera tanda. Outlines por post, longitud objetivo, refresh de posts antiguos, métricas de éxito a fijar. Sin owner editorial asignado, esto es papel mojado — el equipo debe nombrar uno.

### 6. [`backlinks-strategy.md`](./backlinks-strategy.md)
**Estrategia de link building** — el otro 50% del SEO que el on-page no cubre. 7 tácticas por ROI (listings sectoriales, guest posts, partners, PR, linkable assets, broken link, HARO) + objetivos trimestrales + diagnóstico inicial del perfil actual (pendiente que el equipo haga con Ahrefs/SC).

### 4. **Plan SEO completo (vive en `~/.claude/plans/`)**
El plan estratégico de SEO de Fideltour (Fases 0-6) se mantiene fuera del repo como plan de trabajo del agente. Resumen del roadmap:

| Fase | Descripción | Estado |
|---|---|---|
| **0** | Keyword research + mapping firmado | **En curso** (este directorio) |
| 1.1 | Fix breadcrumb querystring en blog posts | ✅ Hecho |
| 1.2 | Migrar landing `marketing-automation-para-hoteles` | Pendiente |
| 1.3 | `.env.example` + doc verification vars | Pendiente |
| 2 | Schemas (Review/AggregateRating) + sitemap completo | Pendiente |
| 3 | Script `seo-check` automatizado + pre-commit | Pendiente |
| 4 | Reescritura de copy alineado al mapping | Bloqueado por Fase 0 |
| 5 | Pillar pages `/plataforma/[pilar]/` | Bloqueado por Fase 0 |
| 6 | i18n EN/LATAM | Bloqueado por Fase 0 + decisión senior |

## Tipos de URL en el CSV (`role`)

| Role | Significado | Existe en el repo |
|---|---|---|
| `home` | Página raíz | ✅ |
| `pillar` | Landing pillar de categoría | ✅ |
| `branded` | About / page de marca | ✅ |
| `social-proof` | Clientes, casos | ✅ (con diferenciación: `/clientes/` = logos, `/casos-de-exito/` = storytelling individual) |
| `conversion` | Formulario de contacto | ✅ |
| `lead-magnet` | Auditoría gratis | ✅ |
| `subvention` | Kit Digital | ✅ |
| `affiliate` | Partners | ✅ |
| `hub` | Recursos, blog index | ✅ |
| `sub-hub` | Sub-listados (vídeos, etc.) | ✅ |
| `product` | Marketplace | ✅ |
| `module-data-import`, `module-data-intelligence`, `module-data-activation`, `module-multicanalidad` | Las 22 module landings agrupadas por categoría del mega-menú | ✅ (21 implementadas + 1 pending: marketing-automation) |
| `blog-pillar` | Blog post cornerstone top-of-funnel | ❌ **RESERVADO** — post a redactar tras firmar Fase 0 |
| `blog-comparative` | Blog post de comparativa head-to-head con competidor | ❌ **RESERVADO** — post a redactar tras firmar Fase 0 |

## Reglas inviolables del SEO de Fideltour

1. **Nicho hotelero siempre.** Toda KW debe contener el sector explícito ("hotel", "hoteles", "hotelero", "hospedaje", "hostelería") o implícito ("huésped", "OTA", "PMS", "booking engine", "estancia"). Ver detalle y excepciones en [`keyword-method.md`](./keyword-method.md) y en la regla del plan SEO.

2. **Una KW principal por URL.** Cannibalization check obligatorio antes de firmar el CSV:
   ```bash
   cut -d',' -f4 docs/seo/keyword-map.csv | tail -n +2 | sort | uniq -d
   ```
   Debe devolver vacío.

3. **Slug optimizado primero, KW alineada después.** Las 22 module landings ya tienen slugs SEO-friendly heredados de WordPress (`{producto}-para-hoteles`, `{producto}-hoteles`). La KW principal de cada module landing debe respetar ese slug; no inventamos nuevas categorías que rompan el SEO heredado.

4. **No tocar copy sin mapping firmado.** Fase 4 (reescritura) **bloqueada hasta** que el equipo firme `keyword-map.csv`. Cualquier cambio antes es especulación.

5. **Categoría literal "CDP para hoteles".** Prohibidos los acrónimos inventados o variantes que no sean "Customer Data Platform" (regla de marca, ver `CLAUDE.md` — sección "Reglas de marca inviolables"). La narrativa central es "Del CRM al CDP".

## Flujo operativo

```
┌──────────────────────────────────────────────────────────┐
│ 1. Claude genera keyword-map.csv (propuesta)            │
└────────────────┬─────────────────────────────────────────┘
                 ↓
┌──────────────────────────────────────────────────────────┐
│ 2. Equipo valida volumen + KD en Keyword Planner        │
│    (siguiendo keyword-method.md)                        │
└────────────────┬─────────────────────────────────────────┘
                 ↓
┌──────────────────────────────────────────────────────────┐
│ 3. Review conjunta (equipo + Claude):                   │
│    - cannibalization check                              │
│    - ajustes según hallazgos del equipo                 │
│    - priorización final P0/P1/P2                        │
└────────────────┬─────────────────────────────────────────┘
                 ↓
┌──────────────────────────────────────────────────────────┐
│ 4. Commit del CSV firmado en main = cierre Fase 0       │
└────────────────┬─────────────────────────────────────────┘
                 ↓
┌──────────────────────────────────────────────────────────┐
│ 5. Arranca Fase 4: reescritura de titles/descriptions/  │
│    heros basados en las KW firmadas                     │
└──────────────────────────────────────────────────────────┘
```

## Cuándo actualizar esta documentación

- **Cuando se firma el CSV**: actualizar este README para reflejar el cierre de Fase 0.
- **Cuando se añade una landing nueva**: añadir su fila al CSV antes de pushear el code.
- **Cuando un competidor lanza algo relevante**: ampliar `competitive-audit.md`.
- **Cuando cambian las herramientas del equipo** (e.g. activan Ahrefs): actualizar `keyword-method.md`.

Esta carpeta es **fuente de verdad del SEO estratégico**. El sistema técnico (sitemap, JSON-LD, metadata) ya está implementado en `app/` y `components/seo/`; aquí vive el "por qué".
