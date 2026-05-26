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

## 2026-05-26 · Sesión 3 — ContainerScroll en /cdp-para-hoteles y rename de módulos

**Lo que se hizo**

- **Renombrados 2 módulos** en `lib/content/cdp.ts` para alinear con el
  naming del mega-menú: `Campañas → Campaigns`, `Loyalty → Rewards`.
  Actualizada también la descripción de Aplicaciones ("Loyalty cuánto
  vale" → "Rewards cuánto vale") y el FAQ que enumera los 12 módulos.
  El cambio se propaga automáticamente a las dos secciones que
  consumen `cdpModules`: /cdp-para-hoteles y la home (sesión 1
  sustituyó LoyaltyLadderSection por CdpModulesSection).
- **Sustituida la sección "Tres fuentes"** de /cdp-para-hoteles por
  un scroll-driven reveal estilo Aceternity. Nueva sección
  `CdpAgenticEraSection` con titular "Bienvenido a la era agéntica"
  y un mockup laptop del dashboard de Identity rotando/escalando
  según el progreso de scroll. La imagen viene de la live
  (`identity-fideltour-crm-img01-copia.png` → `hero-identity-crm.webp`,
  48 KB).
- **ContainerScroll componente nuevo** en
  `components/ui/container-scroll-animation.tsx`. NO es shadcn — el
  comentario de cabecera lo aclara. Los arbitrary values del Aceternity
  original (`h-[60rem]`, `bg-[#222222]`, `rounded-[30px]`, sombra
  multi-stop inline) se movieron a `globals.css` como `.scroll-stage`,
  `.scroll-stage-perspective`, `.scroll-card-shadow` para cumplir la
  regla de markup hygiene.
- **Sin chrome de laptop** en la implementación final. Tras una primera
  iteración con marco oscuro, descartado: el children es ya un mockup
  con su propio device chrome, ponerlo dentro de otro daba "laptop
  dentro de laptop". El children flota directamente con `drop-shadow`
  que respeta el alpha del PNG y rota con la transform.
- **Cleanup**: borrado `components/sections/cdp-three-sources.tsx` y la
  data `cdpSources` de `lib/content/cdp.ts` — eran sus únicos
  consumidores.

**Lo decidido**

- **ContainerScroll vive en `components/ui/` a pesar de no ser shadcn.**
  La convención del repo era que `components/ui/` es "auto-generado
  shadcn, no editar a mano". Excepción permitida: efectos genéricos
  reutilizables tipo Aceternity, con comentario de cabecera explícito.
  Alternativa descartada: carpeta `components/effects/`. Razón: el
  componente se importa exactamente como un primitive shadcn (un
  efecto envolvente), no como una sección de página.
- **Import del motor de animación: `motion/react`** (rebrand de
  framer-motion v12). El proyecto no usa el paquete `framer-motion`
  directamente. Si en el futuro alguien copia un snippet de Aceternity
  con `import { motion } from "framer-motion"`, hay que cambiarlo.

**Lo descubierto**

- **`drop-shadow` filter respeta el canal alpha** del PNG, así que la
  sombra sigue el contorno del laptop en vez de ser una caja
  rectangular. Importante para mockups de dispositivos con fondo
  transparente. Aplicado en `.scroll-card-shadow` en globals.css.
- **El paquete `motion` v12 exporta hooks desde `motion/react`**, no
  desde `motion` ni desde `framer-motion`. Documentado en
  `dev-notes.md` para futuras integraciones.
- **Aceternity components vienen con arbitrary values agresivos** que
  rompen las reglas de markup hygiene del repo: HEX literales,
  `h-[60rem]`, `style={{perspective}}`, sombras multi-stop inline.
  Patrón: moverlo todo a utilities en `globals.css` antes de usarlo.
  Tarda 5 min y queda limpio.
- **El asset corporativo de Identity** vivía en la live como
  `2026/03/identity-fideltour-crm-img01-copia.png` — el sufijo "copia"
  por flujo editorial de WordPress, no por estar duplicado. Misma
  técnica que con motor-reservas en sesión 1 para pull-from-live.

**Parqueado / próxima sesión**

- **Verificar el efecto de scroll en navegador real** — el headless
  no captura la rotación animada, solo un estado estático. Si Raiko
  reporta que sigue sin verse movimiento en su Chrome, posibles
  causas a debuggear: `prefers-reduced-motion`, hidratación tardía
  del client component, viewport demasiado alto vs altura de stage.
- **Whitespace alrededor de la sección** — la stage es alta (50-65rem)
  por necesidad del scroll-range. Si visualmente queda demasiado
  vacía, alternativas: añadir copy lateral, reducir stage y comprimir
  el rango de rotación, o intercalar otra sección breve dentro.
- **(De sesiones anteriores, sigue parqueado)**: WhatsApp QR demo del
  slide 14 del dossier, stats 50M/20M+/10M confirmar con marketing,
  rotar credenciales SMTP de SES, descripciones de los 4 ebooks.

---

## 2026-05-26 · Sesión 2 — Lead magnet de /recursos/, newsletter SMTP y fix de DX

**Lo que se hizo**

- **Lead magnet de /recursos/ activado**. Reemplazados los 3 ebooks
  placeholder por 4 piezas reales (Guest Journey, reputación online,
  venta directa, calendario 2026) con su PDF y portada square. El modal
  de captura marca un flag en `localStorage` tras el submit; próximos
  clics saltan el form y abren el PDF directo. El envío real al CRM
  sigue parqueado como `TODO senior` — el handler local solo recuerda
  la captura en el navegador.
- **Newsletter del blog cableada a SMTP**. `BlogCtaSection` ahora hace
  POST a un route handler nuevo (`app/api/newsletter/route.ts`) con
  `nodemailer`. Reenvía la suscripción a `marketing@fideltour.com` con
  honeypot anti-spam, rate limit in-memory (5 req / 10 min por IP) y
  validación de email server-side. Si faltan las env vars SMTP_* el
  endpoint devuelve 200 sin enviar (no rompe la UX en dev).
  Credenciales configuradas en Coolify como **Runtime** (no Build) +
  rebuild → verificado end-to-end en producción.
- **Fix DX `allowedDevOrigins`**. Sin esta opción en `next.config.ts`,
  Next dev rechazaba con 403 los assets y el HMR cuando el navegador
  resolvía el host como `127.0.0.1` en lugar de `localhost`. Síntoma:
  hover muerto en el mega-menú "Plataforma" pero solo desde la IP.

**Lo descubierto**

- Card de ebook con `aspect-square` + `object-contain` muestra mejor
  los mockups 3D del tablet (padding alrededor del bisel) que cualquier
  ratio horizontal con `cover`.
- El Dockerfile separa explícitamente Build args (`NEXT_PUBLIC_*` y
  `APP_ENV`) de Runtime — Coolify lo respeta y hay que marcar bien cada
  env var. Las nuevas `SMTP_*` y `NEWSLETTER_TO` son Runtime.
- En la red local de Raiko (firewall corporativo / ISP) están
  bloqueados outbound 587 y 465 — testear SMTP en localhost no aporta
  nada, mejor probar directo en deploy.
- Chrome en la máquina de Raiko autocompleta `localhost` a
  `www.localhost.com` → usar siempre `127.0.0.1` para previews.

**Parqueado / próxima sesión**

- **Rotar credenciales SMTP de AWS SES**: las usadas en producción
  fueron pegadas en el chat — crear nuevo SES SMTP user en IAM y
  sustituir `SMTP_USER`/`SMTP_PASS` en Coolify. 3 minutos.
- **Descripciones de los 4 ebooks** en `lib/content/recursos.ts` siguen
  con marcador `TODO copy` — inferidas del título, pendientes de pulir
  con marketing.
- **2 PDFs huérfanos en disco** sin cablear:
  `ebook-email-marketing.pdf` (1.3 MB) y `ebook-guia-incrementar-vd.pdf`
  (1.4 MB). Decidir si entran como ebooks 5 y 6 o se eliminan del repo.
- **Debug log temporal** del `messageId` en `/api/newsletter`
  (`console.log` del envío exitoso) — útil para la primera verificación
  en deploy, quitable cuando el feature lleve estable un rato.

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
