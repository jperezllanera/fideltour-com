/**
 * Contenido editorial de la propia web (cards destacadas, banners
 * promocionales, mensajes globales). Aquí solo viven cosas que un
 * editor de marketing tocaría — no estructura de navegación (eso
 * vive en `nav.ts`) ni datos de producto (eso vive en
 * `module-landings/`).
 *
 * Cuando el CMS esté en marcha (Sprint 4-5), estos exports se
 * sustituyen por queries a Payload `siteSettings` global.
 */

export type PlatformFeatured = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  /**
   * ID del vídeo de YouTube embebido en el mega-menú. Se usa el
   * dominio youtube-nocookie.com en el iframe para no setear cookies
   * de tracking hasta que el usuario reproduzca.
   */
  youtubeId: string;
};

export const platformFeatured: PlatformFeatured = {
  eyebrow: "CDP para hoteles",
  title: "Del CRM al CDP",
  description:
    "El hotelero que domina el dato, domina la venta directa.",
  ctaLabel: "Ver plataforma",
  ctaHref: "/cdp-para-hoteles/",
  youtubeId: "2nEg-0mQVyc",
};
