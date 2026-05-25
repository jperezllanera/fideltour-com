import { Bot, Sparkles } from "lucide-react";

export function CdpContextComparisonSection() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-3xl">
          <div className="text-eyebrow text-brand-navy-deep">La diferencia</div>
          <h2 className="mt-3">
            La misma IA. <span className="text-brand-navy-deep">Dos resultados</span>.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            El modelo de IA es el mismo. La diferencia está en el dato que
            tiene debajo. Sin contexto, suena a chatbot. Con contexto,
            reconoce.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Sin contexto */}
          <article className="flex flex-col gap-5 rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)] md:p-8">
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-muted-foreground/60" aria-hidden />
              <span className="text-eyebrow text-muted-foreground">
                IA sin contexto
              </span>
            </div>
            <h3 className="text-brand-navy">Genérica.</h3>

            <div className="flex items-start gap-3">
              <div className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                <Bot className="size-4" aria-hidden />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-eyebrow text-muted-foreground">
                  Recepción · 18:42 · Anónimo
                </div>
                <div className="max-w-md rounded-2xl rounded-tl-sm bg-muted px-4 py-3 text-sm leading-relaxed text-foreground/80">
                  Hola, ¿en qué puedo ayudarte? Tenemos restaurante, spa y
                  gimnasio disponibles.
                </div>
              </div>
            </div>

            <div className="mt-auto border-t border-border/60 pt-4">
              <div className="text-eyebrow text-muted-foreground">Resultado</div>
              <p className="mt-1 text-sm font-semibold text-foreground">
                Suena a chatbot. Conversiones planas.
              </p>
            </div>
          </article>

          {/* Con contexto */}
          <article className="flex flex-col gap-5 rounded-2xl border border-brand-mint/40 bg-brand-navy-deep p-6 text-white shadow-[var(--shadow-bento)] md:p-8">
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-brand-mint" aria-hidden />
              <span className="text-eyebrow text-brand-mint">
                IA con contexto
              </span>
            </div>
            <h3 className="text-white">Reconocible.</h3>

            <div className="flex items-start gap-3">
              <div className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-mint text-brand-navy-deep">
                <Sparkles className="size-4" aria-hidden />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-1.5 text-eyebrow text-white/70">
                  Recepción · 18:42
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-white">
                    Alba · 4ª visita
                  </span>
                </div>
                <div className="max-w-md rounded-2xl rounded-tl-sm bg-brand-mint/20 px-4 py-3 text-sm leading-relaxed text-white ring-1 ring-brand-mint/30">
                  Hola{" "}
                  <span className="rounded-md bg-brand-mint/30 px-1.5 py-0.5 font-semibold">
                    Alba
                  </span>
                  , en tu última estancia reservaste{" "}
                  <span className="rounded-md bg-brand-mint/30 px-1.5 py-0.5 font-semibold">
                    spa
                  </span>
                  . ¿Te lo dejo a las{" "}
                  <span className="rounded-md bg-brand-mint/30 px-1.5 py-0.5 font-semibold">
                    18 h
                  </span>
                  , como la otra vez?
                </div>
              </div>
            </div>

            <div className="mt-auto border-t border-white/15 pt-4">
              <div className="text-eyebrow text-white/70">Resultado</div>
              <p className="mt-1 text-sm font-semibold text-brand-mint">
                Reconocimiento real. Venta directa que crece.
              </p>
            </div>
          </article>
        </div>

        <p className="mt-10 text-center text-base text-muted-foreground md:text-lg">
          La diferencia no está en la IA. Está en{" "}
          <strong className="font-semibold text-brand-navy">el dato</strong>{" "}
          que tiene debajo.
        </p>
      </div>
    </section>
  );
}
