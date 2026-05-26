import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output standalone para el Dockerfile multi-stage (deploy en Coolify):
  // genera .next/standalone con server.js + node_modules mínimos, lo que
  // produce una imagen de runtime pequeña. Mismo patrón que el otro proyecto.
  output: "standalone",

  // El blog vivo en fideltour.com usa URLs con slash final
  // (p. ej. /blog/marketing/automatizaciones-esenciales-para-hoteles/).
  // Activamos trailingSlash global para no romper backlinks ni SEO tras migrar.
  trailingSlash: true,

  // Permite acceder al dev server desde 127.0.0.1 además de localhost. Sin
  // esto, Next 15+ rechaza con 403 los assets (fonts) y el WebSocket HMR
  // cuando el origen del navegador no coincide con el hostname con el que
  // arrancó el server — rompe la hidratación de componentes client. Sólo
  // aplica en `next dev`, no afecta a producción.
  allowedDevOrigins: ["127.0.0.1", "localhost"],

  /*
   * Redirects 301 — Preservación SEO de la migración WP → Next.js.
   *
   * Orden importa: las reglas específicas DEBEN ir antes que los catch-all.
   * Bloques documentados en docs/seo/proposed-redirects.md.
   *
   * Fuente de las URLs:
   *   - sitemap.xml del WP (Yoast)
   *   - GSC Performance 12m (URLs con tráfico real)
   *   - GSC Coverage Drilldown (404 + Página con redirección)
   *
   * Pre-launch testing: ver docs/seo/proposed-redirects.md, sección "Riesgo".
   */
  async redirects() {
    return [
      // ============================================================
      // BLOQUE 1 — YA EXISTENTES (heredados de la primera versión)
      // ============================================================
      { source: "/en/blog", destination: "/blog/", permanent: true },
      { source: "/en/blog/:rest*", destination: "/blog/", permanent: true },
      { source: "/blog/marketing-en/:slug*", destination: "/blog/marketing/", permanent: true },
      { source: "/blog/fideltour-en/:slug*", destination: "/blog/fideltour/", permanent: true },
      { source: "/blog/fidelizacion-en/:slug*", destination: "/blog/fidelizacion/", permanent: true },
      { source: "/blog/fideltalks-en/:slug*", destination: "/blog/fideltalks/", permanent: true },
      { source: "/blog/crm-en/:slug*", destination: "/blog/crm/", permanent: true },
      { source: "/blog/eventos-en/:slug*", destination: "/blog/eventos/", permanent: true },
      { source: "/blog/entrevistas-en/:slug*", destination: "/blog/fideltalks/", permanent: true },

      // ============================================================
      // BLOQUE 2 — Categorías Yoast → formato Next.js
      // /blog/category/X/ → /blog/X/
      // ============================================================
      { source: "/blog/category/marketing/:rest*", destination: "/blog/marketing/", permanent: true },
      { source: "/blog/category/crm/:rest*", destination: "/blog/crm/", permanent: true },
      { source: "/blog/category/fidelizacion/:rest*", destination: "/blog/fidelizacion/", permanent: true },
      { source: "/blog/category/fideltour/:rest*", destination: "/blog/fideltour/", permanent: true },
      { source: "/blog/category/fideltalks/:rest*", destination: "/blog/fideltalks/", permanent: true },
      { source: "/blog/category/eventos/:rest*", destination: "/blog/eventos/", permanent: true },
      { source: "/blog/category/entrevistas/:rest*", destination: "/blog/fideltalks/", permanent: true },
      { source: "/blog/category/reviews/:rest*", destination: "/blog/", permanent: true },

      // ============================================================
      // BLOQUE 3 — Tags Yoast (Next.js no implementa pages de tag)
      // ============================================================
      { source: "/blog/tag/:slug*", destination: "/blog/", permanent: true },

      // ============================================================
      // BLOQUE 4 — Pages EN específicas → ES equivalentes
      // (antes del catch-all /en/:rest*)
      // ============================================================

      // Top tráfico (validadas con GSC Performance 12m)
      { source: "/en/whatsapp-for-hotels/", destination: "/whatsapp-para-hoteles/", permanent: true },
      { source: "/en/who-we-are/", destination: "/fideltour/", permanent: true },
      { source: "/en/privacy-policy/", destination: "/politica-de-privacidad/", permanent: true },
      { source: "/en/build-customer-loyalty/", destination: "/fidelizacion-hoteles/", permanent: true },
      { source: "/en/booking-engine-integration-for-hotels/", destination: "/integracion-motor-de-reservas-para-hoteles/", permanent: true },
      { source: "/en/fideltour-marketing-connect-with-your-customer/", destination: "/marketing-hoteles/", permanent: true },

      // Pages EN principales
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/", destination: "/", permanent: true },
      { source: "/en/home/", destination: "/", permanent: true },
      { source: "/en/cdp-for-hotels/", destination: "/cdp-para-hoteles/", permanent: true },
      { source: "/en/captive-portal-for-hotels/", destination: "/integracion-portal-cautivo-para-hoteles/", permanent: true },
      { source: "/en/marketplace/", destination: "/marketplace/", permanent: true },
      { source: "/en/partners/", destination: "/partners/", permanent: true },
      { source: "/en/fideltour/", destination: "/fideltour/", permanent: true },
      { source: "/en/fideltour-digital-kit/", destination: "/kit-digital-fideltour/", permanent: true },
      { source: "/en/free-audit/", destination: "/auditoria-gratuita-hotel/", permanent: true },
      { source: "/en/our-customers/", destination: "/clientes/", permanent: true },

      // Casos de éxito EN
      { source: "/en/success-stories/", destination: "/casos-de-exito/", permanent: true },
      { source: "/en/success-stories/vacation-hotel/", destination: "/casos-de-exito/hotel-vacacional/", permanent: true },
      { source: "/en/success-stories/central-urban-hotel/", destination: "/casos-de-exito/hotel-urbano-centrico/", permanent: true },
      { source: "/en/success-stories/urban-hotel/", destination: "/casos-de-exito/hotel-urbano/", permanent: true },
      { source: "/en/casos-de-exito/hotel-urbano-centrico/", destination: "/casos-de-exito/hotel-urbano-centrico/", permanent: true },

      // Recursos EN
      { source: "/en/resources/hotel-crm-training-videos/", destination: "/recursos/nuestros-videos-crm-hotelero/", permanent: true },
      { source: "/en/resources/workshops/", destination: "/recursos/", permanent: true },
      { source: "/en/resources/webinars/", destination: "/recursos/", permanent: true },
      { source: "/en/resources/cursos/", destination: "/recursos/", permanent: true },

      // Legales EN
      { source: "/en/cookies-policy/", destination: "/politica-de-cookies/", permanent: true },
      { source: "/en/terms-and-conditions/", destination: "/terminos-y-condiciones/", permanent: true },

      // Landings partner EN (Keytel)
      { source: "/en/keytel-en/", destination: "/cdp-para-hoteles/", permanent: true },
      { source: "/en/keytel-it/", destination: "/cdp-para-hoteles/", permanent: true },
      { source: "/en/keytel-fr/", destination: "/cdp-para-hoteles/", permanent: true },
      { source: "/en/keytel-pt/", destination: "/cdp-para-hoteles/", permanent: true },
      { source: "/en/bookassist-lp-es/", destination: "/cdp-para-hoteles/", permanent: true },

      // EN cuentas/login
      { source: "/en/perfil/", destination: "/contacto/", permanent: true },
      { source: "/en/registration/", destination: "/contacto/", permanent: true },
      { source: "/en/tht/", destination: "/", permanent: true },

      // Catch-all EN — cualquier otra URL /en/X
      { source: "/en/:rest*", destination: "/", permanent: true },

      // ============================================================
      // BLOQUE 5 — Pages PT-PT → ES equivalentes
      // ============================================================
      { source: "/pt-pt/redes-sociais-para-hoteis/", destination: "/redes-sociales-hoteles/", permanent: true },
      { source: "/pt-pt/mercado/", destination: "/marketplace/", permanent: true },
      { source: "/pt-pt/centralize-os-seus-dados-2/", destination: "/cdp-para-hoteles/", permanent: true },
      { source: "/pt-pt/academia-fideltour-2/", destination: "/recursos/", permanent: true },
      { source: "/pt-pt/inicio-14/", destination: "/", permanent: true },
      { source: "/pt-pt/inacio/", destination: "/", permanent: true },
      { source: "/pt-pt/keytel-lp-:rest", destination: "/cdp-para-hoteles/", permanent: true },

      // Catch-all PT-PT
      { source: "/pt-pt/:rest*", destination: "/", permanent: true },

      // ============================================================
      // BLOQUE 6 — URLs sueltas WP sin equivalente
      // ============================================================
      { source: "/perfil/", destination: "/contacto/", permanent: true },
      { source: "/registration/", destination: "/contacto/", permanent: true },
      { source: "/registro/", destination: "/contacto/", permanent: true },
      { source: "/tht/", destination: "/", permanent: true },

      // ============================================================
      // BLOQUE 7 — URLs descubiertas en GSC con tráfico real
      // ============================================================

      // /equipo/ — 82 clicks/12m, posición 2.3
      { source: "/equipo/", destination: "/fideltour/", permanent: true },

      // /pricing/ — 60 clicks/12m (sin equivalente público en Next)
      { source: "/pricing/", destination: "/contacto/", permanent: true },

      // /recursos/ebooks/ — 28 clicks/12m
      { source: "/recursos/ebooks/", destination: "/recursos/", permanent: true },

      // /keytel/ — 21 clicks/12m (landing partner Keytel)
      { source: "/keytel/", destination: "/cdp-para-hoteles/", permanent: true },

      // /conecta-con-tus-huespedes/ — 13 clicks/12m
      { source: "/conecta-con-tus-huespedes/", destination: "/cdp-para-hoteles/", permanent: true },

      // /home/ — 11 clicks/12m (URL legacy de home)
      { source: "/home/", destination: "/", permanent: true },

      // ============================================================
      // BLOQUE 8 — URLs 404 confirmadas por GSC Coverage Drilldown
      // ============================================================
      { source: "/blogs/", destination: "/blog/", permanent: true },
      { source: "/contrato-de-encargo-de-tratamiento", destination: "/politica-de-privacidad/", permanent: true },
      { source: "/contrato-de-encargo-de-tratamiento/", destination: "/politica-de-privacidad/", permanent: true },
      { source: "/fideltour-es-infinito", destination: "/fideltour/", permanent: true },
      { source: "/fideltour-es-infinito/", destination: "/fideltour/", permanent: true },
      { source: "/sobre-nosotros", destination: "/fideltour/", permanent: true },
      { source: "/sobre-nosotros/", destination: "/fideltour/", permanent: true },
      { source: "/auditoria-fidelizacao/", destination: "/auditoria-gratuita-hotel/", permanent: true },
      { source: "/keytel-fr/", destination: "/cdp-para-hoteles/", permanent: true },

      // Locale paths antiguos del WP que nunca funcionaron
      { source: "/en-us/:rest*", destination: "/", permanent: true },
      { source: "/es-es/crm-hoteles", destination: "/crm-hoteles/", permanent: true },
      { source: "/es-es/:rest*", destination: "/", permanent: true },
      { source: "/es/:rest*", destination: "/", permanent: true },

      // ============================================================
      // BLOQUE 9 — URLs del drill-down "Página con redirección"
      // ============================================================

      // /inicio/ — landing home legacy WP
      { source: "/inicio/", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
