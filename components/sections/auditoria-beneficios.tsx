import { FileText, MousePointerClick, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

const beneficios = [
  {
    icon: FileText,
    label: "Informe personalizado",
    title: "Tu hotel, tu caso, tu informe.",
    description:
      "Te enviamos un informe personalizado con el caso específico de tu hotel o cadena. Sin plantillas genéricas: lo que tiene sentido para tu operación y tu mercado.",
  },
  {
    icon: MousePointerClick,
    label: "Rápido y sencillo",
    title: "Unos pocos clics y a tu bandeja.",
    description:
      "¿Qué debes hacer por tu parte? Rellenar un formulario con los datos necesarios para que nuestro equipo de fidelización construya tu informe.",
  },
  {
    icon: Building2,
    label: "Números reales",
    title: "Más de 1.000 hoteles que ya lo hacen.",
    description:
      "El resultado de tu auditoría está avalado por nuestra experiencia con más de 1.000 hoteles que ya usan Fideltour para dominar su dato y su venta directa.",
  },
];

export function AuditoriaBeneficiosSection() {
  return (
    <section id="beneficios" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <div className="max-w-2xl">
          <div className="text-eyebrow text-brand-navy-deep">
            Qué obtienes · 03
          </div>
          <h2 className="mt-3">
            Una auditoría diseñada para hoteleros que quieren menos OTA y más
            venta directa.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Tras completar el formulario te enviaremos tu informe personalizado
            con la auditoría de fidelización completa. Cuanta más información
            nos compartas sobre tu hotel, más preciso será el análisis.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          {beneficios.map(({ icon: Icon, label, title, description }, i) => (
            <article
              key={label}
              style={{ ["--i" as never]: i }}
              className={cn(
                "bento-cell relative flex flex-col gap-5 rounded-2xl border border-border/70 bg-card p-6 md:p-8",
                "shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-bento)]",
              )}
            >
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-navy text-white">
                <Icon className="size-5" aria-hidden />
              </span>

              <div className="flex flex-col gap-3">
                <div className="text-eyebrow text-brand-navy-deep">{label}</div>
                <h3>{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
