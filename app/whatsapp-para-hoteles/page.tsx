import type { Metadata } from "next";

import { ModuleLandingPage } from "@/components/sections/module-landing/module-landing-page";
import { buildModuleMetadata } from "@/lib/content/module-landings/_metadata";
import { whatsappLanding } from "@/lib/content/module-landings/whatsapp-para-hoteles";

export const metadata: Metadata = buildModuleMetadata(whatsappLanding);

export default function WhatsappPage() {
  return <ModuleLandingPage data={whatsappLanding} />;
}
