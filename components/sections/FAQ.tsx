"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Je zaměření a nacenění zdarma?",
    answer: "Ano. Přijedeme na místo, zaměříme a připravíme cenový návrh zcela zdarma a bez jakýchkoliv závazků. Platíte pouze v případě, že se rozhodnete zakázku realizovat.",
  },
  {
    question: "Jak dlouho trvá výroba pomníku?",
    answer: "Závisí na složitosti návrhu a zvoleném materiálu. Standardní pomník obvykle připravíme do 4–8 týdnů od schválení návrhu. Přesný termín vždy upřesníme při nacenění.",
  },
  {
    question: "Jaká je orientační cena pomníku?",
    answer: "Cena závisí na materiálu, rozměrech, tvarování a rytém nápisu. Orientačně začíná cena od 15 000 Kč. Přesnou a závaznou nabídku připravíme po zaměření a domluvě na návrhu — vždy zdarma.",
  },
  {
    question: "Realizujete i mimo Olomoucký kraj?",
    answer: "Ano. Pravidelně realizujeme v Olomouckém, Moravskoslezském a Zlínském kraji. U větší zakázky jsme schopni dojet i do vzdálenějších lokalit — neváhejte se zeptat.",
  },
  {
    question: "Provádíte i renovace starých pomníků?",
    answer: "Ano. Provádíme čištění, opravy prasklin, obnovu a doplnění nápisů i kompletní rekonstrukce stávajících pomníků a hrobových míst. Stačí kontaktovat nás s popisem stavu.",
  },
  {
    question: "Jaký materiál je nejlepší pro pomník nebo venkovní použití?",
    answer: "Pro venkovní a hřbitovní použití doporučujeme především žulu — je odolná vůči mrazu, vlhkosti i UV záření a vydrží desítky let bez ztráty vzhledu. Mramor nebo travertin jsou vhodné spíše pro interiér. Rádi poradíme konkrétně pro váš případ.",
  },
  {
    question: "Jak probíhá celý proces od poptávky po montáž?",
    answer: "Po vaší poptávce se ozveme do 24 hodin. Domluvíme zaměření na místě, připravíme 3D návrh a cenovou nabídku. Po schválení zahájíme výrobu v naší dílně v Uničově a vše zakončíme odbornou montáží. Celý proces koordinujeme my.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="section-padding section-divider-top"
      id="faq"
      style={{ width: "min(100% - 48px, 1100px)", margin: "0 auto" }}
    >
      <div className="reveal" style={{ maxWidth: "720px", marginBottom: "48px" }}>
        <p className="eyebrow">Časté dotazy</p>
        <h2 className="section-title" style={{ maxWidth: "640px" }}>
          Odpovědi na nejčastější <span style={{ color: "var(--accent)" }}>otázky.</span>
        </h2>
        <p className="section-lead" style={{ maxWidth: "580px" }}>
          Nenašli jste odpověď? Zavolejte nebo napište — odpovíme zpravidla do 24 hodin.
        </p>
      </div>

      <div
        className="reveal"
        style={{
          display: "grid",
          gap: "10px",
          maxWidth: "820px",
        }}
      >
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              style={{
                borderRadius: "var(--radius-sm)",
                border: isOpen ? "1px solid var(--accent-border)" : "1px solid var(--line)",
                background: isOpen ? "var(--surface-strong)" : "var(--surface)",
                overflow: "hidden",
                transition: "border-color 0.2s, background 0.2s",
              }}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "20px 24px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: isOpen ? "var(--accent)" : "var(--text)",
                    lineHeight: 1.4,
                    transition: "color 0.2s",
                  }}
                >
                  {faq.question}
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    flexShrink: 0,
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: isOpen ? "var(--accent)" : "var(--bg)",
                    border: isOpen ? "1px solid var(--accent)" : "1px solid var(--line)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.2s, border-color 0.2s, transform 0.25s",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M6 1v10M1 6h10" stroke={isOpen ? "#fff" : "var(--muted)"} strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
              </button>

              <div
                style={{
                  maxHeight: isOpen ? "400px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    padding: "0 24px 20px",
                    fontSize: "0.97rem",
                    lineHeight: 1.75,
                    color: "var(--muted)",
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA pod FAQ */}
      <div
        className="reveal"
        style={{
          marginTop: "40px",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.97rem" }}>
          Máte jiný dotaz?
        </p>
        <Link
          href="/#poptavka"
          className="pill-cta pill-cta--accent"
          style={{ fontSize: "0.93rem" }}
          data-track="cta_click"
          data-track-label="faq_cta"
        >
          Napište nám
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
        <a
          href="tel:+420721024135"
          className="pill-cta pill-cta--ghost"
          style={{ fontSize: "0.93rem" }}
          data-track="phone_click"
          data-track-label="faq_phone"
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.97 9.81 19.79 19.79 0 01.9 1.18 2 2 0 012.88 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          +420 721 024 135
        </a>
      </div>
    </section>
  );
}
