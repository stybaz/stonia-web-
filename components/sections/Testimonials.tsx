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
      <div className="reveal" style={{ maxWidth: "940px" }}>
        <p className="eyebrow">Reference</p>
        <h2
          className="section-title"
        >
          Co říkají klienti STONIA o spolupráci a výsledku.
        </h2>
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
