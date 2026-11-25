import type { Metadata } from "next";
import { siteUrl } from "@/lib/seo";
import {
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
  Noto_Sans_Devanagari,
} from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import { MotionProvider } from "@/components/motion/motion-provider";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const hindi = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-hindi",
  display: "swap",
});
export const metadata: Metadata = {
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mizavara Global | Nature’s Goodness. Quality You Trust.",
    template: "%s | Mizavara Global",
  },
  description:
    "Explore MIZAVARA’s Makhana collection and enquire about wholesale food supply and distributor partnerships.",
  keywords: [
    "makhana supplier",
    "natural makhana",
    "peri peri makhana",
    "pudina makhana",
    "wholesale makhana",
    "Mizavara Global",
  ],
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${hindi.variable} antialiased`}
      >
        <LanguageProvider>
          <MotionProvider>
            <SiteShell>{children}</SiteShell>
          </MotionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
