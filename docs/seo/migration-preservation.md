# Plan de preservación SEO — Migración WordPress → Next.js

**Objetivo único en esta fase**: no perder tráfico orgánico ni ranking en el switchover del WP legacy al sitio Next.js de este repo. Optimización queda para una fase posterior.

## Estado actual (mayo 2026)

- ✅ Sitio nuevo en **staging** (aún no live).
- ✅ Acceso completo a Google Search Console.
- ✅ WP antiguo aún accesible (URL secundaria / backup).
- ⚠️ Solo 8 redirects 301 configurados en [next.config.ts:11-27](../../next.config.ts#L11-L27) — cubren `/en/blog/*` y categorías `-en` del blog. Falta TODO lo demás.

Esto significa que tenemos **la mejor situación posible** para preservar SEO: tiempo + datos. Si lo hacemos bien, mantenemos 100% del ranking y aprovechamos para añadir mejoras puntuales.

## Riesgo principal sin este plan

Si desplegamos sin auditoría:
- URLs del WP con tráfico orgánico que **no tengan equivalente en Next** → 404 al usuario y a Google → pérdida de ranking en semanas.
- URLs con slug cambiado → mismo problema.
- Copy de páginas optimizadas en WP que se reescribió en Next sin replicar los términos que rankeaban → caída de posición.
- Backlinks externos que apuntan a URLs antiguas → 404 al referrer + pérdida de link juice.

## Fases de ejecución

### Fase A — Inventario completo (1-2 días, EQUIPO + CLAUDE)

#### A.1 — Exportar sitemap del WP antiguo
**Equipo**: descargar `https://[wp-antiguo]/sitemap.xml` o `sitemap_index.xml`. Si está distribuido (sitemap_index → sitemap_posts.xml, sitemap_pages.xml, etc.), bajar todos. Guardar en `docs/seo/legacy/` (gitignored si tiene info sensible).

**Resultado esperado**: lista completa de URLs públicas del WP antiguo. Probablemente 100-500 URLs.

#### A.2 — Exportar performance de GSC (12 meses)
**Equipo**: Search Console → Performance → Search results.
- Filtro: Date = últimos 12 meses.
- Vista: Pages.
- Exportar a CSV con columnas: URL, clicks, impressions, CTR, position.
- Repetir vista: Queries → exportar.

**Resultado esperado**: `docs/seo/legacy/gsc-pages-12m.csv` y `docs/seo/legacy/gsc-queries-12m.csv`.

#### A.3 — Cruzar queries con páginas
**Equipo**: en GSC → Performance → filtrar URL por URL las top 50 páginas con tráfico → exportar queries de cada una. Tedioso pero crítico.

Alternativa más rápida: query del API de GSC (si alguien sabe Python/Node). Si no, herramienta gratuita como **Google Search Console Insights** o **Ahrefs Site Explorer free trial**.

**Resultado esperado**: para cada URL importante, las 5-10 queries que la posicionan.

#### A.4 — Auditoría de backlinks
**Equipo**: GSC → Links → Top linked pages + Top linking sites. Exportar.

Complementar con **Ahrefs free backlink checker** (`https://ahrefs.com/backlink-checker`) — hasta 100 backlinks gratis por dominio.

**Resultado esperado**: lista de URLs del WP antiguo que reciben backlinks externos. Estas son críticas — un 404 ahí = pérdida de link juice irrecuperable.

#### A.5 — Yo armo el inventario consolidado
**Claude**: con los CSV exportados, genero `docs/seo/url-inventory.csv` con una fila por URL legacy + cruce con tráfico, queries, backlinks. Plantilla ya creada en este repo.

### Fase B — Mapping URLs legacy → new (2-3 días, CLAUDE)

Por cada URL del inventario clasificar:

| Categoría | Criterio | Acción |
|-----------|----------|--------|
| **Direct match** | Slug idéntico en WP y Next | Sin redirect. Validar canonical y copy. |
| **Slug changed** | Misma página, slug distinto | Añadir 301 a `next.config.ts`. |
| **URL consolidada** | Varias URLs WP → 1 URL Next | 301 múltiple hacia destino consolidado. |
| **URL eliminada** | No tiene equivalente en Next | Si tiene tráfico/backlinks: 301 al pillar más relevante. Si no: aceptar 410 (gone). |
| **URL nueva** | No existía en WP | Marcar como "new" — no afecta preservación, solo crecimiento futuro. |

**Reglas para elegir destino del redirect cuando no hay match directo**:
1. Mismo tema → módulo más cercano. Ej: `/wp-old/email-hoteles-features/` → `/email-para-hoteles/`.
2. Si no hay módulo cercano → categoría blog correspondiente. Ej: `/wp-old/news/post-evento-2022/` → `/blog/eventos/`.
3. Si no hay categoría cercana → `/cdp-para-hoteles/` (pillar).
4. **NUNCA** redirigir todo a la home indiscriminadamente — Google lo trata como "soft 404" y pierdes el juice.

#### B.1 — Yo genero los redirects masivos
Una vez tengo el inventario clasificado, genero el bloque de `redirects()` para añadir a `next.config.ts`. Patrones masivos donde aplique + URLs individuales para casos especiales.

### Fase C — Validación de copy en URLs críticas (1 semana, EQUIPO + CLAUDE)

Para las **top 20 URLs con tráfico** (las que más importa preservar):

1. Yo extraigo el copy de la URL antigua via Wayback Machine o WP directo.
2. Yo comparo H1, title, primeros párrafos, términos clave vs la URL Next equivalente.
3. Si la URL Next NO menciona los términos que rankeaban en la URL antigua → marco como "requiere restore".
4. Equipo decide caso por caso si: a) añadir los términos al copy nuevo, b) aceptar la pérdida si el copy nuevo es mejor por razones de marca.

