import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";
import exteriorImg from "@/assets/image-6.jpeg.asset.json";
import { hours } from "@/data/menu";

export const Route = createFileRoute("/location")({
  head: () => ({
    meta: [
      { title: "Location — Ritual Café & Studio, Reem Island" },
      { name: "description", content: "Visit Ritual Café & Studio at Unit 10, Reem Central Park, Reem Island, Abu Dhabi. Open daily." },
      { property: "og:title", content: "Visit Ritual Café & Studio" },
      { property: "og:description", content: "Unit 10, Reem Central Park, Reem Island, Abu Dhabi." },
      { property: "og:url", content: "/location" },
      { property: "og:image", content: exteriorImg.url },
    ],
    links: [{ rel: "canonical", href: "/location" }],
  }),
  component: LocationPage,
});

function LocationPage() {
  return (
    <>
      <section className="pt-36 pb-12 md:pt-44 md:pb-16 px-6 md:px-10 text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-taupe">Visit</p>
        <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05]">
          Reem Central Park,<br/>Abu Dhabi.
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
          On the water at Reem Island — a quiet escape, minutes from the city.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-20">
        <div className="aspect-[16/9] overflow-hidden rounded-sm">
          <iframe
            title="Ritual Café & Studio map"
            src="https://www.google.com/maps?q=Ritual+Cafe+%26+Studio+Reem+Central+Park+Abu+Dhabi&output=embed"
            className="h-full w-full border-0 grayscale-[20%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 md:px-10 pb-24">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-taupe">Contact</p>
            <h2 className="mt-5 font-display text-4xl">Say hello</h2>

            <ul className="mt-10 space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <span className="rounded-full border border-border p-3 text-taupe">
                  <MapPin className="h-4 w-4" />
                </span>
                <a
                  href="https://maps.google.com/?q=Ritual+Cafe+Studio+Reem+Central+Park+Abu+Dhabi"
                  target="_blank"
                  rel="noreferrer"
                  className="leading-relaxed hover:text-foreground transition-colors"
                >
                  Unit 10, Reem Central Park<br />Reem Island, Abu Dhabi
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-border p-3 text-taupe">
                  <Phone className="h-4 w-4" />
                </span>
                <a href="tel:+971502637100" className="hover:text-foreground transition-colors">
                  050 263 7100
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-border p-3 text-taupe">
                  <Mail className="h-4 w-4" />
                </span>
                <a href="mailto:hello@ritual.uae" className="hover:text-foreground transition-colors">
                  hello@ritual.uae
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="rounded-full border border-border p-3 text-taupe">
                  <Instagram className="h-4 w-4" />
                </span>
                <a
                  href="https://instagram.com/ritual.uae"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  @ritual.uae
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 text-taupe">
              <Clock className="h-4 w-4" />
              <p className="text-[11px] uppercase tracking-[0.4em]">Opening Hours</p>
            </div>
            <h2 className="mt-5 font-display text-4xl">Open every day</h2>
            <ul className="mt-10 divide-y divide-border">
              {hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between py-4 text-sm">
                  <span className="uppercase tracking-[0.2em] text-xs">{h.day}</span>
                  <span className="text-muted-foreground">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
