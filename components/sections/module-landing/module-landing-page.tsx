import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  ServiceJsonLd,
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
import { ModuleRelated } from "./module-related";
import { ModuleCaseProof } from "./module-case-proof";

type Props = {
  data: ModuleLanding;
};

/**
 * Plantilla orquestadora de una landing de módulo. Recibe el objeto
 * `ModuleLanding` y emite:
 *   - JSON-LD (WebPage, Service, Breadcrumb con la categoría, FAQ).
 *   - Hero + mini-cards + pilares + beneficios + módulos relacionados + FAQ + CTA final.
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
      <ServiceJsonLd
        path={path}
        name={data.meta.title}
        description={data.meta.description}
        serviceType={categoryLabel}
      />
      <BreadcrumbJsonLd
        items={[
          { name: categoryLabel, path: "/" },
          { name: data.navLabel, path },
        ]}
      />
      <FaqJsonLd items={data.faq} />

      <ModuleHero hero={data.hero} category={data.category} />
      <ModuleMiniCards cards={data.miniCards} />
      <ModulePillars pillars={data.pillars} />
      <ModuleBenefits benefits={data.benefits} />
      {data.relatedCaso && <ModuleCaseProof casoSlug={data.relatedCaso} />}
      <ModuleRelated currentSlug={data.slug} category={data.category} />
      <ModuleFaq faq={data.faq} />
      <FinalCtaSection />
    </>
  );
}
