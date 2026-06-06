import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Statistics } from "@/components/home/Statistics";
import { CTABanner } from "@/components/home/CTABanner";
import { aboutImages } from "@/lib/data/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about Fixigo's mission to deliver trusted doorstep electronics repair with verified technicians, modern labs, and customer-first service across India.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Fixigo"
        title="Redefining device repair for modern India"
        description="Fixigo was founded with a simple mission: make electronics repair as convenient as ordering food online. We bring certified technicians, quality parts, and transparent pricing directly to your doorstep."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Our Story"
                title="Built for convenience, powered by expertise"
                description="From a single-city startup to a nationwide repair network, Fixigo combines technology with skilled craftsmanship to deliver a premium repair experience."
              />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Every day, millions of Indians struggle with broken devices and
                  long service center queues. Fixigo eliminates that friction with
                  on-demand doorstep repair, secure pickup & delivery, and live
                  status tracking.
                </p>
                <p>
                  Our technicians undergo rigorous verification and continuous
                  training. Our labs are equipped with professional diagnostics
                  tools to ensure every repair meets the highest quality standards.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src={aboutImages[0].src}
                alt={aboutImages[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
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
            description="Fixigo invests in professional workshops, skilled technicians, and advanced testing equipment to deliver reliable repairs every time."
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
