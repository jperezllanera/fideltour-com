import type { Metadata } from "next";
import Link from "next/link";

import {
  LegalBody,
  LegalCompanyInfo,
  LegalHero,
  LegalSection,
} from "@/components/legal/legal-page";

/*
 * TODO senior: este documento es un placeholder con la estructura y los datos
 * de titular vigentes de Fideltour SL. El redactado definitivo debe revisarlo
 * el equipo legal antes de publicar — el original está en
 * https://www.fideltour.com/terminos-y-condiciones/ y debe servir de
 * referencia.
 */

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Condiciones de uso del sitio web de Fideltour SL: responsabilidades del usuario, propiedad intelectual, política de enlaces, protección de datos y jurisdicción aplicable.",
  alternates: { canonical: "/terminos-y-condiciones/" },
  openGraph: {
    url: "/terminos-y-condiciones/",
    title: "Términos y condiciones · Fideltour",
    description: "Condiciones de uso del sitio web de Fideltour SL.",
  },
  robots: { index: true, follow: true },
};

export default function TerminosYCondicionesPage() {
  return (
    <>
      <LegalHero
        eyebrow="Aviso legal"
        title="Términos y condiciones"
        intro="Condiciones que regulan el acceso, navegación y uso del sitio web titularidad de Fideltour SL."
        lastUpdated="2026"
      />

      <LegalBody>
        <LegalCompanyInfo />

        <LegalSection title="1. Usuario y régimen de responsabilidades">
          <p>
            La navegación, acceso y uso del sitio web de FIDELTOUR SL otorga la
            condición de usuario, que acepta, desde el inicio de la navegación,
            todas las condiciones aquí establecidas, sin perjuicio de la
            aplicación de la normativa de obligado cumplimiento que corresponda
            en cada caso.
          </p>
          <p>
            El sitio web pone a disposición del usuario información, servicios y
            datos diversos. El usuario asume la responsabilidad del uso
            adecuado del sitio web, que se extiende, entre otros, a:
          </p>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              La veracidad y licitud de la información facilitada en los
              formularios habilitados por FIDELTOUR SL para el acceso a
              determinados contenidos o servicios.
            </li>
            <li>
              El uso de la información, servicios y datos ofrecidos por
              FIDELTOUR SL de forma respetuosa con la ley, la moral, las buenas
              costumbres y el orden público, evitando cualquier uso que pueda
              lesionar derechos de terceros o afectar al funcionamiento del
              propio sitio web.
            </li>
          </ul>
        </LegalSection>

        <LegalSection title="2. Política de enlaces y exención de responsabilidad">
          <p>
            FIDELTOUR SL no se responsabiliza del contenido de los sitios web a
            los que el usuario pueda acceder a través de los enlaces incluidos
            en este sitio, y declara que en ningún caso examina ni controla el
            contenido de páginas externas. Tampoco garantiza la disponibilidad
            técnica, exactitud, veracidad, validez o legalidad de los sitios
            ajenos accesibles mediante dichos enlaces.
          </p>
          <p>
            FIDELTOUR SL ha adoptado las medidas razonables para evitar daños a
            los usuarios derivados de la navegación por su sitio web y, en
            consecuencia, no se hace responsable de los eventuales daños que
            pudieran derivarse de la navegación por internet.
          </p>
        </LegalSection>

        <LegalSection title="3. Modificaciones">
          <p>
            FIDELTOUR SL se reserva el derecho a realizar, sin previo aviso, las
            modificaciones que considere oportunas en los contenidos del sitio
            web y en las presentes condiciones de uso. Tales modificaciones
            podrán publicarse en el propio sitio web por cualquier medio
            admisible en derecho y serán de obligado cumplimiento mientras
            permanezcan publicadas y hasta que sean válidamente sustituidas por
            otras posteriores.
          </p>
        </LegalSection>

        <LegalSection title="4. Protección de datos">
          <p>
            De conformidad con la normativa vigente en materia de protección de
            datos personales, los datos facilitados por el usuario se
            incorporarán al sistema de tratamiento titularidad de FIDELTOUR SL,
            con la finalidad de gestionar y cumplir los compromisos
            establecidos entre las partes. Los datos se conservarán durante el
            plazo estrictamente necesario para cumplir con las finalidades
            indicadas y las obligaciones legales aplicables.
          </p>
          <p>
            El usuario podrá ejercer los derechos de acceso, rectificación,
            limitación del tratamiento, supresión, portabilidad y oposición,
            así como retirar el consentimiento prestado, dirigiendo su solicitud
            a la dirección postal indicada en los datos del titular o al correo
            electrónico{" "}
            <a
              href="mailto:club@fideltour.com"
              className="text-brand-navy underline-offset-2 hover:underline"
            >
              club@fideltour.com
            </a>
            . Asimismo, podrá presentar reclamación ante la Agencia Española de
            Protección de Datos como autoridad de control competente.
          </p>
          <p className="text-sm text-muted-foreground">
            Para más información sobre el tratamiento de datos personales,
            consulta nuestra{" "}
            <Link
              href="/politica-de-privacidad"
              className="font-medium text-brand-navy underline-offset-2 hover:underline"
            >
              Política de privacidad
            </Link>
            .
          </p>
        </LegalSection>

        <LegalSection title="5. Propiedad intelectual e industrial">
          <p>
            FIDELTOUR SL, por sí misma o como cesionaria, es titular de todos
            los derechos de propiedad intelectual e industrial sobre este sitio
            web y los elementos contenidos en él (imágenes, sonido, vídeo,
            software, textos, marcas o logotipos, combinaciones de colores,
            estructura y diseño, selección de materiales y programas necesarios
            para su funcionamiento, acceso y uso). Todos los derechos están
            reservados.
          </p>
          <p>
            Queda expresamente prohibida la reproducción, distribución y
            comunicación pública, incluida su puesta a disposición, de la
            totalidad o parte de los contenidos del sitio con fines
            comerciales, en cualquier soporte y por cualquier medio técnico,
            sin la autorización previa y por escrito de FIDELTOUR SL.
          </p>
          <p>
            El usuario podrá visualizar los elementos del sitio web e incluso
            imprimirlos, copiarlos o almacenarlos en cualquier soporte, siempre
            que sea exclusivamente para uso personal y privado. Se compromete a
            no suprimir, alterar, eludir ni manipular cualquier dispositivo de
            protección o sistema de seguridad instalado en las páginas de
            FIDELTOUR SL.
          </p>
        </LegalSection>

        <LegalSection title="6. Acciones legales, legislación aplicable y jurisdicción">
          <p>
            FIDELTOUR SL se reserva la facultad de ejercitar las acciones
            civiles o penales que considere oportunas por la utilización
            indebida del sitio web y de sus contenidos, o por el incumplimiento
            de las presentes condiciones.
          </p>
          <p>
            La relación entre el usuario y FIDELTOUR SL se rige por la
            normativa vigente y de aplicación en territorio español. Para
            cualquier controversia, las partes podrán someter sus conflictos a
            arbitraje o acudir a la jurisdicción ordinaria, conforme a las
            normas sobre jurisdicción y competencia aplicables. FIDELTOUR SL
            tiene su domicilio en Illes Balears, España.
          </p>
        </LegalSection>
      </LegalBody>
    </>
  );
}
