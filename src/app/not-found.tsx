import Link from "next/link";
import styles from "@/styles/notFound.module.css";

export default function NotFound() {
  return (
    <section className={styles.section}>
      <div>
        <div className={styles.code}>404</div>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.text}>This page does not exist or has been moved.</p>
        <Link href="/" className={styles.btn}>← Back to Home</Link>
      </div>
    </section>
  );
}
