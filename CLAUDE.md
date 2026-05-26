# CLAUDE.md — Fideltour web pública

Este archivo es contexto persistente para futuros agentes que trabajen en este
repositorio. Léelo antes de tocar código.

> Nota: hay también un `AGENTS.md` generado por Next.js 16 que recuerda que
> esta versión introduce breaking changes — consulta los docs incluidos en
> `node_modules/next/dist/docs/` antes de usar APIs que no recuerdes con
> certeza.

## Stack

- **Next.js 16** (App Router) + **TypeScript** estricto.
- **React 19**.
- **Tailwind CSS v4** (CSS-first config: tokens en `app/globals.css` con `@theme`, sin `tailwind.config.ts`).
- **shadcn/ui** (estilo `base-nova`, basado en **Base UI** — no Radix). Componentes en `components/ui/`.
- **next/font/google** para tipografía (Nunito, única familia).
- **motion** (sucesor oficial de framer-motion) para animaciones React puntuales.
- **lucide-react** para iconografía.
- Deploy objetivo: **Vercel**.
- Mobile-first y accesible (HTML semántico, foco visible, contraste AA).

## Reglas de marca (inviolables)

1. La categoría literal es **"CDP para hoteles"** o **"CDP del sector hotelero"**.
2. **Prohibido** usar "CBP", "Customer Business Platform" o acrónimos inventados.
3. **"Agéntico"** solo aparece como atributo táctico puntual, **nunca** como
   identidad ni categoría. Permitido: `agente de venta`, `agente de contexto`,
   `era agéntica`, `ola agéntica`, `reserva agéntica`. Prohibido: `CDP
   agéntico`, `plataforma agéntica`, `Fideltour es agéntico`. Regla bisturí:
   si la frase puede reescribirse sin "agéntico" sin perder sentido,
   "agéntico" sobra.
4. **"Fideltour ONE"** es el nombre del **plan/producto** que une los 12
   módulos del CDP en una sola tarifa. Convive con "Fideltour CDP". Se puede
   usar como marca de producto en hero, mega-menú y secciones de módulos.
   No sustituye a "CDP para hoteles" como categoría — la decisión vive en
   [`docs/adr/0004-fideltour-one-y-cdp-pillar.md`](docs/adr/0004-fideltour-one-y-cdp-pillar.md).
5. La narrativa central es **"Del CRM al CDP"** y la idea **"el hotelero que
   domina el dato, domina la venta directa"** (menos dependencia de OTAs).
6. Antes de hacer commit de copy nuevo, ejecuta `npm run brand-guard` —
   bloquea términos prohibidos y "agéntico como categoría", y emite WARN
   sobre menciones a revisar manualmente.

## Sistema de diseño — "Aurora Bento"

- **Modo claro por defecto** con neutros cálidos (stone-like) y mucho aire.
- El **color de marca es ACENTO**, no fondo dominante: úsalo en CTAs (`bg-primary`), bordes activos, métricas y detalles del bento.
- **Prohibido**: degradados morados genéricos, color de marca como fondo de
  secciones grandes, dark mode prematuro.
- **Profundidad sutil**: gradient mesh en `body::before` y grain SVG en
  `body::after`, ambos definidos en `app/globals.css`.
- **Radios generosos**: `--radius: 0.875rem` (≈ 14px), escalado en `xl`/`2xl`.
- **Sombras suaves**: `var(--shadow-soft)`, `var(--shadow-bento)`,
  `var(--shadow-elevated)`.
- **Transiciones**: 200–300ms con `cubic-bezier(.22,1,.36,1)`.

### Tokens

Todos en `app/globals.css`:

- `--brand-primary` / `--brand-primary-foreground` / `--brand-secondary`
  (provisional, **TODO** sustituir con HEX/OKLCH del logo real).
- Escala `--neutral-50` … `--neutral-900` cálida.
- Variables semánticas shadcn (`--primary`, `--muted`, etc.) mapeadas a las
  anteriores.
- `--brand-gradient` (linear-gradient 135° azul cobalto → cian).

