import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/seo/site";

/*
 * Web App Manifest — Next 16 lo sirve en /manifest.webmanifest.
 *
 * No estamos construyendo una PWA instalable; el manifest existe para
 * mejorar la metadata que Android/Chrome usa al "Add to Home Screen" y para
 * dar señales de identidad consistentes al crawler.
 *
 * theme_color y background_color coinciden con los tokens "Aurora Bento"
 * (modo claro, neutros cálidos, brand cian como acento). Si el sistema de
 * color cambia, mantenerlos sincronizados con app/globals.css.
 */

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — ${siteConfig.category}`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    lang: siteConfig.defaultLanguage,
    theme_color: "#25CAD2",
    background_color: "#FAF7F2",
    categories: ["business", "productivity", "travel"],
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
