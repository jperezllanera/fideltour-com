import type { Metadata } from "next";

import type { ModuleLanding } from "./_types";

/**
 * Construye el objeto `metadata` Next.js para una landing de módulo a
 * partir de su definición canónica. Mantiene el patrón usado en el
 * resto del sitio (canonical con trailing slash, og, twitter alineados).
 */
export function buildModuleMetadata(landing: ModuleLanding): Metadata {
  const path = `/${landing.slug}/`;
  const title = landing.meta.title;
  const description = landing.meta.description;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      url: path,
      title: `${title} · Fideltour`,
      description,
    },
    twitter: {
      title: `${title} · Fideltour`,
      description,
    },
  };
}