**Gradientes como clases hand-written, no utilities Tailwind.** Tailwind v4
no genera utilities `bg-*` desde tokens cuyo valor es una función
`linear-gradient(...)`. Por eso `.bg-hero-gradient` y `.bg-brand-gradient`
están definidas a mano en `globals.css` (dentro de `@layer utilities`).
Si añades un gradiente token nuevo, replica ese patrón — no esperes que
Tailwind te genere la utility.

### Tipografía

- **Una sola familia: Nunito.** Display, cuerpo, etiquetas, métricas,
  todo. La jerarquía se construye con **peso**, no con familias
  distintas. Self-hosteada por `next/font/google` en `app/fonts.ts` con
  weights 400/500/600/700/800.
- **Pesos por uso**:
  - Titulares y H1-H4 → ya vienen en `font-bold` (700) desde el `@layer
    base` de `globals.css`. No añadirlo en el JSX.
  - Subtítulos / labels destacadas → `font-semibold` (600).
  - Cuerpo, párrafos → peso normal heredado (400).
  - Eyebrow → usar la clase `.text-eyebrow` (incluye peso, tamaño y
    tracking). NO componer `text-[11px] uppercase tracking-wider` a mano.
- **Instrument Mono retirado.** La variable `--font-mono` cae a Nunito
  por seguridad, y la utilidad `font-mono` no debe usarse en código nuevo.
- **Prohibido** Inter, Roboto, Arial, Plus Jakarta, General Sans,
  Instrument Mono o cualquier system font en producción. Si se necesita
  una nueva familia, pasar por revisión senior.

### Markup hygiene — todo el estilo en CSS, nada en el JSX

Regla operativa de oro: **el JSX define semántica y composición; el estilo
visual vive en `app/globals.css`.** Si necesitas un tamaño, una altura de
línea, un peso o un color que no existe como utility/token, lo añades a
`globals.css` (`@layer base`, `@layer components` o `@theme`) y lo usas
por nombre desde el JSX. No al revés.

**Prohibido** en cualquier componente fuera de `components/ui/`:

- `style={{ color, backgroundColor, fontSize, fontWeight, margin, padding,
  display, visibility, ... }}` con valor literal. Excepciones:
  - `style={{ ["--i" as never]: i }}` — paso de variable CSS calculada en
    runtime (índice de animación). OK.
  - `style={{ height: \`${x}px\` }}` u otra dimensión calculada por React
    state. OK, acompañar con comentario.
- Arbitrary Tailwind values: `text-[11px]`, `leading-[1.05]`, `font-[600]`,
  `tracking-[-0.02em]`, etc. Si lo necesitas, añade un token o utility a
  `globals.css` y úsalo por nombre (`.text-eyebrow`, `.h-cta`, etc.).
- `<div>` o `<span>` con `text-3xl font-bold` (o más) imitando un heading.
  Usa `<h1>`/`<h2>`/`<h3>` reales. Para tamaños fuera de la escala base
  usa los modifiers `.h-mega` y `.h-cta`.
- Repetir clases que ya están en `@layer base` para headings
  (`font-sans font-bold tracking-tight text-brand-navy`). El JSX debe
  quedar `<h2>` o `<h2 className="text-white">` cuando va sobre fondo
  oscuro.

**Tokens de tipografía disponibles** (todos en `globals.css`):

| Token              | Uso                                              |
| ------------------ | ------------------------------------------------ |
| base `h1`          | Hero por defecto (36 → 64 px, clamp)             |
| base `h2`          | Sección por defecto (30 → 48 px)                 |
| base `h3`          | Sub-sección (20 → 26 px)                         |
| base `h4`          | 18 px                                            |
| `.h-mega`          | Hero gigante tipo "Marketplace" (48 → 80 px)     |
| `.h-cta`           | CTAs grandes (32 → 56 px)                        |
| `.text-eyebrow`    | Etiqueta uppercase 11 px que precede un heading  |
| `.text-eyebrow-sm` | Variante 10 px                                   |
| `.text-2xs`        | Microcopy 11 px no-uppercase (métricas, códigos) |
| `.text-body-sm`    | Cuerpo 13 px (footer)                            |
| `.text-body-md`    | Cuerpo 15 px (legales)                           |

