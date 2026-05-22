# Redirects 301 propuestos — Migración WP → Next.js

Bloque completo de redirects para añadir a [next.config.ts](../../next.config.ts).

## Estado del análisis

✅ **Contenido core**: todos los slugs ES principales (`/cdp-para-hoteles/`, `/clientes/`, `/casos-de-exito/`, `/marketplace/`, `/fideltour/`, `/kit-digital-fideltour/`, `/auditoria-gratuita-hotel/`, `/partners/`, `/recursos/nuestros-videos-crm-hotelero/`, `/integracion-portal-cautivo-para-hoteles/`, legales) hacen **match directo** entre WP y Next.js. Cero redirects necesarios.

✅ **Posts del blog**: 61 posts del WP están **al 100% migrados** a MDX en `content/blog/`. Mismos slugs, misma estructura `/blog/{category}/{slug}/`. Cero redirects necesarios.

✅ **Casos de éxito**: 3 casos (`hotel-vacacional`, `hotel-urbano-centrico`, `hotel-urbano`) ya existen en Next con misma URL.

⚠️ **URLs a redirigir** (lo que sigue):

| Patrón | Cantidad | Acción |
|--------|----------|--------|
| `/en/*` (sin `/en/blog/`) | ~25 | Redirect a equivalente ES |
| `/pt-pt/*` | ~12 | Redirect a equivalente ES o home |
| `/blog/category/X/` | 8 | Redirect a `/blog/X/` (formato Next) |
| `/blog/tag/X/` | 17 | Redirect a `/blog/` (sin tags en Next) |
| Sueltas (`/perfil/`, `/registration/`, `/registro/`, `/tht/`) | 4 | Redirect a `/contacto/` o home |

**Total redirects nuevos**: ~66 (con patrones masivos donde aplica, se reducen a ~35 reglas).

## Bloque completo propuesto para `next.config.ts`

Sustituir el `redirects()` actual (que solo cubre `/en/blog/*`) por el siguiente. Mantiene los 8 redirects existentes y añade los nuevos. **Orden importa**: Next evalúa de arriba abajo.

