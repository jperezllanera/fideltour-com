"use client";

import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type ShapeProps = {
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  tone?: "cyan" | "white";
  className?: string;
};

function ElegantShape({
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  tone = "cyan",
  className,
}: ShapeProps) {
  // Reduced motion: respetamos la entrada (sin desplazamiento + rotación de
  // golpe) pero mantenemos el float continuo, porque es muy gentil (12 px en
  // 14 s) y forma parte de la identidad visual del hero. Si quitamos el loop
  // las cápsulas parecen un bug visual, no una decisión de accesibilidad.
  const reduced = useReducedMotion();

  const gradientFrom =
    tone === "cyan" ? "from-brand/[0.18]" : "from-white/[0.10]";

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: -60, rotate: rotate - 12 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={
        reduced
          ? { duration: 0 }
          : {
              duration: 2.2,
              delay,
              ease: [0.23, 0.86, 0.39, 0.96],
              opacity: { duration: 1.2 },
            }
      }
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 0.4,
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradientFrom,
            "backdrop-blur-[2px] border border-white/[0.12]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.06)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.16),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

/**
 * Cápsulas decorativas que flotan detrás del contenido del hero. Pensado
 * para sumarse al aro corporativo (no reemplazarlo): opacidad baja, cian
 * de marca + blancos, sin otros colores.
 *
 * Uso: colocar como PRIMER hijo de un <section relative overflow-hidden
 * bg-hero-gradient ...>. Es client-only por usar motion.
 */
export function HeroShapes() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <ElegantShape
        delay={0.35}
        width={460}
        height={110}
        rotate={-8}
        tone="white"
        className="left-[-10%] top-[16%] md:left-[-4%]"
      />
      <ElegantShape
        delay={0.7}
        width={260}
        height={72}
        rotate={16}
        tone="cyan"
        className="left-[38%] bottom-[8%] hidden md:block"
      />
      <ElegantShape
        delay={1}
        width={160}
        height={48}
        rotate={-22}
        tone="white"
        className="left-[18%] top-[6%] hidden md:block"
      />
    </div>
  );
}
