import Link from "next/link";
import styles from "@/styles/home.module.css";

const STATS = [
  { value: "€12k+",   label: "Average annual saving per site" },
  { value: "15 min",  label: "Demand spike detection window" },
  { value: "98%",     label: "Uptime on monitored devices" },
  { value: "< 1 day", label: "Time to first insight after install" },
];

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroInner}>
          <div className={styles.heroBadge}>🇮🇪 Built for Irish Business</div>
          <h1 className={styles.heroTitle}>
            Stop Overpaying for<br />
            <span className={styles.heroAccent}>Energy You Can Measure</span>
          </h1>
          <p className={styles.heroSubtitle}>
            CREIM monitors your electricity, gas, water and compressed air in real time —
            alerting you before a demand spike costs you thousands and predicting equipment
            failures before they happen.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className={styles.btnPrimary}>Request a Free Demo</Link>
            <Link href="/how-it-works" className={styles.btnOutline}>See How It Works ↓</Link>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.statsGrid}>
          {STATS.map((s) => (
            <div key={s.label}>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.teaser}>
        <div className={styles.teaserInner}>
          <div className={styles.teaserLabel}>Platform</div>
          <h2 className={styles.teaserTitle}>One platform. Every energy vector.</h2>
          <p className={styles.teaserText}>
            From peak demand alerts to refrigeration predictive maintenance — CREIM gives
            Irish businesses the visibility they need to cut bills and prevent breakdowns.
          </p>
          <Link href="/features" className={styles.btnDark}>Explore Features →</Link>
        </div>
      </section>
    </>
  );
}
