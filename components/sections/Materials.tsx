import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

const materials = [
  {
    name: "Žula",
    desc: "Odolná vůči mrazu, ideální pro exteriér i pomníky",
    image: images.materialy.granit,
    imageAlt: "Žulová pracovní deska – detailní textura přírodní žuly",
    href: "/#sluzby",
  },
  {
    name: "Mramor",
    desc: "Elegantní povrch, vhodný zejména pro interiér",
    image: images.materialy.mramor,
    imageAlt: "Bílý mramor Carrara – přirozené žilkování",
    href: "/#sluzby",
  },
  {
    name: "Kompozit",
    desc: "Technická odolnost, nízká údržba, stálý vzhled",
    image: images.materialy.piskovec,
    imageAlt: "Kompozitní deska Silestone",
    href: "/#sluzby",
  },
  {
    name: "Travertin",
    desc: "Teplá textura, oblíbený pro obklady a dlažby",
    image: images.materialy.travertin,
    imageAlt: "Travertinová dlažba – přírodní textury",
    href: "/#sluzby",
  },
];

export default function Materials() {
  return (
    <section
      className="section-padding section-divider-top"
      id="materialy"
      style={{ width: "min(100% - 48px, 1100px)", margin: "0 auto" }}
    >
      {/* Heading */}
      <div className="reveal" style={{ maxWidth: "940px" }}>
        <p className="eyebrow">Materiály</p>
        <h2
          className="section-title"
          style={{
            maxWidth: "920px",
          }}
        >
          Přírodní kámen i technické materiály — poradíme, co pro vás bude nejlepší.
        </h2>
        <p className="section-lead">
          Materiál vybíráme podle stylu místa, způsobu použití a nároků na údržbu.
          Žula, mramor, travertin nebo kompozit — rádi doporučíme, co bude
          dávat smysl esteticky i na léta dopředu.
        </p>
      </div>

      {/* 4-col grid */}
      <div
        className="grid-4"
        style={{
          gap: "16px",
          marginTop: "40px",
        }}
      >
        {materials.map((m, i) => (
          <Link
            key={m.name}
            href={m.href}
            className={`reveal${i > 0 ? ` reveal--delay-${Math.min(i, 2)}` : ""}`}
            style={{
              overflow: "hidden",
              aspectRatio: "0.95",
              borderRadius: "24px",
              background: "var(--line)",
              boxShadow: "var(--shadow-md)",
              position: "relative",
              display: "block",
            }}
          >
            <Image
              src={m.image}
              alt={m.imageAlt}
              fill
              loading="lazy"
              className="object-cover transition-transform duration-500 hover:scale-[1.06]"
              sizes="(max-width:640px) 50vw, 20vw"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, transparent 35%, rgba(17,16,15,0.55) 65%, rgba(17,16,15,0.85) 100%)",
              }}
              aria-hidden="true"
            />
            <div
              style={{
                position: "absolute",
                bottom: "14px",
                left: "14px",
                right: "14px",
              }}
            >
              <span
                style={{
                  display: "block",
                  color: "#fff",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  marginBottom: "2px",
                }}
              >
                {m.name}
              </span>
              <span
                style={{
                  display: "block",
                  color: "rgba(255,255,255,0.72)",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                {m.desc}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