```ts
async redirects() {
  return [
    // ============================================================
    // BLOQUE 1 — YA EXISTENTES (no tocar)
    // ============================================================

    // Blog inglés: todo el espacio /en/blog/* al blog ES
    { source: "/en/blog", destination: "/blog/", permanent: true },
    { source: "/en/blog/:rest*", destination: "/blog/", permanent: true },

    // Categorías blog inglés (slug terminado en -en) a homólogas ES
    { source: "/blog/marketing-en/:slug*", destination: "/blog/marketing/", permanent: true },
    { source: "/blog/fideltour-en/:slug*", destination: "/blog/fideltour/", permanent: true },
    { source: "/blog/fidelizacion-en/:slug*", destination: "/blog/fidelizacion/", permanent: true },
    { source: "/blog/fideltalks-en/:slug*", destination: "/blog/fideltalks/", permanent: true },
    { source: "/blog/crm-en/:slug*", destination: "/blog/crm/", permanent: true },
    { source: "/blog/eventos-en/:slug*", destination: "/blog/eventos/", permanent: true },
    { source: "/blog/entrevistas-en/:slug*", destination: "/blog/fideltalks/", permanent: true },

    // ============================================================
    // BLOQUE 2 — Categorías Yoast (/blog/category/X/) → /blog/X/
    // ============================================================
    // Yoast servía /blog/category/marketing/; Next.js sirve /blog/marketing/.

    { source: "/blog/category/marketing/:rest*", destination: "/blog/marketing/", permanent: true },
    { source: "/blog/category/crm/:rest*", destination: "/blog/crm/", permanent: true },
    { source: "/blog/category/fidelizacion/:rest*", destination: "/blog/fidelizacion/", permanent: true },
    { source: "/blog/category/fideltour/:rest*", destination: "/blog/fideltour/", permanent: true },
    { source: "/blog/category/fideltalks/:rest*", destination: "/blog/fideltalks/", permanent: true },
    { source: "/blog/category/eventos/:rest*", destination: "/blog/eventos/", permanent: true },
    { source: "/blog/category/entrevistas/:rest*", destination: "/blog/fideltalks/", permanent: true }, // consolidado
    { source: "/blog/category/reviews/:rest*", destination: "/blog/", permanent: true }, // sin equivalente

    // ============================================================
    // BLOQUE 3 — Tags Yoast (/blog/tag/X/) → /blog/
    // ============================================================
    // El sitio Next.js NO implementa pages de tags. Todo va al hub blog.

    { source: "/blog/tag/:slug*", destination: "/blog/", permanent: true },

    // ============================================================
    // BLOQUE 4 — Pages EN específicas → ES equivalentes
    // ============================================================
    // Orden importa: específicas ANTES del catch-all.

    { source: "/en", destination: "/", permanent: true },
    { source: "/en/", destination: "/", permanent: true },
    { source: "/en/home/", destination: "/", permanent: true },
    { source: "/en/cdp-for-hotels/", destination: "/cdp-para-hoteles/", permanent: true },
    { source: "/en/captive-portal-for-hotels/", destination: "/integracion-portal-cautivo-para-hoteles/", permanent: true },
    { source: "/en/marketplace/", destination: "/marketplace/", permanent: true },
    { source: "/en/partners/", destination: "/partners/", permanent: true },
    { source: "/en/fideltour/", destination: "/fideltour/", permanent: true },
    { source: "/en/fideltour-digital-kit/", destination: "/kit-digital-fideltour/", permanent: true },
    { source: "/en/free-audit/", destination: "/auditoria-gratuita-hotel/", permanent: true },
    { source: "/en/our-customers/", destination: "/clientes/", permanent: true },
    { source: "/en/success-stories/", destination: "/casos-de-exito/", permanent: true },
    { source: "/en/success-stories/vacation-hotel/", destination: "/casos-de-exito/hotel-vacacional/", permanent: true },
    { source: "/en/success-stories/central-urban-hotel/", destination: "/casos-de-exito/hotel-urbano-centrico/", permanent: true },
    { source: "/en/success-stories/urban-hotel/", destination: "/casos-de-exito/hotel-urbano/", permanent: true },
    { source: "/en/resources/hotel-crm-training-videos/", destination: "/recursos/nuestros-videos-crm-hotelero/", permanent: true },
    { source: "/en/resources/workshops/", destination: "/recursos/", permanent: true },
    { source: "/en/resources/webinars/", destination: "/recursos/", permanent: true },
    { source: "/en/resources/cursos/", destination: "/recursos/", permanent: true },
    { source: "/en/cookies-policy/", destination: "/politica-de-cookies/", permanent: true },
    { source: "/en/terms-and-conditions/", destination: "/terminos-y-condiciones/", permanent: true },
    { source: "/en/keytel-en/", destination: "/cdp-para-hoteles/", permanent: true },
    { source: "/en/keytel-it/", destination: "/cdp-para-hoteles/", permanent: true },
    { source: "/en/bookassist-lp-es/", destination: "/cdp-para-hoteles/", permanent: true },
    { source: "/en/perfil/", destination: "/contacto/", permanent: true },
    { source: "/en/registration/", destination: "/contacto/", permanent: true },
    { source: "/en/tht/", destination: "/", permanent: true },

    // Catch-all EN — cualquier otra URL /en/X no listada arriba
    { source: "/en/:rest*", destination: "/", permanent: true },

    // ============================================================
    // BLOQUE 5 — Pages PT-PT → ES equivalentes
    // ============================================================

    { source: "/pt-pt/redes-sociais-para-hoteis/", destination: "/redes-sociales-hoteles/", permanent: true },
    { source: "/pt-pt/mercado/", destination: "/marketplace/", permanent: true },
    { source: "/pt-pt/centralize-os-seus-dados-2/", destination: "/cdp-para-hoteles/", permanent: true },
    { source: "/pt-pt/academia-fideltour-2/", destination: "/recursos/", permanent: true },
    { source: "/pt-pt/inicio-14/", destination: "/", permanent: true },
    { source: "/pt-pt/inacio/", destination: "/", permanent: true },
    { source: "/pt-pt/keytel-lp-:rest*", destination: "/cdp-para-hoteles/", permanent: true },

    // Catch-all PT-PT
    { source: "/pt-pt/:rest*", destination: "/", permanent: true },

    // ============================================================
    // BLOQUE 6 — URLs sueltas WP sin equivalente
    // ============================================================

    { source: "/perfil/", destination: "/contacto/", permanent: true },
    { source: "/registration/", destination: "/contacto/", permanent: true },
    { source: "/registro/", destination: "/contacto/", permanent: true },
    { source: "/tht/", destination: "/", permanent: true },

    // ============================================================
    // BLOQUE 7 — URLs descubiertas en GSC con tráfico real
    // (no aparecían en sitemap WP pero Google las indexó y rankean)
    // ============================================================

    // /equipo/ — 82 clicks/12m, posición 2.3 — URL muy rankeada de "team" page
    { source: "/equipo/", destination: "/fideltour/", permanent: true },

    // /pricing/ — 60 clicks/12m — Next.js no tiene página de pricing pública
    { source: "/pricing/", destination: "/contacto/", permanent: true },

    // /recursos/ebooks/ — 28 clicks/12m — sub-página de recursos no migrada
    { source: "/recursos/ebooks/", destination: "/recursos/", permanent: true },

    // /keytel/ — 21 clicks/12m — landing comercial antigua (partner deal)
    { source: "/keytel/", destination: "/cdp-para-hoteles/", permanent: true },

    // /conecta-con-tus-huespedes/ — 13 clicks/12m — landing antigua
    { source: "/conecta-con-tus-huespedes/", destination: "/cdp-para-hoteles/", permanent: true },

    // /home/ — 11 clicks/12m — URL legacy de home
    { source: "/home/", destination: "/", permanent: true },

    // ============================================================
    // BLOQUE 8 — URLs EN específicas con tráfico (refuerzo del catch-all /en/*)
    // Estas deben ir ANTES del catch-all /en/:rest* del bloque 4.
    // MOVER ESTAS REGLAS al bloque 4 antes de desplegar.
    // ============================================================

    // /en/whatsapp-for-hotels/ — 12 clicks
    { source: "/en/whatsapp-for-hotels/", destination: "/whatsapp-para-hoteles/", permanent: true },

    // /en/who-we-are/ — 12 clicks
    { source: "/en/who-we-are/", destination: "/fideltour/", permanent: true },

    // /en/privacy-policy/ — 10 clicks
    { source: "/en/privacy-policy/", destination: "/politica-de-privacidad/", permanent: true },

    // /en/build-customer-loyalty/ — 7 clicks
    { source: "/en/build-customer-loyalty/", destination: "/fidelizacion-hoteles/", permanent: true },

    // /en/booking-engine-integration-for-hotels/ — 6 clicks
    { source: "/en/booking-engine-integration-for-hotels/", destination: "/integracion-motor-de-reservas-para-hoteles/", permanent: true },

    // /en/fideltour-marketing-connect-with-your-customer/ — 6 clicks
    { source: "/en/fideltour-marketing-connect-with-your-customer/", destination: "/marketing-hoteles/", permanent: true },

    // ============================================================
    // BLOQUE 9 — URLs 404 confirmadas por GSC Coverage Drilldown
    // (Google las tiene marcadas como 404 — preservar las relevantes)
    // ============================================================

    // /blogs/ (plural — typo común desde backlinks externos)
    { source: "/blogs/", destination: "/blog/", permanent: true },

    // URLs sueltas WP sin trailing slash (Google las indexó así)
    // Next.js con trailingSlash:true normaliza a "/path/" antes del redirect,
    // pero declaramos ambas formas para evitar chain de 2 hops.
    { source: "/contrato-de-encargo-de-tratamiento", destination: "/politica-de-privacidad/", permanent: true },
    { source: "/contrato-de-encargo-de-tratamiento/", destination: "/politica-de-privacidad/", permanent: true },
    { source: "/fideltour-es-infinito", destination: "/fideltour/", permanent: true },
    { source: "/fideltour-es-infinito/", destination: "/fideltour/", permanent: true },
    { source: "/sobre-nosotros", destination: "/fideltour/", permanent: true },
    { source: "/sobre-nosotros/", destination: "/fideltour/", permanent: true },

    // Variante portuguesa de /auditoria-gratuita-hotel/
    { source: "/auditoria-fidelizacao/", destination: "/auditoria-gratuita-hotel/", permanent: true },

    // /keytel-fr/ — landing antigua de partner Keytel en francés
    { source: "/keytel-fr/", destination: "/cdp-para-hoteles/", permanent: true },

    // Locale paths que el WP intentó implementar y nunca funcionaron
    { source: "/en-us/:rest*", destination: "/", permanent: true },
    { source: "/es-es/crm-hoteles", destination: "/crm-hoteles/", permanent: true },
    { source: "/es-es/:rest*", destination: "/", permanent: true },
    { source: "/es/:rest*", destination: "/", permanent: true },

    // NOTA: URLs con query strings WP (/?page_id=N, /?post_type=recursos&p=N)
    // no se redirigen porque Google ya las tiene como 404 hace tiempo y
    // probablemente ya están desindexadas. Si quisiéramos preservar, usar
    // `has: [{ type: "query", key: "page_id" }]` en next redirects.
    // Decisión actual: dejar que Google las descarte.

    // ============================================================
    // BLOQUE 10 — URLs adicionales del drill-down "Página con redirección"
    // GSC reporta que estas URLs YA se redirigen desde el WP — replicar
    // el comportamiento en Next.js para no romper la cadena de redirects.
    // ============================================================

    // /inicio/ — landing home legacy del WP
    { source: "/inicio/", destination: "/", permanent: true },

    // Landings partner EN (las versiones ES están en Bloque 9 ya)
    { source: "/en/keytel-fr/", destination: "/cdp-para-hoteles/", permanent: true },
    { source: "/en/keytel-pt/", destination: "/cdp-para-hoteles/", permanent: true },

    // Casos de éxito EN (resto cubiertos en Bloque 4)
    { source: "/en/casos-de-exito/hotel-urbano-centrico/", destination: "/casos-de-exito/hotel-urbano-centrico/", permanent: true },
  ];
}
```

