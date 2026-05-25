import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/seo/site";
import { env } from "@/lib/env";

/*
 * Robots.txt — Next 16 lo sirve en /robots.txt a partir de este archivo.
 *
 * Estrategia:
 *   - Solo el environment `production` (APP_ENV) permite indexación. En
 *     preview/staging bloqueamos todos los bots para no indexar URLs
 *     efímeras de los environments de Coolify. APP_ENV es independiente de
 *     NODE_ENV (ambos environments corren con NODE_ENV=production).
 *   - En producción permitimos todo el contenido público y referenciamos el
 *     sitemap canónico.
 *   - No usamos crawl-delay (Google lo ignora) ni bloqueamos /api o /_next:
 *     Google ya los descarta solo y bloquearlos puede ocultar recursos
 *     necesarios para el render-as-Googlebot.
 */

export default function robots(): MetadataRoute.Robots {
  const isProduction = env.APP_ENV === "production";

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
