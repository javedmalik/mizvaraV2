import type { Metadata } from "next";
export const siteUrl = "https://www.mizavaraglobal.com";
export const makhanaSlugs = ["natural-makhana", "peri-peri-makhana", "pudina-makhana"] as const;
export function pageSeo(path: string, title: string, description: string, image = "/images/v2/hero-collection.webp"): Metadata {
  const url = new URL(path, siteUrl).toString();
  return { title, description, alternates: { canonical: url }, openGraph: { type: "website", siteName: "MIZAVARA Global", title, description, url, locale: "en_IN", images: [{ url: image, alt: title }] }, twitter: {card: "summary_large_image", title, description, images: [image]} };
}