**Entregable**: `docs/seo/copy-preservation-checklist.md` con tabla URL × estado.

### Fase D — Pre-launch checklist (1 día, CLAUDE + EQUIPO)

Antes de switchover de DNS:

- [ ] `next.config.ts` tiene TODOS los redirects 301 necesarios.
- [ ] Sitemap `/sitemap.xml` del nuevo sitio incluye todas las URLs nuevas (verificar con `npm run build && curl localhost:3000/sitemap.xml`).
- [ ] Robots.txt: `/robots.txt` permite indexación en producción ([app/robots.ts](../../app/robots.ts) ya lo hace).
- [ ] Canonicals en cada `page.tsx` apuntan a URLs Next, no a URLs WP.
- [ ] Rich results test en 5 URLs críticas (https://search.google.com/test/rich-results).
- [ ] Lighthouse SEO ≥ 90 en home + 5 URLs core.
- [ ] Schema JSON-LD presente en URLs migradas (ya inyectado vía [json-ld.tsx](../../components/seo/json-ld.tsx)).
- [ ] **301 testing en staging**: para cada URL legacy del inventario, hacer `curl -sI [staging-url]/[url-legacy]` y verificar `HTTP/2 301` + `Location: [url-new]`.
- [ ] GSC: dejar configuradas alertas de coverage en cuanto se haga el switchover.

### Fase E — Post-launch monitoreo (4-12 semanas, EQUIPO)

**Semana 1 (crítica)**:
- Daily: GSC Coverage Report. Cualquier spike de errores → investigar inmediatamente.
- Daily: GSC URL Inspection en las top 10 URLs migradas. Confirmar "indexed".
- Daily: revisar 404s reportados en `next.config.ts` o logs del hosting.

**Semanas 2-4**:
- Weekly: comparar posiciones de top 50 KW vs baseline pre-migración.
- Weekly: tráfico orgánico total vs baseline.
- **Alerta crítica**: si una KW top 10 cae >5 posiciones en 7 días → revisar URL, redirect, copy, canonical.

**Meses 2-3**:
- Tráfico orgánico debería estar al 95%+ del baseline (es normal una caída del 5-15% temporal).
- Si cae más → algo está mal, auditoría completa.

**Mes 3+**:
- Si estable → empezar a planificar Fase de OPTIMIZACIÓN (el plan SEO de crecimiento queda en [README](./README.md) como referencia).

## Aprovechamiento del trabajo previo

Lo generado en esta sesión queda en standby pero **NO se descarta**:

| Documento | Estado tras este giro |
|-----------|----------------------|
| [keyword-map.csv](./keyword-map.csv) | **Referencia futura.** Tras Fase A-B, lo cruzaremos con las queries reales de GSC: si las KW propuestas coinciden con las que rankean → validadas. Si no → ajustamos hacia las reales. |
| [competitive-audit.md](./competitive-audit.md) | Referencia útil sin caducidad. Vale para fase de optimización. |
| [keyword-method.md](./keyword-method.md) | En espera. Útil para Fase 2 de optimización post-migración. |
| [internal-linking.md](./internal-linking.md) | **Aplicable parcialmente**: las reglas de anchor text valen para no romper internal links durante migración. Cluster diseñado queda para optimización futura. |
| [editorial-calendar.md](./editorial-calendar.md) | PAUSA. No publicar blog posts nuevos durante el switchover (semanas críticas) — añade ruido al monitoreo. |
| [backlinks-strategy.md](./backlinks-strategy.md) | PAUSA. Lo único activo durante la migración: **vigilar que los backlinks actuales sigan apuntando a URLs válidas** (Fase A.4). |

## Qué necesito del equipo AHORA para empezar Fase A

Por orden de urgencia:

1. **Sitemap del WP antiguo** — URL desde donde puedo hacer `WebFetch` o XML descargado en `docs/seo/legacy/`.
2. **Export CSV de GSC Pages 12m** — pasarme el archivo (anonimizado si hay info sensible) o pegarme las top 50 URLs con clicks/impressions/position.
3. **Export CSV de GSC Queries 12m** — idem con queries.

Con estos 3 datos puedo armar el inventario consolidado en una sesión y empezar Fase B (mapping de redirects).

## Riesgos a vigilar

- **Switchover prematuro**: si despliegan sin haber cerrado Fase B, se pierden 1-3 meses de ranking que cuesta 6+ meses recuperar.
- **Sobrecarga de redirects**: cada 301 añade ~10ms. Con 200+ redirects puntuales, considerar usar patrones con `:slug*` donde aplique en lugar de URLs individuales.
- **Canonical confusion**: si una URL Next tiene `canonical` apuntando a la URL antigua (resto de un copy-paste del WP), Google ignora la nueva. Verificar.
- **Search Console: añadir el sitio nuevo COMO PROPIEDAD distinta** del antiguo, no asumir que la transferencia es automática. Permitir 1-2 semanas para que GSC reconozca la propiedad correctamente.

## Estimación de esfuerzo total

| Fase | Esfuerzo equipo | Esfuerzo Claude | Duración calendario |
|------|----------------|-----------------|---------------------|
| A — Inventario | 4-8h (exports + validación) | 2-3h (consolidación) | 1-2 días |
| B — Mapping | 1h (revisar propuestas) | 4-6h (clasificación + generación) | 2-3 días |
| C — Copy validación | 4-6h (top 20 URLs) | 3-4h (extracción + comparativa) | 1 semana |
| D — Pre-launch check | 2h (validación staging) | 1h (scripts de test) | 1 día |
| E — Post-launch | 30 min/día primera semana, 1h/semana mes 1 | Bajo demanda si hay alertas | 4-12 semanas |

**Total hasta switchover**: ~2 semanas calendario, ~20h equipo, ~12h Claude.

## Pregunta abierta

¿Hay fecha objetivo de switchover ya fijada? Si sí, los hitos se ajustan hacia atrás. Si no, recomendación: **mínimo 2 semanas** desde inicio Fase A hasta deploy a producción.
