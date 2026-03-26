import { Link } from "react-router-dom";

const CrIcon = () => (
  <svg width="28" height="28" viewBox="0 0 100 100" aria-hidden="true">
    <defs>
      <linearGradient id="fg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00C2CB" />
        <stop offset="100%" stopColor="#0A1F44" />
      </linearGradient>
    </defs>
    <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" fill="url(#fg)" />
    <path d="M30,48 Q50,22 70,48" fill="none" stroke="white" strokeWidth="7" strokeLinecap="round" />
    <path d="M38,56 Q50,38 62,56" fill="none" stroke="white" strokeWidth="7" strokeLinecap="round" />
    <circle cx="50" cy="66" r="6" fill="white" />
    <line x1="50" y1="66" x2="30" y2="80" stroke="white" strokeWidth="5" strokeLinecap="round" />
    <line x1="50" y1="66" x2="70" y2="80" stroke="white" strokeWidth="5" strokeLinecap="round" />
  </svg>
);

const COLS: Record<string, { label: string; path: string }[]> = {
  Platform: [
    { label: "Features",     path: "/features" },
    { label: "How It Works", path: "/how-it-works" },
//     { label: "Pricing",      path: "/pricing" },
    { label: "Request Demo", path: "/contact" },
  ],
  "Use Cases": [
    { label: "Food Retail",    path: "/use-cases" },
    { label: "Manufacturing",  path: "/use-cases" },
    { label: "Hospitality",    path: "/use-cases" },
    { label: "Healthcare",     path: "/use-cases" },
  ],
  Company: [
    { label: "About",    path: "/" },
//     { label: "Blog",     path: "/" },
//     { label: "Careers",  path: "/" },
    { label: "Contact",  path: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#060E1F", padding: "48px 5% 32px" }}>
      <div style={{
        display: "flex", justifyContent: "space-between", flexWrap: "wrap",
        gap: 32, maxWidth: 1100, margin: "0 auto",
        paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}>
        <div style={{ maxWidth: 280 }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <CrIcon />
            <span style={{ fontSize: 20, fontWeight: 800, color: "#fff", letterSpacing: 2 }}>
              CR<span style={{ color: "#00C2CB" }}>E</span>IM
            </span>
          </Link>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, lineHeight: 1.6 }}>
            Connected Resource &amp; Energy Intelligence Monitoring — creim.ie
          </p>
        </div>

        {Object.entries(COLS).map(([title, links]) => (
          <div key={title}>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 13, marginBottom: 16,
                          letterSpacing: 1, textTransform: "uppercase" }}>
              {title}
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {links.map(({ label, path }) => (
                <li key={label}>
                  <Link to={path} style={{ color: "rgba(255,255,255,0.55)", fontSize: 13 }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{
        maxWidth: 1100, margin: "28px auto 0",
        display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
      }}>
        <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 12 }}>
          © {new Date().getFullYear()} CREIM Ltd. Registered in Ireland.
        </span>
        <div style={{ display: "flex", gap: 20 }}>
          {["Privacy Policy", "Terms of Service", "GDPR"].map((l) => (
            <span key={l} style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, cursor: "pointer" }}>{l}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
