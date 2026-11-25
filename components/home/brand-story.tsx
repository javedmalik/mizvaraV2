import { T } from "@/components/language-provider";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Handshake, Leaf } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import styles from "./brand-story.module.css";

export function BrandStory({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? "h1" : "h2";
  return <section className={styles.section} aria-labelledby="brand-story-heading">
    <div className="site-container">
      <Reveal className={styles.story}>
        <div className={styles.art}>
          <Image src="/images/product-banners/makhana-banner.webp" alt="Makhana presented in bowls with natural botanical elements" fill sizes="(min-width: 900px) 45vw, 100vw" className={styles.image}/>
        </div>
        <div className={styles.copy}>
          <p className={styles.eyebrow}><Leaf size={18} aria-hidden="true"/> <T text="About MIZAVARA" /></p>
          <Heading id="brand-story-heading"><T text="A Brand Built" /><br/><T text="Around" /> <span><T text="Quality." /></span></Heading>
          <p><T text="MIZAVARA Global Private Limited aims to build a trusted food products brand through quality-focused sourcing, processing, packaging and distribution." /></p>
          <p><T text="Our goal is to build lasting business relationships with customers, retailers, wholesalers and distributors." /></p>
          {!standalone && <Link href="/about" className={styles.link}><T text="Read Our Story" /> <ArrowRight size={18} aria-hidden="true"/></Link>}
          {standalone && <Link href="/products" className={styles.link}><T text="Explore Our Products" /> <ArrowRight size={18} aria-hidden="true"/></Link>}
        </div>
      </Reveal>
    </div>
  </section>;
}

export function DistributorBanner({ standalone = false }: { standalone?: boolean }) {
  const Heading = standalone ? "h1" : "h2";
  return <section className={styles.section} aria-labelledby="partner-heading">
    <div className="site-container">
      <Reveal className={styles.partner}>
        <div className={styles.partnerCopy}>
          <p className={styles.eyebrow}><Handshake size={18} aria-hidden="true"/> <T text="Business Partnerships" /></p>
          <Heading id="partner-heading"><T text="Grow With" /> <span>MIZAVARA.</span></Heading>
          <p><T text="Explore distribution partnership opportunities and help bring our food product collection to new customers and markets." /></p>
          <Link href={standalone ? "#distributor-enquiry" : "/distributor"} className={styles.cta}><T text={standalone ? "Submit Partnership Enquiry" : "Become a Distributor"} /><ArrowRight size={18} aria-hidden="true"/></Link>
        </div>
        <div className={styles.partnerArt} aria-hidden="true"><Image src="/images/v2/hero-collection.webp" alt="" fill sizes="(min-width: 900px) 45vw, 100vw" className={styles.image}/></div>
      </Reveal>
    </div>
  </section>;
}
