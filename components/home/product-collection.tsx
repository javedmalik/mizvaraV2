"use client";
import { T } from "@/components/language-provider";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import styles from "./product-collection.module.css";

const collection = [
  { slug: "natural-makhana", title: "Natural", description: "Simple, classic makhana.", sizes: ["100g", "200g"], image: "/images/v2/natural-pack.webp", tone: "natural" },
  { slug: "peri-peri-makhana", title: "Peri Peri", description: "A bold, spicy flavour.", sizes: ["60g", "100g"], image: "/images/v2/peri-peri-pack.webp", tone: "spicy" },
  { slug: "pudina-makhana", title: "Pudina", description: "A refreshing minty twist.", sizes: ["60g", "100g"], image: "/images/v2/pudina-pack.webp", tone: "mint" },
] as const;

export function ProductCollection({ showViewAll = true }: { showViewAll?: boolean } = {}) {
  const reduced = useReducedMotion();
  return (
    <section className={styles.section} aria-labelledby="collection-heading">
      <div className={`site-container ${styles.container}`}>
        <div className={styles.heading}>
          <div>
            <p className={styles.eyebrow}><T text={"Our product collection"}/></p>
            <h2 id="collection-heading" className={styles.title}><T text={"Goodness in Every Bite"}/></h2>
          </div>
          {showViewAll && <Link href="/products" className={styles.all}><T text={"View All Products"}/> <ArrowRight size={17} /></Link>}
        </div>
        <div className={styles.grid}>
          {collection.map(({slug,title,description,sizes,image,tone}) => (
            <motion.article key={slug} className={styles.card} data-tone={tone}
              whileHover={reduced ? undefined : { y: -5, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}>
              <div className={styles.art}>
                <Image src={image} alt={`${title} Makhana concept packaging`} fill sizes="(min-width: 1100px) 220px, (min-width: 768px) 28vw, 50vw" className={styles.image}/>
              </div>
              <div className={styles.copy}>
                
                <h3><T text={title}/><br/><T text={"Makhana"}/></h3>
                <p><T text={description}/></p>
                <div className={styles.sizes} aria-label="Packaging options">{sizes.map(size => <span key={size}>{size}</span>)}</div>
                <Link href={`/products/${slug}`} className={styles.link} aria-label={`View ${title} Makhana`}><T text={"View Product"}/> <ArrowRight size={16}/></Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
