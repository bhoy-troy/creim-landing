"use client";
import { useState } from "react";
import PageHero from "@/components/PageHero";
import styles from "@/styles/contact.module.css";

interface FormState { name: string; email: string; company: string; phone: string; message: string; }
const INITIAL: FormState = { name: "", email: "", company: "", phone: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <PageHero label="Contact" title="Get in touch" />
      <section className={styles.section}>
        <div className={styles.card}>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div className={styles.grid2}>
                {(["name", "company", "email", "phone"] as const).map((field) => (
                  <div key={field}>
                    <label className={styles.label}>{field}{field === "name" || field === "email" ? " *" : ""}</label>
                    <input name={field} type={field === "email" ? "email" : "text"}
                      required={field === "name" || field === "email"}
                      value={form[field]} onChange={handleChange}
                      placeholder={field === "email" ? "you@company.ie" : ""}
                      className={styles.input} />
                  </div>
                ))}
              </div>
              <label className={styles.label}>Tell us about your site</label>
              <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                placeholder="e.g. Supermarket in Cork, 3 refrigerated display runs, high bills..."
                className={styles.textarea} />
              <button type="submit" className={styles.submitBtn}>Contact</button>
              <p className={styles.disclaimer}>No spam. GDPR compliant. We respond within one business day.</p>
            </form>
          ) : (
            <div className="text-center py-10">
              <div className={styles.successIcon}>✅</div>
              <h2 className={styles.successTitle}>Thanks, {form.name.split(" ")[0]}!</h2>
              <p className={styles.successText}>We have received your request and will be in touch with you soon.</p>
            </div>
          )}
        </div>
        <div className={styles.detailsGrid}>
          {[{ icon: "📧", label: "Email", value: "hello@creim.ie" }].map(({ icon, label, value }) => (
            <div key={label} className={styles.detailCard}>
              <div className={styles.detailIcon}>{icon}</div>
              <div className={styles.detailLabel}>{label}</div>
              <div className={styles.detailValue}>{value}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
