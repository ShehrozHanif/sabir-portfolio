"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowUpRight, MapPin } from "lucide-react";
import Reveal from "./ui/Reveal";
import { site } from "@/lib/content";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // No backend needed — compose a pre-filled WhatsApp message.
  const waHref = () => {
    const text = `Hi ${site.name}, I'm ${form.name || "..."}${
      form.email ? ` (${form.email})` : ""
    }.%0A%0A${encodeURIComponent(form.message || "I'd like to discuss a project.")}`;
    return `https://wa.me/${site.whatsapp}?text=${text}`;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(waHref(), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="glow-gold absolute -left-20 bottom-0 h-96 w-96 opacity-70" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — pitch + direct links */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gold/50" />
                <span className="eyebrow">Get in touch</span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-4xl font-light leading-[1.05] sm:text-5xl md:text-6xl text-balance">
                Let&apos;s make
                <br />
                <span className="text-gold-gradient italic">
                  something beautiful.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md leading-relaxed text-muted">
                Booking weddings, brand shoots, and edit projects. Tell me what
                you have in mind — I usually reply within a day.
              </p>
            </Reveal>

            <div className="mt-10 space-y-3">
              <Reveal delay={0.2}>
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-line bg-bg-soft p-4 transition-colors duration-300 hover:border-gold/40"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#25D366]/15 text-[#25D366]">
                    <MessageCircle size={20} />
                  </span>
                  <span className="flex-1">
                    <span className="block text-xs uppercase tracking-widest text-dim">
                      WhatsApp
                    </span>
                    <span className="text-text">{site.whatsappDisplay}</span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-dim transition-colors group-hover:text-gold"
                  />
                </a>
              </Reveal>
              <Reveal delay={0.26}>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-4 rounded-xl border border-line bg-bg-soft p-4 transition-colors duration-300 hover:border-gold/40"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <Mail size={20} />
                  </span>
                  <span className="flex-1">
                    <span className="block text-xs uppercase tracking-widest text-dim">
                      Email
                    </span>
                    <span className="text-text">{site.email}</span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-dim transition-colors group-hover:text-gold"
                  />
                </a>
              </Reveal>
              <Reveal delay={0.32}>
                <div className="flex items-center gap-4 rounded-xl border border-line bg-bg-soft p-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-surface-2 text-muted">
                    <MapPin size={20} />
                  </span>
                  <span className="flex-1">
                    <span className="block text-xs uppercase tracking-widest text-dim">
                      Based in
                    </span>
                    <span className="text-text">{site.location}</span>
                  </span>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right — form (opens WhatsApp) */}
          <Reveal delay={0.15}>
            <form
              onSubmit={onSubmit}
              className="glass rounded-2xl p-6 sm:p-8"
            >
              <div className="space-y-5">
                <Field
                  label="Your name"
                  id="name"
                  value={form.name}
                  onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                  placeholder="Jane Doe"
                />
                <Field
                  label="Email"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                  placeholder="jane@email.com"
                />
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm text-muted"
                  >
                    Tell me about your project
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="Wedding on 12 Dec, ~200 guests, looking for full-day coverage + a highlight film…"
                    className="w-full resize-none rounded-lg border border-line bg-bg/60 px-4 py-3 text-text placeholder:text-dim focus:border-gold/50 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3.5 font-semibold text-bg transition-transform duration-300 hover:scale-[1.01]"
                >
                  <MessageCircle size={18} />
                  Send via WhatsApp
                </button>
                <p className="text-center text-xs text-dim">
                  Opens WhatsApp with your message pre-filled. No account needed.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm text-muted">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={type === "email" ? "email" : "name"}
        className="w-full rounded-lg border border-line bg-bg/60 px-4 py-3 text-text placeholder:text-dim focus:border-gold/50 focus:outline-none"
      />
    </div>
  );
}
