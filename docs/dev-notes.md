# Dev notes · fideltour-com

Gotchas de entorno y cicatrices acumuladas. **No son decisiones**
(eso vive en [`adr/`](adr/)) ni **reglas** (eso vive en
[`../CLAUDE.md`](../CLAUDE.md)). Son lo que rompe en local y cómo se
arregla. Añade aquí cualquier hora que pierdas debugueando algo que
podías haber evitado.

## Arranque del dev server

### `NEXT_PUBLIC_SITE_URL` es obligatorio

Sin este env var, `lib/env.ts:20` lanza `Invalid environment variables`
y **toda página devuelve 500**, incluido el layout raíz. No hay
`.env.example` en el repo, así que la primera vez tienes que crear
`.env.local` a mano:

```bash
echo "NEXT_PUBLIC_SITE_URL=http://localhost:3000" > .env.local
```

`.env.local` está en `.gitignore`, no se commitea. Si arrancas con
`PORT=3010`, actualiza el valor en `.env.local` también o déjalo en
`localhost:3000` — el contenido del string no tiene que coincidir con
el puerto real, basta con que exista.

### Colisión IPv4 / IPv6 en :3000 con HealthScore

Si trabajas también en `Desktop\CockPit\HealthScore\frontend`, su dev
server suele estar levantado en :3000 IPv4 (0.0.0.0). Levantar
Fideltour después lo ata a :3000 IPv6 (`::`). Ambos coexisten porque
son sockets de familias distintas — pero **tu navegador resuelve
`localhost` por IPv4** y termina hablando con HealthScore mientras tu
curl en MSYS bash habla con Fideltour por IPv6. Síntoma típico: "veo
otro proyecto en localhost:3000 aunque levanté Fideltour".

Fix: arranca Fideltour en otro puerto:

```bash
PORT=3010 npm run dev
```

Y visita `http://localhost:3010/`. HealthScore queda intacto en :3000.

### Turbopack cachea CSS agresivamente en `.next/`

Tras editar `app/globals.css`, a veces el dev server reporta `Compiled
in Xms` pero **sigue sirviendo la versión vieja del CSS**. Verificas
abriendo el bundle:

```bash
CSS_URL=$(curl -s "http://localhost:3010/" | grep -oE '/_next/static/[^"]*\.css' | head -1)
curl -s "http://localhost:3010${CSS_URL}" | awk '/<la-clase-que-editaste> \{/,/\}/'
```

Si los valores son los viejos, mata el dev server, borra `.next/` y
reinicia:

```bash
# en otra terminal: TaskStop o Ctrl+C el dev server
rm -rf .next
PORT=3010 npm run dev
```

Esta no la he visto reproducir con cambios a TSX, solo con CSS.

## Mega-menú (Base UI navigation-menu)

### `closeOnClick` es opt-in

Default `false`. Sin esa prop, click en un link del menú navega
pero deja el dropdown abierto. Síntoma: "el menú no se cierra al
hacer click". Aplicado en `components/layout/site-header.tsx` a
`NavigationMenuLink` del `FeaturedCard` y de cada item del menú.

```tsx
<NavigationMenuLink closeOnClick render={<Link href={…}>…</Link>} />
```

### Anatomía obligada (Base UI)

`Positioner` + `Popup` + `Viewport` van en ese orden y no se pueden
anidar mal. Si tocas `components/ui/navigation-menu.tsx`, lee primero
el comentario de cabecera del archivo. Base UI quiebra silenciosamente
si los anidas en otro orden.

## Imágenes

### Mockups de las landings de módulo viven por convención

`ModuleHero` lee `/brand/platform/{slug}.webp` automáticamente. Si
añades una landing nueva:

1. Mete el PNG o JPG en `public/brand/platform/` con nombre exacto
   `{slug}.webp` (si llega como PNG, el script `convert-images.mjs` se
   encarga).
2. Corre `node scripts/convert-images.mjs --delete` para que lo pase a
   WebP en su familia (`platform`, budget 200KB, q=80).
3. La landing lo verá automáticamente — no toques `module-hero.tsx`.

### Familia `platform` en convert-images.mjs

Reconocida por `pathMatch: /[\\/]platform[\\/]/` (no por prefijo de
basename como las otras familias). Si abres el script y te
preguntás "¿por qué esta familia no usa `match`?", esto es por qué:
los mockups conservan el slug de la landing como nombre, que no
tiene prefijo común.

