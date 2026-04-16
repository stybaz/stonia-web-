import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

const categories = [
  {
    anchor: "#hrbitovni-architektura",
    eyebrow: "Pomníky a hrobky",
    title: "Pomníky a pietní realizace",
    desc: "Vyrábíme a obnovujeme pomníky, náhrobky a kamenické prvky pro hrobová místa — s důrazem na kvalitu zpracování, důstojný vzhled a dlouhou životnost.",
    items: [
      "Výroba nových pomníků",
      "Renovace a opravy pomníků",
      "Hrobky a krycí desky",
      "Sekané a strojové písmo",
      "Fotokeramika a doplňky",
    ],
    image: images.hrbitov.card,
    imageAlt: "Hřbitovní architektura – pomník a hrobka z přírodního kamene",
    primary: true,
  },
  {
    anchor: "#pro-obce",
    eyebrow: "Pro obce",
    title: "Kamenictví pro veřejný prostor",
    desc: "Navrhujeme a realizujeme kamenické prvky pro obce, města a veřejný prostor — včetně výroby, dopravy a odborného osazení.",
    items: [
      "Kolumbária",
      "Stojany na odběr vody",
      "Betonové základy pro pomníky",
      "Kamenné lavičky a pietní prvky",
      "Obnova kamenných prvků",
    ],
    image: images.proObce.foto1,
    imageAlt: "Kamenictví pro obce – kolumbárium a veřejné prostory",
    primary: true,
  },
  {
    anchor: "#exterier",
    eyebrow: "Exteriér",
    title: "Kámen v exteriéru",
    desc: "Trvanlivé kamenné realizace pro venkovní prostory — od zahradních prvků po celé příjezdové cesty.",
    items: [
      "Schody, nášlapy a terasy",
      "Chodníky a obrubníky",
      "Venkovní kuchyně a grily",
      "Zahradní prvky a opěrné zdi",
      "Stavební kamenictví",
    ],
    image: images.exterier.card,
    imageAlt: "Exteriérová kamenická realizace – kamenné schody a chodníky",
    primary: false,
  },
  {
    anchor: "#interier",
    eyebrow: "Interiér",
    title: "Kámen v interiéru",
    desc: "Kuchyňské desky, obklady, parapety a koupelny — kamenné povrchy s čistým zpracováním na míru.",
    items: [
      "Kuchyňské pracovní desky",
      "Koupelny a obkladové desky",
      "Obložení krbů a krbových vložek",
      "Parapety a okenní desky",
      "Zakázková interiérová výroba",
    ],
    image: images.interier.card,
    imageAlt: "Interiérový kámen – kuchyňská pracovní deska z přírodního kamene",
    primary: false,
  },
];

const regions = [
  { label: "Jeseník a okolí", highlight: false },
  { label: "Bruntál a okolí", highlight: false },
  { label: "Opava a okolí", highlight: false },
  { label: "Ostrava a okolí", highlight: false },
  { label: "Hranice a okolí", highlight: false },
  { label: "Zlín a okolí", highlight: false },
  { label: "Kroměříž a okolí", highlight: false },
  { label: "Olomoucký kraj", highlight: true },
  { label: "Moravskoslezský kraj", highlight: true },
  { label: "Zlínský kraj", highlight: true },
];

