import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function MarketplaceCtaSection() {
  return (
    <section id="auditoria" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 pb-24 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-8 text-white shadow-[var(--shadow-bento)] md:p-16">
          {/* Anillos concéntricos decorativos (eco de la "O" del logo) */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 size-[420px] rounded-full border-[40px] border-white/10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-12 -top-8 size-[180px] rounded-full border-[16px] border-brand/40"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent"
          />

          <div className="relative flex flex-col items-center gap-6 text-center md:mx-auto md:max-w-3xl">
            <div className="text-eyebrow text-white/70">
              ¿Te has decidido?
            </div>
            <h2 className="h-cta text-white">
              Creado por hoteleros,{" "}
              <span className="text-brand">para hoteleros.</span>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              El CRM de Fideltour está creado por hoteleros para hoteleros. Si
              eres de los segundos, ¿a qué estás esperando?
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              {/* TODO senior: la web original enlaza a /auditoria-gratuita-hotel/,
                  endpoint que aún no existe en este repo. De momento redirige al
                  formulario de /contacto. */}
              <Button
                size="lg"
                className="rounded-full bg-brand text-white hover:bg-brand/90 px-6 gap-1.5"
                render={<a href="/contacto" />}
              >
                Auditoría GRATIS
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
