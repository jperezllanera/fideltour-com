"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";

type Props = {
  /** Valor final al que se anima el contador. */
  to: number;
  /** Duración en milisegundos. */
  duration?: number;
};

/**
 * Réplica del widget contador de Elementor de la web original
 * (`elementor-counter-number`, anima 0 → N en viewport).
 */
export function MarketplaceCounter({ to, duration = 2000 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: duration / 1000,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span
      ref={ref}
      className="tabular-nums"
      aria-label={`Más de ${to} conexiones`}
    >
      {value}
    </span>
  );
}
