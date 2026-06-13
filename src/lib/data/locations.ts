import { seoConfig } from "@/lib/seo/config";

export const serviceLocations = seoConfig.targetLocations;

export const locationCoverageText = `Fixigo provides doorstep electronics repair across ${serviceLocations.slice(0, 4).join(", ")}, and nearby areas including ${serviceLocations.slice(4).join(", ")}.`;

export const primaryServiceArea =
  "Muzaffarnagar, Shamli, Meerut, Saharanpur, Roorkee, Deoband, Khatauli, Jansath, Budhana, and Haridwar";
