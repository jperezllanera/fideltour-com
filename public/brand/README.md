# /public/brand

Coloca aquí los archivos definitivos del logo de Fideltour:

- `logo.svg` — wordmark horizontal (recomendado para header).
- `isotipo.svg` — símbolo aislado (para favicons, app icons, social).
- `logo-dark.svg` — variante para fondos oscuros si aplica.

Mientras estos archivos no existan, `components/brand/logo.tsx` renderiza un
wordmark de texto "fideltour" con la tipografía Plus Jakarta Sans.

> TODO senior: cuando lleguen los SVG reales, sustituir el componente y
> añadir los favicons en `app/icon.tsx` / `app/apple-icon.tsx`.
