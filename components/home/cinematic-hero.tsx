"use client";
import { T, useTranslate } from "@/components/language-provider";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Leaf, PackageCheck, Handshake, Truck } from "lucide-react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useState, type CSSProperties, type PointerEvent } from "react";

const slides = [
  { image: "/images/v2/hero-collection.webp", alt: "Concept packaging for Natural, Peri Peri and Pudina Makhana", eyebrow: "The goodness of nature", title: "Nature’s Goodness.", accent: "Quality You Trust.", description: "Discover premium-quality food products, thoughtfully prepared for everyday living." },
  { image: "/images/v2/natural-scene.webp", alt: "Natural Makhana packaging concept", eyebrow: "Explore our collection", title: "Naturally inspired.", accent: "Simply Makhana.", description: "Explore Natural Makhana in 100g and 200g packaging options." },
  { image: "/images/v2/pudina-scene.webp", alt: "Pudina Makhana packaging concept", eyebrow: "Explore our collection", title: "A minty twist.", accent: "Discover Pudina.", description: "Explore Pudina Makhana in 60g and 100g packaging options." },
];
const features = [
  { icon: Leaf, title: "Quality Focused", text: "Careful product selection and processing." },
  { icon: PackageCheck, title: "Thoughtful Packaging", text: "Convenient product packaging." },
  { icon: Handshake, title: "Business Partnerships", text: "Retail and wholesale enquiries." },
  { icon: Truck, title: "Supply Network", text: "Business supply opportunities." },
];

export function CinematicHero() {
  const tr = useTranslate();
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 100, damping: 24 });
  const y = useSpring(rawY, { stiffness: 100, damping: 24 });
  const slide = slides[index];
  const move = (direction: number) => setIndex(i => (i + direction + slides.length) % slides.length);
  function reset() { rawX.set(0); rawY.set(0); }
  function pointerMove(event: PointerEvent<HTMLElement>) {
    if (reduced || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    rawX.set(((event.clientX - rect.left) / rect.width - .5) * 18);
    rawY.set(((event.clientY - rect.top) / rect.height - .5) * 12);
  }
  return (
    <section className="cinematic-hero" aria-label={tr("Featured products")} aria-roledescription={tr("carousel")} onPointerMove={pointerMove} onPointerLeave={reset}>
      <h1 className="sr-only"><T text="MIZAVARA Global — Food Product Catalogue" /></h1>
      <div className="cinematic-stage">
        <div className="cinematic-art" aria-hidden="true">
          <AnimatePresence initial={false}>
            <motion.div key={slide.image} className={`cinematic-image-layer ${index === 0 ? "cinematic-collection-layer" : "cinematic-single-layer"}`} style={{ "--scene-image": `url(${slide.image})` } as CSSProperties} initial={{ opacity: .9 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : .55 }}>
              <motion.div className="cinematic-image-motion" style={{ x: reduced ? 0 : x, y: reduced ? 0 : y, backgroundImage: `url(${slide.image})` }}>
                <Image src={slide.image} alt="" fill unoptimized priority={index === 0} sizes="(max-width: 767px) 100vw, 65vw" className="cinematic-image" />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="cinematic-glow" aria-hidden="true" />
        <div className="cinematic-content site-container">
          <div className="cinematic-copy" aria-live="polite" aria-atomic="true">
            <motion.div key={index} initial={reduced ? false : { opacity: .85, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : .25 }}>
              <p className="eyebrow cinematic-eyebrow"><T text={slide.eyebrow}/></p>
              <h2 className="cinematic-title"><span className="cinematic-desktop-title"><T text={slide.title}/><span><T text={slide.accent}/></span></span><span className="cinematic-mobile-title">{index === 0 ? <><T text={"Premium"}/><span><T text={"Makhana"}/></span></> : <><T text={slide.title}/><span><T text={slide.accent}/></span></>}</span></h2>
              <p className="cinematic-description"><T text={slide.description}/></p>
              <span className="sr-only">{slide.alt}</span>
            </motion.div>
          </div>
          <div className="cinematic-actions">
            <Link className="button-primary" href="/products"><Leaf size={18} /><T text={"Explore Products"}/> <ArrowRight size={17} /></Link>
            <Link className="button-secondary" href="/wholesale"><PackageCheck size={19} /><span className="hero-bulk-desktop"><T text={"Wholesale & Bulk Enquiry"}/></span><span className="hero-bulk-mobile"><T text={"Bulk Enquiry"}/></span></Link>
          </div>
          <div className="cinematic-controls" aria-label={tr("Select featured product")}>
            <button type="button" className="cinematic-arrow" aria-label={tr("Previous slide")} onClick={() => move(-1)}><ChevronLeft size={22} /></button>
            {slides.map((item, i) => <button key={item.image} type="button" className="cinematic-dot" aria-label={`${tr("Show slide")} ${i + 1}`} aria-pressed={i === index} onClick={() => setIndex(i)} />)}
            <button type="button" className="cinematic-arrow" aria-label={tr("Next slide")} onClick={() => move(1)}><ChevronRight size={22} /></button>
          </div>
        </div>
      </div>
      <div className="cinematic-feature-wrap site-container">
        <div className="cinematic-features">
          {features.map(({icon: Icon, title, text}) => <div key={title} className="cinematic-feature"><Icon aria-hidden="true" size={34} strokeWidth={1.5} /><div><h2><T text={title}/></h2><p><T text={text}/></p></div></div>)}
        </div>
      </div>
    </section>
  );
}
