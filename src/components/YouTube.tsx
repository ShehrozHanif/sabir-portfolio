"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Youtube as YoutubeIcon, ArrowUpRight } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { youtube } from "@/lib/content";

export default function YouTube() {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <section
      id="youtube"
      className="relative border-t border-line py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="On YouTube"
            title={youtube.channelName}
            subtitle={youtube.blurb}
          />
          <Reveal>
            <a
              href={youtube.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#FF0000] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
            >
              <YoutubeIcon size={18} className="fill-current" />
              Subscribe
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {youtube.featured.map((id, i) => (
            <Reveal key={`${id}-${i}`} delay={i * 0.08}>
              <div className="group relative aspect-video overflow-hidden rounded-xl border border-line bg-surface">
                {playing === `${id}-${i}` ? (
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
                    title={`${youtube.channelName} video ${i + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    onClick={() => setPlaying(`${id}-${i}`)}
                    className="absolute inset-0"
                    aria-label="Play video"
                  >
                    <Image
                      src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                      alt={`${youtube.channelName} video thumbnail`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/10" />
                    <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-lg transition-transform duration-500 group-hover:scale-110">
                      <Play size={22} className="ml-0.5 fill-current" />
                    </span>
                  </button>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
