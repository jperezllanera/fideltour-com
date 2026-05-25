import { cn } from "@/lib/utils";
import { cdpEras } from "@/lib/content/cdp";

export function CdpEraShiftSection() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-3xl">
          <div className="text-eyebrow text-brand-navy-deep">
            Veinte años de cambio
          </div>
          <h2 className="mt-3">
            Cada era se gana con un{" "}
            <span className="text-brand-navy-deep">activo distinto</span>.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            El activo de la era que viene es el tuyo — si lo construyes. Los
            que ganaron las anteriores invirtieron antes de que fuese
            evidente.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {cdpEras.map((era) => {
            const highlight = era.highlight ?? false;
            return (
              <article
                key={era.kicker}
                className={cn(
                  "relative flex flex-col gap-6 rounded-2xl border p-6 md:p-8",
                  "shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-bento)]",
                  highlight
                    ? "border-brand-mint/40 bg-brand-navy-deep text-white"
                    : "border-border/70 bg-card",
                )}
              >
                <div
                  className={cn(
                    "text-eyebrow",
                    highlight ? "text-brand-mint" : "text-muted-foreground",
                  )}
                >
                  {era.kicker}
                </div>

                <h3
                  className={cn(highlight ? "text-white" : "text-brand-navy")}
                >
                  {era.name}
                </h3>

                <p
                  className={cn(
                    "text-sm leading-relaxed md:text-base",
                    highlight ? "text-white/85" : "text-muted-foreground",
                  )}
                >
                  {era.description}
                </p>

                <div
                  className={cn(
                    "mt-auto border-t pt-5",
                    highlight ? "border-white/15" : "border-border/60",
                  )}
                >
                  <div
                    className={cn(
                      "text-eyebrow",
                      highlight ? "text-white/70" : "text-muted-foreground",
                    )}
                  >
                    Se gana con
                  </div>
                  <div
                    className={cn(
                      "mt-1 font-sans text-xl font-bold uppercase tracking-tight",
                      highlight ? "text-brand-mint" : "text-brand-navy",
                    )}
                  >
                    {era.asset}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
