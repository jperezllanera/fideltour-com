import type { Metadata } from "next";

import { ModuleLandingPage } from "@/components/sections/module-landing/module-landing-page";
import { buildModuleMetadata } from "@/lib/content/module-landings/_metadata";
import { appPushLanding } from "@/lib/content/module-landings/app-push-para-hoteles";

export const metadata: Metadata = buildModuleMetadata(appPushLanding);

export default function AppPushPage() {
  return <ModuleLandingPage data={appPushLanding} />;
}
