interface Props {
  label: string;
  title: string;
  subtitle?: string;
}
export default function PageHero({ label, title, subtitle }: Props) {
  return (
    <section style={{
      background: "linear-gradient(135deg, #0A1F44 0%, #0d2d5e 60%, #0a3a3a 100%)",
      padding: "140px 5% 80px", textAlign: "center",
    }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <div style={{
          display: "inline-block", background: "rgba(0,194,203,0.15)", color: "#00C2CB",
          border: "1px solid rgba(0,194,203,0.35)", borderRadius: 20,
          padding: "6px 16px", fontSize: 13, fontWeight: 600, marginBottom: 20, letterSpacing: 1,
        }}>
          {label}
        </div>
        <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800,
                     color: "#fff", lineHeight: 1.2, marginBottom: 20 }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ fontSize: "clamp(1rem,2vw,1.15rem)", color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.7 }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
