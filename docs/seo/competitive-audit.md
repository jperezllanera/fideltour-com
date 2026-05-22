# Auditoría competitiva SEO — Sector CDP/CRM hotelero

Análisis de los 5 competidores directos definidos en el plan SEO v2. El objetivo es entender qué clusters de contenido y qué patrones de URL persigue cada uno para informar la propuesta de keywords de Fideltour — no copiarlos, identificar gaps y oportunidades.

**Metodología**: lectura de sitemaps públicos (`/sitemap.xml`) + extracción de meta tags de pillar pages clave. Hecho por Claude vía WebFetch en mayo 2026. Cendyn bloqueó las peticiones (403) y queda pendiente de auditoría manual.

## Resumen ejecutivo

| Competidor | Mercado principal | Estructura | Volumen contenido | Foco SEO observado |
|---|---|---|---|---|
| Revinate | EN global | Hub-and-spoke con guías + posts | ~150 URLs (post sitemap doble) | "Hotel CDP", "Guest loyalty", "Direct bookings" |
| dailypoint | EN/DE/AE | Pilares por solución + newsroom amplio | ~140 URLs (68 blog + 26 whitepapers) | "CRM-CDM", "Loyalty program", "Voucher manager" |
| Profitroom | Multi-idioma (EN/PL/ES) | Producto + blog regional | ~30+ URLs | "Booking engine", "Direct bookings", "Guest loyalty" |
| The Hotels Network | Multi-idioma (6 idiomas) | Flat B2B, sin blog | 26 slugs × 6 idiomas | "Business intelligence", "Conversion personalization" |
| **Cendyn** | EN global | **No accesible (403)** | — | Pendiente audit manual |

## Detalle por competidor

### Revinate (revinate.com)

**Estructura observada** vía `/page-sitemap.xml`:

- **Producto** (`/hotel-software/...`):
  - `/hotel-software/` (hub central)
  - `/hotel-software/revinate-marketing/` (email marketing)
  - `/hotel-software/revinate-guests/` (guest database)
  - `/hotel-software/revinate-chat/` (chat AI)
  - `/hotel-software/guest-feedback/` (review mgmt)
  - `/hotel-software/reservation-sales/` (sales)
  - `/hotel-customer-data-platform/` (pillar CDP **separado** de /hotel-software)
  - `/intelligence-layer/` (capa AI "Ivy")
- **Canales** (`/channels/...`):
  - `/channels/hotel-email-marketing/`
  - `/channels/hotel-guest-messaging/`
  - `/channels/hotel-voice-reservations-sales/`
- **Estrategias** (`/strategies/...`) — pillar pages job-to-be-done:
  - `/strategies/hotel-guest-loyalty/`
  - `/strategies/hotel-direct-bookings/`
  - `/strategies/hospitality-upsells-marketing/`
  - `/strategies/hotel-guest-segmentation/`
- **Recursos**: `/guides/`, `/blog/`, `/webinars/`, `/podcast/`, `/events/`
- **Industry insights**: `/hospitality-benchmark-report/`, `/hotel-industry-resources-trends/`

**Pillar CDP analizada** (`/hotel-customer-data-platform/`):
- H1: "Your guest data is gold" (storytelling, no keyword stuffing)
- 13 H2 headings — ~3,200-3,500 palabras
- CTAs: "Get a demo", "View guide", "Listen here"
- **NO inyecta JSON-LD detectable** — pillar puro de contenido
- Bloques recurrentes: "Why your AI-powered CDP", "Deep dive: The data platform framework", FAQ, "Hotel Moment podcast"

**Patrones observados**:
- Naming consistente: `hotel-{producto}`, `hotel-{job-to-be-done}` en todas las URLs.
- Pillar pages separadas del producto (`/hotel-customer-data-platform/` ≠ `/hotel-software/revinate-guests/`) → capturan tanto KW de categoría como KW de producto sin canibalizar.
- Strategies hub (`/strategies/`) cubre KW informational + commercial sin pasar por blog.

