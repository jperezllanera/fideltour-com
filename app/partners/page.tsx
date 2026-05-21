import type { Metadata } from "next";

import { PartnersHeroSection } from "@/components/sections/partners-hero";
import { PartnersTypesSection } from "@/components/sections/partners-types";
import { PartnersProgramSection } from "@/components/sections/partners-program";
import { PartnersCtaSection } from "@/components/sections/partners-cta";
import {
  BreadcrumbJsonLd,
  WebPageJsonLd,
} from "@/components/seo/json-ld";

const TITLE = "Partners · Programa de afiliación Fideltour";
const DESCRIPTION =
  "Sé parte de Fideltour. Programa de partners para agencias de marketing hotelero y proveedores tecnológicos: comisión del 10% durante 12 meses, kit de afiliación, co-marketing y cero fricción operativa.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/partners/" },
  openGraph: {
    url: "/partners/",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function PartnersPage() {
  return (
    <>
      <WebPageJsonLd
        path="/partners/"
        title={TITLE}
        description={DESCRIPTION}
        type="WebPage"
      />
      <BreadcrumbJsonLd items={[{ name: "Partners", path: "/partners/" }]} />
      <PartnersHeroSection />
      <PartnersTypesSection />
      <PartnersProgramSection />
      <PartnersCtaSection />
    </>
  );
}
