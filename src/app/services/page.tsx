import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/home/CTABanner";
import { Accordion } from "@/components/ui/Accordion";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ServiceAreas } from "@/components/seo/ServiceAreas";
import { services } from "@/lib/data/services";
import { serviceSeoContent, servicesFaq } from "@/lib/data/service-seo";
import { createMetadata } from "@/lib/metadata";
import {
  faqSchema,
  servicesPageSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo/schema";

export const metadata = createMetadata({
  title: "Electronics Repair Services in Muzaffarnagar",
  description:
    "Mobile, Laptop, TV, AC, Refrigerator, Washing Machine and RO repair in Muzaffarnagar. Doorstep service, verified technicians, pickup and delivery by Fixigo.",
  path: "/services",
  keywords: [
    "mobile repair muzaffarnagar",
    "laptop repair muzaffarnagar",
    "tv repair muzaffarnagar",
    "ac repair muzaffarnagar",
    "refrigerator repair muzaffarnagar",
    "washing machine repair muzaffarnagar",
    "electronics repair near me",
  ],
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
      <JsonLd
        data={[
          webPageSchema({
            title: "Electronics Repair Services in Muzaffarnagar",
            description:
              "Complete electronics and home appliance repair services in Muzaffarnagar and nearby cities.",
            path: "/services",
          }),
          servicesPageSchema(),
          ...services.map((service) => serviceSchema(service)),
          faqSchema(servicesFaq),
        ]}
      />
      <Breadcrumbs items={[{ name: "Services", path: "/services" }]} />
      <PageHero
        eyebrow="Services"
        title="Electronics & appliance repair in Muzaffarnagar"
        description="Professional doorstep repair for mobile phones, laptops, TVs, refrigerators, washing machines, ACs, and RO systems across Muzaffarnagar, Shamli, Meerut, Saharanpur, and nearby areas."
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Trusted repair services near you
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Fixigo offers expert{" "}
              <Link href="/services#mobile-repair" className="text-primary hover:underline">
                mobile repair in Muzaffarnagar
              </Link>
              ,{" "}
              <Link href="/services#laptop-repair" className="text-primary hover:underline">
                laptop repair
              </Link>
              ,{" "}
              <Link href="/services#tv-repair" className="text-primary hover:underline">
                TV repair
              </Link>
              ,{" "}
              <Link href="/services#ac-repair" className="text-primary hover:underline">
                AC repair
              </Link>
              , and home appliance service with pickup, delivery, and live tracking.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => {
              const seo = serviceSeoContent[service.id];

              return (
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
                      alt={`${seo.h2} by Fixigo`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index < 2}
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-foreground">{seo.h2}</h2>
                    <h3 className="mt-2 text-xl font-semibold text-primary">
                      {seo.h3}
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                      {seo.intro}
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {seo.details}
                    </p>
                    <p className="mt-3 text-sm font-medium text-foreground/80">
                      {seo.areas}
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
              );
            })}
          </div>
        </div>
      </section>

      <ServiceAreas />

      <section className="section-padding bg-muted">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Service questions answered"
            description="Common questions about electronics and appliance repair in Muzaffarnagar and nearby cities."
          />
          <Accordion items={servicesFaq} />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <SectionHeading
            title="Not sure which service you need?"
            description="Our support team can help diagnose your issue and recommend the right repair service for your device in Muzaffarnagar, Roorkee, or nearby areas."
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/book-repair" size="lg">
              Book Repair
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
