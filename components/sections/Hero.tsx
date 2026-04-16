import Link from "next/link";

const highlights = [
  "Pomníky a hrobky",
  "Pro obce",
  "Exteriér a zahrada",
  "Interiér na míru",
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "92svh",
        display: "grid",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--dark)",
      }}
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 80% 60% at 75% 15%, rgba(237,98,42,0.18) 0%, transparent 65%)",
            "radial-gradient(ellipse 50% 50% at 15% 85%, rgba(237,98,42,0.10) 0%, transparent 55%)",
            "linear-gradient(150deg, #1e1b18 0%, #141210 50%, #0d0c0b 100%)",
          ].join(", "),
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className="container-xl reveal reveal--hero hero-content"
        style={{ position: "relative", zIndex: 1, paddingTop: "140px", paddingBottom: "72px", color: "#fff" }}
      >
        <div
          style={{
            maxWidth: "860px",
            padding: 0,
          }}
        >
          <h1
            className="hero-title-nowrap"
            style={{
              maxWidth: "920px",
              margin: 0,
              fontSize: "var(--hero-title-size, clamp(2.8rem, 5.4vw, 6rem))",
              lineHeight: 0.93,
              letterSpacing: "-0.05em",
              fontWeight: 700,
              color: "#fff",
            }}
          >
            Kámen ve <span style={{ color: "var(--accent)" }}>všech podobách.</span>
          </h1>
          <p
            style={{
              maxWidth: "680px",
              margin: "20px 0 0",
              fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.88)",
            }}
          >
            Specializujeme se na kamenné prvky pro hřbitovy, zahrady a interiéry i na realizace pro obce a města. Od návrhu a zaměření po precizní výrobu a montáž.
          </p>
          <ul
            className="hero-specializations-grid"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              margin: "24px 0 0",
              padding: 0,
              listStyle: "none",
            }}
            aria-label="Oblasti kamenictví"
          >
            {highlights.map((item) => (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 10px",
                  borderRadius: "var(--radius-xs)",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.92)",
                  fontSize: "0.93rem",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                    flexShrink: 0,
                  }}
                />
                {item}
              </li>
            ))}
          </ul>

          {/* Hero CTAs */}
          <div
            className="hero-cta-group"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "36px",
            }}
          >
            <Link
              href="/#kontakt"
              className="btn-primary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                borderRadius: "999px",
                background: "var(--accent)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
                boxShadow: "0 12px 32px rgba(237,98,42,0.38)",
              }}
              data-track="cta_click"
              data-track-label="hero_poptavka"
            >
              Nezávazná poptávka
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/realizace"
              className="pill-cta pill-cta--ghost-dark"
              style={{
                gap: "8px",
                padding: "14px 24px",
                fontSize: "1rem",
                backdropFilter: "blur(8px)",
              }}
              data-track="cta_click"
              data-track-label="hero_realizace"
            >
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
              </svg>
              Prohlédnout realizace
            </Link>
            <a
              href="tel:+420721024135"
              className="pill-cta pill-cta--ghost-dark"
              style={{
                gap: "8px",
                padding: "14px 24px",
                fontSize: "1rem",
                backdropFilter: "blur(8px)",
              }}
              data-track="phone_click"
              data-track-label="hero_phone"
            >
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.97 9.81 19.79 19.79 0 01.9 1.18 2 2 0 012.88 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              +420 721 024 135
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sluzby"
        aria-label="Přejít na obsah"
        className="hero-scroll-indicator"
        style={{
          position: "absolute",
          bottom: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          color: "rgba(255,255,255,0.55)",
          fontSize: "0.7rem",
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          textDecoration: "none",
          zIndex: 2,
        }}
      >
        <span>Více</span>
        <span
          style={{
            display: "block",
            width: "22px",
            height: "22px",
            borderLeft: "2px solid rgba(255,255,255,0.45)",
            borderBottom: "2px solid rgba(255,255,255,0.45)",
            transform: "rotate(-45deg)",
            animation: "heroScrollBounce 1.6s ease-in-out infinite",
          }}
        />
      </a>
    </section>
  );
}
