import { ArrowRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

export function BlogCtaSection() {
  return (
    <section id="newsletter" className="relative bg-background">
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

          <div className="relative grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-7 flex flex-col items-start gap-6">
              <div className="text-eyebrow text-white/70">
                Newsletter Fideltour
              </div>
              <h2 className="h-cta text-white">
                Un email al mes.{" "}
                <span className="text-brand">Cero ruido hotelero.</span>
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Recibe los artículos nuevos, casos reales y las lecciones que el
                equipo Fideltour aprende trabajando con hoteles que están
                reduciendo su dependencia de las OTAs.
              </p>
            </div>

            {/* TODO senior: enchufar formulario / endpoint real de newsletter
                (Mailchimp, Brevo, lo que decida marketing). Por ahora el form
                es solo placeholder visual: no envía nada (action="#", noValidate). */}
            <form
              action="#"
              method="post"
              noValidate
              className="md:col-span-5 flex flex-col gap-3 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur"
            >
              <label
                htmlFor="newsletter-email"
                className="text-eyebrow text-white/70"
              >
                Tu email profesional
              </label>
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 pl-4">
                <Mail aria-hidden className="size-4 text-white/70" />
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="hola@tuhotel.com"
                  className="h-11 flex-1 bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="rounded-full bg-brand text-white hover:bg-brand/90 px-6 gap-1.5"
              >
                Suscribirme
                <ArrowRight className="size-4" />
              </Button>
              <p className="text-2xs text-white/60">
                Sin spam. Puedes darte de baja con un clic en cualquier momento.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
