import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/shared/ContactForm";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact Us",
  description:
    "Contact Fixigo for repair support, service inquiries, and partnerships. Reach us by phone, email, or send a message online.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We're here to help"
        description="Have a question about our services, pricing, or partnerships? Reach out and our support team will respond within 24 hours."
      />
      <ContactForm />
    </>
  );
}
