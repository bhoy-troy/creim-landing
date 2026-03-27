import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";

interface TeamMember {
  name: string;
  role: string;
  bio: string[];
  initials: string;
  accentColor: string;
  linkedin?: string;
  email?: string;
}

const TEAM: TeamMember[] = [
  {
    name: "James Troy",
    role: "Co-Founder & CTO",
    initials: "JT",
    accentColor: "#00C2CB",
    bio: [
      "James brings over a decade of experience in full-stack software engineering, IoT integration and data engineering. He has built energy monitoring systems for industrial sites across Ireland, specialising in Modbus RTU/TCP communication protocols and real-time data pipelines.",
      "Before founding CREIM, James worked as a senior engineer at Carelon where he designed and maintained large-scale data infrastructure. He is passionate about turning raw meter data into actionable intelligence that drives real cost savings for Irish businesses.",
    ],
    linkedin: "https://linkedin.com",
    email: "james@creim.ie",
  },
  {
    name: "Sarah Brennan",
    role: "Co-Founder & CEO",
    initials: "SB",
    accentColor: "#0A6E74",
    bio: [
      "Sarah has 12 years of experience in energy management and sustainability consulting across the food retail and hospitality sectors in Ireland. She holds a Masters in Sustainable Energy from UCD and has delivered energy reduction programmes saving clients over €4 million in total.",
      "Sarah founded CREIM after recognising that most Irish SMEs lacked access to the real-time monitoring tools available to large multinationals. Her mission is to democratise energy intelligence — making enterprise-grade analytics accessible to every business on the island.",
    ],
    linkedin: "https://linkedin.com",
    email: "sarah@creim.ie",
  },
];

const VALUES = [
  { icon: "🎯", title: "Clarity over complexity", desc: "We turn thousands of data points into three actions you can take this week." },
  { icon: "🤝", title: "Customer-first always",   desc: "We succeed only when your bills go down. Our pricing reflects that." },
  { icon: "🇮🇪", title: "Built for Ireland",     desc: "We understand Irish tariffs, MIC structures and the ESB Networks framework." },
  { icon: "🔒", title: "Security & privacy",      desc: "All data is encrypted at rest and in transit. GDPR compliant from day one." },
];

function Avatar({ member }: { member: TeamMember }) {
  return (
    <div style={{
      width: 180, height: 180, borderRadius: "50%",
      background: `linear-gradient(135deg, ${member.accentColor} 0%, #0A1F44 100%)`,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: "3.2rem", fontWeight: 800, color: "#fff",
      boxShadow: `0 8px 40px ${member.accentColor}44`,
      flexShrink: 0,
      border: `4px solid ${member.accentColor}`,
    }}>
      {member.initials}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About CREIM"
        title="We built the tool we wished existed"
        subtitle="CREIM was founded in Dublin by two engineers who kept watching Irish businesses overpay for energy — not through waste, but through lack of visibility."
      />

      {/* Mission */}
      <section style={{ padding: "80px 5%", background: "#fff" }}>
        <div style={{
          maxWidth: 860, margin: "0 auto", display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: 40,
        }}>
          <div>
            <div style={{ color: "#00C2CB", fontWeight: 700, fontSize: 13,
                          letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12 }}>
              Our Mission
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800,
                         color: "#0A1F44", lineHeight: 1.25, marginBottom: 20 }}>
              Make energy intelligence accessible to every Irish business
            </h2>
            <p style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.8 }}>
              Large multinationals have teams of energy engineers and expensive BMS systems.
              Irish SMEs have a monthly bill and a guess. We are here to change that.
            </p>
          </div>
          <div style={{
            background: "linear-gradient(135deg, #0A1F44, #0a3a3a)",
            borderRadius: 16, padding: "36px 32px",
          }}>
            <div style={{ fontSize: "2.8rem", fontWeight: 800, color: "#00C2CB", marginBottom: 4 }}>2023</div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, marginBottom: 28 }}>Founded in Dublin</div>
            <div style={{ fontSize: "2.8rem", fontWeight: 800, color: "#00C2CB", marginBottom: 4 }}>40+</div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, marginBottom: 28 }}>Sites monitored</div>
            <div style={{ fontSize: "2.8rem", fontWeight: 800, color: "#00C2CB", marginBottom: 4 }}>€480k+</div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 14 }}>Saved for customers</div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "80px 5%", background: "#F0F4F8" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ color: "#00C2CB", fontWeight: 700, fontSize: 13,
                        letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>
            The Team
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.4rem)", fontWeight: 800, color: "#0A1F44",
                       marginBottom: 64, textAlign: "center" }}>
            Meet the founders
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
            {TEAM.map((member, i) => (
              <div key={member.name} style={{
                display: "flex",
                flexDirection: i % 2 === 0 ? "row" : "row-reverse",
                gap: 56, alignItems: "flex-start",
                flexWrap: "wrap",
              }}>
                {/* Avatar + contact */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
                  <Avatar member={member} />
                  <div style={{ display: "flex", gap: 12 }}>
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{
                        display: "flex", alignItems: "center", gap: 6,
                        background: "#0A1F44", color: "#fff", padding: "8px 16px",
                        borderRadius: 6, fontSize: 13, fontWeight: 600,
                      }}>
                        in LinkedIn
                      </a>
                    )}
                    {member.email && (
                      <a href={`mailto:${member.email}`} style={{
                        display: "flex", alignItems: "center", gap: 6,
                        background: "#00C2CB", color: "#0A1F44", padding: "8px 16px",
                        borderRadius: 6, fontSize: 13, fontWeight: 600,
                      }}>
                        ✉ Email
                      </a>
                    )}
                  </div>
                </div>

                {/* Bio */}
                <div style={{ flex: 1, minWidth: 280 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#00C2CB",
                                letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 8 }}>
                    {member.role}
                  </div>
                  <h3 style={{ fontSize: "clamp(1.6rem,2.5vw,2rem)", fontWeight: 800,
                               color: "#0A1F44", marginBottom: 20 }}>
                    {member.name}
                  </h3>
                  {member.bio.map((para, j) => (
                    <p key={j} style={{
                      fontSize: 16, color: "#6B7280", lineHeight: 1.8,
                      marginBottom: j < member.bio.length - 1 ? 16 : 0,
                    }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "80px 5%", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ color: "#00C2CB", fontWeight: 700, fontSize: 13,
                        letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 12, textAlign: "center" }}>
            Our Values
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.4rem)", fontWeight: 800, color: "#0A1F44",
                       marginBottom: 48, textAlign: "center" }}>
            How we work
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 28 }}>
            {VALUES.map((v) => (
              <div key={v.title} style={{
                background: "#F0F4F8", borderRadius: 12, padding: "32px 24px",
                borderTop: "4px solid #00C2CB",
              }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{v.icon}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#0A1F44", marginBottom: 10 }}>{v.title}</div>
                <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "80px 5%", textAlign: "center",
        background: "linear-gradient(135deg, #0A1F44 0%, #0a3a3a 100%)",
      }}>
        <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.2rem)", fontWeight: 800,
                     color: "#fff", marginBottom: 16 }}>
          Want to work with us?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16, marginBottom: 36, maxWidth: 500, margin: "0 auto 36px" }}>
          Whether you are a potential customer, partner or investor — we would love to hear from you.
        </p>
        <Link to="/contact" style={{
          background: "#00C2CB", color: "#0A1F44", borderRadius: 8,
          padding: "14px 36px", fontWeight: 700, fontSize: 15,
        }}>
          Get in Touch
        </Link>
      </section>
    </>
  );
}
