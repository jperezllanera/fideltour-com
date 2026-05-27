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
  const gradientFrom =
    tone === "cyan" ? "from-brand/[0.18]" : "from-white/[0.10]";

  return (
    <div
      className={cn("hero-shape absolute", className)}
      style={{
        // CSS vars que parametrizan las keyframes (.hero-shape / -float en
        // globals.css): rotación final y retardos de entrada + flotación.
        ["--rotate" as never]: `${rotate}deg`,
        ["--delay" as never]: `${delay}s`,
        ["--float-delay" as never]: `${delay * 0.4}s`,
      }}
    >
      <div className="hero-shape-float relative" style={{ width, height }}>
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
      </div>
    </div>
  );
}

/**
 * Cápsulas decorativas que flotan detrás del contenido del hero. Pensado
 * para sumarse al aro corporativo (no reemplazarlo): opacidad baja, cian
 * de marca + blancos, sin otros colores.
 *
 * Animación 100% CSS (ver `.hero-shape*` en globals.css) — por eso es un
 * server component y no añade JS al cliente. La entrada respeta
 * prefers-reduced-motion; el float continuo se mantiene a propósito.
 *
 * Uso: colocar como PRIMER hijo de un <section relative overflow-hidden
 * bg-hero-gradient ...>.
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
