import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-3 md:px-10">
        <div>
          <h2 className="font-display text-3xl">Ritual</h2>
          <p className="mt-5 text-[13px] uppercase tracking-[0.4em] text-taupe">
            Café & Studio
          </p>
          <p className="mt-8 max-w-xs text-base leading-[1.8] text-muted-foreground">
            A mindful café and studio on Reem Island, Abu Dhabi — serving specialty coffee, seasonal food, and quiet moments.
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-taupe">
            Location
          </p>

          <div className="mt-8 space-y-5 text-muted-foreground">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-taupe" strokeWidth={1.5} />
              <div className="leading-[1.7]">
                <p>Unit 10, Reem Central Park</p>
                <p>Reem Island, Abu Dhabi</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 shrink-0 text-taupe" strokeWidth={1.5} />
              <p>050 263 7100</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-taupe">
            Follow
          </p>

          <p className="mt-8 text-lg">@ritual.uae</p>

          <div className="mt-5 flex items-center gap-4 text-muted-foreground">
            <Mail className="h-5 w-5 shrink-0 text-taupe" strokeWidth={1.5} />
            <a
              href="mailto:info@ritualstudio.ae"
              className="transition-colors hover:text-foreground"
            >
              info@ritualstudio.ae
            </a>
          </div>

          <div className="mt-8 flex gap-4">
            <a
              href="https://www.instagram.com/ritual.uae"
              target="_blank"
              rel="noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-full border border-border text-taupe transition-colors hover:text-foreground"
            >
              <Instagram className="h-5 w-5" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
          <p>© 2026 Ritual Café & Studio. All rights reserved.</p>
          <p className="text-[12px] uppercase tracking-[0.4em] text-taupe">
            Reem Island · Abu Dhabi
          </p>
        </div>
      </div>
    </footer>
  );
}
