import type { Metadata } from "next";

import { ModuleLandingPage } from "@/components/sections/module-landing/module-landing-page";
import { buildModuleMetadata } from "@/lib/content/module-landings/_metadata";
import { iaLanding } from "@/lib/content/module-landings/inteligencia-artificial-para-hoteles";

export const metadata: Metadata = buildModuleMetadata(iaLanding);

export default function IaPage() {
  return <ModuleLandingPage data={iaLanding} />;
}
