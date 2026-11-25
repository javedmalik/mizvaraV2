import { T } from "@/components/language-provider";
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './category-strip.module.css';
const categories = [
  {name:'Makhana',slug:'makhana',image:'/images/v2/natural-detail.webp'},
  {name:'Spices',slug:'spices',image:'/products/spices.webp'},
  {name:'Grains',slug:'grains-pulses',image:'/images/product-banners/grains-pulses-banner.webp'},
  {name:'Dry Fruits',slug:'dry-fruits',image:'/images/v2/category-dry-fruits.webp'},
];
export function CategoryStrip(){return <section className={styles.section} aria-labelledby="category-heading"><div className={styles.heading}><h2 id="category-heading"><T text={"Browse by Category"}/></h2><Link href="/products"><T text={"See All"}/> <ArrowRight size={14}/></Link></div><div className={styles.grid}>{categories.map((c,i)=><Link key={c.slug} href={`/products/${c.slug}`} className={styles.item} data-featured={i===0}><Image src={c.image} alt="" width={80} height={65}/><span><T text={c.name}/></span></Link>)}</div></section>}
