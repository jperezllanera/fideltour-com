import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** wordmark: imagen completa "fideltour" · compact: solo la "O" como isotipo */
  variant?: "wordmark" | "compact";
  /** alto en px (el ancho se calcula con la proporción 1614:262 del PNG) */
  height?: number;
};

/**
 * Logo oficial Fideltour. WebP en /public/brand/fideltour-logo.webp
 * (1614x262, paleta #575756 + #25CAD2).
 * TODO senior: cuando llegue la versión vectorial (SVG), sustituir el
 * <Image> por <svg> inline para escalar perfectamente y permitir recolor.
 */
export function Logo({ className, variant = "wordmark", height = 24 }: LogoProps) {
  if (variant === "compact") {
    return (
      <Link
        href="/"
        aria-label="Fideltour — Inicio"
        className={cn(
          "group inline-flex items-center outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md",
          className,
        )}
      >
        <span
          aria-hidden
          className="inline-flex size-7 items-center justify-center rounded-full border-[2.5px] border-brand"
        />
      </Link>
    );
  }

  // Proporción del PNG original: 1614 / 262 ≈ 6.16
  const width = Math.round((1614 / 262) * height);

  return (
    <Link
      href="/"
      aria-label="Fideltour — Inicio"
      className={cn(
        "group inline-flex items-center outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md",
        className,
      )}
    >
      <Image
        src="/brand/fideltour-logo.webp"
        alt="Fideltour — CDP para hoteles"
        // Cabecera above-the-fold: carga ansiosa pero SIN preload, para no
        // competir con el preload del mockup hero (LCP) en el carril crítico.
        width={width}
        height={height}
        loading="eager"
        sizes="(min-width: 768px) 160px, 144px"
        className="h-6 w-auto md:h-[26px]"
      />
    </Link>
  );
}