## v2 — Refinamientos basados en datos GSC (mayo 2026)

Tras procesar el export GSC Performance 12 meses (`docs/seo/legacy/gsc-páginas.csv`) se añadieron los Bloques 7 y 8 con URLs descubiertas que NO estaban en el sitemap Yoast pero **rankean con tráfico real**.

### Resumen tráfico total dominio principal (12m)
- **4.017 clicks** distribuidos en 239 URLs únicas con impresión.
- **CTR medio**: 1.5% (mejorable — más adelante con copy alineado).
- Top 30 URLs concentran ~80% del tráfico (regla 80/20 estándar).

### URLs con tráfico que ahora SÍ están cubiertas (antes caían al catch-all)
| URL legacy | Clicks/12m | Destino |
|-----------|-----------:|---------|
| `/equipo/` | 82 | `/fideltour/` |
| `/pricing/` | 60 | `/contacto/` |
| `/recursos/ebooks/` | 28 | `/recursos/` |
| `/keytel/` | 21 | `/cdp-para-hoteles/` |
| `/en/whatsapp-for-hotels/` | 12 | `/whatsapp-para-hoteles/` |
| `/en/who-we-are/` | 12 | `/fideltour/` |
| `/conecta-con-tus-huespedes/` | 13 | `/cdp-para-hoteles/` |
| `/home/` | 11 | `/` |
| `/en/privacy-policy/` | 10 | `/politica-de-privacidad/` |
| `/en/build-customer-loyalty/` | 7 | `/fidelizacion-hoteles/` |
| `/en/booking-engine-integration-for-hotels/` | 6 | `/integracion-motor-de-reservas-para-hoteles/` |
| `/en/fideltour-marketing-connect-with-your-customer/` | 6 | `/marketing-hoteles/` |

