import type { MetadataRoute } from "next";
import { seoConfig } from "@/lib/seo/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${seoConfig.siteName} | Doorstep Electronics Repair`,
    short_name: seoConfig.siteName,
    description: seoConfig.business.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: seoConfig.brand.primary,
    orientation: "portrait-primary",
    lang: seoConfig.language,
    categories: ["business", "utilities"],
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
