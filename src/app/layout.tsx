import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingSocialButtons } from "@/components/shared/FloatingSocialButtons";
import { GlobalSchemas } from "@/components/seo/GlobalSchemas";
import { AnalyticsScripts } from "@/components/seo/AnalyticsScripts";
import { siteConfig } from "@/lib/metadata";
import { seoConfig } from "@/lib/seo/config";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: seoConfig.brand.primary },
    { media: "(prefers-color-scheme: dark)", color: seoConfig.brand.primary },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: {
    default: "Fixigo | Doorstep Electronics Repair Service",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...seoConfig.keywords],
  metadataBase: new URL(seoConfig.siteUrl),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: seoConfig.siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: seoConfig.siteUrl,
  },
  openGraph: {
    title: "Fixigo | Doorstep Electronics Repair Service",
    description: siteConfig.description,
    url: seoConfig.siteUrl,
    siteName: siteConfig.name,
    type: "website",
    locale: seoConfig.locale,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Doorstep Electronics Repair in Muzaffarnagar`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fixigo | Doorstep Electronics Repair Service",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: seoConfig.twitterHandle,
  },
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
  manifest: "/manifest.webmanifest",
  other: {
    "msapplication-config": "/browserconfig.xml",
  },
  ...(seoConfig.verification.google || seoConfig.verification.bing
    ? {
        verification: {
          ...(seoConfig.verification.google && {
            google: seoConfig.verification.google,
          }),
          ...(seoConfig.verification.bing && {
            other: { "msvalidate.01": seoConfig.verification.bing },
          }),
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${plusJakarta.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <AnalyticsScripts />
        <link rel="preconnect" href={seoConfig.siteUrl} />
        <link rel="dns-prefetch" href={seoConfig.siteUrl} />
      </head>
      <body
        className="min-h-screen bg-background font-sans text-foreground antialiased"
        suppressHydrationWarning
      >
        <GlobalSchemas />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingSocialButtons />
      </body>
    </html>
  );
}
