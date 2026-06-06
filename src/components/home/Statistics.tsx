"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data/stats";

function formatStatValue(value: string, suffix = "") {
  const numericValue = Number.parseInt(value.replace(/,/g, ""), 10);
  return `${numericValue.toLocaleString("en-IN")}${suffix}`;
}

export function Statistics() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 md:py-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=20&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
      <div className="container-custom relative px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-white md:text-5xl">
                {formatStatValue(stat.value, stat.suffix)}
              </p>
              <p className="mt-2 text-sm font-medium text-white/80 md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
