import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { kitDigitalSegments } from "@/lib/content/kit-digital";

export function KitDigitalSegmentosSection() {
  return (
    <section id="segmentos" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="text-eyebrow text-brand-navy-deep">
              ¿Es para mí?
            </div>
            <h2>Si tienes una PYME o eres autónomo, sí.</h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              En Fideltour ayudamos a las empresas del sector hotelero
              pertenecientes a los segmentos I, II y III del Programa Kit
              Digital Next Generation EU.
            </p>
            <div className="pt-2">
              <Button
                size="lg"
                className="rounded-full bg-brand text-white hover:bg-brand/90 px-6 gap-1.5"
                render={<Link href="/contacto" />}
              >
                Soy PYME o autónomo
                <ArrowRight className="size-4" aria-hidden />
              </Button>
            </div>
          </div>

          <ul className="md:col-span-7 grid gap-4 sm:grid-cols-3">
            {kitDigitalSegments.map(({ code, label }, i) => (
              <li
                key={code}
                style={{ ["--i" as never]: i }}
                className={cn(
                  "bento-cell flex flex-col gap-3 rounded-2xl border border-border/70 bg-card p-6",
                  "shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-bento)]",
                )}
              >
                <span className="text-eyebrow text-brand-navy-deep">
                  {code}
                </span>
                <p className="text-base font-semibold text-brand-navy md:text-lg">
                  {label}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
