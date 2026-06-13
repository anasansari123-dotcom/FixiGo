import { serviceLocations } from "@/lib/data/locations";
import Link from "next/link";

export function ServiceAreas() {
  return (
    <section
      id="service-areas"
      className="section-padding border-t border-border bg-muted"
      aria-labelledby="service-areas-heading"
    >
      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Service Areas
          </p>
          <h2
            id="service-areas-heading"
            className="mt-3 text-3xl font-bold text-foreground md:text-4xl"
          >
            Doorstep repair across Western UP
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Fixigo brings expert electronics and appliance repair to{" "}
            <strong>Muzaffarnagar</strong> and nearby cities. Whether you are in{" "}
            <strong>Shamli</strong>, <strong>Meerut</strong>,{" "}
            <strong>Saharanpur</strong>, <strong>Roorkee</strong>,{" "}
            <strong>Deoband</strong>, <strong>Khatauli</strong>,{" "}
            <strong>Jansath</strong>, <strong>Budhana</strong>, or{" "}
            <strong>Haridwar</strong>, book a verified technician for fast
            doorstep service.
          </p>
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {serviceLocations.map((city) => (
            <li key={city}>
              <span className="inline-flex rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground shadow-sm">
                {city}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Need repair in your area?{" "}
          <Link href="/book-repair" className="font-semibold text-primary hover:underline">
            Book a repair
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="font-semibold text-primary hover:underline">
            contact our team
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
