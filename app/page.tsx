import type { Metadata } from "next";

import { HeroSection } from "@/components/sections/hero";
import { CrmToCdpSection } from "@/components/sections/crm-to-cdp";
import { LoyaltyLadderSection } from "@/components/sections/loyalty-ladder";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { LogosCarouselSection } from "@/components/sections/logos-carousel";
import { ResourcesSection } from "@/components/sections/resources";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { WebPageJsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/seo/site";

const HOME_TITLE = `${siteConfig.name} — ${siteConfig.category}`;
const HOME_DESCRIPTION = siteConfig.description;

export const metadata: Metadata = {
  // El title raíz ya emite este valor; lo redeclaramos explícito para que la
  // home no quede con el template "%s · Fideltour" — Next combina con
  // `title.default`, pero ser explícito ayuda a SERP previews.
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    url: `${siteConfig.url}/`,
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  twitter: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
};

export default function HomePage() {
  return (
    <>
      <WebPageJsonLd
        path="/"
        title={HOME_TITLE}
        description={HOME_DESCRIPTION}
      />
      <HeroSection />
      <CrmToCdpSection />
      <LoyaltyLadderSection />
      <TestimonialsSection />
      <LogosCarouselSection />
      <ResourcesSection />
      <FinalCtaSection />
    </>
  );
}
