import { cn } from "@/lib/utils";
import { cdpTimeline } from "@/lib/content/cdp";

export function CdpTimelineSection() {
  return (
    <section className="relative bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-3xl">
          <div className="text-eyebrow text-brand-navy-deep">Aquí estamos</div>
          <h2 className="mt-3">
            Veinticinco años.{" "}
            <span className="text-brand">
              La siguiente jugada eres tú.
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Cada salto histórico cambia el activo con el que compite el
            hotel. Hoy te toca el tuyo — el salto más grande de los últimos
            veinte años.
          </p>
        </div>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-3 hidden h-px bg-border md:block"
          />

          <ol className="grid gap-6 md:grid-cols-9 md:gap-3">
            {cdpTimeline.map((step) => (
              <li
                key={step.year}
                className="flex flex-col gap-2 md:items-start"
              >
                <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-2">
                  <span
                    className={cn(
                      "inline-flex size-6 items-center justify-center rounded-full ring-4",
                      step.current
                        ? "bg-brand ring-brand/30"
                        : step.future
                          ? "bg-card ring-border border-2 border-dashed border-brand"
                          : "bg-brand-navy-deep ring-card",
                    )}
                    aria-hidden
                  />
                  <span
                    className={cn(
                      "text-eyebrow",
                      step.current
                        ? "text-brand-navy-deep"
                        : "text-muted-foreground",
                    )}
                  >
                    {step.year}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span
                    className={cn(
                      "text-sm font-bold leading-tight md:text-base",
                      step.current ? "text-brand-navy-deep" : "text-brand-navy",
                    )}
                  >
                    {step.title}
                  </span>
                  <span className="text-xs leading-snug text-muted-foreground">
                    {step.description}
                  </span>
                  {step.current && (
                    <span className="text-eyebrow mt-1 inline-flex w-fit items-center gap-1.5 rounded-full bg-brand/15 px-2 py-0.5 text-brand-navy-deep">
                      Ahora · tú
                    </span>
                  )}
                  {step.future && (
                    <span className="text-eyebrow mt-1 inline-flex w-fit items-center gap-1.5 rounded-full border border-dashed border-brand px-2 py-0.5 text-brand">
                      Lo que viene
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
