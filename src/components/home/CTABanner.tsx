"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative min-h-[320px] overflow-hidden rounded-3xl md:min-h-[380px]"
        >
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&q=80&auto=format&fit=crop"
            alt="Technician with tools ready for repair service"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/50" />

          <div className="relative px-6 py-16 md:px-12 md:py-20 lg:px-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
              Urgent Repair?
            </p>
            <h2 className="mt-3 max-w-xl text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Need urgent repair assistance?
            </h2>
            <p className="mt-4 max-w-lg text-base text-white/80 md:text-lg">
              Book a Fixigo technician now and get same-day doorstep service in
              Muzaffarnagar and nearby areas.
            </p>
            <Button
              href="/book-repair"
              variant="secondary"
              size="lg"
              className="mt-8"
            >
              Book Service Now
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