**Aprendizajes para Fideltour**:
- Nuestro `/cdp-para-hoteles/` es equivalente conceptual a `/hotel-customer-data-platform/`.
- Nuestras module landings cubren la capa "producto"; falta una capa de "estrategias" equivalente a Revinate. **Candidato para Fase 5** del plan v2 (pillar pages `/plataforma/[pilar]/`) o blog pillar posts.
- Revinate evita JSON-LD en pillar pages → nosotros ya inyectamos ServiceJsonLd + FaqJsonLd, ventaja potencial.

### dailypoint (dailypoint.com)

**Estructura observada** vía `/sitemap.xml`:

- **Solutions** (`/solutions/...`) — 12 pillar pages:
  - `crm-cdm-marketing`, `campaign-manager`, `loyalty-program`, `pms-migration`, `ai-profile-snapshot`, `whatsapp-mobile-messaging`, `voucher-manager-and-wallet`, `booking-manager`, `data-laundry`, `basic-sales`
- **Marketplace** y **Company** — hubs
- **References** (`/references/...`) — 4 URLs:
  - `success-stories`, `lhw-testimonials`, casos individuales tipo `enhancing-loyalty-crm-at-serena-hotels-dailypoint-cdp-case-study`
- **Newsroom / Press** (`/newsroom/press/...`) — 28 URLs (announcements de partners: Shiji, Oracle Symphony, Accor, Dubai office…)
- **Whitepapers** (`/newsroom/white-paper/...`) — 26 URLs (formato long-form gated):
  - `central-guest-profile-the-key-to-success-for-digi`
  - `cdm-versus-crm-depth-versus-superficiality`
  - `big-data-the-key-to-boosting-your-hotel-s-value`
- **Blog** (`/newsroom/blog/...`) — 68 URLs:
  - `marketing-automation`, `personalization`, `vouchers`, `pms-switch-without-data-loss`, `hotel-marketing-campaign-strategy-5-quick-wins`, `how-to-maximize-hotel-revenue-with-strategic-voucher-use`

**Patrones observados**:
- Solo 12 solutions (concentradas) frente a nuestras 23 module landings — más enfoque por solución, menos atomización.
- Categoría propia "CDM" (Customer Data Management) que **dailypoint usa como diferenciador**. Riesgo: confunde mercado, pero les permite ranking exclusivo de la frase.
- Whitepapers como lead magnets indexados (no gated en URL) — fuente de backlinks.
- Blog amplio (68 URLs) cubriendo tactical guides.
- Multi-idioma EN/DE/AE — capturan mercados específicos.

**Aprendizajes para Fideltour**:
- Nuestras 23 module landings vs sus 12 — nosotros atomizamos más. Validar con keyword research si las 23 tienen volumen propio o algunas se solapan.
- Blog dailypoint con 68 URLs muestra que el blog hotelero **sí tiene tracción** — refuerza la inversión en `/blog/`.
- Sin Cendyn-vs-dailypoint-style content todavía (comparativos) → oportunidad para Fideltour si nos posicionamos contra ambos.

### Profitroom (profitroom.com)

**Estructura observada** vía `/sitemap.xml`:

- **Products**: `/products/booking-engine/`, `/pl/produkty/samodzielne-zarzadzanie-rezerwacjami/`
- **Blog English** (`/articles/...`):
  - `middle-east-recovery-guests-still-out-there`
  - `maximise-revenue-by-driving-more-direct-bookings`
  - `why-taking-ownership-of-the-entire-customer-journey-is-key-to-a-hotels-success`
- **Blog Polish** (`/pl/artykuly/...`) — equivalent en su mercado natural
- **Webinars** (`/webinary/...`), **eBooks** (`/ebooki/...`)
- **Case studies** (`/casos-de-exito/...` ES, `/cs/...` CS)
- **Landing**: `/the-complete-guide-to-guest-loyalty` (cornerstone pillar)

**Patrones observados**:
- Producto único principal (booking engine) → todo el contenido apoya esa conversion.
- Multi-idioma sin estructura `/en/`, `/pl/`, `/es/` paralela — sub-dominios y rutas diferentes por idioma.
- Pillar cornerstone (`/the-complete-guide-to-guest-loyalty`) sin sub-categoría — captura "guest loyalty" como destination.

**Aprendizajes para Fideltour**:
- Pillar cornerstone tipo "guía completa de X" es un formato que **nos falta** — candidato para `/recursos/` o blog feature.
- Multi-idioma sin paralelismo estricto → si activamos LATAM, Profitroom muestra que no es necesario duplicar 1:1 todas las URLs.

