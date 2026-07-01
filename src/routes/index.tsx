import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Clock, Star } from "lucide-react";
import { hours } from "@/data/menu";

const heroImg = "/images/IMG_5879.jpeg";
const ritual1Img = "/images/Ritual1";
const ritual2Img = "/images/Ritual2";
const aboutImg = "/images/IMG_5880.jpeg";
const interior1 = "/images/IMG_8316.jpeg";
const interior2 = "/images/IMG_8318.jpeg";
const interior3 = "/images/IMG_8320.jpeg";
const drinkImg = "/images/IMG_8322.jpeg";
const brunchImg = "/images/IMG_8321.jpeg";
const cheesecakeImg = "/images/087E5C48-1CF3-4508-BBDD-A17DF8F98952.png";
const acaiImg = "/images/IMG_8373.jpeg";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ritual Café & Studio — A mindful space on Reem Island" },
      { name: "description", content: "Specialty coffee, holistic food and a calm creative space on Reem Island, Abu Dhabi." },
      { property: "og:title", content: "Ritual Café & Studio" },
      { property: "og:description", content: "A mindful & comfortable café and studio on Reem Island, Abu Dhabi." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const featured = [
  { img: brunchImg, name: "Avocado Toast" },
  { img: acaiImg, name: "Acai Berry Smoothie" },
  { img: cheesecakeImg, name: "San Sebastian Cheesecake" },
];
const reviews = [
  {
    quote: "Easily one of the best spots to relax and unwind. The location is amazing and the vibes are unmatched.",
    name: "Joanna Crystal",
    detail: "Local Guide",
  },
  {
    quote: "Their place is like therapy while their coffee is super tasty and delicious.",
    name: "Ibrahim Kollab",
    detail: "Local Guide",
  },
  {
    quote: "Beautiful location in Reem Island — grounding and elegant. The meal was truly lovely.",
    name: "Prachi Ranavat",
    detail: "Local Guide",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
<img
  src={heroImg}
  alt="Ritual Café terrace overlooking the water on Reem Island"
  className="absolute inset-0 h-full w-full object-cover"
/>
<div className="absolute inset-0 bg-black/35" />
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/45" />
        <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-32 text-center md:pb-36">
  <h1 className="fade-in-up font-display text-5xl leading-[1.05] text-white sm:text-6xl md:text-6xl lg:text-7xl">
    A quiet ritual,<br />brewed with intention.
  </h1>

  <div className="fade-in-up mt-12 flex flex-wrap items-center justify-center gap-3">
    <Link
      to="/menu"
      className="group inline-flex items-center gap-3 bg-foreground px-7 py-4 text-xs uppercase tracking-[0.3em] text-background transition-all duration-300 hover:bg-foreground/90"
    >
      View Menu
      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
    </Link>
  </div>
</div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-36">
        <div className="grid gap-14 md:grid-cols-2 md:gap-20 items-center">
          <div className="order-2 md:order-1">
            <p className="text-[11px] uppercase tracking-[0.4em] text-taupe">Our Philosophy</p>
            <h2 className="mt-5 font-display text-4xl md:text-5xl leading-[1.1]">
              A mindful space to dine, gather, and slow down.
            </h2>
            <p className="mt-8 text-base leading-[1.85] text-muted-foreground">
              Ritual embraces quality food, coffee and service. We serve holistic, fresh fare sourced from quality
              farms — and it tastes as good as it looks. We have carefully crafted a space for our guests to feel
              at home.
            </p>
            <p className="mt-5 text-base leading-[1.85] text-muted-foreground">
              Our meditation room hosts yoga classes, art therapy, healing workshops and pop-up events. Add more
              meaningful routines to your day, and come join the Ritual community.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground border-b border-foreground pb-1 hover:gap-5 transition-all duration-500"
            >
              Our Story <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img src={aboutImg} alt="Ritual café interior" className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col items-center text-center">
            <p className="text-[12px] uppercase tracking-[0.45em] text-taupe">Featured</p>
            <h2 className="mt-5 font-display text-4xl md:text-5xl">From the menu</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              A glimpse of what's on offer — from slow-brewed coffee to seasonal brunch.
            </p>
          </div>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
  {featured.map((f) => (
    <article key={f.name} className="group text-center">
      <div className="overflow-hidden rounded-sm aspect-[4/5] bg-muted">
        <img
          src={f.img}
          alt={f.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-7 text-center font-display text-[26px] leading-snug text-taupe md:text-[30px]">
  {f.name}
</h3>
    </article>
  ))}
</div>
          <div className="mt-14 flex justify-center">
            <Link
              to="/menu"
              className="inline-flex items-center gap-3 border border-foreground px-7 py-4 text-xs uppercase tracking-[0.3em] transition-all duration-500 hover:bg-foreground hover:text-background"
            >
              Explore the full menu <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-taupe">Gallery</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Inside the ritual</h2>
          </div>
        </div>
        <div className="grid gap-4 md:gap-6 md:grid-cols-6">
          <div className="md:col-span-4 aspect-[4/3] overflow-hidden rounded-sm">
            <img src={brunchImg} alt="Brunch with waterfront view" className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105" />
          </div>
          <div className="md:col-span-2 aspect-[4/3] md:aspect-auto overflow-hidden rounded-sm">
            <img src={ritual1Img} alt="Ritual café interior" className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105" />
          </div>
          <div className="md:col-span-2 aspect-square overflow-hidden rounded-sm">
            <img src={drinkImg} alt="House signature drink" className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105" />
          </div>
          <div className="md:col-span-2 aspect-square overflow-hidden rounded-sm">
            <img src={ritual2Img} alt="Ritual café interior" className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105" />
          </div>
          <div className="md:col-span-2 aspect-square overflow-hidden rounded-sm">
            <img src={interior3} alt="Curated studio space" className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105" />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-[0.4em] text-taupe">Kind Words</p>
            <h2 className="mt-5 font-display text-4xl md:text-5xl">From our guests</h2>
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="flex flex-col items-center text-center">
                <div className="flex gap-1 text-[#b8a15f]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 font-display text-2xl leading-[1.4]">
                  "{r.quote}"
                </blockquote>
                <figcaption className="mt-6 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
  {r.name}
</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

            {/* Hours + Visit */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <div className="flex items-center gap-3 text-taupe">
              <Clock className="h-4 w-4" />
              <p className="text-[11px] uppercase tracking-[0.4em]">Opening Hours</p>
            </div>

            <h2 className="mt-5 font-display text-4xl md:text-5xl">
              Open every day
            </h2>

            <ul className="mt-10 divide-y divide-border">
              {hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between py-4 text-sm">
                  <span className="uppercase tracking-[0.2em] text-xs">{h.day}</span>
                  <span className="text-muted-foreground">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 text-taupe">
              <MapPin className="h-4 w-4" />
              <p className="text-[11px] uppercase tracking-[0.4em]">Find Us</p>
            </div>

            <h2 className="mt-5 font-display text-4xl md:text-5xl">
              Reem Central Park
            </h2>

            <p className="mt-6 text-muted-foreground leading-[1.85]">
              Unit 10, Reem Central Park,<br />
              Reem Island, Abu Dhabi
            </p>

            <Link
              to="/location"
              className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-foreground border-b border-foreground pb-1 hover:gap-5 transition-all duration-500"
            >
              Get Directions <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
