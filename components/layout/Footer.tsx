import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/#hrbitovni-architektura", label: "Pomníky a hrobky" },
  { href: "/#pro-obce", label: "Pro obce" },
  { href: "/#exterier", label: "Exteriér a zahrada" },
  { href: "/#interier", label: "Interiér na míru" },
  { href: "/realizace", label: "Realizace" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--dark)", color: "rgba(255,255,255,0.65)" }}>
      <div
        className="container-xl footer-main-grid"
        style={{
          padding: "64px 0 0",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr",
          gap: "48px",
        }}
      >
        {/* Brand column */}
        <div>
          <Image
            src="/logo.svg"
            alt="STONIA – Kamenictví Štybner"
            width={140}
            height={52}
            style={{ height: "36px", width: "auto", filter: "brightness(0) invert(1)" }}
          />
          <p style={{ margin: "16px 0 0", fontSize: "0.88rem", lineHeight: 1.75, maxWidth: "300px" }}>
            Zakázkové kamenictví z Uničova. Navrhujeme a realizujeme kamenné prvky pro zahrady, interiéry i hřbitovy — od návrhu po montáž.
          </p>
          {/* Social */}
          <div style={{ display: "flex", gap: "10px", marginTop: "24px" }}>
            <a
              href="https://www.instagram.com/stonia.cz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram STONIA"
              className="social-icon"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "38px",
                height: "38px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61574056055597"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook STONIA"
              className="social-icon"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "38px",
                height: "38px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Nav column */}
        <div>
          <p style={{ margin: "0 0 20px", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
            Služby
          </p>
          <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="footer-link"
                style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.65)", transition: "color 150ms" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact column */}
        <div>
          <p style={{ margin: "0 0 20px", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
            Kontakt
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.9rem" }}>
            <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>Jakub Štybner</span>
            <a href="tel:+420721024135" style={{ color: "var(--accent)", fontWeight: 600 }} data-track="phone_click" data-track-label="footer_phone">+420 721 024 135</a>
            <a href="mailto:info@stonia.cz" style={{ color: "rgba(255,255,255,0.65)" }} data-track="email_click" data-track-label="footer_email">info@stonia.cz</a>
            <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem" }}>Uničov<br />Olomoucký kraj</span>
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.78rem", marginTop: "4px" }}>
              IČO 17100551<br />
              Po–Pá 7:00–17:00
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="container-xl footer-bottom-bar"
        style={{
          padding: "24px 0",
          marginTop: "48px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          flexWrap: "wrap",
          fontSize: "0.8rem",
          color: "rgba(255,255,255,0.3)",
        }}
      >
        <span>© {year} STONIA – Kamenictví Štybner. Všechna práva vyhrazena.</span>
        <span>Zakázkové kamenictví · Olomoucký a Moravskoslezský kraj</span>
      </div>
    </footer>
  );
}
