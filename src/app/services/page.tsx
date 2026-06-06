import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/home/CTABanner";
import { services } from "@/lib/data/services";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Repair Services",
  description:
    "Explore Fixigo repair services for mobile phones, laptops, TVs, refrigerators, washing machines, ACs, RO systems, and home appliances.",
  path: "/services",
});

const serviceFeatures = [
  "Genuine and compatible parts",
  "Doorstep or pickup service",
  "Transparent upfront pricing",
  "Service warranty included",
  "Live repair tracking",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Complete electronics & appliance repair"
        description="Professional doorstep repair for all major device categories. Select a service below or book directly for fastest assistance."
      />

      <section className="section-padding bg-white">
        <div className="container-custom space-y-16">
          {services.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {serviceFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button href="/book-repair">
                    Book {service.title}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
                  >
                    Get a quote
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-custom text-center">
          <SectionHeading
            title="Not sure which service you need?"
            description="Our support team can help diagnose your issue and recommend the right repair service for your device."
          />
          <Button href="/contact" size="lg">
            Contact Support
          </Button>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