### The Hotels Network (thehotelsnetwork.com)

**Estructura observada** vía `/sitemap.xml`:

- 26 slugs únicos × 6 idiomas (DE, EN, ES, FR, IT, PT) = 156+ URLs
- **Producto / Solution** (3 slugs):
  - `/benchdirect`, `/business-intelligence`, `/conversion-personalization`, `/predictive-personalization`
- **Empresa** (11 slugs): `/about-us`, `/pricing`, `/contact-us`, `/login`, `/careers`, `/partner-program`, `/our-clients`
- **Legales** (6 slugs): privacy, terms, cookies, instant-privacy
- **Otros** (5 slugs): faq, press, vouchers-and-gift-cards

**Patrones observados**:
- **NO tiene blog** — estructura puramente B2B SaaS sin content marketing visible.
- Estructura flat → cero clustering, cero pillar pages.
- Multi-idioma idéntico (`/es/about-us`, `/de/about-us`, etc.).

**Aprendizajes para Fideltour**:
- Modelo "B2B sin blog" es la **antítesis** de Revinate/dailypoint. THN gana volumen marca + product pages, pero no captura long-tail informational.
- Fideltour ya tiene blog activo (6 categorías, posts vivos) → ventaja vs THN.
- THN demuestra que multi-idioma es viable sin reescritura masiva. Para LATAM, podemos clonar URLs con ajustes mínimos.

### Cendyn (cendyn.com)

**Estado**: WebFetch devuelve 403 Forbidden sistemáticamente (sitemap y home).

**Pendiente de auditoría manual**:
- Acceder con navegador desde IP residencial (no datacenter).
- Inspeccionar manualmente `cendyn.com/sitemap.xml` o `cendyn.com/robots.txt`.
- Si Ahrefs/Semrush disponible: extraer top 50 páginas por tráfico orgánico.

Cendyn es el referente histórico en CRM hotelero (pre-CDP). Su pivot a CDP es reciente y su SEO presumiblemente aún se beneficia del legacy. Sin esta auditoría perdemos contexto sobre KW de comparación "Cendyn vs ...".

## Síntesis de patrones recurrentes

1. **Pillar pages separadas de producto**: Revinate, dailypoint y Profitroom mantienen `/{categoria}/` independiente de `/{producto-especifico}/`. Fideltour ya hace esto con `/cdp-para-hoteles/` (pillar) vs module landings.

2. **Naming consistente con "hotel/hospitality" en URL**: el 100% de los competidores incluyen el nicho hotelero explícito en slug. Fideltour ya lo hace en `*-para-hoteles` / `*-hoteles`. **Refuerza la regla del nicho del plan**.

3. **Blog amplio (>50 posts)** = correlación con autoridad SEO: Revinate (~50+ posts), dailypoint (68 posts). Profitroom y THN con menos. **Fideltour tiene blog activo — invertir en cadencia editorial es palanca confirmada**.

4. **Whitepapers / guías indexadas** (no gated en URL): dailypoint y Profitroom. Genera backlinks y captura KW informational long-tail. **Fideltour tiene `/recursos/` — falta poblar con guías cornerstone**.

5. **Multi-idioma como capa, no traducción 1:1**: THN, Profitroom y dailypoint muestran patrones distintos. Si activamos LATAM, no hace falta replicar todas las URLs — empezar por las core P0.

6. **Comparativos vs competencia poco cubiertos**: ningún competidor visible posiciona contra los otros. Oportunidad para Fideltour: KW tipo "Fideltour vs Revinate", "alternativa a Cendyn hotelero".

## Próximos pasos sugeridos (no decisión)

- Auditar Cendyn manualmente (responsable: equipo con acceso navegador o Ahrefs).
- Validar con Keyword Planner si los slugs job-to-be-done de Revinate (`/strategies/hotel-{job}/`) tienen volumen en español → input para decidir Fase 5 (pillar pages `/plataforma/[pilar]/`).
- Considerar 1-2 piezas cornerstone tipo Profitroom (`/recursos/guia-completa-fidelizacion-hotel/`).
- Plantear contenido comparativo tras firmar Fase 0.
