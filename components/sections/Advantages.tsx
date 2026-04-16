const advantages = [
  {
    eyebrow: "Exkluzivní přednost",
    badge: "Zdarma",
    title: "3D realistická vizualizace",
    desc: "Než cokoliv vyrobíme, uvidíte přesný výsledek. Fotorealistická 3D vizualizace je součástí každé poptávky — bez příplatku.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    eyebrow: "Profesionální příprava",
    title: "Cenová nabídka s projektovou dokumentací",
    desc: "Přesný cenový návrh s projektovou dokumentací — rozměry, materiál, harmonogram. Žádná překvapení, žádné skryté náklady.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    eyebrow: "Moderní technologie",
    title: "AR vizualizace přímo v prostoru",
    desc: "Díky rozšířené realitě uvidíte, jak bude kámen vypadat přímo ve vašem prostoru — ještě před zahájením výroby.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M1 6l5.5 5.5L12 6l5.5 5.5L23 6"/>
        <path d="M1 18l5.5-5.5L12 18l5.5-5.5L23 18"/>
      </svg>
    ),
  },
];

export default function Advantages() {
  return (
    <section
      className="section-padding"
      style={{ background: "var(--dark)", width: "100%" }}
    >
      <div style={{ width: "min(100% - 48px, 1100px)", margin: "0 auto" }}>

        {/* Heading */}
        <div className="reveal" style={{ maxWidth: "860px", marginBottom: "48px" }}>
          <p className="eyebrow" style={{ color: "rgba(255,255,255,0.58)" }}>
            Moderní kamenictví
          </p>
          <h2
            className="section-title section-title--on-dark nowrap-desktop advantages-heading-nowrap"
            style={{
              fontSize: "var(--advantages-heading-size, clamp(1.8rem, 3vw, 3rem))",
            }}
          >
            Vidíte výsledek <span style={{ color: "var(--accent)" }}>ještě před zahájením výroby.</span>
          </h2>
          <p className="section-lead section-lead--on-dark" style={{ maxWidth: "620px" }}>
            Tradiční řemeslo doplňujeme moderními technologiemi. 3D vizualizace a projektová dokumentace jsou součástí každé zakázky zdarma. AR zobrazení nabízíme na vyžádání.
          </p>
        </div>

        {/* Cards */}
        <div className="grid-3" style={{ gap: "18px" }}>
          {advantages.map((adv, i) => (
            <article
              key={adv.title}
              className={`reveal${i > 0 ? ` reveal--delay-${i}` : ""}`}
              style={{
                position: "relative",
                padding: "32px 28px",
                borderRadius: "var(--radius-md)",
                background: i === 0
                  ? "linear-gradient(160deg, rgba(237,98,42,0.18), rgba(237,98,42,0.06))"
                  : "rgba(255,255,255,0.05)",
                border: i === 0
                  ? "1px solid rgba(237,98,42,0.35)"
                  : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Badge */}
              {adv.badge && (
                <span
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    background: "var(--accent)",
                    color: "#fff",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {adv.badge}
                </span>
              )}

              {/* Icon */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "56px",
                  height: "56px",
                  borderRadius: "var(--radius-xs)",
                  background: i === 0 ? "rgba(237,98,42,0.2)" : "rgba(255,255,255,0.08)",
                  color: i === 0 ? "var(--accent)" : "rgba(255,255,255,0.7)",
                  marginBottom: "24px",
                }}
              >
                {adv.icon}
              </div>

              <p
                style={{
                  margin: "0 0 10px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: i === 0 ? "var(--accent)" : "rgba(255,255,255,0.4)",
                }}
              >
                {adv.eyebrow}
              </p>
              <h3
                style={{
                  margin: "0 0 14px",
                  fontSize: "1.3rem",
                  letterSpacing: "-0.03em",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                {adv.title}
              </h3>
              <p style={{ margin: 0, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                {adv.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
