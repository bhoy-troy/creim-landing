import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import type { NavLink as NavLinkType } from "@/types";

const NAV_LINKS: NavLinkType[] = [
  { label: "Features",     path: "/features" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Use Cases",    path: "/use-cases" },
//   { label: "Pricing",      path: "/pricing" },
];

const CrIcon = () => (
  <svg width="36" height="36" viewBox="0 0 100 100" aria-hidden="true">
    <defs>
      <linearGradient id="hg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00C2CB" />
        <stop offset="100%" stopColor="#0A1F44" />
      </linearGradient>
    </defs>
    <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" fill="url(#hg)" />
    <path d="M30,48 Q50,22 70,48" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" />
    <path d="M38,56 Q50,38 62,56" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" />
    <circle cx="50" cy="66" r="6" fill="white" />
    <line x1="50" y1="66" x2="30" y2="80" stroke="white" strokeWidth="5" strokeLinecap="round" />
    <line x1="50" y1="66" x2="70" y2="80" stroke="white" strokeWidth="5" strokeLinecap="round" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const alwaysDark = !isHome || scrolled;

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 5%", height: 68,
      background: alwaysDark ? "rgba(10,31,68,0.97)" : "transparent",
      backdropFilter: alwaysDark ? "blur(10px)" : "none",
      borderBottom: alwaysDark ? "1px solid rgba(0,194,203,0.2)" : "none",
      transition: "all 0.3s ease",
    }}>
      <NavLink to="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <CrIcon />
        <span style={{ fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: 2 }}>
          CR<span style={{ color: "#00C2CB" }}>E</span>IM
        </span>
      </NavLink>

      <ul style={{ display: "flex", gap: 32, listStyle: "none" }}>
        {NAV_LINKS.map(({ label, path }) => (
          <li key={path}>
            <NavLink to={path} style={({ isActive }) => ({
              color: isActive ? "#00C2CB" : "rgba(255,255,255,0.85)",
              fontSize: 14, fontWeight: isActive ? 700 : 500,
              borderBottom: isActive ? "2px solid #00C2CB" : "2px solid transparent",
              paddingBottom: 2, transition: "all 0.2s",
            })}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <NavLink to="/contact" style={{
        background: "#00C2CB", color: "#0A1F44", borderRadius: 6,
        padding: "10px 22px", fontWeight: 700, fontSize: 14,
      }}>
        Request Demo
      </NavLink>
    </nav>
  );
}
