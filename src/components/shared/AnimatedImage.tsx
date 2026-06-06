"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AnimatedImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  parallax?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
};

export function AnimatedImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  parallax = false,
  fill = false,
  width,
  height,
}: AnimatedImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const enableParallax = parallax && mounted;

  return (
    <motion.div
      ref={ref}
      style={{ y: enableParallax ? y : undefined }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "relative overflow-hidden rounded-2xl shadow-xl shadow-slate-200/60",
        fill && "absolute inset-0 h-full w-full",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        priority={priority}
        className={cn(
          "object-cover transition-transform duration-700 hover:scale-105",
          fill && "absolute inset-0 h-full w-full",
          imageClassName,
        )}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </motion.div>
  );
}
