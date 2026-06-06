import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { BookingForm } from "@/components/home/BookingForm";
import { Statistics } from "@/components/home/Statistics";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { CTABanner } from "@/components/home/CTABanner";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Doorstep Electronics Repair Services",
  description:
    "Book trusted doorstep repair for mobile phones, laptops, TVs, ACs, and home appliances. Fast service, verified technicians, and live tracking with Fixigo.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
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
