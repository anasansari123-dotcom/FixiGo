import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { BookingForm } from "@/components/home/BookingForm";
import { Statistics } from "@/components/home/Statistics";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CTABanner } from "@/components/home/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, webPageSchema } from "@/lib/seo/schema";
import { createHomeMetadata } from "@/lib/metadata";

export const metadata = createHomeMetadata();

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title:
              "Fixigo Repair Muzaffarnagar | Fixigo MZN | Official Doorstep Repair",
            description:
              "Fixigo Repair (Fixigo Muzaffarnagar / Fixigo MZN) — official doorstep electronics repair service.",
            path: "/",
          }),
          faqSchema(),
        ]}
      />
      <Hero />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <BookingForm />
        </div>
      </section>
      <Statistics />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  );
}
