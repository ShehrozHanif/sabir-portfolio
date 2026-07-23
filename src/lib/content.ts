/* ============================================================
   SABIR — SITE CONTENT (single source of truth)
   ------------------------------------------------------------
   👉 Sabir: edit THIS file to put in your real content.
      - Replace `img` URLs with your own photos. Easiest way:
        drop files in the /public folder and use "/my-photo.jpg".
      - Replace `youtubeId` values with your real video IDs
        (the part after v= in a YouTube link).
      - Update name, links, stats, and testimonials below.
   The rest of the site rebuilds itself from this data.
   ============================================================ */

export const site = {
  name: "Sabir",
  role: "Photographer & Video Editor",
  // One-line positioning shown in the hero.
  tagline: "Photographer & Video Editor",
  heroHeadline: ["Moments,", "made", "cinematic."],
  heroSub:
    "Weddings, brand films, and story-driven edits — crafted over 10 years behind the lens and in the timeline.",
  location: "Pakistan · Available worldwide",
  yearsExperience: 10,

  // Contact
  email: "itssabirakhter@gmail.com",
  whatsapp: "923138145343", // international format, no + or spaces
  whatsappDisplay: "+92 313 8145343",

  // Social links (leave "" to hide)
  socials: {
    youtube: "https://www.youtube.com/@itssabirvlogs9371",
    instagram: "https://www.instagram.com/sabir.akhter1",
    facebook: "https://www.facebook.com/share/1AwzJNGDzM/",
    tiktok: "",
  },
};

export const about = {
  portrait: "/s1.jpeg",
  paragraphs: [
    "I'm Sabir — a photographer and video editor with a decade of work spanning wedding days, brand campaigns, and the quiet in-between moments that make a story feel real.",
    "I shoot stills and motion, then live in the edit until every frame earns its place. From a bride's first look to a brand's hero film, my job is the same: make people feel something.",
    "Today I also run a monetized YouTube channel and craft AI-assisted videos — always chasing the next way to tell a story better.",
  ],
  tools: ["Adobe Premiere Pro", "Filmora", "CapCut", "AI Video"],
};

export type Service = {
  title: string;
  description: string;
  icon: string; // lucide-react icon name
};

export const services: Service[] = [
  {
    title: "Wedding Shoots",
    description:
      "Full-day coverage that captures the day as it truly felt — candid, warm, unforgettable.",
    icon: "Heart",
  },
  {
    title: "Photography",
    description:
      "Portraits, events, and lifestyle sessions with a clean, cinematic finish.",
    icon: "Camera",
  },
  {
    title: "Brand Shoots",
    description:
      "Product and brand imagery built to sell — art-directed, styled, and polished.",
    icon: "Sparkles",
  },
  {
    title: "Video Editing",
    description:
      "Story-first edits in Premiere, Filmora & CapCut — pacing, color, and sound that land.",
    icon: "Clapperboard",
  },
  {
    title: "YouTube Editing",
    description:
      "Retention-focused edits for creators — hooks, motion graphics, and clean captions.",
    icon: "Youtube",
  },
  {
    title: "AI Videos",
    description:
      "AI-assisted visuals and B-roll to push concepts further, faster.",
    icon: "Wand2",
  },
];

export type Category = {
  key: string;
  label: string;
};

export const categories: Category[] = [
  { key: "all", label: "All Work" },
  { key: "weddings", label: "Weddings" },
  { key: "brands", label: "Brands" },
  { key: "photography", label: "Photography" },
  { key: "video", label: "Video" },
  { key: "ai", label: "AI" },
];

export type Work = {
  id: string;
  title: string;
  category: Exclude<Category["key"], "all">;
  type: "photo" | "video";
  img: string; // thumbnail / photo
  youtubeId?: string; // required when type === "video"
  meta?: string; // e.g. "Wedding · 2024"
  span?: "tall" | "wide" | "normal"; // masonry sizing hint
};

// NOTE: `img` and `youtubeId` are placeholders — swap for your own.
export const works: Work[] = [
  {
    id: "w1",
    title: "Ayesha & Bilal",
    category: "weddings",
    type: "photo",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    meta: "Wedding · 2024",
    span: "tall",
  },
  {
    id: "w2",
    title: "The First Look",
    category: "weddings",
    type: "photo",
    img: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=900&q=80",
    meta: "Wedding · 2023",
  },
  {
    id: "w3",
    title: "Golden Hour Vows",
    category: "weddings",
    type: "photo",
    img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
    meta: "Wedding · 2024",
    span: "wide",
  },
  {
    id: "b1",
    title: "Timepiece Campaign",
    category: "brands",
    type: "photo",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    meta: "Brand · Product",
  },
  {
    id: "b2",
    title: "Streetwear Drop",
    category: "brands",
    type: "photo",
    img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=80",
    meta: "Brand · Lookbook",
    span: "tall",
  },
  {
    id: "b3",
    title: "Café Rebrand",
    category: "brands",
    type: "photo",
    img: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80",
    meta: "Brand · Lifestyle",
  },
  {
    id: "p1",
    title: "Studio Portrait",
    category: "photography",
    type: "photo",
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80",
    meta: "Portrait · 2024",
    span: "tall",
  },
  {
    id: "p2",
    title: "City Nights",
    category: "photography",
    type: "photo",
    img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=900&q=80",
    meta: "Street · 2023",
    span: "wide",
  },
  {
    id: "p3",
    title: "Desert Light",
    category: "photography",
    type: "photo",
    img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=80",
    meta: "Landscape · 2024",
  },
  {
    id: "v1",
    title: "Wedding Film — Trailer",
    category: "video",
    type: "video",
    img: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=900&q=80",
    youtubeId: "ScMzIvxBSi4",
    meta: "Cinematic Edit",
    span: "wide",
  },
  {
    id: "v2",
    title: "Brand Promo — 60s",
    category: "video",
    type: "video",
    img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80",
    youtubeId: "aqz-KE-bpKQ",
    meta: "Commercial",
  },
  {
    id: "a1",
    title: "AI Concept Reel",
    category: "ai",
    type: "video",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80",
    youtubeId: "ScMzIvxBSi4",
    meta: "AI-Assisted",
    span: "tall",
  },
  {
    id: "a2",
    title: "Generative B-Roll",
    category: "ai",
    type: "photo",
    img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=900&q=80",
    meta: "AI · Experiment",
  },
];

export const stats = [
  { value: 10, suffix: "+", label: "Years of experience" },
  { value: 1500, suffix: "+", label: "Weddings & events" },
  { value: 500, suffix: "+", label: "Projects delivered" },
  { value: 12, suffix: "M+", label: "Views edited on YouTube" },
];

export const youtube = {
  channelName: "Sabir Vlogs",
  channelUrl: "https://www.youtube.com/@itssabirvlogs9371",
  blurb:
    "A monetized channel where I share edits, behind-the-scenes, and the craft of visual storytelling.",
  // Featured video IDs (replace with your own)
  featured: ["NaRDBZJ-9bw", "WqlibHI4w8s", "M1h-KoSdopQ"],
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Sabir turned our wedding into a film we rewatch every anniversary. He sees moments before they happen.",
    name: "Ayesha K.",
    role: "Bride, 2024",
  },
  {
    quote:
      "Our product launch video tripled engagement. The pacing and color grade were on another level.",
    name: "Hamza R.",
    role: "Founder, Brand Studio",
  },
  {
    quote:
      "Reliable, fast, and genuinely creative. Every edit comes back better than I imagined.",
    name: "Zara M.",
    role: "YouTube Creator",
  },
];
