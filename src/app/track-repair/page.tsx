import { PageHero } from "@/components/shared/PageHero";
import { TrackRepairForm } from "@/components/shared/TrackRepairForm";
import { FAQ } from "@/components/home/FAQ";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { webPageSchema } from "@/lib/seo/schema";

export const metadata = createMetadata({
  title: "Track Your Repair Status",
  description:
    "Track your Fixigo repair status in real time. Enter your tracking ID to see technician assignment, visit schedule, and completion updates in Muzaffarnagar and nearby areas.",
  path: "/track-repair",
});

export default function TrackRepairPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Track Your Repair Status",
          description:
            "Live repair tracking for Fixigo customers in Muzaffarnagar and nearby service areas.",
          path: "/track-repair",
        })}
      />
      <Breadcrumbs items={[{ name: "Track Repair", path: "/track-repair" }]} />
      <PageHero
        eyebrow="Track Repair"
        title="Live repair status at your fingertips"
        description="Enter your tracking ID to follow every step of your repair — from booking confirmation to completion and delivery."
      />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <TrackRepairForm />
        </div>
      </section>
      <FAQ />
    </>
  );
}
