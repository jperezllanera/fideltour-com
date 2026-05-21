import type { Metadata } from "next";

import { ModuleLandingPage } from "@/components/sections/module-landing/module-landing-page";
import { buildModuleMetadata } from "@/lib/content/module-landings/_metadata";
import { landingPagesLanding } from "@/lib/content/module-landings/landing-page-hoteles";

export const metadata: Metadata = buildModuleMetadata(landingPagesLanding);

export default function LandingPagesPage() {
  return <ModuleLandingPage data={landingPagesLanding} />;
}
