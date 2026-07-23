import Image from "next/image";
import Reveal from "./ui/Reveal";
import { about, site } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Portrait */}
          <Reveal className="order-1 lg:order-none">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-3 -z-10 rounded-2xl border border-line-gold/40" />
              <div className="glow-gold absolute -left-10 -top-10 -z-10 h-56 w-56 rounded-full" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src={about.portrait}
                  alt={`${site.name}, photographer and video editor`}
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
              </div>
              {/* Floating stat badge */}
              <div className="glass absolute -bottom-6 -right-4 rounded-xl px-5 py-4 sm:-right-8">
                <p className="font-display text-3xl text-gold">
                  {site.yearsExperience}+
                </p>
                <p className="text-xs uppercase tracking-widest text-muted">
                  Years
                </p>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gold/50" />
                <span className="eyebrow">About</span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-4xl font-light leading-[1.1] sm:text-5xl">
                Behind the lens,
                <br />
                <span className="text-gold-gradient italic">and the edit.</span>
              </h2>
            </Reveal>

            <div className="mt-6 space-y-4">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.12 + i * 0.06}>
                  <p className="leading-relaxed text-muted">{p}</p>
                </Reveal>
              ))}
            </div>

            {/* Tools */}
            <Reveal delay={0.3}>
              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.25em] text-dim">
                  Tools of the craft
                </p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {about.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line bg-surface px-4 py-1.5 text-sm text-text/80 transition-colors hover:border-gold/40 hover:text-gold-bright"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
