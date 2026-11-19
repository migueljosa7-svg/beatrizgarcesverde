import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCta from "@/components/StickyCta";
import JsonLd from "@/components/JsonLd";
import { globalGraph } from "@/lib/schema";
import { site } from "@/config/site";
import { media } from "@/config/media";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: "/" },
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
      <body>
        <JsonLd data={globalGraph} />
        <a href="#contenido" className="skip">Ir al contenido</a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <StickyCta />
      </body>
    </html>
  );
}
