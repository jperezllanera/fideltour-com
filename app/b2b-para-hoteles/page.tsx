import type { Metadata } from "next";

import { ModuleLandingPage } from "@/components/sections/module-landing/module-landing-page";
import { buildModuleMetadata } from "@/lib/content/module-landings/_metadata";
import { b2bLanding } from "@/lib/content/module-landings/b2b-para-hoteles";

export const metadata: Metadata = buildModuleMetadata(b2bLanding);

export default function B2bPage() {
  return <ModuleLandingPage data={b2bLanding} />;
}
