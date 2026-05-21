import { cn } from "@/lib/utils";

import { cdpChannels } from "@/lib/content/cdp";

export function CdpMulticanalidadSection() {
  return (
    <section id="multicanalidad" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <div className="max-w-2xl">
          <div className="text-eyebrow text-brand-navy-deep">
            Multicanalidad
          </div>
          <h2 className="mt-3">Un huésped. Una conversación. Cuatro canales.</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Email incluido en la tarifa plana. WhatsApp, Web Push y SMS bajo
            sistema de créditos para escalar sin fricciones operativas.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {cdpChannels.map(({ slug, name, description, icon: Icon }, i) => (
            <li
              key={slug}
              style={{ ["--i" as never]: i }}
              className={cn(
                "bento-cell relative flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-6",
                "shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-bento)]",
              )}
            >
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-navy text-white">
                <Icon className="size-5" aria-hidden />
              </span>
              <div className="flex flex-col gap-2">
                <h3>{name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