**Antes de añadir un valor arbitrario**, pregúntate: ¿esto debe ser un
token? Si la respuesta es sí (probable si lo usarías más de una vez),
añádelo a `globals.css` y úsalo por nombre. Si la respuesta es no (un
ajuste único en un solo componente), reconsidera por qué este componente
necesita salirse del sistema antes de añadir la excepción.

Verificación rápida antes de commit:

```bash
grep -rnE "text-\[|leading-\[|font-\[|tracking-\[" \
  --include="*.tsx" --include="*.jsx" \
  --exclude-dir=node_modules --exclude-dir=.next \
  app/ components/ | grep -v "components/ui/"
```

Debe devolver vacío. La skill `/design-tokens-check` audita esto y los
hooks `validate-markup.sh` y `validate-filename.sh` lo bloquean al
escribir/editar.

### Patrón Bento

- Definido en `components/sections/bento-modules.tsx` con data en
  `lib/content/modules.ts`.
- Grid responsivo (1 col móvil → 6 col tablet → 12 col desktop) con celdas
  asimétricas vía `span`.
- Reveal escalonado con CSS puro (`.bento-cell` + `--i` por celda).
- Cada celda lleva etiqueta superior tipo eyebrow (`text-[11px]
  uppercase tracking-wider`), título en peso bold, micro-copy y métrica
  opcional. Todo en Nunito.

## Regla operativa senior

- El frontend se desarrolla con **total libertad**.
- **Cualquier** endpoint, formulario con envío real, integración de datos o
  conexión a servicios externos se marca como `TODO senior:` en el código y
  **se revisa antes de implementar**. No improvises capa de datos.
- Los formularios actuales (`#demo`, `#contacto`, etc.) son **placeholders
  visuales sin lógica**.
- No instalar prisma/tRPC/auth providers/etc. sin acuerdo previo.

## Estructura del proyecto

```
app/
  layout.tsx                          # fonts globales, SiteHeader + SiteFooter
  page.tsx                            # home compuesta de secciones
  globals.css                         # tokens, mesh, grain, bento utilities
  cdp-para-hoteles/page.tsx           # pillar de categoría (11 secciones, dossier-driven)
  {slug-de-modulo}/page.tsx           # 22 landings de módulo (usan ModuleLandingPage)
  integracion-portal-cautivo-…/       # EXCEPCIÓN: hero bespoke, no usa ModuleLandingPage
components/
  ui/                                 # shadcn/ui (auto-generado, no editar a mano sin motivo)
  brand/logo.tsx                      # wordmark placeholder hasta tener SVG real
  layout/
    site-header.tsx                   # sticky, mega-menú Plataforma, sheet móvil
    site-footer.tsx
    locale-toggle.tsx                 # UI ES/EN sin enrutado (TODO i18n)
  sections/                           # cada bloque de página es un componente aislado
    cdp-*.tsx                         # secciones de /cdp-para-hoteles/
    portal-cautivo-*.tsx              # secciones bespoke de portal-cautivo
    module-landing/                   # plantilla compartida de las 22 landings de módulo
      module-landing-page.tsx         #   orquestador
      module-hero.tsx                 #   hero con mockup convencional
lib/
  utils.ts                            # cn() de shadcn
  content/
    nav.ts                            # mega-menú + top links
    modules.ts                        # 12 módulos del bento (home)
    cdp.ts                            # datos de /cdp-para-hoteles/
    module-landings/                  # datos de las 22 landings de módulo
    site.ts                           # FeaturedCard del mega-menú, banners globales
public/
  brand/                              # logos, casos, sellos, awards
    platform/                         # mockups de las landings de módulo (1 por slug)
```

### Convención `ModuleHero` ↔ mockup

`components/sections/module-landing/module-hero.tsx` lee el mockup por
convención desde `public/brand/platform/{slug}.webp` — el slug es el
nombre del directorio bajo `app/`. Si añades una nueva landing de
módulo usando `ModuleLandingPage`, el hero buscará ese archivo
automáticamente. El contenedor envuelve la imagen en
`overflow-hidden rounded-2xl` — fotos 1:1 muestran las esquinas
redondeadas, mockups con fondo transparente (devices) no muestran
nada porque el recorte cae sobre el letterbox vacío.

