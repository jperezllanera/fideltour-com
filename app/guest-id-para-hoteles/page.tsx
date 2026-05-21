import type { Metadata } from "next";

import { ModuleLandingPage } from "@/components/sections/module-landing/module-landing-page";
import { buildModuleMetadata } from "@/lib/content/module-landings/_metadata";
import { guestIdLanding } from "@/lib/content/module-landings/guest-id-para-hoteles";

export const metadata: Metadata = buildModuleMetadata(guestIdLanding);

export default function GuestIdPage() {
  return <ModuleLandingPage data={guestIdLanding} />;
}
