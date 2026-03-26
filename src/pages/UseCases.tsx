import { useState } from "react";
import PageHero from "@/components/PageHero";
import type { UseCase } from "@/types";

const CASES: UseCase[] = [
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
      <PageHero
        label="Customer Stories"
        title="Real savings. Real businesses."
        subtitle="Irish businesses cutting energy bills with CREIM."
      />
      <section style={{ padding: "80px 5%", background: "#F0F4F8" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 12, marginBottom: 36, flexWrap: "wrap" }}>
            {CASES.map((ca, i) => (
              <button key={ca.sector} onClick={() => setActive(i)} style={{
                padding: "10px 22px", borderRadius: 24, border: "none",
                fontWeight: 600, fontSize: 14, cursor: "pointer",
                background: i === active ? "#0A1F44" : "#fff",
                color:      i === active ? "#00C2CB" : "#6B7280",
                boxShadow:  i === active ? "0 2px 12px rgba(10,31,68,0.15)" : "none",
              }}>
                {ca.icon} {ca.sector}
              </button>
            ))}
          </div>

          <div style={{ background: "#fff", borderRadius: 14, padding: "40px 36px",
                        boxShadow: "0 4px 24px rgba(10,31,68,0.08)" }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>{c.icon}</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: "#0A1F44", marginBottom: 28 }}>{c.sector}</div>

            {(["Challenge", "Solution"] as const).map((key) => (
              <div key={key} style={{ marginBottom: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#00C2CB",
                              letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6 }}>
                  {key}
                </div>
                <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.7 }}>
                  {key === "Challenge" ? c.challenge : c.solution}
                </p>
              </div>
            ))}

            <div style={{ background: "linear-gradient(135deg,#0A1F44,#0d3560)",
                          borderRadius: 10, padding: "20px 24px", marginTop: 28 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#00C2CB",
                            letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6 }}>
                Result
              </div>
              <p style={{ fontSize: 15, color: "#fff", lineHeight: 1.7, fontWeight: 500 }}>{c.result}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