### Excepciones a `ModuleLandingPage`

- **Portal cautivo** (`/integracion-portal-cautivo-para-hoteles/`) usa un
  hero bespoke (`PortalCautivoHeroSection`) y sus propias secciones
  (`PortalCautivoBeneficiosSection`, etc.). Sigue teniendo su mockup en
  `public/brand/platform/integracion-portal-cautivo-para-hoteles.webp`
  pero se referencia manualmente, no por convención.

### Mega-menú · `FeaturedCard`

El destino de la card destacada del mega-menú "Plataforma" (la del vídeo
con eyebrow "CDP para hoteles") se configura en
[`lib/content/site.ts`](lib/content/site.ts) → `platformFeatured.ctaHref`.
Apunta a `/cdp-para-hoteles/`, **no** a `/#plataforma`.

### Cierre del mega-menú al click (Base UI)

`NavigationMenuLink` de Base UI tiene una prop `closeOnClick` con default
`false`. Sin esa prop, hacer click en un link del mega-menú navega pero
deja el dropdown abierto. Todos los links del mega-menú deben llevar
`closeOnClick`. Si añades una entrada nueva, no la olvides.

## Componentes shadcn disponibles

`button`, `card`, `navigation-menu`, `accordion`, `sheet`, `badge`.

Para añadir más:

```bash
npx shadcn@latest add <component>
```

## Imágenes y assets

- **Formato default: WebP**. Cualquier imagen nueva entra como `.webp` salvo
  SVG (vectorial), excepciones puntuales documentadas en `PNG_WHITELIST` o
  `favicon.ico`. Prohibido `.jpeg`, `.gif`, `.bmp`, `.tiff`, `.heic`.
- **Nomenclatura SEO** kebab-case con prefijos por familia (`cliente-`,
  `caso-`, `sello-`, `hero-`, `bloque-`, `escalera-`, `marketplace/`). El
  hook `validate-filename.sh` bloquea los Write mal-nombrados.
- **Presupuestos de peso por familia**: ver tabla en
  `.claude/skills/seo-assets/SKILL.md`. Rango típico: logos ≤30 KB,
  fotos ≤80 KB, heros ≤200 KB.
- **Workflow al añadir una imagen**:

  ```bash
  # 1. Convertir cualquier .png/.jpg a .webp con calidad por familia
  node scripts/convert-images.mjs

  # 2. Tras validar el reporte, borrar los originales
  node scripts/convert-images.mjs --delete

  # 3. Verificar (es lo que corre pre-commit automáticamente)
  npm run check-images
  ```

  Si `check-images` falla, redimensiona o baja calidad hasta entrar en
  budget. `.husky/pre-commit` bloquea el commit si alguna imagen excede.

## Comandos rápidos

```bash
npm run dev            # dev server en :3000
npm run build          # production build
npm run lint           # eslint
npm run typecheck      # tsc --noEmit
npm run brand-guard    # auditoría de marca (copy, categoría, narrativa)
npm run check-images   # auditoría de imágenes (formato + budget por familia)
```

## Cambios futuros que requieren revisión senior

- Internacionalización real (next-intl, paraglide…).
- Cualquier envío de formulario o llamada a API externa.
- Cambio de paleta cuando llegue el logo definitivo.
- Adición de dark mode (no es prioridad).
- CMS / fuente de contenido para blog, ebooks, casos.

## Para ubicarte rápido al volver al proyecto

Si esta es tu primera sesión o llevas días fuera, lee en este orden:

1. **[`docs/journal.md`](docs/journal.md)** — memoria viva por sesión. Te
   dice **dónde estamos hoy** y qué quedó parqueado.
2. **[`docs/dev-notes.md`](docs/dev-notes.md)** — gotchas de entorno
   (NEXT_PUBLIC_SITE_URL, Turbopack cache, IPv4/IPv6 con HealthScore…).
   Lee antes de arrancar el dev server si algo va raro.
3. **[`docs/adr/`](docs/adr/)** — decisiones de arquitectura/marca con
   contexto. Lee si tocas algo grande y dudas por qué se hizo así.
4. **Este archivo (`CLAUDE.md`)** — reglas inviolables. Es el "no
   negociable".
