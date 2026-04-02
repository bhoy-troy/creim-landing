"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/navbar.module.css";

const NAV_LINKS = [
  { label: "Features",     path: "/features" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "Use Cases",    path: "/use-cases" },
//   { label: "About",        path: "/about" },
];

const CrIcon = () => (
  <svg width="36" height="36" viewBox="0 0 100 100" aria-hidden="true">
    <defs>
      <linearGradient id="navbar-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00C2CB" />
        <stop offset="100%" stopColor="#0A1F44" />
      </linearGradient>
    </defs>
    <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" fill="url(#navbar-gradient)" />
    <path d="M30,48 Q50,22 70,48" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" />
    <path d="M38,56 Q50,38 62,56" fill="none" stroke="white" strokeWidth="6" strokeLinecap="round" />
    <circle cx="50" cy="66" r="6" fill="white" />
    <line x1="50" y1="66" x2="30" y2="80" stroke="white" strokeWidth="5" strokeLinecap="round" />
    <line x1="50" y1="66" x2="70" y2="80" stroke="white" strokeWidth="5" strokeLinecap="round" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const alwaysDark = !mounted ? true : (!isHome || scrolled);

  return (
    <nav className={`${styles.nav} ${alwaysDark ? styles.navDark : styles.navTransparent}`}>
      <Link href="/" className={styles.logo}>
        <CrIcon />
        <span className={styles.logoText}>CR<span className={styles.logoAccent}>E</span>IM</span>
      </Link>
      <ul className={styles.navList}>
        {NAV_LINKS.map(({ label, path }) => (
          <li key={path}>
            <Link href={path} className={`${styles.navLink} ${pathname === path ? styles.navLinkActive : ""}`}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/contact" className={styles.ctaButton}>Contact</Link>
    </nav>
  );
}
