import type { Metadata } from "next";

import { MarketplaceHeroSection } from "@/components/sections/marketplace-hero";
import { MarketplaceFinderSection } from "@/components/sections/marketplace-finder";
import { MarketplaceCtaSection } from "@/components/sections/marketplace-cta";
import {
  BreadcrumbJsonLd,
  WebPageJsonLd,
} from "@/components/seo/json-ld";

const TITLE = "Marketplace";
const DESCRIPTION =
  "Descubre aquí las conectividades disponibles con Fideltour, desde PMS a motores de reserva y mucho más para gestionar tu hotel.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/marketplace/" },
  openGraph: {
    url: "/marketplace/",
    title: `${TITLE} · Fideltour`,
    description: DESCRIPTION,
  },
  twitter: {
    title: `${TITLE} · Fideltour`,
    description: DESCRIPTION,
  },
};

export default function MarketplacePage() {
  return (
    <>
      <WebPageJsonLd
        path="/marketplace/"
        title={`${TITLE} · Fideltour`}
        description={DESCRIPTION}
        type="CollectionPage"
      />
      <BreadcrumbJsonLd items={[{ name: TITLE, path: "/marketplace/" }]} />
      <MarketplaceHeroSection />
      <MarketplaceFinderSection />
      <MarketplaceCtaSection />
    </>
  );
}
