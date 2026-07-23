# Sabir — Photography & Video Portfolio

A cinematic, dark-themed one-page portfolio for **Sabir** — photographer & video editor (weddings, brand shoots, photography, video editing, YouTube, AI video).

Built with **Next.js 16 · TypeScript · Tailwind CSS v4 · Framer Motion**. Designed to deploy on **Vercel**.

---

## Run it locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:3000).

> Note: port 3000 may already be used by another app on this machine — the dev
> server will pick the next free port, or run `PORT=3001 npm run dev`.

---

## 👉 How to put in your own content

**Almost everything lives in one file:** [`src/lib/content.ts`](src/lib/content.ts).
Open it and edit the values — the whole site rebuilds from that data. You can change:

- Your name, role, tagline, hero text, location, years of experience
- **Email + WhatsApp number** (used by the contact buttons and form)
- Social links (YouTube, Instagram, Facebook — leave `""` to hide one)
- The **About** paragraphs, portrait photo, and tools list
- The **Services** list
- The **Portfolio** items (`works`) — title, category, photo, and video IDs
- **Stats** counters, **YouTube** featured videos, and **Testimonials**

### Swapping photos

Each portfolio item has an `img` URL. The current images are royalty-free
placeholders. To use your own:

1. Drop your photo files into the **`public/`** folder (e.g. `public/wedding-1.jpg`).
2. In `content.ts`, set `img: "/wedding-1.jpg"`.

### Swapping videos

Each video item has a `youtubeId` — that's the part after `v=` in a YouTube
link (e.g. for `youtube.com/watch?v=ABC123`, the ID is `ABC123`). Replace the
placeholder IDs with your real ones. The same applies to `youtube.featured`.

### Design colors

The palette (dark background + gold accent) is defined as CSS variables at the
top of [`src/app/globals.css`](src/app/globals.css) — `--color-gold`,
`--color-bg`, etc. Change them there to re-theme the whole site.

---

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — it auto-detects Next.js.
3. Deploy. That's it.

---

## Project structure

```
src/
  app/
    layout.tsx        # fonts (Fraunces + Inter) + metadata/SEO
    globals.css       # design tokens, effects, animations
    page.tsx          # assembles all sections in order
  components/
    Navbar.tsx  Hero.tsx  Stats.tsx  Portfolio.tsx  About.tsx
    Services.tsx  YouTube.tsx  Testimonials.tsx  Contact.tsx  Footer.tsx
    ui/ Reveal.tsx  SectionHeading.tsx
  lib/
    content.ts        # ← ALL editable content lives here
```

Accessibility & polish built in: keyboard focus rings, `prefers-reduced-motion`
support, responsive from 375px up, semantic labels, and lazy-loaded media.
