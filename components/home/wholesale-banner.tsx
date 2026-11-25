"use client";
import { T } from "@/components/language-provider";


import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import styles from "./wholesale-banner.module.css";

export function WholesaleBanner({ quoteHref = "/wholesale" }: { quoteHref?: string }) {
  const reduced = useReducedMotion();
  return (
    <section className={styles.section} aria-labelledby="wholesale-heading">
      <div className="site-container">
        <motion.div className={styles.banner} initial={reduced ? false : { y: 16 }} whileInView={{ y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduced ? 0 : 0.65 }}>
          <div className={styles.art}>
            <Image src="/images/v2/wholesale-warehouse.webp" alt="Illustrative bulk makhana warehouse" fill sizes="(min-width: 900px) 45vw, 100vw" className={styles.image} />
          </div>
          <div className={styles.copy}>
            <p className={styles.eyebrow}><Package size={18} aria-hidden="true" /> <T text="Wholesale & Bulk Supply" /></p>
            <h2 id="wholesale-heading"><T text="Your Business." /><br/><span><T text="Our Supply." /></span></h2>
            <p><T text="Bulk food supply solutions for retailers, wholesalers, distributors and institutional buyers." /></p>
            <p className={styles.packLabel}><T text="Bulk packaging options" /></p>
            <div className={styles.packs}>{[1,5,10,25].map(size => <span key={size}>{size} <T text="KG" /></span>)}</div>
            <Link href={quoteHref} className={styles.cta}><T text="Request a Bulk Quote" /> <ArrowRight size={18} aria-hidden="true" /></Link>
            <small><T text="Final quantity and packaging are subject to availability and order requirements." /></small>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
