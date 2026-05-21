import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ClientesCtaSection() {
  return (
    <section id="auditoria" className="relative bg-background">
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
            <div className="text-eyebrow text-white/70">
              ¿Quieres empezar?
            </div>
            <h2 className="h-cta text-white">
              Hoteleros que dominan el dato.{" "}
              <span className="text-brand">¿Eres uno de ellos?</span>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              El CRM de Fideltour está creado por hoteleros para hoteleros. Si
              eres de los segundos, ¿a qué estás esperando?
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* TODO senior: enchufar formulario / endpoint real de auditoría */}
              <Button
                size="lg"
                className="rounded-full bg-brand text-white hover:bg-brand/90 px-6 gap-1.5"
                render={<a href="/contacto" />}
              >
                Solicita una auditoría GRATIS
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
