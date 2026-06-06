import { PageHero } from "@/components/shared/PageHero";
import { BookingForm } from "@/components/home/BookingForm";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Book Repair",
  description:
    "Book a doorstep electronics repair with Fixigo. Submit your device details, issue description, and preferred city for fast technician assignment.",
  path: "/book-repair",
});

export default function BookRepairPage() {
  return (
    <>
      <PageHero
        eyebrow="Book Repair"
        title="Schedule your repair in minutes"
        description="Tell us about your device and we'll assign a verified Fixigo technician for doorstep repair or pickup service."
      />
      <section className="section-padding bg-muted">
        <div className="container-custom max-w-4xl">
          <BookingForm showHeading={false} />
        </div>
      </section>
      <WhyChooseUs />
    </>
  );
}
