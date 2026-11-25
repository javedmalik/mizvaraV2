import { T } from "@/components/language-provider";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Coffee, Utensils, Users, Mail } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import styles from "./home-extras.module.css";

const moments = [
  { icon: Coffee, title: "A little break", text: "Serve makhana alongside your favourite tea or coffee." },
  { icon: Utensils, title: "Your own flavour", text: "Explore different flavours and serving combinations." },
  { icon: Users, title: "Made for sharing", text: "Add a bowl of makhana to your next get-together." },
];
const questions = [
  ["What packaging sizes can I enquire about?", "Natural Makhana is listed in 100g and 200g packs. Peri Peri and Pudina are listed in 60g and 100g packs. Final availability is confirmed on enquiry."],
  ["Can I order online?", "This is a product catalogue. Use the product enquiry button to discuss availability and purchasing arrangements directly with MIZAVARA."],
  ["Do you accept bulk supply enquiries?", "Yes. Submit your product, packaging, quantity and destination requirements through our Wholesale page."],
  ["How can I become a distributor?", "Visit our Distributor page and submit your business details and preferred territory for discussion."],
];

export function MakhanaMoments() {
  return <section className={`site-container ${styles.moments}`} aria-labelledby="moments-heading">
    <Reveal className={styles.momentArt}><Image src="/images/v2/natural-lifestyle.webp" alt="Illustrative Makhana packaging and serving bowl" fill unoptimized sizes="(max-width: 767px) 100vw, 42vw" className={styles.image}/></Reveal>
    <Reveal className={styles.momentCopy}><p className="eyebrow"><T text={"Everyday inspiration"}/></p><h2 id="moments-heading" className="section-title"><T text={"Everyday Makhana Moments."}/></h2><p className={styles.intro}><T text={"Discover simple ways to enjoy and share our Makhana collection."}/></p><div className={styles.momentList}>{moments.map(({icon:Icon,title,text})=><div key={title} className={styles.moment}><Icon size={26} aria-hidden="true"/><div><h3><T text={title}/></h3><p><T text={text}/></p></div></div>)}</div><Link href="/products" className="button-primary"><T text={"Explore the collection"}/> <ArrowRight size={17}/></Link></Reveal>
  </section>;
}
export function HomeQuestions() {
 return <section className={`site-container ${styles.faq}`} aria-labelledby="faq-heading"><div className={styles.faqIntro}><p className="eyebrow"><T text={"Helpful information"}/></p><h2 id="faq-heading" className="section-title"><T text={"Good to know."}/></h2><p><T text={"Questions about our catalogue or business enquiries?"}/></p><Link href="/contact" className={styles.textLink}><T text={"Get in touch"}/> <ArrowRight size={17}/></Link></div><div className={styles.questions}>{questions.map(([q,a])=><details key={q}><summary><T text={q}/></summary><p><T text={a}/></p></details>)}</div></section>;
}
export function HomeConnect() {
 return <section className={`site-container ${styles.connect}`} aria-labelledby="connect-heading"><Reveal className={styles.connectPanel}><div><p className={styles.kicker}><T text={"Let's connect"}/></p><h2 id="connect-heading"><T text={"Good things begin with a conversation."}/></h2><p><T text={"Talk to us about products, wholesale supply or distribution opportunities."}/></p></div><Link href="/contact" className={styles.gold}><Mail size={19}/> <T text={"Send an Enquiry"}/> <ArrowRight size={17}/></Link></Reveal></section>;
}
