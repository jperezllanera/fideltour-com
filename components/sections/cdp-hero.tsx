import Link from "next/link";
import { ArrowRight, ArrowDown, ArrowUp } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CdpHeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white isolate">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[18%] top-1/2 -translate-y-1/2 size-[144vw] max-w-[1380px] max-h-[1380px] rounded-full border-[125px] border-brand/[0.22]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pt-20 pb-20 md:grid-cols-12 md:gap-10 md:px-6 md:pt-28 md:pb-28">
        <div className="md:col-span-7 flex flex-col gap-6">
          <span className="text-eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden />
            CDP para hoteles · Fideltour ONE
          </span>

          <h1 className="text-white">
            La reserva de hotel está a punto de{" "}
            <span className="text-brand">cambiar</span>. Otra vez.
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Booking y Expedia ya conversan con el huésped y reservan por él.
            Google entra en la reserva agéntica junto a Marriott e IHG. La
            pregunta ya no es si pasa: es quién tendrá un agente para responder
            cuando pase.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* TODO senior: sustituir /contacto por formulario propio embebido cuando exista. */}
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
              render={<Link href="#modulos" />}
            >
              Qué incluye Fideltour ONE
            </Button>
          </div>
        </div>

        <div className="md:col-span-5 flex flex-col justify-end gap-3">
          <div className="text-eyebrow text-white/60">
            El cambio de poder · 2024 → 2025
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <article className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <div className="text-eyebrow inline-flex items-center gap-1.5 text-white/70">
                El buscador
                <ArrowDown className="size-3.5 text-white/70" aria-hidden />
              </div>
              <div className="mt-2 font-sans text-3xl font-bold whitespace-nowrap text-white md:text-4xl">
                51% → <span className="text-white/55">36%</span>
              </div>
              <p className="mt-2 text-sm text-white/75">
                viajeros que lo usan para planificar.
              </p>
            </article>

            <article className="rounded-2xl border border-brand/40 bg-brand/10 p-5 backdrop-blur">
              <div className="text-eyebrow inline-flex items-center gap-1.5 text-brand">
                La IA generativa
                <ArrowUp className="size-3.5 text-brand" aria-hidden />
              </div>
              <div className="mt-2 font-sans text-3xl font-bold whitespace-nowrap text-white md:text-4xl">
                <span className="text-white/55">6%</span> → 15%
              </div>
              <p className="mt-2 text-sm text-white/85">
                ya planifican con IA generativa.
              </p>
            </article>
          </div>
          <p className="text-xs text-white/55">
            Fuente · Phocuswright, &ldquo;Travel Forward 2026&rdquo;.
          </p>
        </div>
      </div>
    </section>
  );
}
