import Link from "next/link";
import PageHero from "@/components/PageHero";
import styles from "@/styles/features.module.css";

const FEATURES = [
  { icon: "⚡", title: "Peak Demand Alerts",        desc: "Know before a new demand peak is set. Avoid ratchet clauses and inflated bills triggered by a single morning spike." },
  { icon: "🌡️", title: "Refrigeration Intelligence", desc: "Monitor pull-down time, warm-up rate and recovery speed to predict compressor failure weeks in advance." },
  { icon: "💧", title: "Multi-Commodity Tracking",   desc: "Electricity, gas, water and compressed air — all in one dashboard. Spot leaks and waste in hours, not months." },
  { icon: "📊", title: "Power Factor Monitoring",    desc: "Stay above your utility target PF and avoid reactive power penalties on your monthly bill." },
  { icon: "🔔", title: "Real-Time Alerts",           desc: "Email, SMS and webhook notifications the moment a threshold is breached — not at month-end bill time." },
  { icon: "🤖", title: "Predictive Maintenance",     desc: "AI-scored performance index for every device, ranked by health. Know which machine to service next." },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero label="Platform Features" title="Everything you need to cut energy waste" subtitle="Six core capabilities — all live within hours of installation." />
      <section className={styles.section}>
        <div className={styles.grid}>
          {FEATURES.map((f) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.icon}>{f.icon}</div>
              <div className={styles.cardTitle}>{f.title}</div>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.cta}>
          <Link href="/contact" className={styles.ctaBtn}>Book a Free Demo</Link>
        </div>
      </section>
    </>
  );
}
