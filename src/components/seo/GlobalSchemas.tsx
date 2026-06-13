import { JsonLd } from "@/components/seo/JsonLd";
import { globalSchemas } from "@/lib/seo/schema";

export function GlobalSchemas() {
  return <JsonLd data={globalSchemas()} />;
}
