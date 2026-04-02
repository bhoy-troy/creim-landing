import Link from "next/link";
import PageHero from "@/components/PageHero";
import styles from "@/styles/about.module.css";

const TEAM = [
  { name: "Ciarán Murphy",   role: "CEO & Co-Founder",     bio: "15 years in industrial energy management across Irish manufacturing. Previously led energy efficiency programmes at Bord Gáis Energy.", emoji: "👨‍💼" },
  { name: "Aoife Kelly",     role: "CTO & Co-Founder",     bio: "Embedded systems engineer turned IoT architect. Built real-time monitoring platforms for HVAC and refrigeration across Europe.",        emoji: "👩‍💻" },
  { name: "Darragh O'Brien", role: "Head of Data Science", bio: "PhD in predictive analytics from UCD. Specialises in anomaly detection and energy forecasting models for SMEs.",                        emoji: "🧑‍🔬" },
];

const VALUES = [
  { icon: "🇮🇪", title: "Irish-Built",      desc: "Founded in Dublin, built for Irish business — we understand your tariffs, your climate, and your grid." },
  { icon: "📡",  title: "Real-Time First",   desc: "Every decision we make is grounded in live data, not monthly reports." },
  { icon: "🔒",  title: "Privacy by Design", desc: "Your energy data stays yours. We never sell or share usage data with third parties." },
  { icon: "🤝",  title: "Partnership Model", desc: "We succeed when you save. Our pricing scales with the value we deliver — no lock-in contracts." },
];

const MILESTONES = [
  { value: "2022",   label: "Founded in Dublin" },
  { value: "300+",   label: "Sites monitored" },
  { value: "€3.6M+", label: "Saved for clients" },
  { value: "12",     label: "Team members" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero label="About CREIM" title="We're on a mission to end energy waste in Irish business" subtitle="CREIM was founded in 2022 by a team of engineers tired of watching companies lose thousands each month to avoidable energy costs." />

      <section className={styles.missionSection}>
        <div className={styles.missionGrid}>
          <div>
            <div className={styles.storyBadge}>Our Story</div>
            <h2 className={styles.storyTitle}>Built from frustration,<br />refined by data</h2>
            <p className={styles.storyText}>After years watching energy audits gather dust and smart meters go unread, our founders set out to build something different — a platform that doesn't just collect data but acts on it, in real time.</p>
            <p className={styles.storyText}>Today CREIM monitors hundreds of sites across Ireland, saving clients an average of €12,000 per year each.</p>
          </div>
          <div className={styles.statsCard}>
            {MILESTONES.map((s) => (
              <div key={s.label} className="mb-7 last:mb-0">
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className="max-w-[1100px] mx-auto">
          <h2 className={styles.sectionTitle}>What we stand for</h2>
          <div className={styles.valuesGrid}>
            {VALUES.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <div className={styles.valueTitle}>{v.title}</div>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.teamSection}>
        <div className="max-w-[1000px] mx-auto">
          <h2 className={styles.sectionTitle}>The team behind CREIM</h2>
          <div className={styles.teamGrid}>
            {TEAM.map((t) => (
              <div key={t.name} className={styles.teamCard}>
                <div className={styles.teamEmoji}>{t.emoji}</div>
                <div className={styles.teamName}>{t.name}</div>
                <div className={styles.teamRole}>{t.role}</div>
                <p className={styles.teamBio}>{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Ready to see what CREIM can do for you?</h2>
        <p className={styles.ctaText}>Book a free, no-obligation demo with one of our energy engineers.</p>
        <Link href="/contact" className={styles.ctaBtn}>Get in Touch</Link>
      </section>
    </>
  );
}
