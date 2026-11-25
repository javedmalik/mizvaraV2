import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { T } from "@/components/language-provider";
import { Reveal } from "@/components/motion/reveal";
import type { ReactNode } from "react";
import styles from "./inner-page.module.css";

export function InnerHero({label, eyebrow, title, description, image, target, action}: {label:string; eyebrow:string; title:string; description:string; image:string; target:string; action:string}) {
 return <section className={styles.hero} aria-labelledby="page-title"><div className={`site-container ${styles.heroInner}`}>
  <nav aria-label="Breadcrumb" className={styles.crumb}><Link href="/"><T text="Home"/></Link><span aria-hidden="true">/</span><span aria-current="page"><T text={label}/></span></nav>
  <div className={styles.split}><Reveal><p className={styles.kicker}><T text={eyebrow}/></p><h1 id="page-title"><T text={title}/></h1><p className={styles.copy}><T text={description}/></p><div className={styles.actions}><a href={target} className={styles.button}><T text={action}/><ArrowDown size={18} aria-hidden="true"/></a><Link href="/contact" className={styles.outline}><T text="Contact Us"/><ArrowRight size={18} aria-hidden="true"/></Link></div></Reveal><div className={styles.art}><Image src={`/images/v2/${image}`} alt="" fill priority sizes="(max-width: 700px) 95vw, 48vw" className={styles.photo}/></div></div>
 </div></section>;
}
export function InnerCta({title,description,children}: {title:string;description?:string;children?:ReactNode}) {
 return <section className={styles.dark}><div className={`site-container ${styles.final}`}><div><p className={styles.kicker}><T text="Business enquiries"/></p><h2><T text={title}/></h2>{description && <p className={styles.copy}><T text={description}/></p>}</div><div className={styles.actions}>{children || <Link href="/contact" className={styles.button}><T text="Send Enquiry"/><ArrowRight size={18} aria-hidden="true"/></Link>}</div></div></section>;
}
