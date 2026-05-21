import type { Metadata } from "next";

import { ModuleLandingPage } from "@/components/sections/module-landing/module-landing-page";
import { buildModuleMetadata } from "@/lib/content/module-landings/_metadata";
import { rewardsLanding } from "@/lib/content/module-landings/fidelizacion-hoteles";

export const metadata: Metadata = buildModuleMetadata(rewardsLanding);

export default function RewardsPage() {
  return <ModuleLandingPage data={rewardsLanding} />;
}
