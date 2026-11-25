import { JsonLd } from "@/components/json-ld";
import { websiteSchema } from "@/lib/structured-data";
import { MakhanaBenefits } from "@/components/home/makhana-benefits";
import { pageSeo } from "@/lib/seo";
import { CinematicHero } from "@/components/home/cinematic-hero";
import { ProductCollection } from "@/components/home/product-collection";
import { PremiumBrandSections } from "@/components/home/premium-brand-sections";
import { CategoryStrip } from "@/components/home/category-strip";
import { MakhanaMoments, HomeQuestions, HomeConnect } from "@/components/home/home-extras";

export default function Home() {
  return <main className="home-v21">
    <JsonLd data={websiteSchema} />
    <CinematicHero />
    {/* <div className="home-category"><CategoryStrip /></div> */}
    <div className="home-block"><ProductCollection /></div>
    <div className="home-block"><MakhanaBenefits /></div>
    <div className="home-block"><PremiumBrandSections /></div>
    <div className="home-block"><MakhanaMoments /></div>
    <div className="home-block"><HomeQuestions /></div>
    <div className="home-block"><HomeConnect /></div>
  </main>;
}

export const metadata = pageSeo("/", "MIZAVARA Global — Makhana Products", "Explore Natural, Peri Peri and Pudina Makhana. Enquire about packaging, wholesale supply and distributor partnerships.");
