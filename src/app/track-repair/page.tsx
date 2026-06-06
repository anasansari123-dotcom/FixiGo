import { PageHero } from "@/components/shared/PageHero";
import { TrackRepairForm } from "@/components/shared/TrackRepairForm";
import { FAQ } from "@/components/home/FAQ";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Track Repair",
  description:
    "Track your Fixigo repair status in real time. Enter your tracking ID to see technician assignment, visit schedule, and completion updates.",
  path: "/track-repair",
});

export default function TrackRepairPage() {
  return (
    <>
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
