import type { Metadata } from "next";

import { ModuleLandingPage } from "@/components/sections/module-landing/module-landing-page";
import { buildModuleMetadata } from "@/lib/content/module-landings/_metadata";
import { webPushLanding } from "@/lib/content/module-landings/web-push-para-hoteles";

export const metadata: Metadata = buildModuleMetadata(webPushLanding);

export default function WebPushPage() {
  return <ModuleLandingPage data={webPushLanding} />;
}
