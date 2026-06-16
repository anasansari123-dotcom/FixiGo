import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/shared/ContactForm";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata, siteConfig } from "@/lib/metadata";
import { webPageSchema } from "@/lib/seo/schema";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = createMetadata({
  title: "Contact Fixigo Repair Muzaffarnagar",
  description:
    "Contact Fixigo Repair Muzaffarnagar (Fixigo MZN). Call +91 6395503819, email hello@fixigo.in, or visit Roorkee Road, Muzaffarnagar for electronics repair support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema({
          title: "Contact Fixigo | Repair Service in Muzaffarnagar",
          description:
            "Reach Fixigo for doorstep electronics repair support in Muzaffarnagar and nearby cities.",
          path: "/contact",
        })}
      />
      <Breadcrumbs items={[{ name: "Contact Us", path: "/contact" }]} />
      <PageHero
        eyebrow="Contact"
        title="Get in touch with Fixigo"
        description="Have a question about repair services in Muzaffarnagar, Shamli, Roorkee, Saharanpur, or Meerut? Reach out and our support team will respond within 24 hours."
      />

      <section className="section-padding bg-white">
        <div className="container-custom mb-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-muted/40 p-6">
            <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="mt-3 font-bold text-foreground">Call Us</h2>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
              className="mt-2 block text-muted-foreground hover:text-primary"
            >
              {siteConfig.contact.phone}
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-muted/40 p-6">
            <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="mt-3 font-bold text-foreground">Email Us</h2>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="mt-2 block text-muted-foreground hover:text-primary"
            >
              {siteConfig.contact.email}
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-muted/40 p-6">
            <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="mt-3 font-bold text-foreground">Visit Us</h2>
            <p className="mt-2 text-muted-foreground">{siteConfig.contact.address}</p>
          </div>
        </div>

        <p className="container-custom mb-8 max-w-3xl text-muted-foreground">
          Fixigo serves customers across{" "}
          <strong>Muzaffarnagar</strong>, <strong>Shamli</strong>,{" "}
          <strong>Khatauli</strong>, <strong>Jansath</strong>,{" "}
          <strong>Budhana</strong>, <strong>Deoband</strong>,{" "}
          <strong>Roorkee</strong>, <strong>Saharanpur</strong>, and{" "}
          <strong>Meerut</strong>. Need faster help?{" "}
          <Link href="/book-repair" className="font-semibold text-primary hover:underline">
            Book a repair online
          </Link>
          .
        </p>
      </section>

      <ContactForm />
    </>
  );
}
