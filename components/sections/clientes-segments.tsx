import Image from "next/image";

import { cn } from "@/lib/utils";
import { clienteSegments } from "@/lib/content/clientes";

export function ClientesSegmentsSection() {
  return (
    <section id="segmentos" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-2xl">
          <div className="text-eyebrow text-brand-navy-deep">
            Segmentos · 04
          </div>
          <h2 className="mt-3">
            Una plataforma. Cuatro realidades hoteleras.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Cada hotelero opera en un contexto distinto. Fideltour se adapta al
            tamaño, complejidad y madurez de tu organización — sin perder la
            misma fuente de verdad por huésped.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-8 md:gap-12">
          {clienteSegments.map(({ id, label, title, description, icon: Icon, customers }, i) => (
            <article
              key={id}
              id={id}
              style={{ ["--i" as never]: i }}
              className={cn(
                "bento-cell group relative overflow-hidden rounded-2xl border border-border/70 bg-card",
                "shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-bento)] transition-shadow duration-300",
              )}
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="grid gap-8 p-6 md:grid-cols-12 md:gap-10 md:p-10">
                <header className="md:col-span-5 lg:col-span-4 flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-navy text-white transition-colors group-hover:bg-brand">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-eyebrow text-brand-navy-deep">
                      {label}
                    </span>
                  </div>

                  <div>
                    <h3>
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {description}
                    </p>
                  </div>
                </header>

                <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-4">
                  <div className="text-eyebrow text-muted-foreground">
                    Algunos clientes
                  </div>
                  <ul className="grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-10">
                    {customers.map((customer) => (
                      <li
                        key={customer.slug}
                        className="flex items-center justify-center"
                      >
                        <Image
                          src={`/brand/cliente-${customer.slug}.webp`}
                          alt={`${customer.name} — cliente Fideltour`}
                          width={320}
                          height={160}
                          sizes="(min-width: 1024px) 200px, (min-width: 640px) 220px, 45vw"
                          className="max-h-24 w-auto object-contain md:max-h-28"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
