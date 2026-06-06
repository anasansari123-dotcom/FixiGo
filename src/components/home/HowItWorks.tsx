"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { howItWorksSteps } from "@/lib/data/content";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-muted">
      <div className="container-custom">
        <SectionHeading
          eyebrow="How It Works"
          title="Repair made simple in 4 steps"
          description="Book online, get matched with an expert, and receive your repaired device — all with live updates at every stage."
        />

        <div className="relative mx-auto max-w-4xl">
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-full w-[min(100%,520px)] -translate-x-1/2 rounded-full bg-white/70 blur-3xl"
            aria-hidden="true"
          />

          {/* Desktop timeline */}
          <motion.ol
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="relative hidden md:block"
          >
            <div
              className="absolute bottom-6 left-1/2 top-0 w-px -translate-x-1/2 bg-border"
              aria-hidden="true"
            />

            {howItWorksSteps.map((step, index) => {
              const isRight = index % 2 === 0;
              const isPrimary = index % 2 === 0;
              const stepLabel = String(step.step).padStart(2, "0");

              return (
                <motion.li
                  key={step.step}
                  variants={item}
                  className="relative mb-16 list-none last:mb-10"
                >
                  <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-8">
                    <div
                      className={cn(
                        "pr-4",
                        isRight ? "invisible" : "text-right",
                      )}
                    >
                      {!isRight && (
                        <StepContent title={step.title} description={step.description} />
                      )}
                    </div>

                    <div className="relative z-10 flex justify-center">
                      <div
                        className={cn(
                          "flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full text-lg font-bold text-white shadow-lg ring-4 ring-white",
                          isPrimary
                            ? "bg-primary shadow-primary/30"
                            : "bg-secondary shadow-secondary/30",
                        )}
                      >
                        {stepLabel}
                      </div>
                    </div>

                    <div className={cn("pl-4", !isRight && "invisible")}>
                      {isRight && (
                        <StepContent title={step.title} description={step.description} />
                      )}
                    </div>
                  </div>
                </motion.li>
              );
            })}

            <div className="relative z-10 flex justify-center">
              <div className="h-5 w-5 rounded-full border-2 border-border bg-white shadow-md ring-4 ring-muted" />
            </div>
          </motion.ol>

          {/* Mobile timeline */}
          <motion.ol
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="relative md:hidden"
          >
            <div
              className="absolute bottom-4 left-8 top-0 w-px bg-border"
              aria-hidden="true"
            />

            {howItWorksSteps.map((step, index) => {
              const isPrimary = index % 2 === 0;
              const stepLabel = String(step.step).padStart(2, "0");
              const isLast = index === howItWorksSteps.length - 1;

              return (
                <motion.li
                  key={step.step}
                  variants={item}
                  className="relative mb-10 list-none last:mb-6"
                >
                  <div className="flex gap-5">
                    <div className="relative z-10 flex shrink-0 flex-col items-center">
                      <div
                        className={cn(
                          "flex h-16 w-16 items-center justify-center rounded-full text-base font-bold text-white shadow-lg ring-4 ring-muted",
                          isPrimary ? "bg-primary" : "bg-secondary",
                        )}
                      >
                        {stepLabel}
                      </div>
                      {!isLast && (
                        <div className="mt-2 h-full min-h-6 w-px bg-transparent" />
                      )}
                    </div>

                    <div className="pb-2 pt-2">
                      <StepContent title={step.title} description={step.description} />
                    </div>
                  </div>
                </motion.li>
              );
            })}

            <div className="relative z-10 ml-[1.625rem]">
              <div className="h-4 w-4 rounded-full border-2 border-border bg-white shadow-sm" />
            </div>
          </motion.ol>
        </div>
      </div>
    </section>
  );
}

function StepContent({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h3 className="text-xl font-bold text-foreground md:text-2xl">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
        {description}
      </p>
    </div>
  );
}
