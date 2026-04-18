const stats = [
  { count: "10+", label: "let zkušeností", sub: "zpracování přírodního kamene" },
  { count: "350+", label: "realizací", sub: "od pomníků po interiérové zakázky" },
  { count: "100%", label: "individuální přístup", sub: "každý návrh je originál" },
];

export default function Stats() {
  return (
    <section
      className="section-padding"
      style={{ background: "var(--dark)", width: "100%" }}
    >
      <div style={{ width: "min(100% - 48px, 1100px)", margin: "0 auto" }}>
        {/* Heading */}
        <div
          className="reveal grid-stats-heading"
          style={{
            alignItems: "end",
            gap: "24px",
            marginBottom: "48px",
          }}
        >
          <div>
            <p
              className="eyebrow"
              style={{ color: "rgba(255,255,255,0.45)", marginBottom: "12px" }}
            >
              Proč STONIA
            </p>
            <h2
              className="section-title section-title--on-dark"
              style={{
                fontSize: "clamp(1.2rem, 1.9vw, 2rem)",
                maxWidth: "900px",
                whiteSpace: "nowrap",
              }}
            >
              Od prvního kontaktu po montáž držíme <span style={{ color: "var(--accent)" }}>kvalitu i termíny.</span>
            </h2>
          </div>
        </div>

        {/* Stats grid */}
        <div
          className="grid-3"
          style={{
            gap: "2px",
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              role="figure"
              aria-label={`${stat.count} – ${stat.label}`}
              className={`stats-grid-item reveal mobile-stats-card${i > 0 ? ` reveal--delay-${i}` : ""}`}
              style={{
                padding: "40px 36px",
                background: i === 1
                  ? "rgba(237,98,42,0.12)"
                  : "rgba(255,255,255,0.04)",
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              {stat.count ? (
                <strong
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontSize: "clamp(3rem, 5vw, 5.5rem)",
                    letterSpacing: "-0.06em",
                    fontWeight: 800,
                    color: i === 1 ? "var(--accent)" : "#fff",
                    lineHeight: 1,
                  }}
                >
                  {stat.count}
                </strong>
              ) : null}
              <span
                style={{
                  display: "block",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "4px",
                }}
              >
                {stat.label}
              </span>
              <span style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.45)", whiteSpace: "pre-line" }}>
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
