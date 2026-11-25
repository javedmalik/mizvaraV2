import { pageSeo } from "@/lib/seo";
import { T } from "@/components/language-provider";
import { Reveal } from "@/components/motion/reveal";
import { ArrowRight, ArrowDown, Leaf, Flame, Sprout, Package } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./products.module.css";

export const metadata = pageSeo("/products", "Makhana Products", "Explore Natural, Peri Peri and Pudina Makhana. Enquire about packaging and bulk supply.");
const products = [
  { slug: "natural-makhana", name: "Natural Makhana", description: "Simple, classic makhana.", image: "natural-pack.webp", sizes: ["100g", "200g"], tone: "natural", Icon: Leaf },
  { slug: "peri-peri-makhana", name: "Peri Peri Makhana", description: "A bold, spicy flavour.", image: "peri-peri-pack.webp", sizes: ["60g", "100g"], tone: "spicy", Icon: Flame },
  { slug: "pudina-makhana", name: "Pudina Makhana", description: "A refreshing minty twist.", image: "pudina-pack.webp", sizes: ["60g", "100g"], tone: "mint", Icon: Sprout },
] as const;

export default function ProductsPage() {
  return <main className={styles.page}>
    <section className={styles.hero} aria-labelledby="catalogue-title">
      <div className={`site-container ${styles.heroInner}`}>
        <Reveal className={styles.heroCopy}>
          <nav className={styles.crumb} aria-label="Breadcrumb"><Link href="/"><T text="Home"/></Link><span aria-hidden="true"> / </span><T text="Products"/></nav>
          <p className={styles.kicker}><T text="The MIZAVARA catalogue"/></p>
          <h1 id="catalogue-title"><T text="Discover the flavour."/><br/><em><T text="Find your favourite."/></em></h1>
          <p><T text="Discover Natural, Peri Peri and Pudina Makhana. Contact us for product specifications, packaging and availability."/></p>
          <div className={styles.actions}><Link href="#makhana-range" className={styles.goldButton}><T text="Explore Our Makhana Range"/><ArrowDown size={18} aria-hidden="true"/></Link><Link href="/wholesale" className={styles.outline}><T text="Bulk Enquiry"/></Link></div>
        </Reveal>
        <div className={styles.heroArt} aria-hidden="true"><span className={styles.halo}/><span className={styles.stage}/>{[products[1],products[0],products[2]].map((p,i)=><div key={p.slug} className={styles.heroPack} data-position={i}><Image src={`/images/v2/${p.image}`} alt="" fill sizes="(min-width: 900px) 23vw, 32vw" className={styles.packImage} priority/></div>)}</div>
      </div>
    </section>
    <section id="makhana-range" className={`site-container ${styles.range}`} aria-labelledby="range-title">
      <Reveal className={styles.heading}><p className={styles.kicker}><T text="Our product collection"/></p><h2 id="range-title"><T text="Three flavours. Your choice."/></h2><p><T text="Explore our Makhana range and enquire about your preferred pack size."/></p></Reveal>
      <div className={styles.grid}>{products.map(({slug,name,description,image,sizes,tone,Icon},i)=><Reveal key={slug} delay={i*.08} className={styles.cardWrap}>
        <article className={styles.card} data-tone={tone}>
          <Link href={`/products/${slug}`} className={styles.art} aria-label={name}><span className={styles.index} aria-hidden="true">0{i+1}</span><span className={styles.artCircle}/><span className={styles.cardPack}><Image src={`/images/v2/${image}`} alt="" fill sizes="(min-width: 900px) 28vw, 80vw" className={styles.packImage}/></span></Link>
          <div className={styles.cardCopy}><Icon size={24} strokeWidth={1.5} aria-hidden="true"/><h3><Link href={`/products/${slug}`}><T text={name}/></Link></h3><p><T text={description}/></p><p className={styles.packLabel}><Package size={15} aria-hidden="true"/><T text="Packaging options"/></p><div className={styles.sizes}>{sizes.map(size=><span key={size}>{size}</span>)}</div><Link className={styles.productLink} href={`/products/${slug}`}><T text="View Product"/><ArrowRight size={18} aria-hidden="true"/></Link></div>
        </article>
      </Reveal>)}</div>
      <p className={styles.note}><T text="Final product availability and packaging are confirmed on enquiry."/></p>
    </section>
    <section className={`site-container ${styles.business}`} aria-labelledby="business-title"><div className={styles.businessInner}><div className={styles.businessArt}><Image src="/images/v2/wholesale-warehouse.webp" alt="" fill sizes="(min-width: 900px) 45vw, 95vw" className={styles.warehouse}/></div><Reveal className={styles.businessCopy}><p className={styles.kicker}><T text="Wholesale & Bulk Supply"/></p><h2 id="business-title"><T text="Your Business."/><br/><em><T text="Our Supply."/></em></h2><p><T text="Share your product, quantity and packaging requirements with our team."/></p><div className={styles.actions}><Link href="/wholesale" className={styles.goldButton}><T text="Request a Bulk Quote"/><ArrowRight size={18} aria-hidden="true"/></Link><Link href="/contact" className={styles.outline}><T text="Send Enquiry"/></Link></div></Reveal></div></section>
  </main>;
}
