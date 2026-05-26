import type { Metadata } from "next";

import { ClientesHeroSection } from "@/components/sections/clientes-hero";
import { ClientesSegmentsSection } from "@/components/sections/clientes-segments";
import { ClientesLogosWallSection } from "@/components/sections/clientes-logos-wall";
import { ClientesCtaSection } from "@/components/sections/clientes-cta";
import {
  BreadcrumbJsonLd,
  WebPageJsonLd,
} from "@/components/seo/json-ld";

const TITLE = "Clientes";
const DESCRIPTION =
  "Desde hoteles independientes hasta grandes grupos internacionales, Fideltour ayuda a los hoteles a unificar sus datos, personalizar la comunicación y construir relaciones rentables con sus huéspedes.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/clientes/" },
  openGraph: {
    url: "/clientes/",
    title: `${TITLE} · Fideltour`,
    description: DESCRIPTION,
  },
  twitter: {
    title: `${TITLE} · Fideltour`,
    description: DESCRIPTION,
  },
};

export default function ClientesPage() {
  return (
    <>
      <WebPageJsonLd
        path="/clientes/"
        title={`${TITLE} · Fideltour`}
        description={DESCRIPTION}
        type="CollectionPage"
      />
      <BreadcrumbJsonLd items={[{ name: TITLE, path: "/clientes/" }]} />
      <ClientesHeroSection />
      <ClientesSegmentsSection />
      <ClientesLogosWallSection />
      <ClientesCtaSection />
    </>
  );
}
