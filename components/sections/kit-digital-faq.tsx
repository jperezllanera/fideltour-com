import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { kitDigitalFaq } from "@/lib/content/kit-digital";

export function KitDigitalFaqSection() {
  return (
    <section id="faq" className="relative bg-muted/30">
      <div className="mx-auto max-w-4xl px-4 py-20 md:px-6 md:py-24">
        <div className="text-center">
          <div className="text-eyebrow text-brand-navy-deep">
            ¿Tienes alguna duda?
          </div>
          <h2 className="mt-3">Preguntas frecuentes sobre el Kit Digital.</h2>
        </div>

        <Accordion className="mt-10 rounded-2xl border border-border/70 bg-card px-2 shadow-[var(--shadow-soft)] md:px-4">
          {kitDigitalFaq.map(({ question, answer }) => (
            <AccordionItem key={question} value={question} className="px-2 md:px-4">
              <AccordionTrigger className="py-5 text-base font-semibold text-brand-navy md:text-lg">
                {question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
