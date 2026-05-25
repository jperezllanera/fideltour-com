import { ArrowRight, Database, MessageCircle, ShoppingBag } from "lucide-react";

export function CdpSalesAgentSection() {
  return (
    <section className="relative bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-3xl">
          <div className="text-eyebrow text-brand-navy-deep">
            La reserva de mañana
          </div>
          <h2 className="mt-3">
            El huésped preguntará por tu hotel y le responderá{" "}
            <span className="text-brand-navy-deep">tu agente de venta</span>.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Tu motor de reservas conversa, propone, cotiza y cierra. Tu canal
            directo deja de esperar a que el huésped rellene un formulario y
            empieza a hablar. Pero un agente de venta sin contexto alucina.
            O solo adivina.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch md:gap-3">
          <article className="flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)] md:p-7">
            <span className="text-eyebrow text-muted-foreground">El huésped</span>
            <div className="inline-flex size-12 items-center justify-center rounded-full bg-brand-navy text-white">
              <ShoppingBag className="size-5" aria-hidden />
            </div>
            <h3 className="text-brand-navy">Huésped.</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Web · WhatsApp · voz. Pregunta y espera respuesta.
            </p>
          </article>

          <div className="hidden md:flex flex-col items-center justify-center gap-1 px-1">
            <ArrowRight className="size-5 text-brand" aria-hidden />
            <span className="text-eyebrow text-muted-foreground">Pregunta</span>
          </div>

          <article className="flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)] md:p-7">
            <span className="text-eyebrow text-muted-foreground">
              Tu motor de reservas
            </span>
            <div className="inline-flex size-12 items-center justify-center rounded-full bg-brand-navy text-white">
              <MessageCircle className="size-5" aria-hidden />
            </div>
            <h3 className="text-brand-navy">Agente de venta.</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Conversa, propone, cotiza y cierra.{" "}
              <strong className="font-semibold text-foreground">
                Necesita saber a quién le habla.
              </strong>
            </p>
          </article>

          <div className="hidden md:flex flex-col items-center justify-center gap-1 px-1">
            <div className="flex items-center gap-1 text-brand">
              <ArrowRight className="size-4" aria-hidden />
              <ArrowRight className="size-4 -scale-x-100" aria-hidden />
            </div>
            <span className="text-eyebrow text-muted-foreground">Consulta</span>
          </div>

          <article className="flex flex-col gap-4 rounded-2xl border border-brand-mint/40 bg-brand-navy-deep p-6 text-white shadow-[var(--shadow-bento)] md:p-7">
            <span className="text-eyebrow text-brand-mint">Tu CDP · Fideltour</span>
            <div className="inline-flex size-12 items-center justify-center rounded-full bg-brand-mint text-brand-navy-deep">
              <Database className="size-5" aria-hidden />
            </div>
            <h3 className="text-white">Agente de contexto.</h3>
            <p className="text-sm leading-relaxed text-white/85">
              Le dice quién es, qué reservó y qué le gusta. Sin él, adivina.
              Con él, cierra la venta directa — contigo, sin comisión.
            </p>
          </article>
        </div>

        <p className="mt-10 text-center text-base text-muted-foreground md:text-lg">
          Y mañana, al otro lado, no habrá una persona: habrá{" "}
          <strong className="font-semibold text-brand-navy">
            el agente del propio huésped
          </strong>{" "}
          negociando con el tuyo.
        </p>
      </div>
    </section>
  );
}