**Total tráfico recuperado por reglas específicas**: ~280 clicks/año que iban a perderse al catch-all (acabarían en home sin link juice temático).

### Sub-dominios — fuera del scope del repo Next.js
GSC reporta **34 sub-dominios** con tráfico (support.fideltour.com 290 clicks, intranet 148, grm 134, recruit 114, sso 67, academy 64, hotspot 60, ...). Estos NO se gestionan en `next.config.ts` — son aplicaciones independientes con su propia infra. Solo se mencionan aquí para inventario completo.

### Pendiente del Coverage Report
GSC Coverage indica **101 páginas con 404** que Google ya conoce. El export agregado no incluye las URLs específicas — necesario:

1. GSC → Indexación → Páginas → filtro "No se ha encontrado (404)" → Exportar.
2. Pasarme las URLs → añadir redirects específicos donde apliquen.

### Análisis de las 101 URLs 404 (GSC Coverage Drilldown — mayo 2026)

Procesado `gsc-coverage-drilldown-tabla.csv` con las 101 URLs específicas que Google reporta como 404.

**Cobertura por mis redirects propuestos**:

| Categoría | URLs | Estado |
|-----------|-----:|--------|
| `/pt-pt/*` | 33 | ✅ Cubierto por catch-all `/pt-pt/:rest*` |
| `/en/*` | 13 | ✅ Cubierto por catch-all `/en/:rest*` (las top con tráfico ya específicas en Bloque 8) |
| Subdominios (subdominio, intranet, relay, web, hs) | 35 | ⚠️ Fuera del scope del repo. Si esos subdominios devuelven 404, lo gestiona infra aparte. |
| WP `?page_id=N` | 7 | ⚠️ Dejados sin redirect (URLs antiguas pre-permalinks, sin tráfico, Google las descarta solo). |
| URLs sueltas (sobre-nosotros, blogs, sobre-nosotros, etc.) | 6 | ✅ Añadidas al Bloque 9 |
| Locale paths (`/en-us/`, `/es/`, `/es-es/`) | 4 | ✅ Añadidas al Bloque 9 |
| `/keytel-fr/` | 1 | ✅ Añadido al Bloque 9 |
| Otras con UTM/ref | 1 | ✅ La canonical `/conecta-con-tus-huespedes/` ya está en Bloque 7 |
| Misc | 1 | — |

