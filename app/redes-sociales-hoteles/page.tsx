import type { Metadata } from "next";

import { ModuleLandingPage } from "@/components/sections/module-landing/module-landing-page";
import { buildModuleMetadata } from "@/lib/content/module-landings/_metadata";
import { socialLanding } from "@/lib/content/module-landings/redes-sociales-hoteles";

export const metadata: Metadata = buildModuleMetadata(socialLanding);

export default function SocialPage() {
  return <ModuleLandingPage data={socialLanding} />;
}
