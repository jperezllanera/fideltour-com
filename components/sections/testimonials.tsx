import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    quote:
      "Para nosotros, Fideltour ha fortalecido nuestra fidelización de clientes al permitirnos conocer sus preferencias y enviar newsletters segmentadas. Su interfaz fácil de usar ha mejorado la eficiencia del equipo y sin duda, recomendaría Fideltour para optimizar la comunicación con los clientes y brindarles un servicio personalizado de calidad.",
    author: "Rosi Yáñez",
    role: "Sales & Marketing",
    org: "GF Hoteles",
    image: "/brand/caso-gf-costa-adeje.webp",
  },
  {
    quote:
      "En Universal Beach Hotels valoramos la comunicación y relación con nuestros clientes de forma esencial y por ello consideramos a Fideltour como una herramienta útil y eficiente. Valoramos especialmente aspectos como una interfaz intuitiva, la capacidad de personalización, el cercano soporte técnico y su servicio al cliente así como el desarrollo constante de la plataforma.",
    author: "Carla Pascual",
    role: "Sales & Marketing",
    org: "Universal Beach Hotels",
    image: "/brand/caso-universal-aquamarin.webp",
  },
  {
    quote:
      "Sin duda, la plataforma de Fideltour es completamente user friendly, fácil de usar y muy intuitiva. Estamos contentos con Fideltour y su soporte — siempre que lo hemos necesitado, ha funcionado de una forma rápida y eficiente. Nos gustan mucho las campañas automatizadas: prácticamente te olvidas y ahí siguen funcionando.",
    author: "Nuria Lista",
    role: "Resp. Marketing y Comunicación",
    org: "Oh!tels",
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
              className="overflow-visible rounded-2xl border-border/70 bg-card p-0 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-bento)]"
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
                <p className="text-sm leading-relaxed text-foreground">
                  {t.quote}
                </p>
                <div className="mt-auto border-t border-border/60 pt-4">
                  <div className="text-sm font-semibold text-foreground">
                    {t.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {t.role} · {t.org}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
