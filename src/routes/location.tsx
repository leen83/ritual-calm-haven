import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock, Instagram,Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location — Ritual Café & Studio, Reem Island" },
      {
        name: "description",
        content:
          "Visit Ritual Café & Studio at Unit 10, Reem Central Park, Reem Island, Abu Dhabi.",
      },
      { property: "og:title", content: "Visit Ritual Café & Studio" },
      {
        property: "og:description",
        content: "Unit 10, Reem Central Park, Reem Island, Abu Dhabi.",
      },
      { property: "og:url", content: "/location" },
    ],
    links: [{ rel: "canonical", href: "/location" }],
  }),
  component: LocationPage,
});

const openingHours = [
  { day: "Monday", time: "7AM – 12AM" },
  { day: "Tuesday", time: "7AM – 12AM" },
  { day: "Wednesday", time: "7AM – 12AM" },
  { day: "Thursday", time: "7AM – 12AM" },
  { day: "Friday", time: "7AM – 12AM" },
  { day: "Saturday", time: "7AM – 12AM" },
  { day: "Sunday", time: "7AM – 12AM" },
];

function LocationPage() {
  return (
    <>
      <section className="pt-36 pb-14 md:pt-44 md:pb-18 px-6 md:px-10 text-center">
        <p className="text-[13px] uppercase tracking-[0.5em] text-taupe">
          Visit
        </p>

        <h1 className="mt-6 font-display text-5xl leading-[1.05] text-foreground md:text-7xl">
          Reem Central Park,<br />Abu Dhabi.
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-[1.8] text-muted-foreground md:text-lg">
          On the water at Reem Island — a quiet escape, minutes from the city.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 md:px-10 pb-24">
        <div className="grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
          <article className="rounded-sm border border-border bg-secondary/35 p-8 md:p-10">
            <p className="text-[11px] uppercase tracking-[0.4em] text-taupe">
              Find Us
            </p>

            <h2 className="mt-5 font-display text-4xl leading-tight text-foreground md:text-5xl">
              Ritual Café & Studio
            </h2>

            <div className="mt-10 space-y-6 text-muted-foreground">
              <div className="flex items-start gap-4">
                <span className="rounded-full border border-border p-3 text-taupe">
                  <MapPin className="h-4 w-4" />
                </span>
                <p className="leading-[1.8]">
                  Unit 10, Reem Central Park<br />
                  Reem Island, Abu Dhabi
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="rounded-full border border-border p-3 text-taupe">
                  <Phone className="h-4 w-4" />
                </span>
                <a
                  href="tel:+971502637100"
                  className="transition-colors hover:text-foreground"
                >
                  050 263 7100
                </a>
              </div>
              <div className="flex items-center gap-4">
  <span className="rounded-full border border-border p-3 text-taupe">
    <Mail className="h-4 w-4" />
  </span>
  <a
    href="mailto:info@ritualstudio.ae"
    className="transition-colors hover:text-foreground"
  >
    info@ritualstudio.ae
  </a>
</div>

              <div className="flex items-center gap-4">
                <span className="rounded-full border border-border p-3 text-taupe">
                  <Instagram className="h-4 w-4" />
                </span>
                <a
                  href="https://www.instagram.com/ritual.uae"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  @ritual.uae
                </a>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Ritual+Cafe+Studio+Reem+Central+Park+Abu+Dhabi"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 bg-foreground px-7 py-4 text-xs uppercase tracking-[0.3em] text-background transition-all duration-300 hover:bg-foreground/90"
            >
              Get Directions
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </article>

          <article className="rounded-sm border border-border p-8 md:p-10">
  <p className="text-[11px] uppercase tracking-[0.4em] text-taupe">
    Before You Visit
  </p>

  <h2 className="mt-5 font-display text-4xl leading-tight text-foreground md:text-5xl">
    Plan your quiet moment.
  </h2>

  <ul className="mt-10 space-y-6 text-sm leading-[1.8] text-muted-foreground">
    <li className="border-b border-border pb-5">
      Located inside Reem Central Park, close to the waterfront.
    </li>
    <li className="border-b border-border pb-5">
      Open daily from 7AM to 12AM.
    </li>
    <li className="border-b border-border pb-5">
      Ideal for specialty coffee, breakfast, desserts, and slow afternoons.
    </li>
    <li>
      Best reached by searching “Ritual Café & Studio Reem Central Park” on Maps.
    </li>
  </ul>
</article>
        </div>
      </section>
    </>
  );
}
