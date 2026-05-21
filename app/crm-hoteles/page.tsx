import type { Metadata } from "next";

import { ModuleLandingPage } from "@/components/sections/module-landing/module-landing-page";
import { buildModuleMetadata } from "@/lib/content/module-landings/_metadata";
import { crmLanding } from "@/lib/content/module-landings/crm-hoteles";

export const metadata: Metadata = buildModuleMetadata(crmLanding);

export default function CrmHotelesPage() {
  return <ModuleLandingPage data={crmLanding} />;
}
