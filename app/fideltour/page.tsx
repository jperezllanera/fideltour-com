import type { Metadata } from "next";

import { EmpresaHeroSection } from "@/components/sections/empresa-hero";
import { EmpresaPilaresSection } from "@/components/sections/empresa-pilares";
import { EmpresaPresenciaSection } from "@/components/sections/empresa-presencia";
import { EmpresaCtaSection } from "@/components/sections/empresa-cta";
import {
  BreadcrumbJsonLd,
  WebPageJsonLd,
} from "@/components/seo/json-ld";

const TITLE = "Sobre Fideltour · CDP para hoteles";
const DESCRIPTION =
  "Fideltour es el CDP para hoteles que permite conocer y fidelizar al huésped de forma eficaz y personalizada. Por hoteleros, para hoteleros. Operamos en España, Colombia, México y Portugal.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/fideltour/" },
  openGraph: {
    url: "/fideltour/",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function FideltourEmpresaPage() {
  return (
    <>
      <WebPageJsonLd
        path="/fideltour/"
        title={TITLE}
        description={DESCRIPTION}
        type="AboutPage"
      />
      <BreadcrumbJsonLd
        items={[{ name: "Sobre Fideltour", path: "/fideltour/" }]}
      />
      <EmpresaHeroSection />
      <EmpresaPilaresSection />
      <EmpresaPresenciaSection />
      <EmpresaCtaSection />
    </>
  );
}
