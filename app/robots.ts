import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/seo/site";

/*
 * Robots.txt — Next 16 lo sirve en /robots.txt a partir de este archivo.
 *
 * Estrategia:
 *   - En Vercel previews (VERCEL_ENV !== 'production') bloqueamos todos los
 *     bots para evitar indexar URLs efímeras de pull request.
 *   - En producción permitimos todo el contenido público y referenciamos el
 *     sitemap canónico.
 *   - No usamos crawl-delay (Google lo ignora) ni bloqueamos /api o /_next:
 *     Google ya los descarta solo y bloquearlos puede ocultar recursos
 *     necesarios para el render-as-Googlebot.
 */

export default function robots(): MetadataRoute.Robots {
  const isProduction =
    process.env.VERCEL_ENV === "production" ||
    (!process.env.VERCEL_ENV && process.env.NODE_ENV === "production");

  if (!isProduction) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Endpoints técnicos y rutas internas que no aportan valor SEO.
        disallow: ["/api/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
