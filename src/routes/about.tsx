import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
const img1 = "/images/IMG_8316.jpeg";
const img2 = "/images/IMG_8318.jpeg";
const img3 = "/images/IMG_8320.jpeg";
const img4 = "/images/IMG_5880.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ritual Café & Studio" },
      { name: "description", content: "A mindful & comfortable space on Reem Island. Holistic food, specialty coffee, and a creative studio for yoga and workshops." },
      { property: "og:title", content: "About Ritual Café & Studio" },
      { property: "og:description", content: "A mindful & comfortable space on Reem Island, Abu Dhabi." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: img1 },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-6 md:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[14px] uppercase tracking-[0.5em] text-taupe">Our Story</p>
          <h1 className="mt-7 font-display text-5xl leading-[1.08] text-foreground md:text-7xl">
            More than a café — a quiet ritual.
          </h1>
          <p className="mx-auto mt-7 max-w-4xl text-lg leading-[1.8] text-muted-foreground md:text-xl">
            Ritual is a mindful and comfortable space that invites you to dine and unwind, gather and create.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-16">
        <div className="aspect-[16/7] overflow-hidden rounded-sm">
          <img src={img1} alt="Espresso bar lit by warm sunset light" className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-[14px] uppercase tracking-[0.5em] text-taupe">Quality Sourced</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.12] text-foreground md:text-5xl">
              Honest food, slow coffee
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-[1.9] text-muted-foreground md:text-xl">
            Ritual embraces quality food, coffee and service. We serve holistic, fresh fare sourced from quality farms — and the food is as tasty as it looks. From single-origin pour-overs to warm sourdough plates, every detail is considered.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img src={img4} alt="Wooden table interior" className="h-full w-full object-cover" />
          </div>

          <div className="aspect-[4/5] overflow-hidden rounded-sm">
            <img src={img2} alt="Soft staircase and natural light" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-[14px] uppercase tracking-[0.5em] text-taupe">Community</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.12] text-foreground md:text-5xl">
              A studio for the everyday
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-[1.9] text-muted-foreground md:text-xl">
            We have carefully crafted a space for our guests to feel at home. Our meditation room hosts yoga classes, art therapy, healing workshops and pop-up events. Add more meaningful routines to your day, and come join the Ritual community.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-10 pb-16">
        <div className="aspect-[16/7] overflow-hidden rounded-sm">
          <img src={img3} alt="Ritual studio space with curated objects" className="h-full w-full object-cover" />
        </div>
      </section>

      <section className="px-6 md:px-10 pt-12 pb-24 text-center">
        <h2 className="font-display text-4xl leading-tight text-foreground md:text-5xl">
          Come share a quiet moment.
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/menu"
            className="group inline-flex items-center gap-3 bg-foreground px-7 py-4 text-xs uppercase tracking-[0.3em] text-background transition-all duration-300 hover:bg-foreground/90"
          >
            View Menu
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/location"
            className="inline-flex items-center gap-3 border border-foreground/70 px-7 py-4 text-xs uppercase tracking-[0.3em] transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            Visit Us
          </Link>
        </div>
      </section>
    </>
  );
}