export default function AboutPreview() {
  return (
    <section
      className="section-padding"
      id="sluzby"
      style={{ width: "min(100% - 48px, 1100px)", margin: "0 auto" }}
    >
      {/* Heading */}
      <div className="reveal" style={{ maxWidth: "780px" }}>
        <p className="eyebrow">Co děláme</p>
        <h2
          className="section-title"
          style={{
            maxWidth: "720px",
          }}
        >
          Čtyři obory, <span style={{ color: "var(--accent)" }}>jedno řemeslo.</span>
        </h2>
        <p className="section-lead" style={{ maxWidth: "620px" }}>
          Pomníky, obce, exteriér i interiér — každá zakázka vzniká přesně na míru. Od zaměření přes 3D vizualizaci až po montáž.
        </p>
      </div>

      {/* Category cards */}
      <div className="grid-2" style={{ gap: "20px", marginTop: "36px" }}>
        {categories.map((cat, i) => (
          <article
            key={cat.anchor}
            className={`reveal${i > 0 ? ` reveal--delay-${i}` : ""}`}
            style={{
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              borderRadius: "32px",
              background: cat.primary ? "var(--surface-strong)" : "var(--surface-strong)",
              border: cat.primary ? "1px solid rgba(237,98,42,0.35)" : "1px solid var(--line)",
              boxShadow: cat.primary ? "var(--shadow-md), 0 0 0 1px rgba(237,98,42,0.08)" : "var(--shadow-md)",
            }}
          >
            {/* Image */}
            <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", overflow: "hidden", flexShrink: 0 }}>
              <Image
                src={cat.image}
                alt={cat.imageAlt}
                fill
                loading={i === 0 ? "eager" : "lazy"}
                className="object-cover transition-transform duration-500 hover:scale-[1.04]"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              {/* Eyebrow overlay */}
              <span
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  padding: "5px 12px",
                  borderRadius: "999px",
                  background: "rgba(17,16,15,0.72)",
                  backdropFilter: "blur(8px)",
                  color: "#fff",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                }}
              >
                {cat.eyebrow}
              </span>
              {/* Primary badge */}
              {cat.primary && (
                <span
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    background: "var(--accent)",
                    color: "#fff",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Hlavní obor
                </span>
              )}
            </div>

            {/* Content */}
            <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "24px" }}>
              <h3
                style={{
                  margin: "0 0 8px",
                  fontSize: "1.4rem",
                  letterSpacing: "-0.03em",
                  fontWeight: 700,
                  color: "var(--dark)",
                }}
              >
                {cat.title}
              </h3>
              <p style={{ margin: "0 0 16px", color: "var(--muted)", lineHeight: 1.65, fontSize: "0.93rem" }}>
                {cat.desc}
              </p>

              {/* Items */}
              <ul
                style={{
                  margin: "0 0 20px",
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                {cat.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "0.88rem",
                      fontWeight: 500,
                      color: "var(--text)",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ flexShrink: 0 }}
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div style={{ marginTop: "auto" }}>
                <Link
                  href={cat.anchor}
                  className="btn-primary"
                  data-track="cta_click"
                  data-track-label={`about_${cat.eyebrow.toLowerCase()}_more`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "10px 18px",
                    borderRadius: "999px",
                    background: "var(--accent)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    textDecoration: "none",
                    boxShadow: "0 8px 20px rgba(237,98,42,0.22)",
                  }}
                >
                  Zobrazit více
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Regions strip */}
      <div
        className="reveal"
        style={{
          marginTop: "28px",
          padding: "20px 28px",
          borderRadius: "24px",
          background: "var(--surface-strong)",
          border: "1px solid var(--line)",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {/* Label */}
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            color: "var(--muted)",
            fontSize: "0.85rem",
            fontWeight: 600,
            flexShrink: 0,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          Kde realizujeme
        </span>

        {/* Divider */}
        <span style={{ width: "1px", height: "20px", background: "var(--line)", flexShrink: 0 }} aria-hidden="true" />

        {/* Pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {regions.map((r) => (
            <span
              key={r.label}
              style={{
                padding: "5px 12px",
                borderRadius: "999px",
                background: r.highlight ? "var(--accent)" : "var(--bg)",
                border: r.highlight ? "1px solid var(--accent)" : "1px solid var(--line)",
                fontSize: "0.83rem",
                fontWeight: r.highlight ? 700 : 500,
                color: r.highlight ? "#fff" : "var(--text)",
              }}
            >
              {r.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
