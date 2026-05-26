import type { Metadata } from "next";

import { CdpHeroSection } from "@/components/sections/cdp-hero";
import { CdpEraShiftSection } from "@/components/sections/cdp-era-shift";
import { CdpSalesAgentSection } from "@/components/sections/cdp-sales-agent";
import { CdpAgenticEraSection } from "@/components/sections/cdp-agentic-era";
import { CdpAnonymousTrafficSection } from "@/components/sections/cdp-anonymous-traffic";
import { CdpContextComparisonSection } from "@/components/sections/cdp-context-comparison";
import { CdpEcosystemSection } from "@/components/sections/cdp-ecosystem";
import { CdpModulesSection } from "@/components/sections/cdp-modules";
import { CdpTimelineSection } from "@/components/sections/cdp-timeline";
import { CdpStatsSection } from "@/components/sections/cdp-stats";
import { CdpCtaSection } from "@/components/sections/cdp-cta";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  WebPageJsonLd,
} from "@/components/seo/json-ld";
import { cdpFaq } from "@/lib/content/cdp";

const TITLE = "CDP para hoteles · Fideltour ONE";
const DESCRIPTION =
  "Fideltour ONE es el CDP para hoteles: 12 módulos bajo una sola tarifa por habitación que dan a tu agente de venta el contexto del huésped — del 80% anónimo a la reserva directa.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/cdp-para-hoteles/" },
  openGraph: {
    url: "/cdp-para-hoteles/",
    title: `${TITLE} · Fideltour`,
    description: DESCRIPTION,
  },
  twitter: {
    title: `${TITLE} · Fideltour`,
    description: DESCRIPTION,
  },
};

export default function CdpParaHotelesPage() {
  return (
    <>
      <WebPageJsonLd
        path="/cdp-para-hoteles/"
        title={`${TITLE} · Fideltour`}
        description={DESCRIPTION}
      />
      <BreadcrumbJsonLd
        items={[{ name: "CDP para hoteles", path: "/cdp-para-hoteles/" }]}
      />
      <FaqJsonLd items={cdpFaq} />
      <CdpHeroSection />
      <CdpEraShiftSection />
      <CdpSalesAgentSection />
      <CdpAgenticEraSection />
      <CdpAnonymousTrafficSection />
      <CdpContextComparisonSection />
      <CdpEcosystemSection />
      <CdpModulesSection />
      <CdpTimelineSection />
      <CdpStatsSection />
      <CdpCtaSection />
    </>
  );
}
