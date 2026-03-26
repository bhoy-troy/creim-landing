import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import type { Feature } from "@/types";

const FEATURES: Feature[] = [
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
      <PageHero
        label="Platform Features"
        title="Everything you need to cut energy waste"
        subtitle="Six core capabilities — all live within hours of installation."
      />
      <section style={{ padding: "80px 5%", background: "#F0F4F8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 28 }}>
            {FEATURES.map((f) => (
              <div key={f.title} style={{
                background: "#fff", borderRadius: 12, padding: "32px 28px",
                boxShadow: "0 2px 16px rgba(10,31,68,0.07)", border: "1px solid rgba(10,31,68,0.06)",
              }}>
                <div style={{ fontSize: 32, marginBottom: 16 }}>{f.icon}</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: "#0A1F44", marginBottom: 10 }}>{f.title}</div>
                <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 64 }}>
            <Link to="/contact" style={{
              background: "#00C2CB", color: "#0A1F44", borderRadius: 8,
              padding: "14px 36px", fontWeight: 700, fontSize: 15,
            }}>
              Book a Free Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
