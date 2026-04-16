import Image from "next/image";
import { images } from "@/lib/images";

const mainItems = [
  "Kolumbária\nDůstojné a modulární řešení pro obecní hřbitovy",
  "Stojany na odběr vody\nPraktické prvky pro každodenní provoz",
  "Betonové základy pro pomníky\nPřesné a stabilní řešení pro hrobová místa",
];

const additionalItems = [
  "Držáky na konve\nOdolné doplňky ke stojanům",
  "Kamenné lavičky a pietní prvky\nVybavení pro hřbitovy a veřejná místa",
  "Chodníky, schody a dlažby\nÚpravy veřejných a pietních prostor",
  "Obnova kamenných prvků\nRekonstrukce a opravy stávajících realizací",
  "Nápisy a erbové kameny\nZakázkové prvky pro budovy a veřejný prostor",
];

const photoCaptions = [
  "Kolumbárium na hřbitově",
  "Stojan na odběr vody",
  "Pietní a parkové kamenné prvky",
];

export default function ProObce() {
  return (
    <section
      className="section-padding section-divider-top"
      id="pro-obce"
      style={{ width: "min(100% - 48px, 1100px)", margin: "0 auto" }}
    >
      <div
        className="grid-2"
        style={{
          gap: "48px",
          alignItems: "stretch",
        }}
      >
        {/* Left: 3 photos */}
        <div
          className="reveal pro-obce-photos"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "repeat(3, minmax(0, 1fr))",
            gap: "10px",
            height: "100%",
            minHeight: "620px",
          }}
        >
          <div style={{ position: "relative", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-md)", minHeight: "0" }}>
            <Image
              src={images.proObce.foto2}
              alt={photoCaptions[0]}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-500 hover:scale-[1.03]"
              sizes="(max-width:768px) 100vw, 50vw"
            />
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "11px",
                padding: "8px 14px",
                borderRadius: "999px",
                background: "rgba(17,16,15,0.72)",
                backdropFilter: "blur(8px)",
                color: "#fff",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {photoCaptions[0]}
            </div>
          </div>
          <div style={{ position: "relative", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-sm)", minHeight: "0" }}>
            <Image
              src={images.proObce.foto1}
              alt={photoCaptions[1]}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-500 hover:scale-[1.03]"
              sizes="(max-width:768px) 100vw, 25vw"
            />
            <div
              style={{
                position: "absolute",
                left: "11px",
                bottom: "11px",
                padding: "6px 12px",
                borderRadius: "999px",
                background: "rgba(17,16,15,0.72)",
                backdropFilter: "blur(8px)",
                color: "#fff",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.03em",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {photoCaptions[1]}
            </div>
          </div>
          <div style={{ position: "relative", borderRadius: "var(--radius-md)", overflow: "hidden", boxShadow: "var(--shadow-sm)", minHeight: "0" }}>
            <Image
              src={images.proObce.foto3}
              alt={photoCaptions[2]}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-500 hover:scale-[1.03]"
              sizes="(max-width:768px) 100vw, 25vw"
            />
            <div
              style={{
                position: "absolute",
                left: "11px",
                bottom: "11px",
                padding: "6px 12px",
                borderRadius: "999px",
                background: "rgba(17,16,15,0.72)",
                backdropFilter: "blur(8px)",
                color: "#fff",
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.03em",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {photoCaptions[2]}
            </div>
          </div>
        </div>

        {/* Right: content */}
        <div className="reveal reveal--delay-1 pro-obce-content">
          <p className="eyebrow">Pro obce</p>
          <h2 className="section-title" style={{ margin: "0 0 16px" }}>
            Kamenické prvky pro hřbitovy, města a veřejný prostor
          </h2>
          <p className="section-lead" style={{ margin: "0 0 20px" }}>
            Navrhujeme a realizujeme kamenické prvky pro obce, města a veřejný prostor.
            Dodáváme odolná a reprezentativní řešení pro hřbitovy, parky i další veřejná místa,
            včetně výroby, dopravy a odborného osazení.
          </p>

          <p className="eyebrow" style={{ color: "var(--accent)" }}>
            Klíčové realizace
          </p>
          <ul
            style={{
              margin: "0 0 18px",
              padding: 0,
              listStyle: "none",
              display: "grid",
              gap: "12px",
            }}
          >
            {mainItems.map((item) => {
              const [title, detail] = item.split("\n");
              return (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  color: "var(--text)",
                  fontWeight: 500,
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: "6px",
                    height: "6px",
                    marginTop: "8px",
                    borderRadius: "50%",
                    background: "var(--accent)",
                  }}
                />
                <div>
                  <span style={{ display: "block", color: "var(--text)", fontWeight: 600 }}>{title}</span>
                  <span style={{ display: "block", color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.5 }}>{detail}</span>
                </div>
              </li>
            );
            })}
          </ul>

          <p className="eyebrow" style={{ color: "var(--muted)" }}>
            Další služby
          </p>
          <ul
            style={{
              margin: "0 0 32px",
              padding: 0,
              listStyle: "none",
              display: "grid",
              gap: "10px",
            }}
          >
            {additionalItems.map((item) => {
              const [title, detail] = item.split("\n");
              return (
              <li
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  color: "var(--muted)",
                  fontWeight: 500,
                  fontSize: "0.94rem",
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: "6px",
                    height: "6px",
                    marginTop: "8px",
                    borderRadius: "50%",
                    background: "var(--line)",
                  }}
                />
                <div>
                  <span style={{ display: "block", color: "var(--text)", fontWeight: 600 }}>{title}</span>
                  <span style={{ display: "block", color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.5 }}>{detail}</span>
                </div>
              </li>
            );
            })}
          </ul>

        </div>
      </div>
    </section>
  );
}
