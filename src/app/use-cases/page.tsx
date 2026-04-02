"use client";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import styles from "@/styles/useCases.module.css";

const CASES = [
  {
    sector: "Food Retail", icon: "🛒",
    challenge: "A supermarket chain was receiving unexpectedly high electricity bills with no visibility into why.",
    solution:  "CREIM connected to 48 refrigeration units and the main incomer meter. Within 72 hours it identified a morning start-up sequence causing a demand spike 2× normal load.",
    result:    "€18,400 saved in year one by staggering compressor start times and reducing the maximum demand charge.",
  },
  {
    sector: "Food Manufacturing", icon: "🏭",
    challenge: "A meat processing facility had recurring, unexplained compressor failures causing expensive emergency callouts.",
    solution:  "CREIM predictive maintenance tracked pull-down times and warm-up rates across 12 cold rooms, identifying two units with degrading performance.",
    result:    "Planned maintenance replaced failing components before breakdown. Emergency callout cost avoided: €14,000.",
  },
  {
    sector: "Hospitality", icon: "🏨",
    challenge: "A hotel group wanted to benchmark energy use across 6 properties but had no common data format.",
    solution:  "CREIM deployed to all 6 sites with a unified multi-site dashboard. Power factor, peak demand and commodity consumption visible in one view.",
    result:    "30% reduction in reactive power charges across the portfolio after targeted capacitor bank installations.",
  },
];

export default function UseCasesPage() {
  const [active, setActive] = useState(0);
  const c = CASES[active];
  return (
    <>
      <PageHero label="Customer Stories" title="Real savings. Real businesses." subtitle="Irish businesses cutting energy bills with CREIM." />
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.tabs}>
            {CASES.map((ca, i) => (
              <button key={ca.sector} onClick={() => setActive(i)}
                className={`${styles.tab} ${i === active ? styles.tabActive : styles.tabInactive}`}>
                {ca.icon} {ca.sector}
              </button>
            ))}
          </div>
          <div className={styles.card}>
            <div className={styles.caseIcon}>{c.icon}</div>
            <div className={styles.caseName}>{c.sector}</div>
            {(["Challenge", "Solution"] as const).map((key) => (
              <div key={key} className={styles.caseSection}>
                <div className={styles.caseLabel}>{key}</div>
                <p className={styles.caseText}>{key === "Challenge" ? c.challenge : c.solution}</p>
              </div>
            ))}
            <div className={styles.result}>
              <div className={styles.caseLabel}>Result</div>
              <p className={styles.resultText}>{c.result}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
