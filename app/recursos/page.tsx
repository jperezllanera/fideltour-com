import type { Metadata } from "next";

import { RecursosHeroSection } from "@/components/sections/recursos-hero";
import { RecursosArticlesSection } from "@/components/sections/recursos-articles";
import { RecursosEbooksSection } from "@/components/sections/recursos-ebooks";
import { RecursosVideosSection } from "@/components/sections/recursos-videos";
import { RecursosCtaSection } from "@/components/sections/recursos-cta";
import { LeadMagnetProvider } from "@/components/sections/recursos-lead-magnet";
import {
  BreadcrumbJsonLd,
  WebPageJsonLd,
} from "@/components/seo/json-ld";

const TITLE = "Recursos · Fideltour Academy";
const DESCRIPTION =
  "Guías, vídeos y ebooks sobre marketing hotelero, dato propio y automatización con criterio. Fideltour Academy: donde empieza tu estrategia de fidelización con el CDP para hoteles.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/recursos/" },
  openGraph: {
    url: "/recursos/",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RecursosPage() {
  return (
    <LeadMagnetProvider>
      <WebPageJsonLd
        path="/recursos/"
        title={TITLE}
        description={DESCRIPTION}
        type="CollectionPage"
      />
      <BreadcrumbJsonLd items={[{ name: "Recursos", path: "/recursos/" }]} />
      <RecursosHeroSection />
      <RecursosArticlesSection />
      <RecursosEbooksSection />
      <RecursosVideosSection />
      <RecursosCtaSection />
    </LeadMagnetProvider>
  );
}
