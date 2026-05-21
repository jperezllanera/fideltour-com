import { Nunito } from "next/font/google";

/**
 * Nunito — única familia tipográfica de Fideltour (display + cuerpo +
 * etiquetas). Self-hosted automáticamente por `next/font/google`.
 * Diferenciación por peso, no por familia. Ver CLAUDE.md › Tipografía.
 */
export const sans = Nunito({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});
