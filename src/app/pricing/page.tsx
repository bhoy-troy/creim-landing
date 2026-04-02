"use client";
import { useRouter } from "next/navigation";
import PageHero from "@/components/PageHero";
import styles from "@/styles/pricing.module.css";
import styles from "@/styles/pricing.module.css";

const PLANS = [
  {
    name: "Starter", price: "€149", period: "/month", highlight: false,
    desc: "Perfect for a single site with one incomer meter.",
    features: ["1 monitoring point", "Energy overview dashboard", "Peak demand alerts", "Monthly PDF report", "Email support"],
    cta: "Get Started",
  },
  {
    name: "Professional", price: "€349", period: "/month", highlight: true,
    desc: "For businesses with refrigeration assets or multiple sub-meters.",
    features: ["Up to 10 monitoring points", "Refrigeration predictive maintenance", "Power factor tracking", "Real-time SMS & email alerts", "Weekly reports", "Phone & email support"],
    cta: "Most Popular",
  },
  {
    name: "Enterprise", price: "Custom", period: "", highlight: false,
    desc: "Multi-site portfolios, custom integrations and white-label options.",
    features: ["Unlimited monitoring points", "Multi-site dashboard", "API access & webhooks", "Custom alert rules", "Dedicated account manager", "SLA guarantee"],
    cta: "Contact Us",
  },
];

export default function PricingPage() {
  const router = useRouter();
  return (
    <>
      <PageHero label="Pricing" title="Simple, transparent pricing" subtitle="No setup fees. No lock-in. Cancel anytime." />
      <section className={styles.section}>
        <div className={styles.grid}>
          {PLANS.map((p) => (
            <div key={p.name} className={`${styles.card} ${p.highlight ? styles.cardHighlight : styles.cardDefault}`}>
              {p.highlight && <div className={styles.badge}>MOST POPULAR</div>}
              <div className={`${styles.planName} ${p.highlight ? styles.planNameHighlight : styles.planNameDefault}`}>{p.name}</div>
              <span className={`${styles.price} ${p.highlight ? styles.priceHighlight : styles.priceDefault}`}>{p.price}</span>
              <span className={`${styles.period} ${p.highlight ? styles.periodHighlight : styles.periodDefault}`}>{p.period}</span>
              <p className={`${styles.desc} ${p.highlight ? styles.descHighlight : styles.descDefault}`}>{p.desc}</p>
              <ul className={styles.featureList}>
                {p.features.map((f) => (
                  <li key={f} className={`${styles.feature} ${p.highlight ? styles.featureHighlight : styles.featureDefault}`}>
                    <span className={styles.check}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <button onClick={() => router.push("/contact")}
                className={`${styles.planBtn} ${p.highlight ? styles.planBtnHighlight : styles.planBtnDefault}`}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
