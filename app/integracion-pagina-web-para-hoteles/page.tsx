import type { Metadata } from "next";

import { ModuleLandingPage } from "@/components/sections/module-landing/module-landing-page";
import { buildModuleMetadata } from "@/lib/content/module-landings/_metadata";
import { webLanding } from "@/lib/content/module-landings/integracion-pagina-web-para-hoteles";

export const metadata: Metadata = buildModuleMetadata(webLanding);

export default function WebPage() {
  return <ModuleLandingPage data={webLanding} />;
}
