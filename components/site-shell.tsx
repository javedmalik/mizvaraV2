"use client";
import { T, useTranslate } from "@/components/language-provider";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUp, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { contact, socialLinks } from '@/lib/site-data';
import { PremiumHeader } from '@/components/layout/premium-header';
import { WhatsAppButton } from '@/components/whatsapp-button';
const explore=[['About Us','/about'],['All Products','/products'],['Wholesale & Bulk Supply','/wholesale'],['Become a Distributor','/distributor']];
const information=[['Contact Us','/contact'],['Privacy Policy','/privacy-policy'],['Shipping & Returns','/shipping-returns'],['Terms','/terms']];
export function SiteShell({children}:{children:React.ReactNode}){
 const tr=useTranslate();
 const [showTop,setShowTop]=useState(false);
 useEffect(()=>{document.documentElement.classList.remove('dark');const onScroll=()=>setShowTop(window.scrollY>420);onScroll();window.addEventListener('scroll',onScroll,{passive:true});return()=>window.removeEventListener('scroll',onScroll)},[]);
 return <div className="min-h-screen bg-background text-foreground"><PremiumHeader/>{children}<footer className="v2-footer"><div className="site-container v2-footer-grid"><div><Link href="/" className="v2-footer-brand"><Image src="/mizavara-logo.png" width={54} height={54} alt=""/><span><strong>MIZAVARA</strong><small>GLOBAL PRIVATE LIMITED</small></span></Link><p className="v2-footer-tag"><T text={"Nature’s Goodness. Quality You Trust."}/></p><p><T text={"Explore our food product collection and business supply opportunities."}/></p>{socialLinks.some(l=>l.href.startsWith('https://'))&&<div className="v2-footer-social">{socialLinks.filter(l=>l.href.startsWith('https://')).map(l=><a key={l.name} href={l.href} target="_blank" rel="noreferrer">{l.name}<ArrowUpRight size={13}/></a>)}</div>}</div>{[{title:'Explore',items:explore},{title:'Information',items:information}].map(group=><div key={group.title}><h2><T text={group.title}/></h2><nav aria-label={tr(group.title)}>{group.items.map(([label,url])=><Link key={url} href={url}><T text={label}/></Link>)}</nav></div>)}<div><h2><T text={"Contact MIZAVARA"}/></h2><a href={`mailto:${contact.email}`}><Mail size={16}/>{contact.email}</a><a href={`tel:${contact.phone.replace(/[^+\d]/g,'')}`}><Phone size={16}/>{contact.phone}</a><p className="v2-address"><MapPin size={16}/><span>{contact.address}</span></p></div></div><div className="v2-footer-bottom">© {new Date().getFullYear()} MIZAVARA Global Private Limited. <T text="All rights reserved."/></div></footer><WhatsAppButton/>{showTop&&<button type="button" aria-label={tr("Scroll to top")} onClick={()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})} className="fixed bottom-25 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-brand-green text-white shadow-lg"><ArrowUp size={20}/></button>}</div>
}
