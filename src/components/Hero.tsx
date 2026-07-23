"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { site } from "@/lib/content";

const word: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-dvh items-center overflow-hidden"
    >
      {/* Background image (swap for a looping <video> when Sabir provides a showreel) */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        {/* Cinematic gradient wash + vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/90 via-bg/30 to-transparent" />
        <div className="absolute inset-0 vignette" />
      </div>

      {/* Ambient gold glow */}
      <div className="glow-gold animate-float-slow absolute -right-20 top-1/4 -z-10 h-[420px] w-[420px] rounded-full" />

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <span className="h-px w-10 bg-gold/60" />
            <span className="eyebrow">
              {site.role} · {site.yearsExperience} Years
            </span>
          </motion.div>

          {/* Headline — animated word by word */}
          <h1 className="mt-6 font-display text-[15vw] font-light leading-[0.92] tracking-tight sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            {site.heroHeadline.map((w, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  custom={i}
                  variants={reduce ? undefined : word}
                  initial={reduce ? { opacity: 0 } : "hidden"}
                  animate={reduce ? { opacity: 1 } : "show"}
                  className={`inline-block ${
                    i === site.heroHeadline.length - 1
                      ? "text-gold-gradient italic"
                      : ""
                  }`}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {site.heroSub}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-bg transition-transform duration-300 hover:scale-[1.03]"
            >
              View Work
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#youtube"
              className="group inline-flex items-center gap-2.5 rounded-full border border-line px-6 py-3.5 text-sm font-medium text-text transition-colors duration-300 hover:border-gold/50"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/15 text-gold transition-colors group-hover:bg-gold group-hover:text-bg">
                <Play size={12} className="ml-0.5 fill-current" />
              </span>
              Watch Showreel
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-dim hidden sm:flex">
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-line pt-1.5">
          <span className="animate-scroll-cue h-1.5 w-1 rounded-full bg-gold" />
        </div>
      </div>
    </section>
  );
}
