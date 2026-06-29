import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Locations — Ritual Café & Studio" },
      {
        name: "description",
        content:
          "Find Ritual Café locations across Abu Dhabi and Al Ain, including Reem Island, HBZ, Oasis, STMC, and UAEU.",
      },
      { property: "og:title", content: "Locations — Ritual Café & Studio" },
      {
        property: "og:description",
        content: "Multiple Ritual Café locations across Abu Dhabi and Al Ain.",
      },
      { property: "og:url", content: "/location" },
    ],
    links: [{ rel: "canonical", href: "/location" }],
  }),
  component: LocationPage,
});

const locations = [
  {
    name: "Ritual Café & Studio",
    area: "Reem Island",
    address: "Unit 10, Reem Central Park, Reem Island, Abu Dhabi",
    hours: "7AM–12AM",
    phone: "050 263 7100",
    map: "https://www.google.com/maps/search/?api=1&query=Ritual%20Cafe%20Studio%20Reem%20Island%20Abu%20Dhabi",
  },
  {
    name: "Ritual Café",
    area: "HBZ / Al Khibeesi",
    address: "Hamdan Bin Zayed St, Al Khibeesi, Al Zaafaran, Al Ain, Abu Dhabi",
    hours: "7AM–12AM",
    phone: "+971 3 753 2600",
    map: "https://www.google.com/maps/search/?api=1&query=Ritual%20Cafe%20Hamdan%20Bin%20Zayed%20St%20Al%20Ain",
  },
  {
    name: "Ritual Café Al Ain Oasis",
    area: "Al Ain Oasis",
    address: "Central District, Al Ain Oasis, Al Ain, Abu Dhabi",
    hours: "8AM–12AM",
    phone: "+971 54 583 9545",
    map: "https://www.google.com/maps/search/?api=1&query=Ritual%20Cafe%20Al%20Ain%20Oasis",
  },
  {
    name: "Ritual Café",
    area: "STMC",
    address: "Sheikh Tahnoon bin Mohammed Medical City, Al Mu'tarid, Al Ain, Abu Dhabi",
    hours: "7AM–12AM",
    phone: "",
    map: "https://www.google.com/maps/search/?api=1&query=Ritual%20Cafe%20STMC%20Al%20Ain",
  },
  {
    name: "Ritual Café",
    area: "UAEU",
    address: "United Arab Emirates University, Al Ain, Abu Dhabi",
    hours: "7AM–7PM",
    phone: "",
    map: "https://www.google.com/maps/search/?api=1&query=Ritual%20Cafe%20UAEU%20Al%20Ain",
  },
];

function LocationPage() {
  return (
    <>
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 px-6 md:px-10 text-center">
        <p className="text-[14px] uppercase tracking-[0.4em] text-taupe">Locations</p>
        <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05]">
          Find your nearest<br />Ritual.
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-28">
        <div className="grid gap-6 md:grid-cols-2">
          {locations.map((location) => (
            <article
              key={`${location.name}-${location.area}`}
              className="rounded-sm border border-border bg-background/60 p-8 md:p-10"
            >
              <p className="text-[11px] uppercase tracking-[0.4em] text-taupe">
                {location.area}
              </p>

              <h2 className="mt-5 font-display text-4xl leading-tight text-foreground">
                {location.name}
              </h2>

              <div className="mt-8 space-y-5 text-muted-foreground">
                <div className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-taupe" strokeWidth={1.5} />
                  <p className="text-base leading-[1.7]">{location.address}</p>
                </div>

                <div className="flex gap-4">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-taupe" strokeWidth={1.5} />
                  <p className="text-base leading-[1.7]">{location.hours}</p>
                </div>

                {location.phone && (
                  <div className="flex gap-4">
                    <Phone className="mt-1 h-5 w-5 shrink-0 text-taupe" strokeWidth={1.5} />
                    <p className="text-base leading-[1.7]">{location.phone}</p>
                  </div>
                )}
              </div>

              <a
                href={location.map}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground transition-colors duration-300 hover:text-taupe"
              >
                Open in Maps
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
