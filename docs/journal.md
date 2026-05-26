# Journal · fideltour-com

Memoria viva del proyecto. **Cómo vamos**, no qué reglas hay
([`../CLAUDE.md`](../CLAUDE.md)) ni qué decisiones se tomaron
formalmente ([`adr/`](adr/)) ni qué rompe en local
([`dev-notes.md`](dev-notes.md)).

Una entrada por sesión, en orden inverso (la más reciente arriba).
Plantilla mínima:

```markdown
## YYYY-MM-DD · Sesión N — Título de una línea

**Lo que se hizo**
- bullet por commit relevante (no por commit; por bloque de trabajo)

**Lo decidido** (link a ADR si aplica)
- decisión X — ver ADR-NNN

**Lo descubierto** (link a dev-notes si aplica)
- gotcha Y — ver dev-notes#sección

**Parqueado / próxima sesión**
- pendiente concreto
```

Cuando una sesión termina con `commit + push`, añade su entrada antes
del push final. Si la sesión tocó varios bloques distintos, una sola
entrada con sub-bullets por bloque es mejor que varias entradas
fragmentadas.

---

## 2026-05-26 · Sesión 1 — Mockups corporativos, CDP pillar y rediseño de home

**Lo que se hizo**

- **Mockups corporativos en landings de módulo**. 23 PNG → WebP en
  `public/brand/platform/`, nueva familia `platform` en
  `convert-images.mjs` (q=80, 200KB, match por directorio).
  `ModuleHero` ahora lee `/brand/platform/{slug}.webp` por convención.
  `ModuleHeroVisual` (la plate genérica) eliminada — el fallback
  desaparece, hay que tener el .webp listo antes de crear la landing.
- **Foto duplicada PMS ↔ Motor de reservas detectada y arreglada**.
  Eran la misma foto de recepción con/sin overlays. Pulled el asset
  corporativo real de la live (`motor-reservas-fideltour-img01-1024px.png`)
  — tablet con interfaz "Dream Stay".
- **Home: fixes de UI reportados por Raiko**. Anilla del hero engordada
  hasta el estándar corporativo (border 80→130px, ancho 45vw→60vw).
  Pastilla "Del CRM al CDP" reparada — `bg-brand-gradient` no era una
  utility Tailwind, se definió a mano. Mockup CRM flotando dentro de
  la pastilla. Testimonios con quotes reales (Rosi Yáñez · GF Hoteles,
  Carla Pascual · Universal Beach, Nuria Lista · Oh!tels) sacados de
  la home corporativa actual.
- **Mega-menú: 3 fixes UX**. FeaturedCard apunta a `/cdp-para-hoteles/`
  (no a `/#plataforma`). Descripciones de categoría reescritas para no
  enumerar los items de su columna ("PMS, motor, web, chatbot" salía
  doble). `closeOnClick` añadido a los `NavigationMenuLink` — sin esa
  prop el dropdown no cerraba al click.
- **Portal cautivo arreglado**. Antes el hero tenía la columna izquierda
  vacía. Ahora muestra el mockup. Sigue siendo bespoke (no usa
  `ModuleLandingPage`).
- **`rounded-2xl` universal en mockups del hero**. 14 de 23 mockups son
  1:1 (fotos full-bleed); las esquinas redondeadas se ven. Devices con
  bg transparente: el recorte cae en el letterbox vacío y no se nota.
- **Landing /cdp-para-hoteles reconstruida sobre el dossier Agoratech
  2026**. 6 secciones bespoke → 11 secciones nuevas siguiendo los 15
  slides del glosario. Hero ("La reserva está a punto de cambiar"),
  era-shift, sales-agent, three-sources, anonymous-traffic (20/80),
  context-comparison (chat IA con/sin contexto), ecosystem (CDP
  centro), modules (12 módulos en 2×6), timeline (2000→≈2027), stats
  (50M/20M+/10M), CTA ("El contexto no se enciende, se acumula").
- **Home rediseñada con 7 jugadas anti-template**. Hero con titular
  `.h-mega` y frase ancla "El hotelero que domina el dato, domina la
  venta directa". Awards inline (logo+nombre+año, sin cards).
  CrmToCdp con 3 chips de stats Phocuswright dentro de la pastilla.
  `LoyaltyLadderSection` sustituida por `CdpModulesSection` (12
  módulos centrados). Logos con título "Ellos ya confían en Fideltour"
  y logos como protagonistas. Final CTA con voz del dossier.
  Testimonios mantenidos como 3 cards iguales (Raiko prefirió no
  elevar uno).

**Lo decidido**

- **"Agéntico" se mantiene como atributo táctico, nunca como
  categoría** — ver [ADR-0004](adr/0004-fideltour-one-y-cdp-pillar.md).
- **"Fideltour ONE" entra como marca de producto** (no como
  categoría) — ver [ADR-0004](adr/0004-fideltour-one-y-cdp-pillar.md).
- **`/cdp-para-hoteles/` queda como pillar canónico** de la categoría,
  reconstruida sobre el dossier — ver
  [ADR-0004](adr/0004-fideltour-one-y-cdp-pillar.md).
- **Documentación del proyecto en 4 capas**: reglas (CLAUDE.md),
  decisiones (adr/), cicatrices (dev-notes.md), memoria viva (este
  archivo). No se crean session-logs separados — los commits ya
  documentan el qué.

**Lo descubierto**

- **`NEXT_PUBLIC_SITE_URL` obligatorio en `.env.local`** o todas las
  páginas devuelven 500. No hay `.env.example`. Ver
  [dev-notes #arranque](dev-notes.md#arranque-del-dev-server).
- **Turbopack cachea CSS en `.next/`**. Si un edit a `globals.css` no
  se ve en navegador tras hot-reload, `rm -rf .next` y reinicia.
- **Colisión IPv4/IPv6 con HealthScore** en :3000. Arrancar Fideltour
  con `PORT=3010 npm run dev` si trabajas también con HealthScore.
- **`bg-brand-gradient` no es una utility Tailwind**. Tailwind v4 no
  genera `bg-*` desde tokens cuyo valor es `linear-gradient(...)`. La
  clase se define a mano en `globals.css`, mismo patrón que
  `.bg-hero-gradient`.
- **`closeOnClick` en NavigationMenuLink** de Base UI tiene default
  `false`. Sin esa prop el mega-menú no se cierra al click. Aplicado
  en todos los links del dropdown actual.

**Parqueado / próxima sesión**

- **WhatsApp QR demo del slide 14 del dossier** — pendiente `wa.me`
  oficial. Hoy quitado de `/cdp-para-hoteles/`. Cuando llegue la URL
  real, va antes del CTA final.
- **Stats `50M / 20M+ / 10M`** del bloque "Por qué Fideltour" en
  /cdp-para-hoteles — confirmar con marketing que son cifras
  publicables antes de promocionar la landing.
- **"200+ hoteles"** propuesto inicialmente en `LogosCarouselSection`
  → descartado por falta de número validado. Si marketing confirma una
  cifra, vale la pena recuperarlo.
- **Migración real de "Fideltour ONE" al header/footer/meta tags** —
  postergada hasta validar adopción interna del naming.
- **Posibles iteraciones UI** sobre la home: gerne pidió "wow sin
  estética IA". Aplicadas 7 jugadas baratas-medianas (commit d8d4f98).
  Si querés ir más profundo: la jugada 4(A) de la propuesta original
  (la escalera-bento de 12 cards con contenido propio) está sin hacer
  — requiere que marketing defina los 12 pasos con su métrica
  asociada.
