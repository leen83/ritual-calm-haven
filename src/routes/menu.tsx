import { createFileRoute } from "@tanstack/react-router";
import { menu } from "@/data/menu";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Ritual Café & Studio" },
      { name: "description", content: "Breakfast, brunch, mains, specialty coffee, matcha, smoothies and desserts at Ritual Café & Studio." },
      { property: "og:title", content: "Menu — Ritual Café & Studio" },
      { property: "og:description", content: "Specialty coffee, holistic food and seasonal brunch." },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});


function MenuPage() {
  return (
    <>
      <section className="pt-36 pb-12 md:pt-44 md:pb-16 px-6 md:px-10 text-center">
        <p className="text-[14px] uppercase tracking-[0.4em] text-taupe">The Menu</p>
        <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05]">
          A seasonal selection,<br />made with care.
        </h1>

        <nav className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          {menu.map((s) => (
            <a
              key={s.title}
              href={`#${slug(s.title)}`}
              className="hover:text-foreground transition-colors duration-300"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </section>

    

      <div className="mx-auto max-w-6xl px-6 md:px-10 pb-32">
        {menu.map((section) => (
          <section key={section.title} id={slug(section.title)} className="scroll-mt-28 mb-24">
            <div className="mb-10 border-b border-border pb-6">
              <h2 className="font-display text-4xl md:text-5xl">{section.title}</h2>
            </div>

            <div className="grid gap-x-14 gap-y-8 md:grid-cols-2">
              {section.items.map((item) => (
                <article key={item.name} className="border-b border-border/70 pb-7">
                  <div className="flex items-baseline justify-between gap-6">
                    <h3 className="font-display text-2xl leading-tight">
                      {item.name}
                      {item.popular && (
                        <span className="ml-3 align-middle text-[9px] uppercase tracking-[0.3em] text-[#8b6f47] border border-[#c7a46b]/60 bg-[#d8c09a]/20 px-2 py-0.5 rounded-full">
  popular
</span>
                      )}
                    </h3>
                    <span className="shrink-0 text-sm tracking-wide text-foreground">
                      {item.price}
                    </span>
                  </div>

                  {item.description && (
                    <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
