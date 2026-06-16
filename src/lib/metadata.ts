import type { Metadata } from "next";
import { seoConfig, absoluteUrl } from "@/lib/seo/config";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

function buildOpenGraph({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    title,
    description,
    url,
    siteName: seoConfig.siteName,
    type: "website" as const,
    locale: seoConfig.locale,
    images: [
      {
        url: seoConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${seoConfig.siteName} - ${seoConfig.business.category}`,
      },
    ],
  };
}

function buildTwitter({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return {
    card: "summary_large_image" as const,
    title,
    description,
    images: [seoConfig.ogImage],
    creator: seoConfig.twitterHandle,
  };
}

export const siteConfig = {
  name: seoConfig.siteName,
  brandName: seoConfig.brandDisplayName,
  tagline: "Doorstep Electronics Repair Service",
  description:
    "Fixigo Repair (Fixigo Muzaffarnagar / Fixigo MZN) — official doorstep repair for Mobile, Laptop, TV, AC, Refrigerator, Washing Machine and Home Appliances. Verified technicians, fast service, pickup and delivery in Muzaffarnagar.",
  url: seoConfig.siteUrl,
  ogImage: seoConfig.ogImage,
  favicon: "/favicon.png",
  contact: {
    phone: seoConfig.business.phoneDisplay,
    email: seoConfig.business.email,
    address: `${seoConfig.business.address.street}, ${seoConfig.business.address.city}, ${seoConfig.business.address.state}, ${seoConfig.business.address.postalCode}`,
  },
  social: seoConfig.social,
};

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [...seoConfig.keywords],
}: PageMeta): Metadata {
  const url = absoluteUrl(path);
  const pageTitle = `${title} | ${seoConfig.siteName}`;

  const metadata: Metadata = {
    title: { absolute: pageTitle },
    description,
    keywords: [...keywords],
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: { canonical: url },
    openGraph: buildOpenGraph({ title: pageTitle, description, url }),
    twitter: buildTwitter({ title: pageTitle, description }),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    category: "Electronics Repair Service",
  };

  if (seoConfig.verification.google) {
    metadata.verification = {
      ...metadata.verification,
      google: seoConfig.verification.google,
    };
  }

  if (seoConfig.verification.bing) {
    metadata.verification = {
      ...metadata.verification,
      other: {
        "msvalidate.01": seoConfig.verification.bing,
      },
    };
  }

  return metadata;
}

export function createHomeMetadata(): Metadata {
  const title =
    "Fixigo Repair Muzaffarnagar | Fixigo MZN | Official Doorstep Repair";
  const description = siteConfig.description;
  const url = absoluteUrl("/");

  return {
    title: { absolute: title },
    description,
    keywords: [...seoConfig.keywords],
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: { canonical: url },
    openGraph: buildOpenGraph({ title, description, url }),
    twitter: buildTwitter({ title, description }),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    category: "Electronics Repair Service",
    verification: {
      ...(seoConfig.verification.google && {
        google: seoConfig.verification.google,
      }),
      ...(seoConfig.verification.bing && {
        other: { "msvalidate.01": seoConfig.verification.bing },
      }),
    },
  };
}
