import type { Metadata } from "next";

import { ModuleLandingPage } from "@/components/sections/module-landing/module-landing-page";
import { buildModuleMetadata } from "@/lib/content/module-landings/_metadata";
import { reportingLanding } from "@/lib/content/module-landings/reporting-y-analytics-para-hoteles";

export const metadata: Metadata = buildModuleMetadata(reportingLanding);

export default function ReportingPage() {
  return <ModuleLandingPage data={reportingLanding} />;
}
