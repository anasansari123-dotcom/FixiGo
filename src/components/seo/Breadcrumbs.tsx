import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";

export type BreadcrumbItem = {
  name: string;
  path: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const trail = [{ name: "Home", path: "/" }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <nav
        aria-label="Breadcrumb"
        className="container-custom border-b border-border bg-white px-4 py-3 sm:px-6 lg:px-8"
      >
        <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
          {trail.map((item, index) => {
            const isLast = index === trail.length - 1;

            return (
              <li key={item.path} className="flex items-center gap-1">
                {index > 0 && (
                  <ChevronRight
                    className="h-3.5 w-3.5 shrink-0 text-muted-foreground/60"
                    aria-hidden="true"
                  />
                )}
                {isLast ? (
                  <span
                    className="font-medium text-foreground"
                    aria-current="page"
                  >
                    {index === 0 ? (
                      <span className="inline-flex items-center gap-1">
                        <Home className="h-3.5 w-3.5" aria-hidden="true" />
                        {item.name}
                      </span>
                    ) : (
                      item.name
                    )}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className="inline-flex items-center gap-1 transition-colors hover:text-primary"
                  >
                    {index === 0 && (
                      <Home className="h-3.5 w-3.5" aria-hidden="true" />
                    )}
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
