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
- **next/font/google** para tipografías (Plus Jakarta Sans + Instrument Mono).
- **motion** (sucesor oficial de framer-motion) para animaciones React puntuales.
- **lucide-react** para iconografía.
- Deploy objetivo: **Vercel**.
- Mobile-first y accesible (HTML semántico, foco visible, contraste AA).

## Reglas de marca (inviolables)

1. La categoría literal es **"CDP para hoteles"** o **"CDP del sector hotelero"**.
2. **Prohibido** usar "CBP", "Customer Business Platform" o acrónimos inventados.
3. **"Agéntico"** solo aparece como atributo táctico puntual, **nunca** como
   identidad ni categoría.
4. La narrativa central es **"Del CRM al CDP"** y la idea **"el hotelero que
   domina el dato, domina la venta directa"** (menos dependencia de OTAs).
5. Antes de hacer commit de copy nuevo, comprueba:

   ```bash
   grep -r "CBP\|Customer Business Platform" . --exclude-dir=node_modules --exclude-dir=.next
   ```

   Debe devolver vacío.

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

### Tipografía

- **Nunito** → `font-sans` (display + cuerpo). Es la sans corporativa
  de Fideltour (matches el `font-family: "Nunito", sans-serif` de la web
  actual). Self-hosteada automáticamente por `next/font/google` en
  `app/fonts.ts` con weights 400/500/600/700/800.
- **Instrument Mono** → `font-mono` (etiquetas, métricas, datos del bento).
  Cargada vía `<link>` a Google Fonts (no está en el dataset embebido de
  `next/font/google` en Next 16.2.6). Cuando haya tiempo, también
  self-hostear con `next/font/local`.
- **Prohibido** Inter, Roboto, Arial, Plus Jakarta, General Sans o system
  fonts en producción. Si se necesita una nueva familia, pasar por revisión
  senior.

### Patrón Bento

- Definido en `components/sections/bento-modules.tsx` con data en
  `lib/content/modules.ts`.
- Grid responsivo (1 col móvil → 6 col tablet → 12 col desktop) con celdas
  asimétricas vía `span`.
- Reveal escalonado con CSS puro (`.bento-cell` + `--i` por celda).
- Cada celda lleva etiqueta superior en `font-mono`, título sans, micro-copy
  y métrica opcional.

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
  layout.tsx           # fonts globales, SiteHeader + SiteFooter
  page.tsx             # home compuesta de secciones
  globals.css          # tokens, mesh, grain, bento utilities
components/
  ui/                  # shadcn/ui (auto-generado, no editar a mano sin motivo)
  brand/logo.tsx       # wordmark placeholder hasta tener SVG real
  layout/
    site-header.tsx    # sticky, mega-menú Plataforma, sheet móvil
    site-footer.tsx
    locale-toggle.tsx  # UI ES/EN sin enrutado (TODO i18n)
  sections/            # cada bloque de la home es un componente aislado
lib/
  utils.ts             # cn() de shadcn
  content/
    nav.ts             # mega-menú + top links
    modules.ts         # 12 módulos del bento
public/
  brand/               # logos reales (pendiente)
```

## Componentes shadcn disponibles

`button`, `card`, `navigation-menu`, `accordion`, `sheet`, `badge`.

Para añadir más:

```bash
npx shadcn@latest add <component>
```

## Comandos rápidos

```bash
npm run dev      # dev server en :3000
npm run build    # production build
npm run lint     # eslint
```

## Cambios futuros que requieren revisión senior

- Internacionalización real (next-intl, paraglide…).
- Cualquier envío de formulario o llamada a API externa.
- Cambio de paleta cuando llegue el logo definitivo.
- Adición de dark mode (no es prioridad).
- CMS / fuente de contenido para blog, ebooks, casos.
