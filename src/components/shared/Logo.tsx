import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showTagline?: boolean;
  size?: "header" | "footer" | "sm" | "md" | "lg";
};

const sizes = {
  header: {
    width: 420,
    height: 130,
    wrapper: "relative w-[230px] shrink-0 sm:w-[270px] md:w-[300px]",
    image:
      "h-16 w-auto max-w-none object-contain object-left origin-left scale-[2.35] sm:scale-[2.55] md:scale-[2.8]",
  },
  sm: {
    width: 180,
    height: 60,
    wrapper: "",
    image: "h-10 w-auto object-contain",
  },
  md: {
    width: 220,
    height: 72,
    wrapper: "",
    image: "h-12 w-auto object-contain",
  },
  lg: {
    width: 280,
    height: 92,
    wrapper: "",
    image: "h-14 md:h-16 w-auto object-contain",
  },
  footer: {
    width: 420,
    height: 130,
    wrapper: "pointer-events-auto",
    image:
      "h-16 w-auto max-w-none object-contain object-left origin-left scale-[2.75] sm:scale-[3] md:scale-[3.25]",
  },
};

export function Logo({
  className,
  showTagline = false,
  size = "md",
}: LogoProps) {
  const config = sizes[size];

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 items-center gap-2 overflow-visible group",
        config.wrapper,
        className,
      )}
      aria-label="Fixigo home"
    >
      <Image
        src="/logo.png"
        alt="Fixigo - Doorstep Device Repair"
        width={config.width}
        height={config.height}
        className={cn(
          config.image,
          size === "header"
            ? "transition-transform group-hover:scale-[2.4] sm:group-hover:scale-[2.6] md:group-hover:scale-[2.85]"
            : size === "footer"
              ? "transition-transform group-hover:scale-[2.8] sm:group-hover:scale-[3.05] md:group-hover:scale-[3.3]"
              : "transition-transform group-hover:scale-[1.02]",
        )}
        priority
      />
      {showTagline && (
        <span className="hidden text-xs font-medium uppercase tracking-wider text-muted-foreground lg:block">
          Doorstep Device Repair
        </span>
      )}
    </Link>
  );
}
