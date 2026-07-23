import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // In dev, skip on-demand optimization so placeholder CDN images load
    // instantly (the dev optimizer re-encodes each remote image and is slow).
    // Production (Vercel) still optimizes normally.
    unoptimized: process.env.NODE_ENV !== "production",
    // Placeholder media sources. When Sabir swaps in his own images
    // (local files in /public or a CDN), add the host here or use local paths.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
};

export default nextConfig;
