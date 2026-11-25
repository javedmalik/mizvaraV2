import { siteUrl, makhanaSlugs } from "./seo";
import { contact, products } from "./site-data";
const absolute = (path: string) => new URL(path, siteUrl).href;
const organizationId = absolute("/#organization");
export const websiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": organizationId, name: "MIZAVARA Global", legalName: "Mizavara Global Private Limited", url: absolute("/"), logo: absolute("/mizavara-logo.png"), email: contact.email, telephone: contact.phone },
    { "@type": "WebSite", "@id": absolute("/#website"), url: absolute("/"), name: "MIZAVARA Global", publisher: { "@id": organizationId }, inLanguage: ["en", "hi"] },
  ],
};
export function productSchema(product: { slug: string; name: string; description: string }, image: string) {
  const url = absolute(`/products/${product.slug}`);
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "Product", "@id": `${url}#product`, name: product.name, description: product.description, image: absolute(image), url, brand: { "@type": "Brand", name: "MIZAVARA" } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absolute("/") },
      { "@type": "ListItem", position: 2, name: "Products", item: absolute("/products") },
      { "@type": "ListItem", position: 3, name: product.name, item: url },
    ] },
  ] };
}
export const catalogueSchema = { "@context": "https://schema.org", "@type": "ItemList", name: "Makhana Products", itemListElement: makhanaSlugs.map((slug, index) => ({ "@type": "ListItem", position: index + 1, name: products.find(p => p.slug === slug)?.name ?? slug, url: absolute(`/products/${slug}`) })) };
