import type { Metadata } from "next";

import { VideosHubHeroSection } from "@/components/sections/videos-hub-hero";
import { VideosHubSections } from "@/components/sections/videos-hub-sections";
import { VideosHubCtaSection } from "@/components/sections/videos-hub-cta";
import {
  BreadcrumbJsonLd,
  WebPageJsonLd,
} from "@/components/seo/json-ld";

const TITLE = "Vídeos · CDP hotelero Fideltour";
const DESCRIPTION =
  "Vídeos prácticos para descubrir cómo trabajar con Fideltour: módulos, FidelTalks, visión y tendencias del CDP para hoteles que está cambiando la fidelización en el sector.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/recursos/nuestros-videos-crm-hotelero/" },
  openGraph: {
    url: "/recursos/nuestros-videos-crm-hotelero/",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function VideosHubPage() {
  return (
    <>
      <WebPageJsonLd
        path="/recursos/nuestros-videos-crm-hotelero/"
        title={TITLE}
        description={DESCRIPTION}
        type="CollectionPage"
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Recursos", path: "/recursos/" },
          { name: "Vídeos", path: "/recursos/nuestros-videos-crm-hotelero/" },
        ]}
      />
      <VideosHubHeroSection />
      <VideosHubSections />
      <VideosHubCtaSection />
    </>
  );
}
