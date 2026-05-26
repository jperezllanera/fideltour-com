import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cdpModules } from "@/lib/content/cdp";

export function CdpModulesSection() {
  return (
    <section id="modulos" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-eyebrow text-brand-navy-deep">
            Fideltour ONE
          </div>
          <h2 className="mt-3">
            12 módulos.{" "}
            <span className="text-brand-navy-deep">Una sola tarifa.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Nada que comprar por separado. Todos los módulos del CDP con IA
            agéntica transversal, en una tarifa plana por habitación. Cada
            módulo captura un tipo de dato distinto. Juntos, hacen el
            contexto del huésped.
          </p>
          <div className="mt-6 flex justify-center">
            <Button
              size="lg"
              className="rounded-full bg-brand-navy text-white hover:bg-brand-navy/90 px-6 gap-1.5"
              render={<Link href="/contacto/" />}
            >
              Habla con un especialista
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </div>
        </div>

        <ul className="mt-14 grid gap-3 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
          {cdpModules.map((mod) => {
            const Icon = mod.icon;
            return (
              <li
                key={mod.id}
                className="group relative flex items-center gap-3 rounded-2xl border border-border/70 bg-card p-4 shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-bento)] sm:flex-col sm:items-stretch sm:gap-3 sm:p-5"
              >
                <div className="flex shrink-0 items-center justify-between gap-3 sm:w-full">
                  <span className="inline-flex size-9 items-center justify-center rounded-full bg-brand-navy text-white">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <span className="hidden text-eyebrow text-muted-foreground sm:inline">
                    {mod.id}
                  </span>
                </div>
                <h3 className="text-brand-navy">{mod.name}.</h3>
                <p className="hidden text-sm leading-relaxed text-muted-foreground sm:block">
                  {mod.description}
                </p>

                {/* Stretched link: la card entera es clicable cuando
                    existe landing. Agents no la tiene aún. */}
                {mod.href && (
                  <Link
                    href={mod.href}
                    aria-label={`Ver módulo ${mod.name}`}
                    className="absolute inset-0 z-10 rounded-2xl focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none"
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
