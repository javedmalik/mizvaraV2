"use client";
import { T, useTranslate } from "@/components/language-provider";

import { LanguageSwitch } from "@/components/language-provider";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Globe2, Mail, Menu, PackageCheck, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/distributor", label: "Distributor" },
  { href: "/contact", label: "Contact" },
];

export function PremiumHeader() {
  const tr = useTranslate();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) return;
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
    };
    const media = window.matchMedia("(min-width: 1200px)");
    const resize = () => { if (media.matches) setOpen(false); };
    window.addEventListener("keydown", escape);
    media.addEventListener("change", resize);
    return () => { window.removeEventListener("keydown", escape); media.removeEventListener("change", resize); };
  }, [open]);
  const active = (href: string) => href === "/" ? pathname === href : pathname === href || pathname.startsWith(href + "/");
  return (
    <header className={`premium-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="premium-announcement">
        <div className="premium-announcement-inner">
          <div className="premium-announcement-copy">
            <span><T text={"Welcome to MIZAVARA Global"}/></span>
            <span className="premium-announcement-extra"><T text={"Premium Food Products"}/></span>
            <span className="premium-announcement-extra"><T text={"Bulk & B2B Supply"}/></span>
          </div>
          <div className="premium-announcement-actions">
            <Link href="/wholesale" className="premium-announcement-extra"><PackageCheck size={15} /> <T text={"Bulk Supply"}/></Link>
            <Link href="/contact"><Mail size={15} /> <span><T text={"Business Enquiry"}/></span></Link>
          </div>
        </div>
      </div>
      <div className="premium-nav-wrap">
        <motion.div className="premium-nav-panel" initial={reduced ? false : { opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduced ? 0 : 0.35 }}>
          <div className="premium-nav-row">
            <Link href="/" className="premium-brand" aria-label={tr("Mizavara Global home")} onClick={() => setOpen(false)}>
              <Image src="/mizavara-logo.png" alt="" width={62} height={62} priority className="premium-brand-mark" />
              <span className="premium-brand-text"><strong>MIZAVARA</strong><small>GLOBAL PRIVATE LIMITED</small></span>
            </Link>
            <nav className="premium-desktop-nav" aria-label={tr("Primary navigation")}>
              {links.map(({href,label}) => <Link key={href} href={href} aria-current={active(href) ? "page" : undefined} className="premium-nav-link"><T text={label}/></Link>)}
            </nav>
            <div className="premium-nav-actions">
              <Link href="/contact" aria-label={tr("Send an enquiry")} className="premium-mobile-contact"><Mail size={22}/></Link>
              <span className="premium-language"><Globe2 size={15}/><LanguageSwitch/></span>
              <Link href="/contact" className="premium-enquiry"><Mail size={17} /> <span><T text={"Send Enquiry"}/></span><ArrowUpRight size={14} /></Link>
              <button ref={toggleRef} type="button" className="premium-menu-toggle icon-button" aria-label={tr(open ? "Close navigation" : "Open navigation")} aria-expanded={open} aria-controls="premium-mobile-nav" onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button>
            </div>
          </div>
          <div id="premium-mobile-nav" hidden={!open} className="premium-mobile-panel">
            {open && <motion.nav aria-label={tr("Mobile navigation")} initial={reduced ? false : {opacity:0,y:-5}} animate={{opacity:1,y:0}} transition={{duration:reduced ? 0 : .2}}>
              {links.map(({href,label}) => <Link key={href} href={href} aria-current={active(href) ? "page" : undefined} className="premium-mobile-link" onClick={() => setOpen(false)}><T text={label}/><ArrowUpRight size={16}/></Link>)}
              <Link href="/contact" className="premium-enquiry premium-mobile-enquiry" onClick={() => setOpen(false)}><Mail size={17}/> <T text={"Send Enquiry"}/> <ArrowUpRight size={16}/></Link>
              <p className="premium-mobile-language"><Globe2 size={15}/> <LanguageSwitch/></p>
            </motion.nav>}
          </div>
        </motion.div>
      </div>
    </header>
  );
}
