import type { Metadata } from "next";

import { ModuleLandingPage } from "@/components/sections/module-landing/module-landing-page";
import { buildModuleMetadata } from "@/lib/content/module-landings/_metadata";
import { automationLanding } from "@/lib/content/module-landings/marketing-automation-para-hoteles";

export const metadata: Metadata = buildModuleMetadata(automationLanding);

export default function AutomationPage() {
  return <ModuleLandingPage data={automationLanding} />;
}
