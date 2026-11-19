import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { site } from "@/config/site";
import { media } from "@/config/media";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: site.url },
  authors: [{ name: site.name }],
  openGraph: {
    type: "website", url: site.url, siteName: site.name, locale: "es_ES",
    title: site.title, description: site.description,
    images: [{ url: media.og, width: 1200, height: 630, alt: media.hero.alt }],
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: [media.og] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width", initialScale: 1, viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1f4d3a" },
    { media: "(prefers-color-scheme: dark)", color: "#12301f" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
