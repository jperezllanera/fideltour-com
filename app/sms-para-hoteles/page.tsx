import type { Metadata } from "next";

import { ModuleLandingPage } from "@/components/sections/module-landing/module-landing-page";
import { buildModuleMetadata } from "@/lib/content/module-landings/_metadata";
import { smsLanding } from "@/lib/content/module-landings/sms-para-hoteles";

export const metadata: Metadata = buildModuleMetadata(smsLanding);

export default function SmsPage() {
  return <ModuleLandingPage data={smsLanding} />;
}
