"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, type PanInfo } from "motion/react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

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

const ROTATE_INTERVAL = 6000;

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -10% 0px",
  });

  // Auto-rotación; se reinicia el temporizador cada vez que cambia el activo
  // (también al hacer click en un dot o arrastrar) para no saltar antes de tiempo.
  useEffect(() => {
    const id = setInterval(() => {
      setActive((current) => (current + 1) % items.length);
    }, ROTATE_INTERVAL);
    return () => clearInterval(id);
  }, [active]);

  const go = (dir: 1 | -1) =>
    setActive((current) => (current + dir + items.length) % items.length);

  // Swipe (dedo) / drag (cursor): pasa de tarjeta si el gesto supera un umbral
  // de distancia o de velocidad; si no, motion la devuelve al origen.
  const handleDragEnd = (_e: unknown, info: PanInfo) => {
    const { offset, velocity } = info;
    if (offset.x < -60 || velocity.x < -400) go(1);
    else if (offset.x > 60 || velocity.x > 400) go(-1);
  };

  return (
    <section ref={sectionRef} id="clientes" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Izquierda: titular + navegación por dots */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-eyebrow text-brand-navy-deep">
              Casos · Clientes
            </div>
            <h2 className="mt-3">Qué dicen los clientes de Fideltour</h2>
            <p className="mt-5 max-w-prose text-muted-foreground">
              Hoteleros que dominan su dato y refuerzan su venta directa con
              Fideltour. Esto es lo que cuentan.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {items.map((t, i) => (
                <button
                  key={t.org}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Ver testimonio de ${t.org}`}
                  aria-pressed={active === i}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-300",
                    active === i
                      ? "w-10 bg-brand"
                      : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50",
                  )}
                />
              ))}
            </div>
          </motion.div>

          {/* Derecha: tarjetas apiladas en una celda; rota la activa */}
          <motion.div
            className="testimonial-rotator"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {items.map((t, i) => {
              const isActive = active === i;
              return (
                <motion.figure
                  key={t.org}
                  aria-hidden={!isActive}
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    x: isActive ? 0 : 40,
                    scale: isActive ? 1 : 0.96,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  {...(isActive
                    ? {
                        drag: "x" as const,
                        dragConstraints: { left: 0, right: 0 },
                        dragElastic: 0.6,
                        dragSnapToOrigin: true,
                        onDragEnd: handleDragEnd,
                      }
                    : {})}
                  className={cn(
                    "select-none overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-bento)]",
                    isActive
                      ? "z-10 cursor-grab active:cursor-grabbing"
                      : "pointer-events-none z-0",
                  )}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={t.image}
                      alt={`${t.org} — caso de éxito Fideltour`}
                      fill
                      draggable={false}
                      sizes="(min-width:768px) 40vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/10 to-transparent" />
                    <figcaption className="absolute bottom-3 left-4 right-4 text-eyebrow text-white">
                      {t.org}
                    </figcaption>
                  </div>

                  <div className="flex flex-col gap-5 p-8">
                    <Quote
                      aria-hidden
                      className="h-8 w-8 rotate-180 text-brand/30"
                    />
                    <blockquote className="text-foreground">
                      {t.quote}
                    </blockquote>
                    <div className="mt-2 border-t border-border/60 pt-4">
                      <div className="font-semibold text-foreground">
                        {t.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {t.role} · {t.org}
                      </div>
                    </div>
                  </div>
                </motion.figure>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
