import Link from "next/link";
import styles from "@/styles/footer.module.css";

const CrIcon = () => (
  <svg width="28" height="28" viewBox="0 0 100 100" aria-hidden="true">
    <defs>
      <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00C2CB" />
        <stop offset="100%" stopColor="#0A1F44" />
      </linearGradient>
    </defs>
    <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" fill="url(#footer-gradient)" />
    <path d="M30,48 Q50,22 70,48" fill="none" stroke="white" strokeWidth="7" strokeLinecap="round" />
    <path d="M38,56 Q50,38 62,56" fill="none" stroke="white" strokeWidth="7" strokeLinecap="round" />
    <circle cx="50" cy="66" r="6" fill="white" />
    <line x1="50" y1="66" x2="30" y2="80" stroke="white" strokeWidth="5" strokeLinecap="round" />
    <line x1="50" y1="66" x2="70" y2="80" stroke="white" strokeWidth="5" strokeLinecap="round" />
  </svg>
);

const COLS: Record<string, { label: string; path: string }[]> = {
  Platform:    [{ label: "Features", path: "/features" }, { label: "How It Works", path: "/how-it-works" }, { label: "Contact", path: "/contact" }],
  "Use Cases": [{ label: "Food Retail", path: "/use-cases" }, { label: "Manufacturing", path: "/use-cases" }, { label: "Hospitality", path: "/use-cases" }],
  Company:     [
//       { label: "About", path: "/about" },
      { label: "Contact", path: "/contact" }],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" className={styles.brandLink}>
            <CrIcon />
            <span className={styles.brandText}>CR<span className={styles.brandAccent}>E</span>IM</span>
          </Link>
          <p className={styles.tagline}>Connected Resource &amp; Energy Intelligence Monitoring — creim.ie</p>
        </div>
        {Object.entries(COLS).map(([title, links]) => (
          <div key={title}>
            <div className={styles.colTitle}>{title}</div>
            <ul className={styles.colList}>
              {links.map(({ label, path }) => (
                <li key={label}><Link href={path} className={styles.colLink}>{label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.bottom}>
        <span className={styles.copy}>© {new Date().getFullYear()} CREIM Ltd. Registered in Ireland.</span>
        <div className={styles.legal}>
          {["Privacy Policy", "Terms of Service", "GDPR"].map((l) => (
            <span key={l} className={styles.legalItem}>{l}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
