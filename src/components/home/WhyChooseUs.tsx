"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  BadgeIndianRupee,
  Clock,
  Headphones,
  MapPin,
  Shield,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChooseFeatures } from "@/lib/data/content";

const iconMap = {
  shield: Shield,
  "map-pin": MapPin,
  "badge-indian-rupee": BadgeIndianRupee,
  "badge-check": BadgeCheck,
  clock: Clock,
  headphones: Headphones,
};

export function WhyChooseUs() {
  return (
    <section id="why-fixigo" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Why Choose Fixigo"
          title="Premium service you can trust"
          description="We combine verified technicians, transparent pricing, and modern technology to deliver a repair experience that feels effortless."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-border bg-muted/50 p-6 transition-all hover:border-primary/20 hover:bg-white hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
