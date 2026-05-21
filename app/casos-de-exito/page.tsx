import type { Metadata } from "next";

import { CasosHeroSection } from "@/components/sections/casos-hero";
import { CasosBenefitsSection } from "@/components/sections/casos-benefits";
import { CasosGridSection } from "@/components/sections/casos-grid";
import { CasosCtaSection } from "@/components/sections/casos-cta";
import {
  BreadcrumbJsonLd,
  ItemListJsonLd,
  WebPageJsonLd,
} from "@/components/seo/json-ld";
import { casosDeExito } from "@/lib/content/casos";

const TITLE = "Casos de éxito";
const DESCRIPTION =
  "Hoteles que están dominando su dato con Fideltour: del hotel urbano que multiplicó su venta directa a la cadena vacacional que centralizó toda su red en un único perfil del huésped.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/casos-de-exito/" },
  openGraph: {
    url: "/casos-de-exito/",
    title: `${TITLE} · Fideltour`,
    description: DESCRIPTION,
  },
  twitter: {
    title: `${TITLE} · Fideltour`,
    description: DESCRIPTION,
  },
};

export default function CasosDeExitoPage() {
  return (
    <>
      <WebPageJsonLd
        path="/casos-de-exito/"
        title={`${TITLE} · Fideltour`}
        description={DESCRIPTION}
        type="CollectionPage"
      />
      <BreadcrumbJsonLd items={[{ name: TITLE, path: "/casos-de-exito/" }]} />
      <ItemListJsonLd
        name="Casos de éxito Fideltour"
        items={casosDeExito.map((caso) => ({
          name: caso.title,
          path: `/casos-de-exito/${caso.slug}/`,
          description: caso.excerpt,
        }))}
      />
      <CasosHeroSection />
      <CasosBenefitsSection />
      <CasosGridSection />
      <CasosCtaSection />
    </>
  );
}
