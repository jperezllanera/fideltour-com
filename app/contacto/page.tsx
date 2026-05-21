import type { Metadata } from "next";

import { ContactoHeroSection } from "@/components/sections/contacto-hero";
import { ContactoFormSection } from "@/components/sections/contacto-form";
import { ContactoOfficesSection } from "@/components/sections/contacto-offices";
import {
  BreadcrumbJsonLd,
  WebPageJsonLd,
} from "@/components/seo/json-ld";

const TITLE = "Contacta con nosotros";
const DESCRIPTION =
  "Contacta con el equipo Fideltour y obtén información detallada sobre cualquier duda sobre nuestro CDP para hoteles.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contacto/" },
  openGraph: {
    url: "/contacto/",
    title: `${TITLE} · Fideltour`,
    description: DESCRIPTION,
  },
  twitter: {
    title: `${TITLE} · Fideltour`,
    description: DESCRIPTION,
  },
};

export default function ContactoPage() {
  return (
    <>
      <WebPageJsonLd
        path="/contacto/"
        title={`${TITLE} · Fideltour`}
        description={DESCRIPTION}
        type="ContactPage"
      />
      <BreadcrumbJsonLd items={[{ name: "Contacto", path: "/contacto/" }]} />
      <ContactoHeroSection />
      <ContactoFormSection />
      <ContactoOfficesSection />
    </>
  );
}
