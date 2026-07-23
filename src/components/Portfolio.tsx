"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X, ArrowUpRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { categories, works, type Work } from "@/lib/content";

export default function Portfolio() {
  const [active, setActive] = useState("all");
  const [selected, setSelected] = useState<Work | null>(null);

  const filtered = useMemo(
    () => (active === "all" ? works : works.filter((w) => w.category === active)),
    [active]
  );

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected work"
            subtitle="A mix of stills and motion — weddings, brands, and stories told frame by frame."
          />

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                  active === c.key
                    ? "text-bg"
                    : "text-muted hover:text-text"
                }`}
              >
                {active === c.key && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="mt-12 grid auto-rows-[170px] grid-cols-2 gap-3 [grid-auto-flow:dense] sm:auto-rows-[220px] sm:gap-4 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((w) => (
              <motion.button
                key={w.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelected(w)}
                className={`group relative overflow-hidden rounded-xl bg-surface text-left ${
                  w.span === "tall" ? "row-span-2" : ""
                } ${w.span === "wide" ? "sm:col-span-2" : ""}`}
              >
                <Image
                  src={w.img}
                  alt={w.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />

                {/* video play badge */}
                {w.type === "video" && (
                  <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold/90 text-bg backdrop-blur transition-transform duration-500 group-hover:scale-110">
                    <Play size={20} className="ml-0.5 fill-current" />
                  </div>
                )}

                {/* caption */}
                <div className="absolute inset-x-0 bottom-0 translate-y-1 p-4 transition-transform duration-500 group-hover:translate-y-0">
                  {w.meta && (
                    <p className="text-[0.7rem] uppercase tracking-[0.2em] text-gold-bright">
                      {w.meta}
                    </p>
                  )}
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <h3 className="font-display text-lg leading-tight text-white">
                      {w.title}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-white/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Lightbox work={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

/* ---------------- Lightbox ---------------- */

function Lightbox({
  work,
  onClose,
}: {
  work: Work | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (work) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [work, onClose]);

  return (
    <AnimatePresence>
      {work && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-8"
        >
          <button
            onClick={onClose}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl"
          >
            {work.type === "video" && work.youtubeId ? (
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${work.youtubeId}?autoplay=1&rel=0`}
                  title={work.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative mx-auto max-h-[80vh] w-full overflow-hidden rounded-xl">
                <Image
                  src={work.img}
                  alt={work.title}
                  width={1200}
                  height={1500}
                  className="h-auto max-h-[80vh] w-full object-contain"
                />
              </div>
            )}

            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="font-display text-2xl text-white">{work.title}</h3>
                {work.meta && (
                  <p className="text-sm text-gold-bright">{work.meta}</p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
