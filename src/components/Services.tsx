"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Camera,
  Sparkles,
  Clapperboard,
  Youtube,
  Wand2,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { services } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  Heart,
  Camera,
  Sparkles,
  Clapperboard,
  Youtube,
  Wand2,
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative border-t border-line py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What I Do"
          title="Services crafted end to end"
          subtitle="From the first frame to the final export — photography and video, handled with the same obsessive care."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon] ?? Sparkles;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: (i % 3) * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative bg-bg-soft p-8 transition-colors duration-500 hover:bg-surface"
              >
                {/* hover gold sweep on top border */}
                <span className="absolute inset-x-0 top-0 h-px w-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-500 group-hover:w-full" />

                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-line-gold/40 bg-gold/5 text-gold transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-bg">
                  <Icon size={22} strokeWidth={1.6} />
                </div>

                <h3 className="mt-6 font-display text-2xl font-light">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>

                <span className="pointer-events-none absolute right-6 top-8 font-display text-5xl text-line transition-colors duration-500 group-hover:text-gold/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
