"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedImage } from "@/components/shared/AnimatedImage";
import { services } from "@/lib/data/services";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Fixigo Repair Services"
          title="Expert repair for every device in Muzaffarnagar"
          description="Fixigo Repair Muzaffarnagar (Fixigo MZN) delivers professional doorstep repair for smartphones, laptops, TVs, ACs, and home appliances with genuine parts and skilled technicians."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.article
              key={service.id}
              id={service.id}
              variants={item}
              className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <AnimatedImage
                  src={service.image}
                  alt={service.title}
                  fill
                  className="rounded-none shadow-none"
                  imageClassName="group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <Link
                  href={service.href}
                  className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary opacity-0 transition-all group-hover:opacity-100"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
