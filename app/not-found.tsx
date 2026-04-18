import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stránka nenalezena – 404 | STONIA kamenictví",
  description: "Stránka, kterou hledáte, neexistuje nebo byla přesunuta.",
};

export default function NotFoundPage() {
  return (
    <div
      style={{
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg)",
        padding: "24px",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "520px" }}>
        <p
          style={{
            margin: "0 0 16px",
            fontSize: "clamp(6rem, 18vw, 12rem)",
            lineHeight: 1,
            letterSpacing: "-0.08em",
            fontWeight: 700,
            color: "var(--accent)",
          }}
          aria-hidden="true"
        >
          404
        </p>
        <h1
          style={{
            margin: "0 0 16px",
            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
            letterSpacing: "-0.04em",
            fontWeight: 700,
            color: "var(--dark)",
          }}
        >
          Stránka nenalezena
        </h1>
        <p style={{ margin: "0 0 36px", color: "var(--muted)", lineHeight: 1.7 }}>
          Stránka, kterou hledáte, neexistuje nebo byla přesunuta. Zkuste se vrátit na hlavní stránku.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "48px",
              padding: "0 24px",
              borderRadius: "999px",
              background: "var(--accent)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.95rem",
              textDecoration: "none",
              boxShadow: "0 14px 34px rgba(237,98,42,0.24)",
            }}
          >
            Zpět na hlavní stránku
          </Link>
          <Link
            href="/#poptavka"
            className="pill-cta pill-cta--ghost"
            style={{ fontSize: "0.95rem" }}
          >
            Kontaktovat nás
          </Link>
        </div>
      </div>
    </div>
  );
}
