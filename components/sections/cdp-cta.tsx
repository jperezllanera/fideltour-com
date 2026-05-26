import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CdpCtaSection() {
  return (
    <section id="empieza-hoy" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 pb-24 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-8 text-white shadow-[var(--shadow-bento)] md:p-16">
          {/* Aro de marca (eco de la "O" del logo) — uno solo, grueso, recortado por overflow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -bottom-24 size-[440px] rounded-full border-[84px] border-brand/25"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent"
          />

          <div className="relative grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7 flex flex-col items-start gap-6">
              <div className="text-eyebrow text-white/70">La cuenta atrás</div>
              <h2 className="h-cta text-white">
                El contexto no se enciende.{" "}
                <span className="text-brand">Se acumula.</span>
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                El que empieza hoy llega armado a la ola agéntica. El que
                espera, llega tarde. Empieza a unir tu contexto del
                huésped — cuando llegue la reserva agéntica, tu agente de
                venta tendrá detrás todo lo que necesita para ganar la venta
                directa.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  size="lg"
                  className="rounded-full bg-brand text-white hover:bg-brand/90 px-6 gap-1.5"
                  render={<Link href="/contacto" />}
                >
                  Solicita una DEMO gratis
                  <ArrowRight className="size-4" aria-hidden />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white px-6"
                  render={<Link href="/casos-de-exito/" />}
                >
                  Ver casos de éxito
                </Button>
              </div>
            </div>

            <aside className="md:col-span-5 relative rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <div className="text-eyebrow text-brand">
                Por qué te importa
              </div>
              <p className="mt-3 text-base leading-relaxed text-white md:text-lg">
                Tu motor de reservas conversará. Tus competidores ya lo están
                preparando. La diferencia entre ganar y comisionar a la OTA
                vivirá en el contexto que hayas acumulado.
              </p>
              <p className="mt-4 text-sm text-white/70">
                Cada día sin CDP es un día de dato que no se acumula.
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
