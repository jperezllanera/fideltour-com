import type { Metadata } from "next";
import Link from "next/link";

import {
  LegalBody,
  LegalCompanyInfo,
  LegalHero,
  LegalSection,
  LegalSubsection,
} from "@/components/legal/legal-page";

/*
 * TODO senior: este documento es un placeholder con la estructura general de
 * la política de cookies vigente de Fideltour SL. La tabla de cookies con
 * proveedor, propósito y caducidad debe generarse a partir del escáner real
 * del sitio (Cookiebot, OneTrust, etc.) — el original está en
 * https://www.fideltour.com/politica-de-cookies/ y debe servir de referencia.
 */

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Información sobre las cookies utilizadas en el sitio web de Fideltour SL: tipos, finalidad, gestión del consentimiento y configuración del navegador.",
  alternates: { canonical: "/politica-de-cookies/" },
  openGraph: {
    url: "/politica-de-cookies/",
    title: "Política de cookies · Fideltour",
    description:
      "Información sobre las cookies utilizadas en el sitio web de Fideltour SL.",
  },
  robots: { index: true, follow: true },
};

export default function PoliticaDeCookiesPage() {
  return (
    <>
      <LegalHero
        eyebrow="Cookies"
        title="Política de cookies"
        intro="Información sobre las cookies utilizadas en el sitio web de Fideltour SL, su finalidad y cómo gestionar el consentimiento."
        lastUpdated="2026"
      />

      <LegalBody>
        <LegalCompanyInfo />

        <LegalSection title="¿Qué es una cookie?">
          <p>
            Una cookie es un pequeño archivo que se descarga en el dispositivo
            del usuario al acceder a determinadas páginas web. Las cookies
            permiten almacenar y recuperar información sobre los hábitos de
            navegación del usuario o de su equipo y, dependiendo de la
            información que contengan y del uso que se haga del equipo, pueden
            utilizarse para reconocer al usuario.
          </p>
          <p>
            Las cookies son esenciales para el funcionamiento de internet,
            aportando ventajas en la prestación de servicios interactivos y
            facilitando la navegación y usabilidad de este sitio web.
          </p>
        </LegalSection>

        <LegalSection title="Tipos de cookies">
          <LegalSubsection title="Según la entidad que las gestione">
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <strong className="text-brand-navy">Cookies propias:</strong>{" "}
                las gestionadas directamente por FIDELTOUR SL para prestar el
                servicio solicitado por el usuario.
              </li>
              <li>
                <strong className="text-brand-navy">Cookies de terceros:</strong>{" "}
                las recabadas y gestionadas por un tercero distinto a
                FIDELTOUR SL.
              </li>
            </ul>
          </LegalSubsection>

          <LegalSubsection title="Según el plazo de tiempo en que permanezcan activadas">
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <strong className="text-brand-navy">Cookies de sesión:</strong>{" "}
                recaban datos mientras el usuario navega por la red, con la
                finalidad de prestar el servicio solicitado.
              </li>
              <li>
                <strong className="text-brand-navy">Cookies persistentes:</strong>{" "}
                se almacenan en el dispositivo y la información obtenida es
                utilizada por el responsable de la cookie para prestar el
                servicio.
              </li>
            </ul>
          </LegalSubsection>

          <LegalSubsection title="Según su finalidad">
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <strong className="text-brand-navy">Técnicas:</strong> necesarias
                para la correcta navegación por el sitio web.
              </li>
              <li>
                <strong className="text-brand-navy">De personalización:</strong>{" "}
                permiten recordar preferencias del usuario (idioma, región).
              </li>
              <li>
                <strong className="text-brand-navy">De análisis:</strong>{" "}
                permiten al responsable analizar el comportamiento de los
                usuarios, llevar un seguimiento del uso del sitio y elaborar
                estadísticas.
              </li>
              <li>
                <strong className="text-brand-navy">Publicitarias:</strong>{" "}
                permiten incluir espacios publicitarios en la web según el
                contenido de la misma.
              </li>
              <li>
                <strong className="text-brand-navy">De publicidad comportamental:</strong>{" "}
                permiten incluir espacios publicitarios según la información
                obtenida a través de los hábitos de navegación del usuario.
              </li>
            </ul>
          </LegalSubsection>
        </LegalSection>

        <LegalSection title="Cookies utilizadas en este sitio web">
          <p>
            Este sitio web utiliza cookies propias y de terceros con
            finalidades técnicas, analíticas y de marketing, así como con
            servicios de redes sociales. El detalle concreto de cookies
            (proveedor, propósito, caducidad y categoría) se publica en la
            declaración de cookies generada automáticamente por la plataforma
            de consentimiento.
          </p>
          <p className="text-sm text-muted-foreground">
            {/* TODO senior: insertar aquí el bloque dinámico de Cookiebot
                (o el proveedor que se acabe utilizando) con la tabla real de
                cookies clasificadas en Necesarias, Preferencias, Estadística,
                Marketing y No clasificadas. */}
            Próximamente: tabla detallada de cookies por categoría.
          </p>
        </LegalSection>

        <LegalSection title="Gestión del consentimiento">
          <p>
            El usuario puede aceptar, rechazar o configurar las cookies no
            estrictamente necesarias en cualquier momento a través del panel
            de consentimiento disponible en el propio sitio web. Las cookies
            técnicas no requieren consentimiento por ser indispensables para
            el funcionamiento de la página.
          </p>
          <p>
            En cualquier momento, el usuario podrá cambiar o retirar el
            consentimiento prestado desde la declaración de cookies del sitio.
          </p>
        </LegalSection>

        <LegalSection title="Configuración del navegador">
          <p>
            El usuario también puede configurar su navegador para ser
            informado de la recepción de cookies y, si lo desea, impedir que
            se instalen en su disco duro. A continuación se facilitan los
            enlaces oficiales con las instrucciones de configuración en los
            principales navegadores:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <a
                className="text-brand-navy underline-offset-2 hover:underline"
                href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firefox
              </a>
            </li>
            <li>
              <a
                className="text-brand-navy underline-offset-2 hover:underline"
                href="https://support.google.com/chrome/answer/95647?hl=es"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chrome
              </a>
            </li>
            <li>
              <a
                className="text-brand-navy underline-offset-2 hover:underline"
                href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
              >
                Edge / Internet Explorer
              </a>
            </li>
            <li>
              <a
                className="text-brand-navy underline-offset-2 hover:underline"
                href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                className="text-brand-navy underline-offset-2 hover:underline"
                href="https://help.opera.com/en/latest/web-preferences/#cookies"
                target="_blank"
                rel="noopener noreferrer"
              >
                Opera
              </a>
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="Más información">
          <p>
            Para más información sobre el tratamiento de datos personales
            asociado al uso de cookies, consulta nuestra{" "}
            <Link
              href="/politica-de-privacidad"
              className="font-medium text-brand-navy underline-offset-2 hover:underline"
            >
              Política de privacidad
            </Link>
            .
          </p>
        </LegalSection>
      </LegalBody>
    </>
  );
}
