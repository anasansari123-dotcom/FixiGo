import { faqItems } from "@/lib/data/faq";
import { services } from "@/lib/data/services";
import { seoConfig, absoluteUrl } from "@/lib/seo/config";

type BreadcrumbItem = {
  name: string;
  path: string;
};

const address = {
  "@type": "PostalAddress",
  streetAddress: seoConfig.business.address.street,
  addressLocality: seoConfig.business.address.city,
  addressRegion: seoConfig.business.address.state,
  postalCode: seoConfig.business.address.postalCode,
  addressCountry: seoConfig.business.address.country,
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${absoluteUrl()}/#organization`,
    name: seoConfig.business.name,
    legalName: seoConfig.business.legalName,
    url: absoluteUrl(),
    logo: absoluteUrl(seoConfig.ogImage),
    image: absoluteUrl(seoConfig.ogImage),
    description: seoConfig.business.description,
    email: seoConfig.business.email,
    telephone: seoConfig.business.phone,
    address,
    areaServed: seoConfig.areaServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
    sameAs: [seoConfig.social.whatsapp, seoConfig.social.instagram],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: seoConfig.business.phone,
      contactType: "customer service",
      areaServed: seoConfig.areaServed,
      availableLanguage: ["English", "Hindi"],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absoluteUrl()}/#website`,
    name: seoConfig.siteName,
    url: absoluteUrl(),
    description: seoConfig.business.description,
    publisher: { "@id": `${absoluteUrl()}/#organization` },
    inLanguage: seoConfig.language,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${absoluteUrl("/track-repair")}?id={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${absoluteUrl()}/#localbusiness`,
    name: seoConfig.business.name,
    description: seoConfig.business.description,
    url: absoluteUrl(),
    image: absoluteUrl(seoConfig.ogImage),
    logo: absoluteUrl(seoConfig.ogImage),
    telephone: seoConfig.business.phone,
    email: seoConfig.business.email,
    priceRange: seoConfig.business.priceRange,
    address,
    geo: {
      "@type": "GeoCoordinates",
      latitude: seoConfig.business.geo.latitude,
      longitude: seoConfig.business.geo.longitude,
    },
    openingHoursSpecification: seoConfig.business.openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "21:00",
    })),
    areaServed: seoConfig.areaServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Electronics Repair Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          url: absoluteUrl(service.href),
        },
      })),
    },
    sameAs: [seoConfig.social.whatsapp, seoConfig.social.instagram],
  };
}

export function faqSchema(items = faqItems) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema(service: {
  id: string;
  title: string;
  description: string;
  href: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(service.href)}#service`,
    name: `${service.title} in ${seoConfig.primaryLocation}`,
    description: service.description,
    url: absoluteUrl(service.href),
    provider: { "@id": `${absoluteUrl()}/#localbusiness` },
    areaServed: seoConfig.areaServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
    serviceType: service.title,
  };
}

export function servicesPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Electronics Repair Services in ${seoConfig.primaryLocation}`,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: serviceSchema(service),
    })),
  };
}

export function siteNavigationSchema() {
  return seoConfig.sitelinks.map((link) => ({
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: link.name,
    url: absoluteUrl(link.url),
  }));
}

export function webPageSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": `${absoluteUrl()}/#website` },
    about: { "@id": `${absoluteUrl()}/#localbusiness` },
    inLanguage: seoConfig.language,
  };
}

export function globalSchemas() {
  return [
    organizationSchema(),
    websiteSchema(),
    localBusinessSchema(),
    ...siteNavigationSchema(),
  ];
}
