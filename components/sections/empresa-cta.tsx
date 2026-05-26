import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function EmpresaCtaSection() {
  return (
    <section id="contacto-fideltour" className="relative bg-background">
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

          <div className="relative grid items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-8 flex flex-col gap-5">
              <div className="text-eyebrow text-white/70">
                Habla con Fideltour
              </div>
              <h2 className="h-cta text-white">
                Si el hotelero domina el dato,{" "}
                <span className="text-brand">domina la venta directa</span>
              </h2>
              <p className="text-base leading-relaxed text-white/80 md:text-lg">
                Cuéntanos en qué punto está tu hotel y en 30 minutos vemos si
                Fideltour encaja con tu PMS, tu equipo y tus prioridades del
                próximo trimestre.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col gap-3">
              <Button
                size="lg"
                className="rounded-full bg-brand text-white hover:bg-brand/90 px-6 gap-1.5"
                render={<Link href="/contacto" />}
              >
                Habla con un experto
                <ArrowRight className="size-4" aria-hidden />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white px-6 gap-1.5"
                render={<Link href="/marketplace" />}
              >
                Ver marketplace
                <ArrowRight className="size-4" aria-hidden />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
