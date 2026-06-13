import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Statistics } from "@/components/home/Statistics";
import { CTABanner } from "@/components/home/CTABanner";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { aboutImages } from "@/lib/data/content";
import { createMetadata } from "@/lib/metadata";
import { webPageSchema } from "@/lib/seo/schema";

export const metadata = createMetadata({
  title: "About Us — Doorstep Electronics Repair in Muzaffarnagar",
  description:
    "Learn about Fixigo — Muzaffarnagar's trusted doorstep electronics repair service. Verified technicians serving Shamli, Meerut, Saharanpur, Roorkee, and nearby areas.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "About Fixigo | Doorstep Electronics Repair in Muzaffarnagar",
          description:
            "Fixigo delivers trusted doorstep electronics repair across Muzaffarnagar and Western Uttar Pradesh.",
          path: "/about",
        })}
      />
      <Breadcrumbs items={[{ name: "About Us", path: "/about" }]} />
      <PageHero
        eyebrow="About Fixigo"
        title="Redefining device repair in Muzaffarnagar"
        description="Fixigo was founded to make electronics repair as convenient as ordering food online. We bring certified technicians, quality parts, and transparent pricing to homes across Muzaffarnagar, Shamli, Meerut, and nearby cities."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Our Story"
                title="Built for convenience, powered by expertise"
                description="From Muzaffarnagar to Saharanpur and Roorkee, Fixigo combines technology with skilled craftsmanship to deliver a premium repair experience."
              />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Every day, residents across Muzaffarnagar, Khatauli, Jansath,
                  and Budhana struggle with broken devices and long service
                  center queues. Fixigo eliminates that friction with on-demand
                  doorstep repair, secure pickup & delivery, and live status
                  tracking.
                </p>
                <p>
                  Our technicians undergo rigorous verification and continuous
                  training. Whether you need mobile repair in Meerut, AC service
                  in Shamli, or TV repair in Deoband, our experts arrive with
                  professional diagnostics tools and quality parts.
                </p>
                <p>
                  Explore our{" "}
                  <Link href="/services" className="font-semibold text-primary hover:underline">
                    repair services
                  </Link>
                  ,{" "}
                  <Link href="/book-repair" className="font-semibold text-primary hover:underline">
                    book a repair
                  </Link>
                  , or{" "}
                  <Link href="/contact" className="font-semibold text-primary hover:underline">
                    contact us
                  </Link>{" "}
                  for support.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/services/ro-repair.png"
                alt="Fixigo technician providing doorstep repair in Muzaffarnagar"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="technicians" className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Infrastructure"
            title="Where quality meets technology"
            description="Fixigo invests in skilled technicians and advanced testing equipment to deliver reliable repairs across Western Uttar Pradesh."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutImages.map((image) => (
              <article
                key={image.title}
                className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground">{image.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Statistics />
      <CTABanner />
    </>
  );
}
