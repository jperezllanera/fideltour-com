import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  WebPageJsonLd,
} from "@/components/seo/json-ld";
import { FinalCtaSection } from "@/components/sections/final-cta";
import type { ModuleLanding } from "@/lib/content/module-landings/_types";
import { moduleCategoryLabels } from "@/lib/content/module-landings/_types";

import { ModuleHero } from "./module-hero";
import { ModuleMiniCards } from "./module-mini-cards";
import { ModulePillars } from "./module-pillars";
import { ModuleBenefits } from "./module-benefits";
import { ModuleFaq } from "./module-faq";

type Props = {
  data: ModuleLanding;
};

/**
 * Plantilla orquestadora de una landing de módulo. Recibe el objeto
 * `ModuleLanding` y emite:
 *   - JSON-LD (WebPage, Breadcrumb con la categoría, FAQ).
 *   - Hero + mini-cards + pilares + beneficios + FAQ + CTA final.
 *
 * Las páginas en `app/<slug>/page.tsx` solo declaran el metadata Next
 * (vía `buildModuleMetadata`) y renderizan `<ModuleLandingPage data={…}/>`.
 */
export function ModuleLandingPage({ data }: Props) {
  const path = `/${data.slug}/`;
  const categoryLabel = moduleCategoryLabels[data.category];

  return (
    <>
      <WebPageJsonLd
        path={path}
        title={`${data.meta.title} · Fideltour`}
        description={data.meta.description}
      />
      <BreadcrumbJsonLd
        items={[
          { name: categoryLabel, path: "/" },
          { name: data.navLabel, path },
        ]}
      />
      <FaqJsonLd items={data.faq} />

      <ModuleHero hero={data.hero} />
      <ModuleMiniCards cards={data.miniCards} />
      <ModulePillars pillars={data.pillars} />
      <ModuleBenefits benefits={data.benefits} />
      <ModuleFaq faq={data.faq} />
      <FinalCtaSection />
    </>
  );
}
