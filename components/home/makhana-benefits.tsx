"use client";

import { useLanguage } from "@/components/language-provider";
import { Reveal } from "@/components/motion/reveal";
import styles from "./makhana-benefits.module.css";

export function MakhanaBenefits() {
  const { language } = useLanguage();
  const hi = language === "hi";
  return (
    <section
      className={`site-container ${styles.section}`}
      aria-label={
        hi
          ? "मखाना के फायदे — संदर्भ चित्र"
          : "Makhana benefits — reference infographic"
      }
    >
      <Reveal>
        <figure className={styles.figure}>
          <picture className={styles.picture}>
            <source
              media="(max-width: 767px)"
              srcSet="/images/v2/makhana-benefits-mobile.webp"
              width={736}
              height={1308}
            />
            {/* Native picture provides art direction and loads only the matching image. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/v2/makhana-benefits-horizontal.webp"
              width={1672}
              height={941}
              loading="lazy"
              decoding="async"
              className={styles.image}
              alt="English reference infographic titled Top Benefits of Makhana, showing a bowl of makhana surrounded by eight wellness topics: weight, heart, immunity, blood sugar, digestion, bones, brain and skin."
              lang="en"
            />
          </picture>
          {/* <figcaption className={styles.caption}>
            {hi ? "यह संदर्भ चित्र है। इसमें दिए गए स्वास्थ्य और पोषण संबंधी दावों की MIZAVARA उत्पादों के लिए पुष्टि नहीं हुई है।" : "Reference illustration. The health and nutrition claims shown have not been verified for MIZAVARA products."}
          </figcaption> */}
        </figure>
      </Reveal>
    </section>
  );
}