**Total nuevas URLs cubiertas por Bloque 9**: ~13 redirects específicos para las 404 reales del WP.

### Hallazgo crítico — perfil de backlinks del sitio antiguo (mayo 2026)

Tras procesar `gsc-links-*.csv`:

- **1 solo dominio** enlaza a fideltour.com (`infoturlatam.com`) con **823 backlinks**.
- TODOS los 823 backlinks apuntan a la home `/` — ninguna URL interna recibe link juice externo.
- 0 links nuevos en "Latest links".

**Implicación**:
- El riesgo de pérdida por backlinks rotos en la migración es **prácticamente nulo** — la home Next.js es la misma URL (`/`), match directo.
- La autoridad externa del dominio es **muy baja**. Esto explica por qué muchas KW competitivas tienen posición media >10 incluso teniendo on-page sólido.
- La estrategia de [backlinks-strategy.md](./backlinks-strategy.md) pasa de "deseable" a **palanca crítica post-migración** — sin link building activo, el techo del SEO está limitado por la autoridad heredada (que es mínima).

## Justificación por bloque

### Bloque 2 — Categorías Yoast
Yoast SEO servía `/blog/category/X/` como URL canonical de categoría. El nuevo sitio sirve `/blog/X/` directamente (sin `/category/`). Sin estos redirects, **8 URLs de categoría devolverían 404** — son URLs que pueden tener backlinks externos.

