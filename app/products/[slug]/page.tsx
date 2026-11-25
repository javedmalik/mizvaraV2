import { pageSeo, makhanaSlugs } from "@/lib/seo";
import { T } from "@/components/language-provider";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Package, MessageCircle, Truck } from "lucide-react";
import { products } from "@/lib/site-data";
import { Reveal } from "@/components/motion/reveal";
import { ProductPresentation } from "./product-presentation";
import styles from "./detail.module.css";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  return product
    ? { ...pageSeo(`/products/${slug}`, product.name, product.description), ...(!makhanaSlugs.some(item => item === slug) ? {robots: {index: false, follow: true}} : {}) }
    : {};
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const variant = ["natural-makhana","peri-peri-makhana","pudina-makhana"].includes(slug);
  const detailImage = variant ? `/images/v2/${slug.replace(/-makhana$/, "")}-detail.webp` : product.productImage;
  if (variant) {
    const tone = slug === "peri-peri-makhana" ? "spicy" : slug === "pudina-makhana" ? "mint" : "natural";
    const sizes = tone === "natural" ? ["100g", "200g"] : ["60g", "100g"];
    const related = products.filter(p => p.slug !== slug && makhanaSlugs.some(v => v === p.slug));
    return <main className={styles.page}>
      <div className="site-container">
        <nav className={styles.crumb} aria-label="Breadcrumb"><Link href="/"><T text="Home"/></Link> / <Link href="/products"><T text="Products"/></Link> / <T text={product.name}/></nav>
        <ProductPresentation key={slug} slug={slug} name={product.name} description={product.description} details={product.details} sizes={sizes} tone={tone} image={detailImage}/>
        <section className={styles.info} aria-labelledby="info-title"><Reveal><p className={styles.kicker}><T text="Product information"/></p><h2 id="info-title"><T text="Know your product"/></h2></Reveal><div className={styles.infoGrid}>
          <Reveal className={styles.infoCard}><Package size={28} aria-hidden="true"/><h3><T text="Packaging options"/></h3><p>{sizes.map((size,i)=><span key={size}>{i>0?" / ":""}<T text={`${size} pack`}/></span>)}</p><p><T text="Final product availability and packaging are confirmed on enquiry."/></p></Reveal>
          <Reveal delay={.08} className={styles.infoCard}><MessageCircle size={28} aria-hidden="true"/><h3><T text="Ingredients and specifications"/></h3><p><T text="Please contact us for confirmed product specifications and ingredients."/></p><Link href={`/contact?product=${slug}`}><T text="Send Enquiry"/> <ArrowRight size={16} aria-hidden="true"/></Link></Reveal>
          <Reveal delay={.16} className={styles.infoCard}><Truck size={28} aria-hidden="true"/><h3><T text="Delivery and returns"/></h3><p><T text="Delivery terms are agreed with the buyer."/></p><Link href="/shipping-returns"><T text="Read more"/> <ArrowRight size={16} aria-hidden="true"/></Link></Reveal>
        </div></section>
        <section className={styles.related} aria-labelledby="related-title"><Reveal><p className={styles.kicker}><T text="Discover Our Collection"/></p><h2 id="related-title"><T text="Explore other flavours"/></h2></Reveal><div className={styles.relatedGrid}>{related.map((p,i)=><Reveal key={p.slug} delay={i*.1}><Link href={`/products/${p.slug}`} className={styles.relatedCard} data-tone={p.slug==="peri-peri-makhana"?"spicy":p.slug==="pudina-makhana"?"mint":"natural"}><div className={styles.relatedArt}><Image src={p.productImage} alt="" fill sizes="(min-width: 900px) 25vw, 45vw" className={styles.image}/></div><div><h3><T text={p.name}/></h3><p><T text={p.description}/></p><span><T text="View Product"/> <ArrowRight size={16} aria-hidden="true"/></span></div></Link></Reveal>)}</div></section>
        <section className={styles.business}><Reveal><p className={styles.kicker}><T text="Wholesale & Bulk Supply"/></p><h2><T text="Your Business."/> <em><T text="Our Supply."/></em></h2><p><T text="Share your product, quantity and packaging requirements with our team."/></p></Reveal><Link href="/wholesale" className={styles.gold}><T text="Request a Bulk Quote"/> <ArrowRight size={18} aria-hidden="true"/></Link></section>
      </div>
    </main>;
  }
  return <main className="site-container py-8 md:py-12"><nav aria-label="Breadcrumb" className="mb-6 text-sm"><Link href="/"><T text="Home" /></Link> / <Link href="/products"><T text="Products" /></Link> / <T text={product.name} /></nav><div className="grid items-center gap-8 lg:grid-cols-2"><div className="group relative aspect-square overflow-hidden rounded-3xl bg-[#eee6d6]"><Image src={detailImage} alt={`${product.name} illustrative product image`} fill priority unoptimized={variant} sizes="(max-width:1024px) 100vw, 50vw" className={`${variant?'object-contain':'object-cover'} transition-transform duration-500 motion-safe:group-hover:scale-[1.02] motion-reduce:transform-none`}/></div><article><p className="eyebrow"><T text="MIZAVARA collection" /></p><h1 className="display-title"><T text={product.name} /></h1><p className="mt-4 text-lg"><T text={product.description} /></p><h2 className="mt-6 font-bold"><T text={variant?"Packaging options":"Category highlights"} /></h2><ul className="mt-3 flex flex-wrap gap-2">{product.highlights.map(h=><li key={h} className="rounded-full border border-brand-gold px-3 py-2 text-sm"><T text={h} /></li>)}</ul><p className="mt-6 leading-7"><T text={product.details} /></p><div className="mt-6 flex flex-wrap gap-3"><Link href={`/contact?product=${product.slug}`} className="button-primary"><T text="Enquire about this product" /> <ArrowRight size={17}/></Link><Link href="/wholesale" className="button-secondary"><T text="Bulk Enquiry" /></Link></div><p className="mt-4 text-xs text-muted-foreground"><T text="Product images are illustrative. Availability, final packaging and specifications are confirmed on enquiry." /></p></article></div><section className="mt-10 space-y-3"><h2 className="section-title"><T text="Product information" /></h2><details className="card p-4"><summary className="cursor-pointer font-semibold"><T text="Ingredients and specifications" /></summary><p className="mt-3"><T text="Please contact us for confirmed product specifications and ingredients." /></p></details><details className="card p-4"><summary className="cursor-pointer font-semibold"><T text="Delivery and returns" /></summary><p className="mt-3"><T text="Delivery terms are agreed with the buyer." /> <Link href="/shipping-returns" className="underline"><T text="Read more" /></Link>.</p></details></section></main>;
}
