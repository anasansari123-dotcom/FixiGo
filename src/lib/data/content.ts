import type { HowItWorksStep } from "@/types";

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: 1,
    title: "Submit Repair Request",
    description:
      "Tell us your device type, issue, and preferred time. Upload photos to help us diagnose faster.",
    icon: "clipboard-list",
  },
  {
    step: 2,
    title: "Technician Assigned",
    description:
      "A verified Fixigo expert is matched to your job based on device specialty and location.",
    icon: "user-check",
  },
  {
    step: 3,
    title: "Home Visit or Pickup",
    description:
      "Choose doorstep repair or secure pickup. Our technician arrives on schedule with the right tools.",
    icon: "home",
  },
  {
    step: 4,
    title: "Repair & Delivery",
    description:
      "Your device is repaired with quality parts, tested thoroughly, and delivered back with warranty.",
    icon: "shield-check",
  },
];

export const whyChooseFeatures = [
  {
    title: "Verified Technicians",
    description:
      "Background-checked, certified experts trained on leading device brands.",
    icon: "shield",
  },
  {
    title: "Doorstep Service",
    description:
      "Repairs at your home or office — no waiting at service centers.",
    icon: "map-pin",
  },
  {
    title: "Affordable Pricing",
    description:
      "Transparent estimates with competitive rates and no hidden fees.",
    icon: "badge-indian-rupee",
  },
  {
    title: "Warranty on Repairs",
    description:
      "Peace of mind with warranty coverage on parts and workmanship.",
    icon: "badge-check",
  },
  {
    title: "Fast Turnaround",
    description:
      "Same-day visits and quick repairs to minimize your downtime.",
    icon: "clock",
  },
  {
    title: "Live Status Updates",
    description:
      "Track every stage from booking to completion in real time.",
    icon: "headphones",
  },
];

export const heroImages = [
  {
    src: "/services/tv-repair.png",
    alt: "Fixigo technician repairing a TV at customer's home",
  },
  {
    src: "/services/ac-repair.png",
    alt: "Professional AC repair and maintenance service",
  },
  {
    src: "/services/ro-repair.png",
    alt: "RO water purifier repair and service at doorstep",
  },
];

export const aboutImages = [
  {
    src: "/services/refrigerator-repair.png",
    alt: "Technician repairing a refrigerator at customer's home",
    title: "Refrigerator Repair",
  },
  {
    src: "/services/washing-machine-repair.png",
    alt: "Professional washing machine repair service",
    title: "Washing Machine Repair",
  },
  {
    src: "/services/tv-repair.png",
    alt: "TV repair by certified Fixigo technician",
    title: "TV & Display Repair",
  },
  {
    src: "/services/ac-repair.png",
    alt: "Split AC repair and maintenance service",
    title: "AC Service Experts",
  },
];
