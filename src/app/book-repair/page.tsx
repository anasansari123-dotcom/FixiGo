import { PageHero } from "@/components/shared/PageHero";
import { BookingForm } from "@/components/home/BookingForm";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { webPageSchema } from "@/lib/seo/schema";

export const metadata = createMetadata({
  title: "Book Fixigo Repair Muzaffarnagar",
  description:
    "Book Fixigo Repair (Fixigo MZN) online — doorstep mobile, laptop, TV, AC, refrigerator, and appliance repair in Muzaffarnagar with verified technicians and live tracking.",
  path: "/book-repair",
  keywords: [
    "book repair muzaffarnagar",
    "doorstep repair booking",
    "electronics repair near me",
    "home appliance repair booking",
  ],
});

export default function BookRepairPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Book Doorstep Repair in Muzaffarnagar",
          description:
            "Schedule doorstep electronics and appliance repair with Fixigo in Muzaffarnagar and nearby areas.",
          path: "/book-repair",
        })}
      />
      <Breadcrumbs items={[{ name: "Book Repair", path: "/book-repair" }]} />
      <PageHero
        eyebrow="Book Repair"
        title="Schedule your repair in Muzaffarnagar"
        description="Tell us about your device and we'll assign a verified Fixigo technician for doorstep repair or pickup service across Muzaffarnagar, Shamli, Meerut, Roorkee, and nearby areas."
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
