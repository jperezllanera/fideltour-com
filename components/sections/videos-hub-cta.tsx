import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function VideosHubCtaSection() {
  return (
    <section id="profundizar" className="relative bg-background">
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
              ¿Quieres profundizar?
            </div>
            <h2 className="h-cta text-white">
              Si alguno de estos vídeos te abrió preguntas,{" "}
              <span className="text-brand">hablemos</span>
            </h2>
            <p className="text-base leading-relaxed text-white/80 md:text-lg">
              Podemos llevar cualquiera de estos conceptos a tu realidad
              hotelera: tu PMS, tu motor de reservas, tu equipo y tus
              prioridades del próximo trimestre.
            </p>

            <Button
              size="lg"
              className="rounded-full bg-brand text-white hover:bg-brand/90 px-6 gap-1.5"
              render={<Link href="/contacto" />}
            >
              Habla con un experto
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