### Audit pre-commit

`.husky/pre-commit` corre `npm run check-images`. Si una imagen
excede el budget de su familia, el commit se bloquea. Soluciones por
orden de menor a mayor cambio:

1. Re-encodear a calidad menor.
2. Redimensionar (ver receta en `.claude/skills/seo-assets/SKILL.md`).
3. Re-categorizar (renombrar para caer en una familia con budget mayor).

## Formularios y endpoints

**Todo lo que envía datos está pendiente.** Hoy casi todos los formularios
(`#demo`, `#contacto`, hero CTAs) son visuales — redirigen a
`/contacto` o son `<a>` decorativos. Cualquier integración real
(Zoho, HubSpot, custom backend) se marca como `TODO senior:` en el
JSX y se discute antes de implementar.

**Excepción cableada:** el form de newsletter del blog
([components/sections/blog-cta.tsx](../components/sections/blog-cta.tsx))
hace POST a [`/api/newsletter`](../app/api/newsletter/route.ts), que
reenvía la suscripción por SMTP a `marketing@fideltour.com` con
`nodemailer`. Ver sección siguiente para las env vars.

WhatsApp QR demo del slide 14 del dossier de Agoratech sigue
pendiente — no hay `wa.me` oficial cableado. Si vas a meterlo, abre
ticket con marketing primero.

### SMTP del endpoint `/api/newsletter`

El route handler lee estas env vars **server-side** (NO usar
`NEXT_PUBLIC_*` — exponer credenciales SMTP al cliente sería un agujero
de seguridad). Faltan todas en `.env.local` por defecto:

| Var             | Ejemplo                  | Descripción                                |
| --------------- | ------------------------ | ------------------------------------------ |
| `SMTP_HOST`     | `smtp.fideltour.com`     | Host SMTP del dominio                      |
| `SMTP_PORT`     | `587`                    | 587 STARTTLS recomendado; 465 TLS implícito |
| `SMTP_USER`     | `noreply@fideltour.com`  | Usuario de autenticación                   |
| `SMTP_PASS`     | `…`                      | Password o app-password                    |
| `SMTP_FROM`     | `noreply@fideltour.com`  | Dirección del "From:"                      |
| `NEWSLETTER_TO` | `marketing@fideltour.com`| Destinatario (default si se omite)         |

En **dev local**, si faltan las vars el endpoint no rompe: loggea un
warning (`[newsletter] SMTP env vars missing…`) y devuelve 200 OK. El
usuario ve "¡Suscrito!" pero el email no se manda. Suficiente para
desarrollar UI sin credenciales.

En **producción** (Vercel), pegar las vars en Project Settings →
Environment Variables, marcadas para Production (y Preview si quieres
que los previews también envíen).

**Vercel y SMTP outbound:** las funciones serverless de Vercel
permiten outbound en 587/465. El puerto 25 sí está bloqueado en muchos
proveedores — usa siempre 587 (STARTTLS) o 465 (TLS implícito).

**Anti-spam:** el route incluye honeypot (campo oculto `website`) y
rate limit in-memory (5 req / 10 min por IP). Si el form empieza a
recibir spam serio, valorar Cloudflare Turnstile o hCaptcha — la
decisión vive como `TODO senior` en
[`app/api/newsletter/route.ts`](../app/api/newsletter/route.ts).

## Brand-guard

`scripts/brand-guard.sh` corre pre-commit vía husky. Su tabla de
veredictos:

| Hit                                       | Severidad | Bloquea commit |
| ----------------------------------------- | --------- | -------------- |
| `CBP` o `Customer Business Platform`      | FAIL      | sí             |
| `(plataforma\|cdp\|categoría) agéntic[oa]` | FAIL      | sí             |
| Cualquier mención de `agéntico` (info)    | WARN      | no             |
| `CDP` fuera de categoría canónica         | WARN      | no             |
| Tipografía prohibida en font-family       | FAIL      | sí             |
| Tipografía prohibida en comentario        | WARN      | no             |

Las WARN se imprimen para revisión humana — son listas largas porque
mencionar "CDP" suelto es común en blog y SEO docs, y la mayoría son
correctas. No las arregles a ciegas.

## Versión del stack

Node 25.8.1, Next 16.2.6 (Turbopack), React 19, Tailwind v4.
Si algo se rompe tras un `npm install`, primero verifica que estos
no hayan saltado de major.
