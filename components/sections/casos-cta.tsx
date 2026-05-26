import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CasosCtaSection() {
  return (
    <section id="te-subes" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 pb-24 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-8 text-white shadow-[var(--shadow-bento)] md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -bottom-24 size-[440px] rounded-full border-[84px] border-brand/25"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent"
          />

          <div className="relative flex flex-col items-start gap-6 md:max-w-3xl">
            <div className="text-eyebrow text-white/70">
              ¿Te subes?
            </div>
            <h2 className="h-cta text-white">
              Ahora que conoces estos casos reales,{" "}
              <span className="text-brand">decide qué necesita tu hotel</span>
            </h2>
            <p className="text-base leading-relaxed text-white/80 md:text-lg">
              Cuéntanos tu contexto y lo analizamos contigo. Si encaja, en
              menos de 90 días tu hotel puede estar dominando su propio dato.
            </p>

            <Button
              size="lg"
              className="rounded-full bg-brand text-white hover:bg-brand/90 px-6 gap-1.5"
              render={<Link href="/contacto" />}
            >
              Quiero ser un caso de éxito
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
