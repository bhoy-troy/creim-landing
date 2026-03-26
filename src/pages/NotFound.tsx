import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "linear-gradient(135deg, #0A1F44, #0a3a3a)", textAlign: "center", padding: "0 5%",
    }}>
      <div>
        <div style={{ fontSize: "6rem", fontWeight: 800, color: "#00C2CB", lineHeight: 1 }}>404</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#fff", margin: "16px 0 12px" }}>
          Page not found
        </h1>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, marginBottom: 36 }}>
          This page does not exist or has been moved.
        </p>
        <Link to="/" style={{
          background: "#00C2CB", color: "#0A1F44", borderRadius: 8,
          padding: "14px 32px", fontWeight: 700, fontSize: 15,
        }}>
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}
