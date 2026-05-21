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

          <div className="relative flex flex-col items-start gap-6 md:max-w-3xl">
            <div className="text-eyebrow text-white/70">Empieza hoy</div>
            <h2 className="h-cta text-white">
              Centraliza, activa y{" "}
              <span className="text-brand">analiza el dato</span> de tus
              huéspedes.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              Sabes lo importante que es tener los datos centralizados. Ahora
              conviértelos en experiencias únicas y estrategias rentables con
              Fideltour CDP.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                size="lg"
                className="rounded-full bg-brand text-white hover:bg-brand/90 px-6 gap-1.5"
                render={<Link href="/contacto" />}
              >
                Solicita una demo
                <ArrowRight className="size-4" aria-hidden />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