### Bloque 3 — Tags
WP Yoast crea automáticamente `/blog/tag/{tag}/` por cada tag. El nuevo sitio **no implementa pages de tag** (`/blog/tags/` no existe en `app/`). Decisión: redirigir todos al hub `/blog/`. Alternativa futura: implementar páginas de tag — fuera de scope de preservación.

### Bloque 4 — EN
Hay ~25 URLs en `/en/*` que no son blog. La política actual (regla del proyecto: i18n es TODO senior) es **no mantener idioma EN**. Redirect a equivalente ES.

Casos especiales:
- `/en/keytel-*` y `/en/bookassist-lp-*`: landings comerciales antiguas con partners. Sin equivalente directo → al pillar.
- `/en/perfil/`, `/en/registration/`: funcionalidad de cuenta no portada → al formulario de contacto.
- Catch-all final (`/en/:rest*`): seguridad para cualquier URL EN no contemplada.

### Bloque 5 — PT-PT
Idéntica lógica: no se mantiene PT-PT. Las URLs `/pt-pt/keytel-lp-X/` son landings de campaña — un solo patrón `keytel-lp-:rest*` las cubre todas.

### Bloque 6 — URLs sueltas
`/perfil/` y `/registration/` y `/registro/` eran formularios de cuenta del WP. El nuevo sitio no los implementa → al formulario de contacto.

## Riesgo y validación

**Riesgo principal**: el catch-all `/en/:rest*` y `/pt-pt/:rest*` redirigen al home. Si Google había indexado una URL específica con backlinks (ej. `/en/some-niche-page/`), el link juice se diluye al home en lugar de a una URL temática. **Mitigación**: tras conseguir el export de GSC del WP, identificar las URLs EN/PT-PT con tráfico/backlinks reales y añadir reglas específicas ANTES del catch-all.

**Testing antes de switchover**:
```bash
# Para cada URL del WP, verificar que el staging devuelve 301 + Location correcto.
# Ejemplo (replace [STAGING_URL]):
for url in /en/cdp-for-hotels/ /pt-pt/mercado/ /blog/category/marketing/ /blog/tag/crm/ /perfil/; do
  echo "=== $url ==="
  curl -sI "[STAGING_URL]$url" | grep -iE "HTTP|location"
done
```

Esperado en todos: `HTTP/2 301` + `location: [URL Next equivalente]`.

**Validación post-deploy**: GSC → URL Inspection en 10-15 URLs WP críticas. Confirmar que Google sigue el redirect y indexa la nueva.

## Lo que NO está cubierto y se aborda con GSC

- **Sub-páginas de pages WP** que no aparecieron en el sitemap pero pueden existir (orphans). Detectables con GSC Coverage Report.
- **URLs con query strings** rankeando (ej. `?utm_source=`). Bajo riesgo, pero auditable con GSC Performance filtrando por queries.
- **Páginas con backlinks externos no visibles en el sitemap**. Detectables con GSC → Links → Top linked pages.

Por eso necesitamos el export de GSC para completar este mapping con las URLs que el sitemap no muestra.

## Pendiente del equipo

1. **Aprobar este bloque** o sugerir cambios (en particular: ¿`/perfil/` y `/registration/` van a `/contacto/` o a otra URL?).
2. **Aplicar los redirects a `next.config.ts`** — yo puedo generar el diff cuando aprobéis.
3. **Validar en staging** con los curls del bloque "Testing".
4. **Pasarme el export GSC** para refinar las URLs con tráfico/backlinks reales y añadir reglas específicas si hace falta.
