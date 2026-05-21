import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { ModuleLanding } from "@/lib/content/module-landings/_types";
import type { ModuleCategory } from "@/lib/content/module-landings";

import { ModuleHeroVisual } from "./module-hero-visual";

type Props = {
  hero: ModuleLanding["hero"];
  category: ModuleCategory;
};

export function ModuleHero({ hero, category }: Props) {
  const ctaLabel = hero.ctaLabel ?? "Solicita una DEMO gratis";

  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white isolate">
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pt-20 pb-16 md:grid-cols-12 md:gap-8 md:px-6 md:pt-28 md:pb-20">
        <div className="md:col-span-7 flex flex-col gap-6">
          <span className="text-eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-brand-mint" aria-hidden />
            {hero.eyebrow}
          </span>

          <h1 className="text-white">
            {renderTitleWithAccent(hero.title, hero.titleAccent)}
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            {hero.lead}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="rounded-full bg-brand text-white hover:bg-brand/90 px-7 gap-1.5"
              render={<a href="/contacto/" />}
            >
              {ctaLabel}
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white px-7"
              render={<a href="#plataforma" />}
            >
              Ver plataforma
            </Button>
          </div>
        </div>

        <div className="md:col-span-5 flex items-center justify-center">
          <ModuleHeroVisual category={category} />
        </div>
      </div>
    </section>
  );
}

function renderTitleWithAccent(title: string, accent?: string) {
  if (!accent || !title.includes(accent)) {
    return title;
  }
  const [before, ...rest] = title.split(accent);
  const after = rest.join(accent);
  return (
    <>
      {before}
      <span className="text-brand-mint">{accent}</span>
      {after}
    </>
  );
}
