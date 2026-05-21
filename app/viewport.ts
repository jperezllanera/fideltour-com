import type { Viewport } from "next";

/*
 * Viewport global. Next 16 separa esto del export `metadata` para evitar
 * recomputar todo el SSR cuando solo cambia el color del navegador.
 *
 * - colorScheme: solo claro hasta que se apruebe dark mode (CLAUDE.md).
 * - themeColor: claro = neutro cálido; oscuro = navy de marca para
 *   navegadores que aún elijan dark UI.
 */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF7F2" },
    { media: "(prefers-color-scheme: dark)", color: "#0F3560" },
  ],
};
