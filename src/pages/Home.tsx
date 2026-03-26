import { Link } from "react-router-dom";
import type { Stat } from "@/types";

const STATS: Stat[] = [
  { value: "€12k+",   label: "Average annual saving per site" },
  { value: "15 min",  label: "Demand spike detection window" },
  { value: "98%",     label: "Uptime on monitored devices" },
  { value: "< 1 day", label: "Time to first insight after install" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0A1F44 0%, #0d2d5e 60%, #0a3a3a 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "100px 5% 60px", textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,194,203,0.12) 0%, transparent 70%)",
          top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 780, position: "relative", zIndex: 1 }}>
          <div style={{
            display: "inline-block", background: "rgba(0,194,203,0.15)", color: "#00C2CB",
            border: "1px solid rgba(0,194,203,0.35)", borderRadius: 20,
            padding: "6px 16px", fontSize: 13, fontWeight: 600, marginBottom: 28, letterSpacing: 1,
          }}>
            🇮🇪 Built for Irish Business
          </div>
          <h1 style={{ fontSize: "clamp(2.4rem,5vw,3.6rem)", fontWeight: 800, color: "#fff",
                       lineHeight: 1.15, marginBottom: 24 }}>
            Stop Overpaying for<br />
            <span style={{ color: "#00C2CB" }}>Energy You Can Measure</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem,2vw,1.2rem)", color: "rgba(255,255,255,0.72)",
                      maxWidth: 580, margin: "0 auto 40px", lineHeight: 1.7 }}>
            CREIM monitors your electricity, gas, water and compressed air in real time —
            alerting you before a demand spike costs you thousands and predicting equipment
            failures before they happen.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact" style={{
              background: "#00C2CB", color: "#0A1F44", borderRadius: 8,
              padding: "14px 32px", fontWeight: 700, fontSize: 15,
            }}>
              Request a Free Demo
            </Link>
            <Link to="/how-it-works" style={{
              background: "transparent", color: "#fff",
              border: "1px solid rgba(255,255,255,0.35)", borderRadius: 8,
              padding: "14px 32px", fontWeight: 600, fontSize: 15,
            }}>
              See How It Works ↓
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: "#0A1F44", padding: "48px 5%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
                      gap: 32, maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
          {STATS.map((s) => (
            <div key={s.label}>
              <div style={{ fontSize: "2.4rem", fontWeight: 800, color: "#00C2CB" }}>{s.value}</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", marginTop: 6, fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature teaser */}
      <section style={{ padding: "96px 5%", background: "#F0F4F8", textAlign: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <div style={{ color: "#00C2CB", fontWeight: 700, fontSize: 13,
                        letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12 }}>
            Platform
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.4rem)", fontWeight: 800,
                       color: "#0A1F44", marginBottom: 20 }}>
            One platform. Every energy vector.
          </h2>
          <p style={{ color: "#6B7280", fontSize: 16, lineHeight: 1.7, marginBottom: 36 }}>
            From peak demand alerts to refrigeration predictive maintenance — CREIM gives
            Irish businesses the visibility they need to cut bills and prevent breakdowns.
          </p>
          <Link to="/features" style={{
            background: "#0A1F44", color: "#fff", borderRadius: 8,
            padding: "14px 32px", fontWeight: 700, fontSize: 15,
          }}>
            Explore Features →
          </Link>
        </div>
      </section>
    </>
  );
}
