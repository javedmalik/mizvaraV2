import { pageSeo, makhanaSlugs } from "@/lib/seo";
import { T } from "@/components/language-provider";
import { EnquiryForm } from "@/components/enquiry-form";
import { Reveal } from "@/components/motion/reveal";
import { contact, products } from "@/lib/site-data";
import { Mail, MapPin, MessageCircle, Phone, ArrowRight, ArrowDown, ChevronDown, Package, Handshake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./contact.module.css";

export const metadata = pageSeo("/contact", "Contact Us", "Contact MIZAVARA Global for Makhana product, wholesale and distribution enquiries.");
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`;
const faqs = [
 { q: "How can I enquire about a product?", a: "Choose your preferred product and share your requirements using the enquiry form." },
 { q: "How do I enquire about bulk supply?", a: "Explore our wholesale page for packaging options and quotation enquiries." },
 { q: "Can I apply for a distribution partnership?", a: "Visit our distributor page and share your business profile and preferred territory." },
 { q: "Does submitting an enquiry place an order?", a: "Submitting an enquiry does not place an order or guarantee availability." },
];
export default async function ContactPage({searchParams}:{searchParams:Promise<{product?:string|string[];pack?:string|string[]}>}) {
 const {product,pack}=await searchParams;
 const initialProduct=products.find(p=>p.slug===product && makhanaSlugs.some(slug=>slug===p.slug))?.name;
 const validSizes=product === "natural-makhana" ? ["100g", "200g"] : ["60g", "100g"];
 const initialMessage=initialProduct && typeof pack === "string" && validSizes.includes(pack) ? `Preferred pack size: ${pack}.` : undefined;
 const details=[
  {Icon:Mail,title:"Email",value:contact.email,href:`mailto:${contact.email}`,action:"Send an email",external:false},
  {Icon:Phone,title:"Phone",value:contact.phone,href:`tel:${contact.phone.replace(/[^+\d]/g,"")}`,action:"Call us",external:false},
  {Icon:MessageCircle,title:"WhatsApp",value:contact.whatsapp,href:`https://wa.me/${contact.whatsapp.replace(/\D/g,"")}`,action:"Chat on WhatsApp",external:true},
  {Icon:MapPin,title:"Office",value:contact.address,href:mapUrl,action:"Open Google Maps",external:true},
 ];
 return <main className={styles.page}>
  <section className={styles.hero} aria-labelledby="contact-title">
   <div className={`site-container ${styles.heroInner}`}>
    <nav aria-label="Breadcrumb" className={styles.crumb}><Link href="/"><T text="Home"/></Link> / <T text="Contact Us"/></nav>
    <div className={styles.heroGrid}><Reveal><div className={styles.heroCopy}><p className={styles.kicker}><T text="Get in touch"/></p><h1 id="contact-title"><T text="Good conversations."/><br/><em><T text="Great beginnings."/></em></h1><p className={styles.heroDescription}><T text="Share your product requirement, quantity and destination. Our team can discuss your requirements directly."/></p><div className={styles.actions}><a href="#contact-enquiry" className={styles.goldButton}><T text="Send Enquiry"/><ArrowDown size={18} aria-hidden="true"/></a><a href={`https://wa.me/${contact.whatsapp.replace(/\D/g,"")}`} target="_blank" rel="noopener noreferrer" className={styles.outline}><MessageCircle size={18} aria-hidden="true"/><T text="Chat on WhatsApp"/></a></div></div></Reveal><div className={styles.heroArt}><Image src="/images/v2/hero-collection.webp" alt="" fill priority sizes="(max-width: 760px) 90vw, 45vw" className={styles.photo}/></div></div>
   </div>
  </section>
  <section className={`site-container ${styles.section}`} aria-labelledby="channels-heading"><div className={styles.heading}><p className={styles.kicker}><T text="Contact us"/></p><h2 id="channels-heading"><T text="Choose how to connect"/></h2></div><div className={styles.channels}>{details.map(({Icon,title,value,href,action,external},i)=><Reveal key={title} delay={i*.07} className={styles.stretch}><a className={styles.channel} href={href} target={external?"_blank":undefined} rel={external?"noopener noreferrer":undefined}><span className={styles.icon}><Icon size={26} strokeWidth={1.5} aria-hidden="true"/></span><h3><T text={title}/></h3><p>{value}</p><span className={styles.textLink}><T text={action}/><ArrowRight size={16} aria-hidden="true"/></span></a></Reveal>)}</div></section>
  <section id="contact-enquiry" className={styles.enquiry} aria-labelledby="enquiry-heading"><div className={`site-container ${styles.section} ${styles.quote}`}><Reveal><p className={styles.kicker}><T text="Business enquiries"/></p><h2 id="enquiry-heading"><T text="Let’s discuss your requirement"/></h2><p className={styles.copy}><T text="Share your product requirement, quantity and destination. Our team can discuss your requirements directly."/></p><div className={styles.quotePhoto}><Image src="/images/v2/natural-lifestyle.webp" alt="" fill sizes="(max-width: 900px) 90vw, 40vw" className={styles.photo}/></div></Reveal><div className={styles.formPanel}><EnquiryForm key={`${initialProduct ?? "general"}-${initialMessage ?? ""}`} initialProduct={initialProduct} initialMessage={initialMessage}/></div></div></section>
  <section className={`site-container ${styles.section}`} aria-labelledby="business-heading"><div className={styles.heading}><p className={styles.kicker}><T text="Business Partnerships"/></p><h2 id="business-heading"><T text="Find the right business opportunity"/></h2></div><div className={styles.businessGrid}>{[{title:"Wholesale & Bulk Supply",description:"Share your product, quantity and packaging requirements with our team.",href:"/wholesale",image:"wholesale-warehouse.webp",Icon:Package},{title:"Become a Distributor",description:"Explore distribution and wholesale partnership opportunities.",href:"/distributor",image:"partner-handshake.webp",Icon:Handshake}].map(({title,description,href,image,Icon},i)=><Reveal key={href} delay={i*.1}><Link href={href} className={styles.businessCard}><div className={styles.businessArt}><Image src={`/images/v2/${image}`} alt="" fill sizes="(max-width: 760px) 90vw, 45vw" className={styles.photo}/></div><div className={styles.businessCopy}><Icon size={27} aria-hidden="true"/><h3><T text={title}/></h3><p><T text={description}/></p><span className={styles.textLink}><T text="Learn more"/><ArrowRight size={16} aria-hidden="true"/></span></div></Link></Reveal>)}</div></section>
  <section className={styles.location} aria-labelledby="location-heading"><div className={`site-container ${styles.section} ${styles.locationGrid}`}><div><p className={styles.kicker}><T text="Office"/></p><h2 id="location-heading"><T text="Our business location"/></h2><p className={styles.copy}>{contact.address}</p><a href={mapUrl} target="_blank" rel="noopener noreferrer" className={styles.goldButton}><T text="Open Google Maps"/><ArrowRight size={17} aria-hidden="true"/></a></div><a href={mapUrl} target="_blank" rel="noopener noreferrer" className={styles.locationArt}><MapPin size={58} strokeWidth={1.2} aria-hidden="true"/><strong><T text="View office location"/></strong><span><T text="Open Google Maps"/> ↗</span></a></div></section>
  <section className={`site-container ${styles.section} ${styles.faqLayout}`} aria-labelledby="faq-heading"><Reveal><p className={styles.kicker}><T text="Contact us"/></p><h2 id="faq-heading"><T text="Contact questions"/></h2></Reveal><div className={styles.faqs}>{faqs.map(({q,a})=><details key={q}><summary><T text={q}/><ChevronDown size={20} aria-hidden="true"/></summary><p><T text={a}/></p></details>)}</div></section>
  <section className={styles.final}><div className={`site-container ${styles.finalInner}`}><div><p className={styles.kicker}><T text="Discover Our Collection"/></p><h2><T text="Three flavours. Your choice."/></h2></div><Link href="/products" className={styles.goldButton}><T text="Explore Products"/><ArrowRight size={18} aria-hidden="true"/></Link></div></section>
 </main>;
}
