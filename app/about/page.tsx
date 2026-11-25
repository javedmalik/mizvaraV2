import { pageSeo } from "@/lib/seo";
import { T } from "@/components/language-provider";
import { Reveal } from "@/components/motion/reveal";
import {
  ArrowRight,
  Eye,
  Goal,
  Gem,
  Leaf,
  Package,
  Truck,
  Layers,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.css";

export const metadata = pageSeo(
  "/about",
  "About MIZAVARA",
  "Learn about MIZAVARA Global and its approach to food products and business partnerships.",
);
const principles = [
  {
    title: "Our Mission",
    Icon: Goal,
    description:
      "Build a trusted food products brand through quality-focused sourcing, processing, packaging and distribution.",
  },
  {
    title: "Our Vision",
    Icon: Eye,
    description:
      "Develop lasting relationships with customers and business partners across markets.",
  },
  {
    title: "Our Values",
    Icon: Gem,
    description:
      "Quality awareness, integrity, transparency and thoughtful business coordination.",
  },
];
const approach = [
  {
    title: "Sourcing",
    Icon: Leaf,
    description: "A focus on thoughtful product selection.",
  },
  {
    title: "Processing",
    Icon: Layers,
    description: "Attention to product preparation and consistency.",
  },
  {
    title: "Packaging",
    Icon: Package,
    description: "Consideration for convenient packaging options.",
  },
  {
    title: "Distribution",
    Icon: Truck,
    description: "Building relationships with retail and business partners.",
  },
];
const products = [
  {
    slug: "natural-makhana",
    name: "Natural Makhana",
    image: "natural-pack.webp",
  },
  {
    slug: "peri-peri-makhana",
    name: "Peri Peri Makhana",
    image: "peri-peri-pack.webp",
  },
  { slug: "pudina-makhana", name: "Pudina Makhana", image: "pudina-pack.webp" },
];
export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="about-title">
        <Image
          src="/images/v2/hero-collection.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroShade} />
        <div className={`site-container ${styles.heroInner}`}>
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <Link href="/">
              <T text="Home" />
            </Link>
            <span aria-hidden="true">/</span>
            <T text="About Us" />
          </nav>
          <Reveal className={styles.heroCopy}>
            <p className={styles.kicker}>
              <T text="About MIZAVARA" />
            </p>
            <h1 id="about-title">
              <T text="A Brand Built" />
              <br />
              <em>
                <T text="Around Quality." />
              </em>
            </h1>
            <p>
              <T text="MIZAVARA Global Private Limited aims to build a trusted food products brand through quality-focused sourcing, processing, packaging and distribution." />
            </p>
            <Link href="#our-story" className={styles.goldButton}>
              <T text="Discover Our Story" />
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
      <section
        id="our-story"
        className={`site-container ${styles.story}`}
        aria-labelledby="story-title"
      >
        <Reveal className={styles.storyArt}>
          <Image
            src="/images/v2/natural-lifestyle.webp"
            alt="Makhana product presentation"
            fill
            sizes="(min-width: 900px) 45vw, 90vw"
            className={styles.photo}
          />
          <span className={styles.artLabel}>MIZAVARA / 01</span>
        </Reveal>
        <Reveal className={styles.storyCopy} delay={0.08}>
          <p className={styles.kicker}>
            <T text="Our Story" />
          </p>
          <h2 id="story-title">
            <T text="Nature’s Goodness." />
            <br />
            <em>
              <T text="Quality You Trust." />
            </em>
          </h2>
          <p>
            <T text="MIZAVARA Global Private Limited aims to build a trusted food products brand through quality-focused sourcing, processing, packaging and distribution." />
          </p>
          <p>
            <T text="Our goal is to build lasting business relationships with customers, retailers, wholesalers and distributors." />
          </p>
          <Link className={styles.textLink} href="/products">
            <T text="Explore Our Products" />
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </Reveal>
      </section>
      <section className={styles.philosophy} aria-labelledby="philosophy-title">
        <div className="site-container">
          <Reveal>
            <p className={styles.kicker}>
              <T text="Our Philosophy" />
            </p>
            <h2 id="philosophy-title">
              <T text="Quality, integrity and lasting relationships." />
            </h2>
            <p>
              <T text="Our goal is to build lasting business relationships with customers, retailers, wholesalers and distributors." />
            </p>
          </Reveal>
        </div>
      </section>
      <section
        className={`site-container ${styles.principles}`}
        aria-labelledby="principles-heading"
      >
        <Reveal>
          <p className={styles.kicker}>
            <T text="Our Philosophy" />
          </p>
          <h2 id="principles-heading">
            <T text="What guides us" />
          </h2>
        </Reveal>
        <div className={styles.principleGrid}>
          {principles.map(({ title, Icon, description }, i) => (
            <Reveal key={title} delay={i * 0.08} className={styles.cardWrap}>
              <article className={styles.card}>
                <span className={styles.number}>0{i + 1}</span>
                <Icon size={36} strokeWidth={1.4} aria-hidden="true" />
                <h3>
                  <T text={title} />
                </h3>
                <p>
                  <T text={description} />
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className={styles.approach} aria-labelledby="approach-title">
        <div className="site-container">
          <Reveal>
            <p className={styles.kicker}>
              <T text="Our Approach" />
            </p>
            <h2 id="approach-title">
              <T text="From selection to supply" />
            </h2>
          </Reveal>
          <ol className={styles.steps}>
            {approach.map(({ title, Icon, description }, i) => (
              <li key={title}>
                <Reveal delay={i * 0.06}>
                  <span className={styles.stepIcon}>
                    <Icon size={30} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className={styles.number}>0{i + 1}</span>
                  <h3>
                    <T text={title} />
                  </h3>
                  <p>
                    <T text={description} />
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section
        className={`site-container ${styles.collection}`}
        aria-labelledby="collection-title"
      >
        <Reveal>
          <p className={styles.kicker}>
            <T text="Discover Our Collection" />
          </p>
          <h2 id="collection-title">
            <T text="Goodness in Every Bite" />
          </h2>
        </Reveal>
        <div className={styles.productGrid}>
          {products.map((p) => (
            <Reveal key={p.slug}>
              <Link className={styles.product} href={`/products/${p.slug}`}>
                <div className={styles.pack}>
                  <Image
                    src={`/images/v2/${p.image}`}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 25vw, 80vw"
                    className={styles.packImage}
                  />
                </div>
                <h3>
                  <T text={p.name} />
                </h3>
                <span className={styles.textLink}>
                  <T text="View Product" />
                  <ArrowRight size={16} aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <section className={styles.partner} aria-labelledby="partner-title">
        <div className={`site-container ${styles.partnerInner}`}>
          <Reveal>
            <p className={styles.kicker}>
              <T text="Business Partnerships" />
            </p>
            <h2 id="partner-title">
              <T text="Grow With MIZAVARA" />
            </h2>
            <p>
              <T text="Explore distribution partnership opportunities and help bring our food product collection to new customers and markets." />
            </p>
            <div className={styles.actions}>
              <Link className={styles.goldButton} href="/distributor">
                <T text="Become a Distributor" />
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link className={styles.outlineButton} href="/wholesale">
                <T text="Wholesale & Bulk Enquiry" />
              </Link>
            </div>
          </Reveal>
          <div className={styles.partnerArt}>
            <Image
              src="/images/v2/partner-handshake.webp"
              alt=""
              fill
              sizes="(min-width: 900px) 35vw, 90vw"
              className={styles.photo}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
