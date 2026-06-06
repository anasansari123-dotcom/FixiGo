"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data/testimonials";
import { getInitials } from "@/lib/utils";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-muted">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by customers in Muzaffarnagar"
          description="Real stories from local customers who trust Fixigo for fast, reliable, and professional doorstep repair across Muzaffarnagar."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="relative flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <Quote
                className="absolute right-6 top-6 h-8 w-8 text-primary/10"
                aria-hidden="true"
              />

              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating
                        ? "fill-secondary text-secondary"
                        : "text-border"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.review}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white ring-2 ring-primary/20"
                  aria-hidden="true"
                >
                  {getInitials(testimonial.name)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.locality}, {testimonial.city} ·{" "}
                    {testimonial.device}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
