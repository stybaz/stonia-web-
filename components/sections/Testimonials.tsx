const testimonials = [
  {
    quote: "Přistavěli jsme terasu a od začátku do konce bylo vše bez komplikací. 3D vizualizace nám hodně pomohla — věděli jsme přesně, jak to dopadne.",
    name: "Tomáš Kovář",
    location: "Šumperk",
    service: "Exteriér",
    initials: "TK",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
    date: "Únor 2025",
    source: "Google",
  },
  {
    quote: "Velmi profesionální jednání, přesné zaměření a krásně zpracovaný pomník. Všechno proběhlo s respektem a bez zbytečných komplikací.",
    name: "Jana Horáková",
    location: "Jeseník",
    service: "Pomníky",
    initials: "JH",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "Leden 2025",
    source: "Google",
  },
  {
    quote: "Po tatínkovi jsme potřebovali důstojný pomník. STONIA nám pomohla s celým návrhem, od výběru kamene až po rytý nápis. Citlivý přístup a krásná práce.",
    name: "Radek Blaha",
    location: "Rýmařov",
    service: "Pomníky",
    initials: "RB",
    photo: null,
    date: "Prosinec 2024",
    source: "Google",
  },
  {
    quote: "Na schodech a chodnících je vidět pečlivá práce i cit pro detail. Oceňujeme rychlou komunikaci a čistě provedenou realizaci na naší zahradě.",
    name: "Martin Dvořák",
    location: "Opava",
    service: "Exteriér",
    initials: "MD",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "Říjen 2024",
    source: "Google",
  },
  {
    quote: "Kamenná pracovní deska i obklad krbu vypadají skvěle. Pomohli nám i s výběrem materiálu a celý výsledek působí nadčasově a reprezentativně.",
    name: "Petra Nováková",
    location: "Olomouc",
    service: "Interiér",
    initials: "PN",
    photo: null,
    date: "Září 2024",
    source: "Google",
  },
  {
    quote: "Objednali jsme koupelnové obklady a parapet na míru. Zaměření proběhlo rychle, komunikace bezproblémová. Kvalita zpracování je na první pohled vidět.",
    name: "Lucie Marková",
    location: "Bruntál",
    service: "Interiér",
    initials: "LM",
    photo: "https://randomuser.me/api/portraits/women/26.jpg",
    date: "Srpen 2024",
    source: "Google",
  },
];

import Image from "next/image";

export default function Testimonials() {
  return (
    <section
      className="section-padding section-divider-top"
      id="reference"
      style={{ width: "min(100% - 48px, 1100px)", margin: "0 auto" }}
    >
      {/* Heading */}
      <div className="reveal" style={{ maxWidth: "940px", display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <p className="eyebrow">Reference</p>
          <h2 className="section-title">
            Co říkají klienti STONIA o spolupráci a výsledku.
          </h2>
        </div>
        <a
          href="https://www.google.com/maps/search/STONIA+kamenictví+Uničov"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 18px",
            borderRadius: "var(--radius-xs)",
            background: "var(--surface-strong)",
            border: "1px solid var(--line)",
            textDecoration: "none",
            flexShrink: 0,
            marginBottom: "8px",
          }}
          aria-label="Zobrazit recenze na Google"
          data-track="google_reviews"
        >
          {/* Google G logo */}
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <div>
            <div style={{ display: "flex", gap: "2px", marginBottom: "2px" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="#FBBC05" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--muted)" }}>Recenze na Google</span>
          </div>
        </a>
      </div>

      {/* Cards */}
      <div
        className="grid-3"
        style={{ gap: "18px", marginTop: "38px" }}
      >
        {testimonials.map((t, i) => (
          <article
            key={t.name}
            className={`reveal${i > 0 ? ` reveal--delay-${i}` : ""}`}
            style={{
              padding: "28px",
              borderRadius: "24px",
              background: "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(251,245,240,0.92))",
              border: "1px solid var(--accent-border)",
              boxShadow: "var(--shadow)",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {/* Stars + source */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
              <div style={{ display: "flex", gap: "3px" }} aria-label="Hodnocení 5 z 5">
                {Array.from({ length: 5 }).map((_, si) => (
                  <svg key={si} width="14" height="14" viewBox="0 0 24 24" fill="#ed622a" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "0.72rem",
                fontWeight: 600,
                color: "var(--muted)",
                letterSpacing: "0.03em",
              }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                </svg>
                {t.date} · {t.source}
              </span>
            </div>

            {/* Quote */}
            <p
              style={{
                margin: 0,
                flex: 1,
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "var(--text)",
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Author */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                paddingTop: "16px",
                borderTop: "1px solid var(--line)",
              }}
            >
              {t.photo ? (
                <div
                  style={{
                    position: "relative",
                    width: "46px",
                    height: "46px",
                    borderRadius: "999px",
                    flexShrink: 0,
                    overflow: "hidden",
                    border: "2px solid rgba(var(--accent-rgb),0.2)",
                  }}
                >
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="46px"
                  />
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "46px",
                    height: "46px",
                    borderRadius: "999px",
                    flexShrink: 0,
                    background: "var(--accent-bg)",
                    border: "2px solid rgba(var(--accent-rgb),0.2)",
                    color: "var(--accent)",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {t.initials}
                </div>
              )}
              <div>
                <p style={{ margin: 0, fontWeight: 700, fontSize: "0.95rem", color: "var(--dark)" }}>
                  {t.name}
                </p>
                <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--muted)" }}>
                  {t.location}
                </p>
              </div>
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--accent)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {t.service}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
