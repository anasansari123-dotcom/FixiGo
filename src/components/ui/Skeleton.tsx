import { cn } from "@/lib/utils";

type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn("skeleton-shimmer rounded-xl", className)}
      aria-hidden="true"
    />
  );
}

export function PageSkeleton() {
  return (
    <div className="section-padding container-custom animate-pulse space-y-8">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-64 w-full" />
      <div className="grid gap-6 md:grid-cols-3">
        <Skeleton className="h-48" />
        <Skeleton className="h-48" />
        <Skeleton className="h-48" />
      </div>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <Skeleton className="mb-4 h-40 w-full" />
      <Skeleton className="mb-2 h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
    </div>
  );
}
