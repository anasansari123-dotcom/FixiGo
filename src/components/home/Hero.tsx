"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AnimatedImage } from "@/components/shared/AnimatedImage";
import { heroImages } from "@/lib/data/content";

export function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-gradient relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm">
              <Sparkles className="h-4 w-4 text-secondary" />
              Trusted by 100+ customers in Muzaffarnagar
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Doorstep{" "}
              <span className="gradient-text">Electronics Repair</span> in
              Muzaffarnagar
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Expert mobile, laptop, TV, AC, and home appliance repair at your
              doorstep across Muzaffarnagar, Shamli, Meerut, Saharanpur, and
              nearby areas. Verified technicians with warranty-backed service.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/book-repair" size="lg">
                Book Repair
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button href="/track-repair" variant="outline" size="lg">
                Track Repair
              </Button>
            </div>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                "Same-day doorstep visits",
                "Warranty on every repair",
                "Verified expert technicians",
                "Live repair status tracking",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-foreground/80"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-primary/10">
              {heroImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={false}
                  animate={{
                    opacity: index === activeImage ? 1 : 0,
                    scale: index === activeImage ? 1 : 1.05,
                  }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0"
                >
                  <AnimatedImage
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={index === 0}
                    className="h-full w-full rounded-3xl"
                  />
                </motion.div>
              ))}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card absolute -bottom-6 -left-4 rounded-2xl p-4 shadow-xl md:-left-8"
            >
              <p className="text-2xl font-bold text-primary">4.9/5</p>
              <p className="text-sm text-muted-foreground">
                Average customer rating
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-card absolute -right-4 top-8 rounded-2xl p-4 shadow-xl md:-right-8"
            >
              <p className="text-sm font-semibold text-foreground">
                10+ Technicians
              </p>
              <p className="text-xs text-muted-foreground">Ready to help today</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
