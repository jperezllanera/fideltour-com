import type { Metadata } from "next";

import { KitDigitalHeroSection } from "@/components/sections/kit-digital-hero";
import { KitDigitalModulosSection } from "@/components/sections/kit-digital-modulos";
import { KitDigitalSegmentosSection } from "@/components/sections/kit-digital-segmentos";
import { KitDigitalBeneficiosSection } from "@/components/sections/kit-digital-beneficios";
import { KitDigitalFaqSection } from "@/components/sections/kit-digital-faq";
import { KitDigitalCtaSection } from "@/components/sections/kit-digital-cta";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  WebPageJsonLd,
} from "@/components/seo/json-ld";
import { kitDigitalFaq } from "@/lib/content/kit-digital";

const TITLE = "Kit Digital Next Generation EU";
const DESCRIPTION =
  "Solicita el Kit Digital con Fideltour. Ayudas Next Generation EU para digitalizar tu hotel con CRM, automatización de marketing y analítica avanzada — hasta 6.000 € por solución.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/kit-digital-fideltour/" },
  openGraph: {
    url: "/kit-digital-fideltour/",
    title: `${TITLE} · Fideltour`,
    description: DESCRIPTION,
  },
  twitter: {
    title: `${TITLE} · Fideltour`,
    description: DESCRIPTION,
  },
};

export default function KitDigitalFideltourPage() {
  return (
    <>
      <WebPageJsonLd
        path="/kit-digital-fideltour/"
        title={`${TITLE} · Fideltour`}
        description={DESCRIPTION}
      />
      <BreadcrumbJsonLd
        items={[
          {
            name: "Kit Digital",
            path: "/kit-digital-fideltour/",
          },
        ]}
      />
      <FaqJsonLd items={kitDigitalFaq} />
      <KitDigitalHeroSection />
      <KitDigitalModulosSection />
      <KitDigitalSegmentosSection />
      <KitDigitalBeneficiosSection />
      <KitDigitalFaqSection />
      <KitDigitalCtaSection />
    </>
  );
}
