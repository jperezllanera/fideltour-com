import type { Metadata } from "next";

import { ModuleLandingPage } from "@/components/sections/module-landing/module-landing-page";
import { buildModuleMetadata } from "@/lib/content/module-landings/_metadata";
import { emailLanding } from "@/lib/content/module-landings/email-para-hoteles";

export const metadata: Metadata = buildModuleMetadata(emailLanding);

export default function EmailPage() {
  return <ModuleLandingPage data={emailLanding} />;
}
