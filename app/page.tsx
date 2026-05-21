import { HeroSection } from "@/components/sections/hero";
import { CrmToCdpSection } from "@/components/sections/crm-to-cdp";
import { BentoModulesSection } from "@/components/sections/bento-modules";
import { LoyaltyLadderSection } from "@/components/sections/loyalty-ladder";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { LogosCarouselSection } from "@/components/sections/logos-carousel";
import { ResourcesSection } from "@/components/sections/resources";
import { FinalCtaSection } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CrmToCdpSection />
      <BentoModulesSection />
      <LoyaltyLadderSection />
      <TestimonialsSection />
      <LogosCarouselSection />
      <ResourcesSection />
      <FinalCtaSection />
    </>
  );
}
