import type { NavLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Book Repair", href: "/book-repair" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Track Repair", href: "/track-repair" },
];

export const sitelinkNav: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Book Repair", href: "/book-repair" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const footerLinks = {
  about: [
    { label: "About Us", href: "/about" },
    { label: "Our Technicians", href: "/about#technicians" },
    { label: "Why Fixigo", href: "/#why-fixigo" },
    { label: "FAQ", href: "/#faq" },
  ],
  services: [
    { label: "Mobile Repair", href: "/services#mobile-repair" },
    { label: "Laptop Repair", href: "/services#laptop-repair" },
    { label: "TV Repair", href: "/services#tv-repair" },
    { label: "AC Repair", href: "/services#ac-repair" },
    { label: "All Services", href: "/services" },
  ],
  support: [
    { label: "Book Repair", href: "/book-repair" },
    { label: "Track Repair", href: "/track-repair" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/fixigo_repair/", icon: "instagram" },
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
];
