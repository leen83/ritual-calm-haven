import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
const logoAsset = "/images/Ritual-logo.png";

const links = [
  { to: "/" as const, label: "Home" },
  { to: "/about" as const, label: "About" },
  { to: "/menu" as const, label: "Menu" },
  { to: "/location" as const, label: "Location" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 md:py-5">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
        <img src={logoAsset} alt="Ritual Café & Studio" className="h-14 w-auto object-contain" />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground after:w-full" }}
              inactiveProps={{ className: "text-foreground/70 hover:text-foreground" }}
              className="relative text-[13px] uppercase tracking-[0.22em] transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-500 hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`block h-px w-6 bg-foreground transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-foreground transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-b border-border/60 transition-[max-height,opacity] duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-6 px-8 py-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.25em] text-foreground/80"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
