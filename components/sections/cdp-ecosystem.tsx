import { ArrowRight, Database, Layers, MessagesSquare, Plug2 } from "lucide-react";

const inputs = [
  { number: "01", title: "Integraciones", icon: Plug2 },
  { number: "02", title: "Aplicaciones", icon: Layers },
  { number: "03", title: "Canales", icon: MessagesSquare },
];

export function CdpEcosystemSection() {
  return (
    <section className="relative bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-3xl">
          <div className="text-eyebrow text-brand-navy-deep">
            La capa que lo une
          </div>
          <h2 className="mt-3">
            El <span className="text-brand-navy-deep">CDP para hoteles</span>{" "}
            es el centro del ecosistema del dato.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Todo el dato entra. El contexto sale. Y alimenta a tu agente de
            venta para cerrar reserva directa, no comisión a la OTA.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-[1fr_auto_1.2fr_auto_1fr] md:gap-4">
          {/* Inputs */}
          <ul className="flex flex-col gap-3">
            {inputs.map((input) => {
              const Icon = input.icon;
              return (
                <li
                  key={input.number}
                  className="flex items-center gap-3 rounded-2xl border border-border/70 bg-card p-4 shadow-[var(--shadow-soft)] md:p-5"
                >
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-navy text-white">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-eyebrow text-muted-foreground">
                      {input.number}
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      {input.title}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:flex items-center justify-center">
            <ArrowRight className="size-6 text-brand" aria-hidden />
          </div>

          {/* CDP central */}
          <article className="relative flex flex-col items-center gap-4 rounded-3xl border border-brand/40 bg-brand-navy-deep p-8 text-center text-white shadow-[var(--shadow-elevated)]">
            <span className="inline-flex size-14 items-center justify-center rounded-full bg-brand text-brand-navy-deep">
              <Database className="size-6" aria-hidden />
            </span>
            <div className="text-eyebrow text-brand">El centro</div>
            <div className="font-sans text-2xl font-bold text-white md:text-3xl">
              CDP para hoteles.
            </div>
            <p className="text-sm leading-relaxed text-white/85">
              Lee, interpreta y guarda el contexto vivo del huésped.
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
              <span className="text-eyebrow rounded-full bg-white/10 px-3 py-1 text-white/85">
                Lee
              </span>
              <span className="text-eyebrow rounded-full bg-white/10 px-3 py-1 text-white/85">
                Interpreta
              </span>
              <span className="text-eyebrow rounded-full bg-white/10 px-3 py-1 text-white/85">
                Guarda
              </span>
            </div>
          </article>

          <div className="hidden md:flex items-center justify-center">
            <ArrowRight className="size-6 text-brand" aria-hidden />
          </div>

          {/* Output */}
          <article className="flex flex-col gap-3 rounded-2xl border border-brand/30 bg-card p-6 shadow-[var(--shadow-soft)] md:p-7">
            <div className="text-eyebrow text-brand-navy-deep">
              Salida · contexto vivo
            </div>
            <h3 className="text-brand-navy">Agente de venta.</h3>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              Vende con contexto. Cierra venta directa frente a las OTAs —
              contigo, sin comisión.
            </p>
          </article>
        </div>

        <p className="mt-10 max-w-3xl text-base text-muted-foreground md:text-lg">
          No es un sistema más en tu stack. Es{" "}
          <strong className="font-semibold text-brand-navy">
            la capa de arriba
          </strong>{" "}
          que convierte tus datos sueltos en el contexto que cierra la venta.
          Sin el de abajo, el de arriba pasa hambre.
        </p>
      </div>
    </section>
  );
}
