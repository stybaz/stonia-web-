"use client";

export default function FloatingCTA() {
  return (
    <div
      className="floating-cta"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 999,
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "10px",
      }}
    >
      {/* Phone */}
      <a
        href="tel:+420721024135"
        aria-label="Zavolat STONIA kamenictví"
        className="pill-cta pill-cta--dark pill-cta--mobile"
        data-track="phone_click"
        data-track-label="floating_phone"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.1 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.96a16 16 0 0 0 6.29 6.29l1.14-1.14a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
        +420 721 024 135
      </a>

      {/* Poptávka */}
      <a
        href="/#kontakt"
        aria-label="Nezávazná poptávka"
        className="pill-cta pill-cta--accent pill-cta--mobile"
        data-track="cta_click"
        data-track-label="floating_poptavka"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        Nezávazná poptávka
      </a>
    </div>
  );
}
