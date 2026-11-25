import { T } from "@/components/language-provider";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, FileText } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import styles from "./premium-brand-sections.module.css";

export function PremiumBrandSections() {
  return <div className={styles.wrap}>
    <section aria-labelledby="home-wholesale-heading">
      <Reveal className={styles.wholesale}>
        <div className={styles.warehouse}><Image src="/images/v2/wholesale-warehouse.webp" alt="Illustrative bulk makhana storage" fill sizes="(max-width: 760px) 100vw, 36vw" className={styles.image}/></div>
        <div className={styles.bulkCopy}>
          <p className={styles.kicker}><T text={"Wholesale & Bulk Supply"}/></p>
          <h2 id="home-wholesale-heading"><T text={"Your Business. Our Supply."}/></h2>
          <p><T text={"Bulk food supply solutions for retailers, wholesalers, distributors and institutional buyers."}/></p>
          <div className={styles.packs}>{[1,5,10,25].map(n=><span key={n}>{n} KG</span>)}</div>
        </div>
        <div className={styles.bulkAction}><Link href="/wholesale" className={styles.gold}><FileText size={19}/> <T text={"Request a Bulk Quote"}/> <ArrowRight size={18}/></Link><p><T text={"Final quantity and packaging subject to availability and order requirements."}/></p></div>
      </Reveal>
    </section>
    <div className={styles.bottom}>
      <section aria-labelledby="home-story-heading"><Reveal className={styles.story}>
        <div className={styles.storyArt}><Image src="/images/v2/about-lifestyle.webp" alt="Makhana served in a wooden bowl with lotus flowers" fill sizes="(max-width: 760px) 45vw, 23vw" className={styles.image}/></div>
        <div className={styles.storyCopy}><p className={styles.kicker}><T text={"About MIZAVARA"}/></p><h2 id="home-story-heading"><T text={"A Brand Built"}/><br/><T text={"Around Quality"}/></h2><p><T text={"MIZAVARA Global Private Limited aims to build a trusted food products brand through quality-focused sourcing, processing, packaging and distribution."}/></p><Link href="/about" className={styles.storyLink}><T text={"Read Our Story"}/> <ArrowRight size={17}/></Link></div>
      </Reveal></section>
      <section aria-labelledby="home-partner-heading"><Reveal className={styles.partner}>
        <div className={styles.partnerArt}><Image src="/images/v2/partner-handshake.webp" alt="Illustration of a business partnership handshake" fill sizes="(max-width: 760px) 48vw, 24vw" className={styles.image}/></div>
        <div className={styles.partnerCopy}><Leaf size={27} className={styles.leaf}/><h2 id="home-partner-heading"><T text={"Grow With MIZAVARA"}/></h2><p><T text={"Explore business and distribution partnership opportunities across markets."}/></p><Link href="/distributor" className={styles.green}><T text={"Become a Distributor"}/> <ArrowRight size={17}/></Link></div>
      </Reveal></section>
    </div>
  </div>;
}
