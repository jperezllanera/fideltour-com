"use client";

/**
 * ContainerScroll — efecto Aceternity adaptado al stack del repo.
 *
 * NO es un primitive de shadcn (a pesar de vivir en components/ui/). Es un
 * efecto de scroll-driven 3D: el contenido entra desde abajo rotando en X
 * y escalando según el progress del scroll. La rotación inicial es
 * pronunciada (35° en desktop) para que el movimiento se note al scrollear.
 *
 * Sin chrome de laptop — el wrapper original de Aceternity envolvía el
 * children en un marco oscuro que solo tiene sentido para screenshots
 * planos. Con imágenes que ya traen su propio device chrome (laptop, móvil)
 * sale "device dentro de device", que es visualmente confuso. Aquí el
 * children flota directamente y la sombra multi-stop (`.scroll-laptop-shadow`)
 * le da profundidad sin añadir marco.
 *
 * Las dimensiones y la sombra viven en `app/globals.css` para cumplir la
 * regla de markup hygiene del repo. Import del motor de animación:
 * `motion/react` (rebrand de framer-motion), no `framer-motion`.
 */

import * as React from "react";
import { useScroll, useTransform, motion, type MotionValue } from "motion/react";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Inicial pronunciado (35° desktop, 25° móvil) — sutilezas se pierden
  // cuando el viewport es grande. La rotación se resuelve antes de
  // llegar al centro del scroll-range para que el final del efecto
  // quede plano antes de salir de viewport.
  const rotateStart = isMobile ? 25 : 35;
  const scaleStart = isMobile ? 0.78 : 0.92;
  const rotate = useTransform(scrollYProgress, [0.1, 0.55], [rotateStart, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.55], [scaleStart, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <div
      ref={containerRef}
      className="scroll-stage relative flex items-center justify-center p-2 md:p-20"
    >
      <div className="scroll-stage-perspective relative w-full py-10 md:py-40">
        <motion.div
          style={{ translateY: translate }}
          className="mx-auto max-w-5xl text-center"
        >
          {titleComponent}
        </motion.div>
        <Card rotate={rotate} scale={scale}>{children}</Card>
      </div>
    </div>
  );
};

function Card({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      style={{ rotateX: rotate, scale }}
      className="scroll-card-shadow relative mx-auto mt-8 w-full max-w-5xl"
    >
      {children}
    </motion.div>
  );
}
