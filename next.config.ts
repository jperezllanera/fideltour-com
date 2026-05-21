import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // El blog vivo en fideltour.com usa URLs con slash final
  // (p. ej. /blog/marketing/automatizaciones-esenciales-para-hoteles/).
  // Activamos trailingSlash global para no romper backlinks ni SEO tras migrar.
  trailingSlash: true,
};

export default nextConfig;
