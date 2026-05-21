// Twitter Card alias — reutiliza el handler de opengraph-image.tsx para no
// duplicar el diseño. Next 16 expone /twitter-image como ruta independiente,
// pero NO permite re-exportar `runtime` ni el resto de configuraciones de
// segmento desde otro módulo; las redeclaramos aquí mientras el `default`
// (la función que renderiza el PNG) sí se reusa.
import { siteConfig } from "@/lib/seo/site";

export { default } from "./opengraph-image";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.category}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
