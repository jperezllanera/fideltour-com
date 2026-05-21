import type { Metadata } from "next";

import { ModuleLandingPage } from "@/components/sections/module-landing/module-landing-page";
import { buildModuleMetadata } from "@/lib/content/module-landings/_metadata";
import { pmsLanding } from "@/lib/content/module-landings/integracion-pms-para-hoteles";

export const metadata: Metadata = buildModuleMetadata(pmsLanding);

export default function IntegracionPmsPage() {
  return <ModuleLandingPage data={pmsLanding} />;
}
