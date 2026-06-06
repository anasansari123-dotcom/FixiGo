import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fixigo.in";

export const siteConfig = {
  name: "Fixigo",
  tagline: "Doorstep Device Repair",
  description:
    "Fixigo offers trusted doorstep electronics repair for mobile phones, laptops, TVs, refrigerators, ACs, and home appliances. Book online, track repairs, and get warranty-backed service.",
  url: siteUrl,
  ogImage: "/logo.png",
  favicon: "/favicon.png",
  contact: {
    phone: "+91 6395503819",
    email: "hello@fixigo.in",
    address: "Roorkee Road, Muzaffarnagar, UP, 251001",
  },
  social: {
    whatsapp: "https://wa.me/916395503819",
    instagram: "https://www.instagram.com/fixigo",
  },
};

type PageMeta = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({
  title,
  description,
  path = "",
}: PageMeta): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${siteConfig.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
