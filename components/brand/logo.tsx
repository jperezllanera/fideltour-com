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
 * Logo oficial Fideltour. PNG en /public/brand/logo.png (1614x262, paleta
 * #575756 + #25CAD2).
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
        src="/brand/fideltour-logo.png"
        alt="Fideltour — CDP para hoteles"
        width={width}
        height={height}
        priority
        className="h-6 w-auto md:h-[26px]"
      />
    </Link>
  );
}
