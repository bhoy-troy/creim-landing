import styles from "@/styles/pageHero.module.css";

interface Props {
  label: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ label, title, subtitle }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>{label}</div>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}
