import { Link } from "@tanstack/react-router";
import { Instagram, Music2, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40 mt-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl">Ritual</h3>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            café & studio
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground max-w-xs">
            A mindful & comfortable space to dine, unwind, and gather. Reem Island, Abu Dhabi.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Visit</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-taupe shrink-0" />
              <span>Unit 10, Reem Central Park, Reem Island, Abu Dhabi</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-taupe shrink-0" />
              <a href="tel:+971502637100" className="hover:text-foreground transition-colors">
                050 263 7100
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-taupe shrink-0" />
              <a href="mailto:hello@ritual.uae" className="hover:text-foreground transition-colors">
                hello@ritual.uae
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Follow</h4>
          <a
            href="https://instagram.com/ritual.uae"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block text-sm hover:text-foreground transition-colors"
          >
            @ritual.uae
          </a>
          <div className="mt-5 flex items-center gap-4">
            <a
              href="https://instagram.com/ritual.uae"s
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-border p-2.5 text-foreground/70 hover:text-foreground hover:border-foreground transition-all duration-300"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.tiktok.com/@ritual.ae?_r=1&_t=ZS-970oUEYio7R&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnLb4LFTkYuycZi3CZ9O4CPkq8-ZsXneOnTuwsfP5_-E_Arm7ta6x67X0xmrM_aem_VxV6Jq64mS6kXnRntTcrPA"
              aria-label="TikTok"
              className="rounded-full border border-border p-2.5 text-foreground/70 hover:text-foreground hover:border-foreground transition-all duration-300"
            >
              <Music2 className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="rounded-full border border-border p-2.5 text-foreground/70 hover:text-foreground hover:border-foreground transition-all duration-300"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>

          <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link to="/menu" className="hover:text-foreground transition-colors">Menu</Link>
            <Link to="/location" className="hover:text-foreground transition-colors">Location</Link>
          </nav>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Ritual Café & Studio. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Reem Island · Abu Dhabi</p>
        </div>
      </div>
    </footer>
  );
}
