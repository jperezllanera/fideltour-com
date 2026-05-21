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
 * TODO senior: este documento es un placeholder con la estructura y los datos
 * de titular vigentes de Fideltour SL. El redactado definitivo debe revisarlo
 * el equipo legal antes de publicar — el original está en
 * https://www.fideltour.com/politica-de-privacidad/ y debe servir de
 * referencia. Incluye además la cláusula específica del portal cautivo
 * (Facebook Hotspot) que aquí queda fuera por brevedad.
 */

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Información sobre el tratamiento de datos personales realizado por Fideltour SL conforme al RGPD y la LSSI-CE: finalidades, base jurídica, derechos del interesado y datos del responsable.",
  alternates: { canonical: "/politica-de-privacidad/" },
  openGraph: {
    url: "/politica-de-privacidad/",
    title: "Política de privacidad · Fideltour",
    description:
      "Tratamiento de datos personales por Fideltour SL conforme al RGPD y la LSSI-CE.",
  },
  robots: { index: true, follow: true },
};

export default function PoliticaDePrivacidadPage() {
  return (
    <>
      <LegalHero
        eyebrow="Privacidad"
        title="Política de privacidad"
        intro="Cómo trata Fideltour SL los datos personales de los usuarios, conforme al RGPD y la LSSI-CE."
        lastUpdated="2026"
      />

      <LegalBody>
        <LegalCompanyInfo />

        <LegalSection title="1. Responsable del tratamiento">
          <p>
            FIDELTOUR SL es la entidad responsable del tratamiento de los datos
            personales facilitados a través de este sitio web, así como de los
            recogidos en redes sociales en las que dispone de presencia
            corporativa. Los datos de contacto del responsable figuran en el
            bloque «Datos del titular» de esta página.
          </p>
        </LegalSection>

        <LegalSection title="2. Finalidad del tratamiento">
          <p>
            Los datos personales facilitados serán tratados por FIDELTOUR SL
            con las siguientes finalidades:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>Atender consultas, solicitudes de información o de demo.</li>
            <li>
              Gestionar la relación contractual y comercial con clientes y
              colaboradores.
            </li>
            <li>
              Enviar comunicaciones comerciales sobre productos y servicios de
              FIDELTOUR SL, cuando exista consentimiento expreso o una relación
              previa que lo ampare.
            </li>
            <li>
              Tratar la información pública de perfil cuando el usuario
              interactúa con las páginas corporativas de FIDELTOUR SL en redes
              sociales (Facebook, LinkedIn, X, etc.).
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="3. Base jurídica">
          <p>
            La base jurídica del tratamiento es, según el caso, el
            consentimiento del interesado, la ejecución de un contrato o de
            medidas precontractuales solicitadas por éste, el cumplimiento de
            obligaciones legales aplicables o el interés legítimo de FIDELTOUR
            SL en gestionar adecuadamente la relación con sus contactos
            comerciales.
          </p>
        </LegalSection>

        <LegalSection title="4. Conservación de los datos">
          <p>
            Los datos se conservarán durante el plazo estrictamente necesario
            para cumplir con las finalidades indicadas y con las obligaciones
            legales aplicables. Una vez transcurrido dicho plazo, los datos se
            bloquearán y suprimirán conforme a la normativa vigente.
          </p>
        </LegalSection>

        <LegalSection title="5. Destinatarios y cesiones">
          <p>
            FIDELTOUR SL no cederá los datos a terceros salvo obligación legal.
            Algunos proveedores de servicios (alojamiento, analítica,
            comunicación, CRM) podrán tener acceso a los datos en calidad de
            encargados del tratamiento, conforme a contratos de encargo que
            garantizan un nivel de protección equivalente al exigido por la
            normativa europea.
          </p>
        </LegalSection>

        <LegalSection title="6. Derechos del interesado">
          <p>
            Conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica
            3/2018 (LOPDGDD), el interesado puede ejercer en cualquier momento
            los derechos siguientes:
          </p>

          <LegalSubsection title="Derecho de acceso">
            <p>
              Obtener información sobre los datos personales concretos que se
              están tratando, las finalidades del tratamiento, el origen de los
              datos y las comunicaciones realizadas o previstas.
            </p>
          </LegalSubsection>

          <LegalSubsection title="Derecho de rectificación">
            <p>
              Solicitar la modificación de los datos inexactos o incompletos.
              En el caso de información pública (por ejemplo, comentarios en
              páginas corporativas en redes sociales), FIDELTOUR SL podrá
              atender el derecho únicamente sobre aquellos contenidos bajo su
              control.
            </p>
          </LegalSubsection>

          <LegalSubsection title="Derecho de supresión">
            <p>
              Solicitar la eliminación de los datos personales, salvo las
              excepciones contempladas por la propia normativa que obliguen a
              su conservación.
            </p>
          </LegalSubsection>

          <LegalSubsection title="Derecho a la limitación del tratamiento">
            <p>
              Solicitar que se limiten las finalidades del tratamiento
              originalmente previstas por FIDELTOUR SL.
            </p>
          </LegalSubsection>

          <LegalSubsection title="Derecho de portabilidad">
            <p>
              Recibir los datos personales facilitados en un formato
              estructurado, de uso común y lectura mecánica, y transmitirlos a
              otro responsable.
            </p>
          </LegalSubsection>

          <LegalSubsection title="Derecho de oposición">
            <p>
              Solicitar que no se realice el tratamiento de los datos
              personales o que se interrumpa.
            </p>
          </LegalSubsection>

          <p>
            Para ejercer cualquiera de estos derechos, el interesado podrá
            dirigir su solicitud, adjuntando copia del DNI o documento
            equivalente, a la dirección postal indicada en los datos del
            titular o por correo electrónico a{" "}
            <a
              href="mailto:club@fideltour.com"
              className="text-brand-navy underline-offset-2 hover:underline"
            >
              club@fideltour.com
            </a>
            . Adicionalmente, podrá presentar reclamación ante la Agencia
            Española de Protección de Datos como autoridad de control
            competente.
          </p>
        </LegalSection>

        <LegalSection title="7. Tratamientos específicos en redes sociales">
          <p>
            FIDELTOUR SL dispone de perfiles corporativos en redes sociales con
            la finalidad principal de dar a conocer sus productos y servicios.
            Al unirse a estas páginas, el usuario facilita su consentimiento
            para el tratamiento de los datos personales publicados en su
            perfil. FIDELTOUR SL únicamente accede y trata la información
            pública del usuario (en particular, su nombre de contacto), sin
            incorporarla a ningún fichero adicional.
          </p>
          <p>
            El usuario puede consultar en cualquier momento las políticas de
            privacidad de cada red social y configurar su perfil para preservar
            su privacidad.
          </p>
        </LegalSection>

        <LegalSection title="8. Publicidad">
          <p>
            FIDELTOUR SL podrá utilizar las redes sociales para publicitar sus
            productos y servicios. En el supuesto de que decida tratar los
            datos de contacto del usuario para acciones directas de
            prospección comercial, lo hará cumpliendo siempre las exigencias
            legales del RGPD y de la LSSI-CE.
          </p>
        </LegalSection>

        <LegalSection title="9. Seguridad y confidencialidad">
          <p>
            FIDELTOUR SL adopta las medidas técnicas y organizativas
            apropiadas para garantizar la seguridad de los datos personales y
            evitar su alteración, pérdida o acceso no autorizado, conforme al
            estado de la técnica y a los riesgos asociados al tratamiento.
          </p>
        </LegalSection>

        <LegalSection title="10. Cookies">
          <p>
            Para información detallada sobre el uso de cookies en este sitio
            web, consulta nuestra{" "}
            <Link
              href="/politica-de-cookies"
              className="font-medium text-brand-navy underline-offset-2 hover:underline"
            >
              Política de cookies
            </Link>
            .
          </p>
        </LegalSection>
      </LegalBody>
    </>
  );
}
