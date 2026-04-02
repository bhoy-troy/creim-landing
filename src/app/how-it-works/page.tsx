import Link from "next/link";
import PageHero from "@/components/PageHero";
import styles from "@/styles/howItWorks.module.css";

const STEPS = [
  { num: "01", title: "Install a sensor or connect existing meters", desc: "We integrate with Modbus RTU/TCP meters, pulse counters and smart meters already on site. No rewiring required in most cases." },
  { num: "02", title: "Data flows to the CREIM cloud in real time",  desc: "Readings are transmitted every 5–15 minutes via your site broadband or LTE backup. All data is encrypted in transit and at rest." },
  { num: "03", title: "Dashboard and alerts go live instantly",       desc: "Your live energy dashboard is available within hours of connection. Threshold alerts are configured during onboarding." },
  { num: "04", title: "Actionable monthly reports",                   desc: "CREIM generates plain-English reports showing what you spent, where waste occurred, and the top three actions to reduce your next bill." },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero label="How It Works" title="Live in under a day" subtitle="From first contact to live dashboard — we keep it simple." />
      <section className={styles.section}>
        <div className={styles.inner}>
          {STEPS.map((s, i) => (
            <div key={s.num} className={i < STEPS.length - 1 ? styles.step : styles.stepLast}>
              <div className={styles.stepNum}>{s.num}</div>
              <div>
                <div className={styles.stepTitle}>{s.title}</div>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            </div>
          ))}
          <div className={styles.cta}>
            <Link href="/contact" className={styles.ctaBtn}>Get Started Today</Link>
          </div>
        </div>
      </section>
    </>
  );
}
