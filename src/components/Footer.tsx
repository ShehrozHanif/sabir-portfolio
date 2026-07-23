import { Instagram, Youtube, Facebook } from "lucide-react";
import { site } from "@/lib/content";

const socialLinks = [
  { href: site.socials.instagram, icon: Instagram, label: "Instagram" },
  { href: site.socials.youtube, icon: Youtube, label: "YouTube" },
  { href: site.socials.facebook, icon: Facebook, label: "Facebook" },
].filter((s) => s.href);

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Wordmark */}
          <a href="#top" className="font-display text-2xl tracking-wide">
            {site.name}
            <span className="text-gold">.</span>
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-sm text-muted">
            <a href="#work" className="transition-colors hover:text-gold">
              Work
            </a>
            <a href="#about" className="transition-colors hover:text-gold">
              About
            </a>
            <a href="#services" className="transition-colors hover:text-gold">
              Services
            </a>
            <a href="#contact" className="transition-colors hover:text-gold">
              Contact
            </a>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors duration-300 hover:border-gold/40 hover:text-gold"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 hairline" />
        <div className="mt-6 flex flex-col items-center justify-between gap-2 text-xs text-dim sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.role}</p>
        </div>
      </div>
    </footer>
  );
}
