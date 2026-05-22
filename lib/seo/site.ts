/**
 * Constantes SEO centrales del sitio.
 *
 * Cualquier metadata, sitemap, robots, OG image o JSON-LD debe consumir
 * `siteConfig` para que la URL canónica, el nombre, la descripción y los
 * perfiles sociales queden alineados en un único punto de la verdad.
 *
 * TODO senior: cuando el dominio se confirme con www. o sin www., y cuando
 * los perfiles sociales reales estén disponibles, sustituir los valores
 * marcados con `// TODO senior:`.
 */

export const siteConfig = {
  /** URL canónica de producción (sin slash final). */
  url: "https://fideltour.com",

  /** Nombre legal de la empresa (titular del dominio). */
  legalName: "Fideltour SL",

  /** Nombre comercial / marca. */
  name: "Fideltour",

  /** Categoría literal de marca — inviolable, ver CLAUDE.md. */
  category: "CDP para hoteles",

  /** Descripción por defecto. ≤ 160 caracteres para SERP. */
  description:
    "Fideltour es la CDP para hoteles que unifica datos, reservas y comunicaciones para que los hoteleros dominen su venta directa y reduzcan la dependencia de OTAs.",

  /** Locale por defecto (BCP-47). Solo ES hasta que llegue i18n real. */
  locale: "es_ES",

  /** Códigos de lenguaje servidos. */
  languages: ["es-ES"] as const,

  /** Idioma raíz del documento. */
  defaultLanguage: "es",

  /** Wordmark Fideltour (WebP) usado por JSON-LD Organization. */
  logoPath: "/brand/fideltour-logo.webp",

  /** Imagen OpenGraph por defecto (resuelta dinámicamente por opengraph-image.tsx). */
  ogImagePath: "/opengraph-image",

  /** Palabras clave principales (keywords semánticas, no spam). */
  keywords: [
    "CDP para hoteles",
    "CDP hotelera",
    "plataforma de datos para hoteles",
    "venta directa hotel",
    "fidelización hotelera",
    "marketing hotelero",
    "CRM hotelero",
    "automatización hotelera",
    "datos de huésped",
    "dependencia OTAs",
  ],

  /** Perfiles sociales — los publicados en fideltour.com. Usado por sameAs
   *  de Organization JSON-LD. */
  social: {
    linkedin: "https://www.linkedin.com/company/fideltour/",
    youtube: "https://www.youtube.com/@fideltour",
    instagram: "https://www.instagram.com/fideltour/",
    spotify: "https://open.spotify.com/show/0Y6gmQJ829f2pVq0sjv4En",
  } as const,

  /** Email de contacto público. */
  contactEmail: "hola@fideltour.com",
} as const;

/**
 * Construye una URL absoluta a partir de un path relativo.
 * - Garantiza que la URL final no duplica slashes ni los pierde.
 * - Respeta el `trailingSlash: true` global del proyecto: si el path no
 *   apunta a un archivo (no contiene `.`) se le añade `/` al final.
 */
export function absoluteUrl(path: string): string {
  if (!path || path === "/") return `${siteConfig.url}/`;
  const clean = path.startsWith("/") ? path : `/${path}`;
  const hasExtension = /\.[a-z0-9]+$/i.test(clean);
  const withTrailing = hasExtension || clean.endsWith("/") ? clean : `${clean}/`;
  return `${siteConfig.url}${withTrailing}`;
}
