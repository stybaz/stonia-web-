import Image from "next/image";
import { images } from "@/lib/images";

const steps = [
  {
    index: "01",
    title: "Přijedeme a zaměříme",
    desc: "Přijedeme osobně, zaměříme prostor a probereme vaše představy přímo na místě. Připravíme technické doporučení a cenový návrh.",
    tag: "zpravidla do 3–5 dnů od poptávky",
  },
  {
    index: "02",
    title: "Návrh, vizualizace, souhlas",
    desc: "Společně vybereme materiál, zpracujeme 3D vizualizaci a doladíme každý detail. Výrobu zahájíme až po vašem schválení.",
    tag: "vizualizace do 7 dní",
  },
  {
    index: "03",
    title: "Výroba a montáž na klíč",
    desc: "Vyrábíme ve vlastní dílně a montujeme osobně. Po předání dostanete doporučení k údržbě — a jsme k dispozici i po dokončení.",
    tag: "termín výroby předem domluvíme",
  },
];

export default function HowWeWork() {
  return (
    <section
      className="section-padding section-divider-top"
      id="proces"
      style={{ width: "min(100% - 48px, 1100px)", margin: "0 auto" }}
    >
      <div
        className="grid-process"
        style={{ gap: "48px", alignItems: "start" }}
      >
        {/* Left: copy + steps */}
        <div>
          <div className="reveal" style={{ maxWidth: "940px" }}>
            <p className="eyebrow">Jak spolupráce probíhá</p>
            <h2
              className="section-title"
              style={{
                maxWidth: "900px",
              }}
            >
              Tři kroky od prvního kontaktu po <span style={{ color: "var(--accent)" }}>předání hotové realizace.</span>
            </h2>
            <p className="section-lead" style={{ maxWidth: "760px" }}>
              Přijedeme, zaměříme, navrhneme a zrealizujeme. <span style={{ fontWeight: 600, color: "var(--text)" }}>Bez skrytých poplatků</span>, bez zbytečných komplikací — vždy s osobním přístupem.
            </p>
          </div>

          {/* Steps */}
          <ol
            style={{
              display: "grid",
              gap: "18px",
              margin: "40px 0 0",
              padding: 0,
              listStyle: "none",
            }}
          >
            {steps.map((step, i) => (
              <li
                key={step.index}
                className={`reveal process-step${i > 0 ? ` reveal--delay-${i}` : ""}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: "16px",
                  padding: "24px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--surface-strong)",
                  border: "1px solid var(--line)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <span
                  style={{
                    color: "var(--accent)",
                    fontSize: "1.6rem",
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {step.index}
                </span>
                <div>
                  <h3
                    style={{
                      margin: "0 0 8px",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: "var(--dark)",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ margin: "0 0 10px", color: "var(--muted)", lineHeight: 1.7 }}>{step.desc}</p>
                  <span style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "var(--accent)",
                    background: "var(--accent-bg)",
                    padding: "3px 10px",
                    borderRadius: "999px",
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {step.tag}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Right: sticky visual */}
        <div
          className="reveal process-sticky-image"
          style={{
            position: "sticky",
            top: "110px",
            overflow: "hidden",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--line)",
            boxShadow: "var(--shadow-lg)",
            aspectRatio: "4/5",
          }}
        >
          <Image
            src={images.jakPracujeme}
            alt="Ukázka realizace kamenné kuchyně"
            fill
            loading="lazy"
            className="object-cover transition-transform duration-500 hover:scale-[1.03]"
            sizes="(max-width:1024px) 100vw, 40vw"
          />
        </div>
      </div>
    </section>
  );
}
