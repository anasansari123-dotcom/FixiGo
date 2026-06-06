import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/shared/Logo";
import { footerLinks } from "@/lib/data/navigation";
import { siteConfig } from "@/lib/metadata";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-foreground text-white">
      <div className="container-custom section-padding !pb-12 !pt-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="relative h-[7.5rem] overflow-visible sm:h-32 md:h-[8.5rem]">
              <Logo
                size="footer"
                className="absolute -left-15 top-0 z-10 overflow-visible"
              />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-300 -mt-10">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">
              About
            </h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="hover:text-white"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-slate-400">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <Link href="/contact" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
