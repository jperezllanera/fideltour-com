import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    quote:
      "Pasar del CRM al CDP de Fideltour nos permitió subir la venta directa un 28% en doce meses, sin contratar más equipo.",
    author: "Director de eCommerce",
    org: "Grupo hotelero nacional",
    image: "/brand/caso-gf-costa-adeje.webp",
  },
  {
    quote:
      "Por primera vez tenemos un único perfil por huésped que cruza reservas, estancias y comunicaciones. Cambia la forma de tomar decisiones.",
    author: "CMO",
    org: "Universal Hoteles",
    image: "/brand/caso-universal-aquamarin.webp",
  },
  {
    quote:
      "El equipo de marketing ya no le pide datos a IT. Crea sus segmentos, los activa y mide el revenue. Eso es transformación real.",
    author: "Revenue Manager",
    org: "Ohtels",
    image: "/brand/caso-ohtels-gran-almeria.webp",
  },
];

export function TestimonialsSection() {
  return (
    <section id="clientes" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <div className="max-w-2xl">
          <div className="text-eyebrow text-brand-navy-deep">
            Casos · Clientes
          </div>
          <h2 className="mt-3">
            Qué dicen los clientes de Fideltour
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <Card
              key={t.org}
              className="overflow-hidden rounded-2xl border-border/70 bg-card p-0 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-bento)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={t.image}
                  alt={`${t.org} — caso de éxito Fideltour`}
                  fill
                  sizes="(min-width:768px) 33vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/10 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-eyebrow text-white">
                  {t.org}
                </div>
              </div>
              <CardContent className="flex h-full flex-col gap-5 p-6">
                <div
                  aria-hidden
                  className="text-2xl leading-none text-brand"
                >
                  &ldquo;
                </div>
                <p className="text-sm leading-relaxed text-foreground/90">
                  {t.quote}
                </p>
                <div className="mt-auto border-t border-border/60 pt-4 text-sm font-medium text-foreground">
                  {t.author}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
