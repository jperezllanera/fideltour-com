import type { Metadata } from "next";

import { CdpHeroSection } from "@/components/sections/cdp-hero";
import { CdpProblemaSection } from "@/components/sections/cdp-problema";
import { LoyaltyLadderSection } from "@/components/sections/loyalty-ladder";
import { CdpQueEsSection } from "@/components/sections/cdp-que-es";
import { CdpBeneficiosSection } from "@/components/sections/cdp-beneficios";
import { CdpMulticanalidadSection } from "@/components/sections/cdp-multicanalidad";
import { CdpCtaSection } from "@/components/sections/cdp-cta";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  WebPageJsonLd,
} from "@/components/seo/json-ld";
import { cdpFaq } from "@/lib/content/cdp";

const TITLE = "CDP para hoteles: fidelización 360º en tarifa plana";
const DESCRIPTION =
  "Fideltour CDP unifica y activa el dato del huésped a lo largo de todo su ciclo de vida. Toda la escalera de fidelización en una sola plataforma, con tarifa plana por habitación.";

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
      <CdpProblemaSection />
      <LoyaltyLadderSection />
      <CdpQueEsSection />
      <CdpBeneficiosSection />
      <CdpMulticanalidadSection />
      <CdpCtaSection />
    </>
  );
}
