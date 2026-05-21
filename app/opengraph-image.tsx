import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/seo/site";

/*
 * Open Graph image global — Next 16 la sirve en /opengraph-image.
 *
 * Se renderiza en runtime con next/og (Satori). Diseño alineado con
 * Aurora Bento: fondo navy profundo (#0F3560), eyebrow uppercase brand cian,
 * wordmark grande blanco. Sin gradientes morados (CLAUDE.md), color de
 * marca como acento.
 *
 * Nota: para Twitter Cards añadimos un alias `twitter-image.tsx` que
 * reutiliza este mismo handler — Next no duplica la imagen, solo expone
 * el endpoint.
 *
 * Satori (next/og) no procesa Tailwind CSS ni nuestras hojas de estilo;
 * los inline styles son la única forma soportada de pintar este PNG.
 */

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.category}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadNunito(weight: 400 | 700 | 800): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=Nunito:wght@${weight}&display=swap`;
  const css = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
    },
  }).then((r) => r.text());

  const match = css.match(/src:\s*url\((https:[^)]+\.woff2)\)/);
  if (!match) throw new Error(`No se pudo extraer la URL de Nunito ${weight}`);
  const fontRes = await fetch(match[1]);
  return fontRes.arrayBuffer();
}

export default async function OpengraphImage(): Promise<ImageResponse> {
  const [regular, bold, extraBold] = await Promise.all([
    loadNunito(400),
    loadNunito(700),
    loadNunito(800),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(120% 80% at 90% 10%, #1A4A7E 0%, #0F3560 55%, #08233F 100%)",
          color: "#FFFFFF",
          fontFamily: "Nunito",
          position: "relative",
        }}
      >
        {/* Aro de marca (single-ring motif). */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -200,
            width: 700,
            height: 700,
            borderRadius: 9999,
            border: "80px solid rgba(37, 202, 210, 0.22)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#25CAD2",
            }}
          >
            {siteConfig.category}
          </span>
          <span
            style={{
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            {siteConfig.name}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            maxWidth: 880,
          }}
        >
          <span
            style={{
              fontSize: 34,
              fontWeight: 700,
              lineHeight: 1.2,
              color: "#FFFFFF",
            }}
          >
            Del CRM al CDP: el hotelero que domina el dato, domina la venta directa.
          </span>
          <span
            style={{
              fontSize: 22,
              fontWeight: 400,
              color: "rgba(255,255,255,0.78)",
            }}
          >
            fideltour.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Nunito", data: regular, style: "normal", weight: 400 },
        { name: "Nunito", data: bold, style: "normal", weight: 700 },
        { name: "Nunito", data: extraBold, style: "normal", weight: 800 },
      ],
    },
  );
}
