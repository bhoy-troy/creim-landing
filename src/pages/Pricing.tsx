import { useNavigate } from "react-router-dom";
import PageHero from "@/components/PageHero";
import type { Plan } from "@/types";

const PLANS: Plan[] = [
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
  const navigate = useNavigate();

  return (
    <>
      <PageHero
        label="Pricing"
        title="Simple, transparent pricing"
        subtitle="No setup fees. No lock-in. Cancel anytime."
      />
      <section style={{ padding: "80px 5%", background: "#fff" }}>
        <div style={{ maxWidth: 1050, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
            {PLANS.map((p) => (
              <div key={p.name} style={{
                borderRadius: 14, padding: "36px 28px", position: "relative",
                background: p.highlight ? "#0A1F44" : "#fff",
                border:     p.highlight ? "2px solid #00C2CB" : "1px solid #E5E7EB",
                boxShadow:  p.highlight ? "0 8px 40px rgba(10,31,68,0.22)" : "0 2px 12px rgba(10,31,68,0.06)",
              }}>
                {p.highlight && (
                  <div style={{
                    position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                    background: "#00C2CB", color: "#0A1F44", fontWeight: 800,
                    fontSize: 12, padding: "4px 16px", borderRadius: 12, letterSpacing: 1,
                  }}>
                    MOST POPULAR
                  </div>
                )}

                <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.5,
                              textTransform: "uppercase", marginBottom: 12,
                              color: p.highlight ? "#00C2CB" : "#6B7280" }}>
                  {p.name}
                </div>

                <span style={{ fontSize: "2.6rem", fontWeight: 800,
                               color: p.highlight ? "#fff" : "#0A1F44" }}>
                  {p.price}
                </span>
                <span style={{ fontSize: 14, marginLeft: 4,
                               color: p.highlight ? "rgba(255,255,255,0.6)" : "#9CA3AF" }}>
                  {p.period}
                </span>

                <p style={{ fontSize: 14, lineHeight: 1.6, margin: "16px 0 24px",
                            color: p.highlight ? "rgba(255,255,255,0.65)" : "#6B7280" }}>
                  {p.desc}
                </p>

                <ul style={{ listStyle: "none", marginBottom: 32 }}>
                  {p.features.map((f) => (
                    <li key={f} style={{
                      fontSize: 14, padding: "7px 0",
                      display: "flex", alignItems: "center", gap: 8,
                      borderBottom: p.highlight ? "1px solid rgba(255,255,255,0.08)" : "1px solid #F3F4F6",
                      color: p.highlight ? "rgba(255,255,255,0.85)" : "#374151",
                    }}>
                      <span style={{ color: "#00C2CB", fontWeight: 700 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>

                <button onClick={() => navigate("/contact")} style={{
                  width: "100%", padding: "13px 0", borderRadius: 8, border: "none",
                  fontWeight: 700, fontSize: 15, cursor: "pointer",
                  background: p.highlight ? "#00C2CB" : "#0A1F44",
                  color:      p.highlight ? "#0A1F44" : "#fff",
                }}>
                  {p.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
