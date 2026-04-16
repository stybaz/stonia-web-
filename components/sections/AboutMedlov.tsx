import Image from "next/image";
import { images } from "@/lib/images";

const photos = [
  { src: images.arealMedlov,     alt: "Výrobní areál STONIA v Medlově" },
  { src: images.cncPilaKaspe,    alt: "CNC pila KASPE KBS 47 Alfa – řezání žuly" },
  { src: images.cncFrezaHelios,  alt: "CNC frézovací centrum Helios – opracování kamene" },
  { src: images.cncFrezaPromasz, alt: "CNC mostová pila Promasz – výroba kamenných desek" },
];

export default function AboutMedlov() {
  return (
    <section
      className="section-padding section-padding-medlov section-divider-top"
      id="o-nas-medlov"
      style={{ width: "min(100% - 48px, 1100px)", margin: "0 auto" }}
    >
      <article
        className="reveal grid-2"
        style={{
          gap: "40px",
          alignItems: "center",
          padding: "36px",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--line)",
          background: "linear-gradient(180deg, var(--surface-strong) 0%, #fff 100%)",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        {/* Left: text */}
        <div style={{ maxWidth: "540px" }}>
          <p className="eyebrow" style={{ marginBottom: "8px" }}>O nás</p>
          <h2 style={{ margin: "0 0 16px", fontSize: "clamp(1.4rem, 2.2vw, 2.1rem)", lineHeight: 1.1, letterSpacing: "-0.03em", fontWeight: 700, color: "var(--dark)" }}>
            Výrobní areál v Medlově
          </h2>
          <p className="section-lead" style={{ margin: "0 0 12px" }}>
            Naše kamenická firma se specializuje na výrobu <strong style={{ color: "var(--dark)" }}>pomníků na míru</strong>. Pracujeme s
            <strong style={{ color: "var(--dark)" }}> kvalitními přírodními materiály</strong>, jako je <strong style={{ color: "var(--dark)" }}>žula a mramor</strong>,
            které zaručují <strong style={{ color: "var(--dark)" }}>dlouhou životnost</strong> a stálý vzhled.
          </p>
          <p className="section-lead" style={{ margin: 0 }}>
            Ve výrobě využíváme <strong style={{ color: "var(--dark)" }}>moderní technologie</strong> včetně <strong style={{ color: "var(--dark)" }}>CNC opracování</strong>,
            které doplňujeme <strong style={{ color: "var(--dark)" }}>ruční prací</strong> při dokončování detailů a nápisů.
            Díky tomu má každý pomník své vlastní, <strong style={{ color: "var(--dark)" }}>originální provedení</strong>.
          </p>
        </div>

        {/* Right: 2×2 photo grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: "10px",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                aspectRatio: "4/3",
                borderRadius: i === 0 ? "12px 0 0 0" : i === 1 ? "0 12px 0 0" : i === 2 ? "0 0 0 12px" : "0 0 12px 0",
                overflow: "hidden",
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="lazy"
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ transition: "transform 400ms ease" }}
              />
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
