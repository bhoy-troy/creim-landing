import { useState } from "react";
import PageHero from "@/components/PageHero";

interface FormState {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

const INITIAL: FormState = { name: "", email: "", company: "", phone: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "12px 16px", borderRadius: 8, fontSize: 15,
    border: "1px solid #D1D5DB", background: "#fff", color: "#0A1F44",
    outline: "none", marginBottom: 20,
  };

  return (
    <>
      <PageHero
        label="Contact"
        title="Get in touch"
        subtitle="Book a free 30-minute demo using live data from a site similar to yours."
      />

      <section style={{ padding: "80px 5%", background: "#F0F4F8" }}>
        <div style={{
          maxWidth: 680, margin: "0 auto",
          background: "#fff", borderRadius: 16, padding: "48px 40px",
          boxShadow: "0 4px 32px rgba(10,31,68,0.08)",
        }}>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 20px" }}>
                {(["name", "company", "email", "phone"] as const).map((field) => (
                  <div key={field}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "#374151",
                                    textTransform: "capitalize", display: "block", marginBottom: 6 }}>
                      {field}{field === "name" || field === "email" ? " *" : ""}
                    </label>
                    <input
                      name={field} type={field === "email" ? "email" : "text"}
                      required={field === "name" || field === "email"}
                      value={form[field]} onChange={handleChange}
                      placeholder={field === "email" ? "you@company.ie" : ""}
                      style={inputStyle}
                    />
                  </div>
                ))}
              </div>

              <label style={{ fontSize: 13, fontWeight: 600, color: "#374151",
                              display: "block", marginBottom: 6 }}>
                Tell us about your site
              </label>
              <textarea
                name="message" rows={4} value={form.message} onChange={handleChange}
                placeholder="e.g. Supermarket in Cork, 3 refrigerated display runs, high bills..."
                style={{ ...inputStyle, resize: "vertical" }}
              />

              <button type="submit" style={{
                width: "100%", padding: "14px", borderRadius: 8, border: "none",
                background: "#00C2CB", color: "#0A1F44", fontWeight: 700, fontSize: 15, cursor: "pointer",
              }}>
                Book Free Demo
              </button>
              <p style={{ textAlign: "center", color: "#9CA3AF", fontSize: 12, marginTop: 12 }}>
                No spam. GDPR compliant. We respond within one business day.
              </p>
            </form>
          ) : (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: 56, marginBottom: 20 }}>✅</div>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: "#0A1F44", marginBottom: 12 }}>
                Thanks, {form.name.split(" ")[0]}!
              </h2>
              <p style={{ color: "#6B7280", fontSize: 16, lineHeight: 1.7 }}>
                We have received your request and will be in touch within one business day
                to arrange your free demo.
              </p>
            </div>
          )}
        </div>

        {/* Contact details */}
        <div style={{ maxWidth: 680, margin: "40px auto 0",
                      display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 24 }}>
          {[
//             { icon: "📍", label: "Address",  value: "Dublin, Ireland" },
            { icon: "📧", label: "Email",    value: "hello@creim.ie" },
//             { icon: "📞", label: "Phone",    value: "+353 1 XXX XXXX" },
          ].map(({ icon, label, value }) => (
            <div key={label} style={{ textAlign: "center", padding: "24px",
                                       background: "#fff", borderRadius: 12,
                                       boxShadow: "0 2px 12px rgba(10,31,68,0.06)" }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#00C2CB",
                            textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>
                {label}
              </div>
              <div style={{ fontSize: 14, color: "#374151", fontWeight: 500 }}>{value}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
