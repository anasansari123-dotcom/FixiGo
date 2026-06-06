import { cn } from "@/lib/utils";

type PageHeroProps = {
  title: string;
  description: string;
  eyebrow?: string;
  className?: string;
};

export function PageHero({
  title,
  description,
  eyebrow,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "hero-gradient border-b border-border pt-28 pb-14 md:pt-36 md:pb-20",
        className,
      )}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </section>
  );
}
