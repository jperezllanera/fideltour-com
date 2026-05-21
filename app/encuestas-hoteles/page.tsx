import type { Metadata } from "next";

import { ModuleLandingPage } from "@/components/sections/module-landing/module-landing-page";
import { buildModuleMetadata } from "@/lib/content/module-landings/_metadata";
import { encuestasLanding } from "@/lib/content/module-landings/encuestas-hoteles";

export const metadata: Metadata = buildModuleMetadata(encuestasLanding);

export default function EncuestasPage() {
  return <ModuleLandingPage data={encuestasLanding} />;
}
