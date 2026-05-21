import type { Metadata } from "next";

import { ModuleLandingPage } from "@/components/sections/module-landing/module-landing-page";
import { buildModuleMetadata } from "@/lib/content/module-landings/_metadata";
import { campaignsLanding } from "@/lib/content/module-landings/marketing-hoteles";

export const metadata: Metadata = buildModuleMetadata(campaignsLanding);

export default function CampaignsPage() {
  return <ModuleLandingPage data={campaignsLanding} />;
}
