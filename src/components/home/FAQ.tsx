import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/lib/data/faq";

export function FAQ() {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about booking, tracking, and getting the most from Fixigo repair services."
        />
        <Accordion items={faqItems} />
      </div>
    </section>
  );
}
