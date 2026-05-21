import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/seo/site";
import { getAllPosts, categoryLabels } from "@/lib/content/blog";
import { implementedModuleSlugs } from "@/lib/content/module-landings";

/*
 * Sitemap dinámico — Next 16 lo sirve en /sitemap.xml.
 *
 * Estrategia:
 *   - Rutas estáticas top-level: priority alta, changeFrequency mensual.
 *   - Categorías de blog (landing virtual /blog/?categoria=X): omitidas
 *     porque no son URLs canónicas independientes — el listado vive en
 *     /blog/ y filtra por querystring.
 *   - Posts de blog: priority media, changeFrequency yearly tras publicación.
 *   - Legales: priority baja, changeFrequency yearly.
 *
 * `trailingSlash: true` en next.config.ts implica que todas las URLs deben
 * terminar en `/`. Construimos las URLs con `absoluteUrl` desde lib/seo/site
 * para no divergir.
 */

const BASE = siteConfig.url;

type StaticRoute = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const staticRoutes: StaticRoute[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/cdp-para-hoteles/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/clientes/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/marketplace/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/recursos/", changeFrequency: "weekly", priority: 0.8 },
  { path: "/blog/", changeFrequency: "daily", priority: 0.9 },
  { path: "/contacto/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/auditoria-gratuita-hotel/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/kit-digital-fideltour/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/integracion-portal-cautivo-para-hoteles/", changeFrequency: "monthly", priority: 0.7 },
  { path: "/politica-de-privacidad/", changeFrequency: "yearly", priority: 0.2 },
  { path: "/politica-de-cookies/", changeFrequency: "yearly", priority: 0.2 },
  { path: "/terminos-y-condiciones/", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Landings de módulo migradas a este repo. El mega-menú lista las 23
  // categorías del catálogo, pero solo emitimos en el sitemap los slugs
  // con page.tsx real. Cuando se migre un módulo nuevo basta con añadirlo
  // a `moduleLandings` en `lib/content/module-landings/index.ts`.
  const moduleEntries: MetadataRoute.Sitemap = implementedModuleSlugs.map(
    (slug) => ({
      url: `${BASE}/${slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  const posts = getAllPosts();

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}${post.href}`,
    lastModified: post.date ? new Date(`${post.date}T00:00:00Z`) : now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  // Landings de categoría reales: /blog/{slug}/ con sus paginaciones.
  const categoryEntries: MetadataRoute.Sitemap = (
    Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>
  ).map((slug) => ({
    url: `${BASE}/blog/${slug}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...moduleEntries, ...categoryEntries, ...postEntries];
}
