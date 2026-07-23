import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://sabir-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sabir — Photographer & Video Editor",
  description:
    "Sabir is a photographer and video editor with 10 years of experience — weddings, brand shoots, cinematic video editing, YouTube, and AI video. Based in Pakistan, available worldwide.",
  keywords: [
    "photographer",
    "video editor",
    "wedding photography",
    "brand shoots",
    "cinematic video",
    "YouTube editor",
    "AI video",
    "Sabir",
  ],
  authors: [{ name: "Sabir" }],
  openGraph: {
    title: "Sabir — Photographer & Video Editor",
    description:
      "10 years crafting weddings, brand films, and cinematic edits. See the work.",
    url: siteUrl,
    siteName: "Sabir",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabir — Photographer & Video Editor",
    description:
      "10 years crafting weddings, brand films, and cinematic edits. See the work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-text font-sans selection:bg-gold/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
