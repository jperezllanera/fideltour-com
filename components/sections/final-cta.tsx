import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section id="demo" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 pb-24 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-hero-gradient text-white shadow-[var(--shadow-bento)]">
          {/* Aro de marca (eco de la "O" del logo) — uno solo, grueso, recortado por overflow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-40 -bottom-40 size-[560px] rounded-full border-[96px] border-brand/25"
          />

          <div className="relative grid gap-10 p-8 md:grid-cols-12 md:items-center md:gap-8 md:p-12 lg:p-16">
            <div className="md:col-span-7 flex flex-col items-start gap-6">
              <div className="text-eyebrow text-white/70">La cuenta atrás</div>
              <h2 className="h-cta text-white">
                El contexto no se enciende.{" "}
                <span className="text-brand">Se acumula.</span>
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                El que empieza hoy llega armado a la ola agéntica. El que
                espera, llega tarde. Conecta tu PMS y empieza a unir tu
                contexto del huésped.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  size="lg"
                  className="rounded-full bg-brand text-white hover:bg-brand/90 px-7 gap-1.5"
                  render={<a href="/contacto" />}
                >
                  Empieza por tu PMS
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>

            <div className="md:col-span-5 relative">
              <div className="relative mx-auto aspect-square w-full max-w-[360px] overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
                <Image
                  src="/brand/bloque-dudas.webp"
                  alt="Equipo de Fideltour atendiendo a un cliente"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
