import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import type { Step } from "@/types";

const STEPS: Step[] = [
  { num: "01", title: "Install a sensor or connect existing meters",
    desc: "We integrate with Modbus RTU/TCP meters, pulse counters and smart meters already on site. No rewiring required in most cases." },
  { num: "02", title: "Data flows to the CREIM cloud in real time",
    desc: "Readings are transmitted every 5–15 minutes via your site broadband or LTE backup. All data is encrypted in transit and at rest." },
  { num: "03", title: "Dashboard and alerts go live instantly",
    desc: "Your live energy dashboard is available within hours of connection. Threshold alerts are configured during onboarding." },
  { num: "04", title: "Actionable monthly reports",
    desc: "CREIM generates plain-English reports showing what you spent, where waste occurred, and the top three actions to reduce your next bill." },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        label="How It Works"
        title="Live in under a day"
        subtitle="From first contact to live dashboard — we keep it simple."
      />
      <section style={{ padding: "80px 5%", background: "#fff" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          {STEPS.map((s, i) => (
            <div key={s.num} style={{
              display: "flex", gap: 28, marginBottom: i < STEPS.length - 1 ? 56 : 0,
              alignItems: "flex-start",
            }}>
              <div style={{ fontSize: "2.8rem", fontWeight: 800, color: "#00C2CB",
                            lineHeight: 1, minWidth: 64, opacity: 0.6 }}>
                {s.num}
              </div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#0A1F44", marginBottom: 8 }}>{s.title}</div>
                <p style={{ fontSize: 15, color: "#6B7280", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            </div>
          ))}
          <div style={{ textAlign: "center", marginTop: 72 }}>
            <Link to="/contact" style={{
              background: "#00C2CB", color: "#0A1F44", borderRadius: 8,
              padding: "14px 36px", fontWeight: 700, fontSize: 15,
            }}>
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
