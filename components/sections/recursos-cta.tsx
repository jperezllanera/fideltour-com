import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function RecursosCtaSection() {
  return (
    <section id="convierte" className="relative bg-background">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 pb-24 md:grid-cols-2 md:px-6">
        {/* Bloque 1 — Auditoría gratuita */}
        <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-8 text-white shadow-[var(--shadow-bento)] md:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -bottom-20 size-[360px] rounded-full border-[72px] border-brand/25"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent"
          />

          <div className="relative flex h-full flex-col items-start gap-5">
            <div className="text-eyebrow text-white/70">
              De la teoría al resultado
            </div>
            <h2 className="h-cta text-white">
              Convierte la formación en{" "}
              <span className="text-brand">resultados reales</span>
            </h2>
            <p className="text-base leading-relaxed text-white/80 md:text-lg">
              Cada hotel es distinto. El siguiente paso es adaptar todo este
              conocimiento a tu contexto real, tu PMS y tus prioridades del
              próximo trimestre.
            </p>

            <Button
              size="lg"
              className="mt-auto rounded-full bg-brand text-white hover:bg-brand/90 px-6 gap-1.5"
              render={<Link href="/auditoria-gratuita-hotel" />}
            >
              Solicita tu auditoría gratuita
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </div>
        </div>

        {/* Bloque 2 — Habla con el equipo */}
        <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card p-8 text-foreground shadow-[var(--shadow-soft)] md:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -bottom-24 size-[320px] rounded-full border-[60px] border-brand/15"
          />

          <div className="relative flex h-full flex-col items-start gap-5">
            <div className="text-eyebrow text-brand-navy-deep">
              ¿Tienes dudas?
            </div>
            <h2 className="h-cta text-brand-navy">
              Cuéntanos tu caso y{" "}
              <span className="text-brand">lo analizamos contigo</span>
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Comparte tu reto concreto — captación, fidelización, venta
              directa — y vemos juntos cómo mejorar tu estrategia y tus
              resultados.
            </p>

            <Button
              size="lg"
              className="mt-auto rounded-full bg-brand-navy text-white hover:bg-brand-navy-deep px-6 gap-1.5"
              render={<Link href="/contacto" />}
            >
              Quiero hablar con el equipo
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
