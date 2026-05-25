import Image from "next/image";
import Link from "next/link";
import { ArrowRight, UserCheck, Wifi } from "lucide-react";

import { Button } from "@/components/ui/button";

export function PortalCautivoHeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white isolate">
      {/* Aro de marca (eco de la "O" del logo) — uno solo, grueso, recortado por overflow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[18%] top-1/2 -translate-y-1/2 size-[144vw] max-w-[1320px] max-h-[1320px] rounded-full border-[125px] border-brand/[0.22]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pt-20 pb-20 md:grid-cols-12 md:gap-8 md:px-6 md:pt-24 md:pb-24">
        <div className="md:col-span-8 md:col-start-5 flex flex-col gap-6 md:items-end md:text-right">
          <span className="text-eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-brand-mint" aria-hidden />
            Portal cautivo · Convierte tu WiFi en fidelización
          </span>

          <h1 className="text-white">
            Integra tu portal cautivo con{" "}
            <span className="text-brand-mint">Fideltour</span>.
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Convierte la red WiFi de tu hotel en una fuente de datos valiosa.
            Conecta tu portal cautivo con Fideltour y enriquece el CRM con la
            información de acceso de cada huésped para activar campañas
            personalizadas y mejorar la fidelización.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 md:justify-end">
            {/* TODO senior: el live abre formulario propio en #demo. Redirige a /contacto. */}
            <Button
              size="lg"
              className="rounded-full bg-brand text-white hover:bg-brand/90 px-6 gap-1.5"
              render={<Link href="/contacto" />}
            >
              Pruébalo ahora
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white px-6"
              render={<Link href="#caracteristicas" />}
            >
              Cómo funciona
            </Button>
          </div>

          <ul className="grid w-full gap-3 sm:grid-cols-2 pt-4">
            <li className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur text-left">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-mint ring-1 ring-white/15">
                <Wifi className="size-5" aria-hidden />
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-eyebrow text-white/70">Captura</span>
                <p className="text-base font-semibold text-white">
                  Cada login es un dato accionable
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur text-left">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-mint ring-1 ring-white/15">
                <UserCheck className="size-5" aria-hidden />
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-eyebrow text-white/70">Identifica</span>
                <p className="text-base font-semibold text-white">
                  Conoce al huésped desde el primer acceso
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="md:col-span-4 md:row-start-1 flex items-center">
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-2xl">
            <Image
              src="/brand/platform/integracion-portal-cautivo-para-hoteles.webp"
              alt="Vista del módulo Portal cautivo de la plataforma Fideltour CDP para hoteles"
              fill
              priority
              sizes="(min-width: 768px) 33vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
