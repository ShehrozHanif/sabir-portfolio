"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Kind Words"
          title="Trusted by couples & brands"
          align="center"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex flex-col rounded-2xl border border-line bg-bg-soft p-8 transition-colors duration-500 hover:border-gold/30"
            >
              <Quote
                size={34}
                className="text-gold/30"
                strokeWidth={1.5}
              />
              <blockquote className="mt-4 flex-1 text-[0.98rem] leading-relaxed text-text/85">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <p className="font-display text-lg">{t.name}</p>
                <p className="text-sm text-gold-bright">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
