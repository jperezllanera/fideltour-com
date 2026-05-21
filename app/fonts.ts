import { Nunito } from "next/font/google";

/**
 * Nunito — sans-serif corporativa de Fideltour.
 * Self-hosted automáticamente por `next/font/google` (sin requests a Google).
 */
export const sans = Nunito({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});
