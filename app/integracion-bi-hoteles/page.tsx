import type { Metadata } from "next";

import { ModuleLandingPage } from "@/components/sections/module-landing/module-landing-page";
import { buildModuleMetadata } from "@/lib/content/module-landings/_metadata";
import { biLanding } from "@/lib/content/module-landings/integracion-bi-hoteles";

export const metadata: Metadata = buildModuleMetadata(biLanding);

export default function BiPage() {
  return <ModuleLandingPage data={biLanding} />;
}
