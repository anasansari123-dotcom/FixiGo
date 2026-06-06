import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "mobile-repair",
    title: "Mobile Repair",
    description:
      "Screen, battery, charging port, and software repairs for all smartphone brands at your doorstep.",
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80&auto=format&fit=crop",
    href: "/services#mobile-repair",
  },
  {
    id: "laptop-repair",
    title: "Laptop Repair",
    description:
      "Keyboard, motherboard, SSD upgrade, and performance fixes for laptops and MacBooks.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80&auto=format&fit=crop",
    href: "/services#laptop-repair",
  },
  {
    id: "tv-repair",
    title: "TV Repair",
    description:
      "LED, OLED, and Smart TV display, panel, and motherboard repairs with genuine parts.",
    image: "/services/tv-repair.png",
    href: "/services#tv-repair",
  },
  {
    id: "refrigerator-repair",
    title: "Refrigerator Repair",
    description:
      "Cooling, compressor, and gas refill services for single and double-door refrigerators.",
    image: "/services/refrigerator-repair.png",
    href: "/services#refrigerator-repair",
  },
  {
    id: "washing-machine-repair",
    title: "Washing Machine Repair",
    description:
      "Drum, motor, and drainage issues fixed for front-load and top-load washing machines.",
    image: "/services/washing-machine-repair.png",
    href: "/services#washing-machine-repair",
  },
  {
    id: "ac-repair",
    title: "AC Repair",
    description:
      "Installation, gas refill, cooling issues, and annual maintenance for split and window ACs.",
    image: "/services/ac-repair.png",
    href: "/services#ac-repair",
  },
  {
    id: "ro-repair",
    title: "RO Repair",
    description:
      "Filter replacement, membrane service, and water quality checks for RO purifiers.",
    image: "/services/ro-repair.png",
    href: "/services#ro-repair",
  },
  {
    id: "other-appliances",
    title: "Other Appliances",
    description:
      "Microwave, dishwasher, geyser, and other home appliance diagnostics and repair.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop",
    href: "/services#other-appliances",
  },
];

export const deviceTypes = services.map((s) => s.title);
