import { seoConfig } from "@/lib/seo/config";

export const analyticsConfig = {
  googleSearchConsole: {
    verification: seoConfig.verification.google,
    sitemapUrl: `${seoConfig.siteUrl}/sitemap.xml`,
  },
  googleAnalytics: {
    measurementId: seoConfig.analytics.gaId,
  },
  googleTagManager: {
    containerId: seoConfig.analytics.gtmId,
  },
  googleBusinessProfile: {
    name: seoConfig.business.name,
    phone: seoConfig.business.phoneDisplay,
    address: `${seoConfig.business.address.street}, ${seoConfig.business.address.city}, ${seoConfig.business.address.state}, ${seoConfig.business.address.postalCode}`,
    website: seoConfig.siteUrl,
    category: seoConfig.business.category,
  },
  bingWebmaster: {
    verification: seoConfig.verification.bing,
  },
} as const;

export function isAnalyticsEnabled() {
  return Boolean(
    seoConfig.analytics.gaId ||
      seoConfig.analytics.gtmId ||
      seoConfig.verification.google ||
      seoConfig.verification.bing,
  );
}
