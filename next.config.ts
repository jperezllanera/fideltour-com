import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // El blog vivo en fideltour.com usa URLs con slash final
  // (p. ej. /blog/marketing/automatizaciones-esenciales-para-hoteles/).
  // Activamos trailingSlash global para no romper backlinks ni SEO tras migrar.
  trailingSlash: true,

  async redirects() {
    return [
      // El sitio original tenía 57 URLs bajo /en/blog/ que ya no existen
      // aquí (i18n es TODO senior). Mandamos todo el espacio en inglés al
      // blog en castellano con 301 para conservar el link-juice y no
      // devolver 404 a backlinks externos.
      { source: "/en/blog", destination: "/blog/", permanent: true },
      { source: "/en/blog/:rest*", destination: "/blog/", permanent: true },

      // El WordPress original tenía categorías que internamente terminaban
      // en `-en` (marketing-en, fideltour-en, etc.). Las mandamos a su
      // homóloga castellana.
      { source: "/blog/marketing-en/:slug*", destination: "/blog/marketing/", permanent: true },
      { source: "/blog/fideltour-en/:slug*", destination: "/blog/fideltour/", permanent: true },
      { source: "/blog/fidelizacion-en/:slug*", destination: "/blog/fidelizacion/", permanent: true },
      { source: "/blog/fideltalks-en/:slug*", destination: "/blog/fideltalks/", permanent: true },
      { source: "/blog/crm-en/:slug*", destination: "/blog/crm/", permanent: true },
      { source: "/blog/eventos-en/:slug*", destination: "/blog/eventos/", permanent: true },
      { source: "/blog/entrevistas-en/:slug*", destination: "/blog/fideltalks/", permanent: true },
    ];
  },
};

export default nextConfig;
