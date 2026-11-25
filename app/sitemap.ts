import type { MetadataRoute } from "next";
import { siteUrl, makhanaSlugs } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl;
  const routes = [
    "",
    "/about",
    "/products",
    "/services",
    "/export-import",
    "/contact",
    "/wholesale",
    "/distributor",
    "/privacy-policy",
    "/terms",
    "/shipping-returns",
    ...makhanaSlugs.map((slug) => `/products/${slug}`),
  ];
  return routes.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
