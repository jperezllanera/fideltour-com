import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function PartnersCtaSection() {
  return (
    <section id="quiero-ser-partner" className="relative bg-background">
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

          <div className="relative grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-7 flex flex-col gap-5">
              <div className="text-eyebrow text-white/70">
                ¿Te subes?
              </div>
              <h2 className="h-cta text-white">
                Hablemos del encaje{" "}
                <span className="text-brand">de tu cartera con Fideltour</span>
              </h2>
              <p className="text-base leading-relaxed text-white/80 md:text-lg">
                Cuéntanos qué tipo de hoteles tienes como clientes y diseñamos
                contigo el plan de partnership — desde la primera referencia
                hasta el panel de comisiones.
              </p>
            </div>

            <div className="md:col-span-5 flex flex-col gap-3">
              {/* TODO senior: enchufar partners.fideltour.com cuando exista el
                  portal del partner. Hoy redirige a /contacto para que
                  cualquier interés caiga en el formulario actual. */}
              <Button
                size="lg"
                className="rounded-full bg-brand text-white hover:bg-brand/90 px-6 gap-1.5"
                render={<Link href="/contacto" />}
              >
                Quiero ser partner
                <ArrowRight className="size-4" aria-hidden />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white px-6 gap-1.5"
                render={<Link href="/contacto" />}
              >
                Quiero saber más
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
