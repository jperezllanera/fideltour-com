import type { Metadata } from "next";

import { ModuleLandingPage } from "@/components/sections/module-landing/module-landing-page";
import { buildModuleMetadata } from "@/lib/content/module-landings/_metadata";
import { experiencesLanding } from "@/lib/content/module-landings/experiencias-para-hoteles";

export const metadata: Metadata = buildModuleMetadata(experiencesLanding);

export default function ExperiencesPage() {
  return <ModuleLandingPage data={experiencesLanding} />;
}
