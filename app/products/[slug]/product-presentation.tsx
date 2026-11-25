"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Package, Leaf, Flame, Sprout } from "lucide-react";
import { T, useTranslate } from "@/components/language-provider";
import styles from "./detail.module.css";

export function ProductPresentation({slug,name,description,details,sizes,tone,image}: {slug:string;name:string;description:string;details:string;sizes:string[];tone:"natural"|"spicy"|"mint";image:string}) {
 const [selected,setSelected]=useState(sizes[0]);
 const tr=useTranslate();
 const Icon=tone==="spicy"?Flame:tone==="mint"?Sprout:Leaf;
 return <section className={styles.presentation} data-tone={tone} aria-labelledby="product-heading">
   <div className={styles.art}><span className={styles.halo} aria-hidden="true"/><span className={styles.stage} aria-hidden="true"/><div className={styles.pack}><Image src={image} alt={tr(name)} fill priority sizes="(min-width: 1000px) 45vw, 90vw" className={styles.image}/></div><span className={styles.artLabel}><T text="MIZAVARA collection"/></span></div>
   <div className={styles.copy}><p className={styles.kicker}><Icon size={20} aria-hidden="true"/><T text="MIZAVARA collection"/></p><h1 id="product-heading"> <T text={name}/></h1><p className={styles.lead}><T text={description}/></p><p><T text={details}/></p>
   <fieldset className={styles.options}><legend><Package size={18} aria-hidden="true"/> <T text="Packaging options"/></legend><div className={styles.sizes}>{sizes.map(size=><label key={size} className={styles.size}><input type="radio" name="preferred-size" value={size} checked={selected===size} onChange={()=>setSelected(size)}/><span><T text={`${size} pack`}/></span></label>)}</div></fieldset>
   <p className={styles.note}><T text="Final product availability and packaging are confirmed on enquiry."/></p><div className={styles.actions}><Link className={styles.primary} href={`/contact?product=${encodeURIComponent(slug)}&pack=${encodeURIComponent(selected)}`}><T text="Enquire about this product"/><ArrowRight size={18} aria-hidden="true"/></Link><Link className={styles.secondary} href="/wholesale"><T text="Bulk Enquiry"/></Link></div><p className={styles.note}><T text="Product images are illustrative. Availability, final packaging and specifications are confirmed on enquiry."/></p></div>
 </section>;
}
