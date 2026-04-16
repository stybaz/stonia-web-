import Image from "next/image";
import Link from "next/link";
import realizaceData from "@/content/realizace/realizace.json";

export default function GalleryPreview() {
  const items = realizaceData.slice(0, 5);

  return (
    <section
      className="section-padding"
      id="realizace"
      style={{ width: "min(100% - 48px, 1100px)", margin: "0 auto" }}
    >
      {/* Heading */}
      <div className="reveal" style={{ maxWidth: "940px" }}>
        <p className="eyebrow">Realizace</p>
        <h2
          className="section-title"
          style={{
            maxWidth: "900px",
          }}
        >
          Ukázky kamenické práce — od exteriérů a interiérů po pietní místa.
        </h2>
        <p className="section-lead">
          Každá zakázka vzniká na míru. Na fotkách je vidět volba materiálu,
          čisté zpracování i smysl pro proporce konkrétního místa.
        </p>
      </div>

      {/* Asymmetric gallery grid */}
      <div
        className="grid-gallery"
        style={{ gap: "18px", marginTop: "40px" }}
      >
        {items.map((item, i) => {
          const isTall = i === 0;
          const isWide = i === 3;

          return (
            <figure
              key={item.id}
              className={`reveal${i > 0 ? ` reveal--delay-${Math.min(i, 2)}` : ""}`}
              style={{
                margin: 0,
                overflow: "hidden",
                borderRadius: "32px",
                background: "var(--line)",
                boxShadow: "var(--shadow-md)",
                gridRow: isTall ? "span 2" : "auto",
                gridColumn: isWide ? "span 2" : "auto",
                minHeight: isTall ? "640px" : "280px",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image
                  src={item.images[0]}
                  alt={`${item.title} – realizace STONIA kamenictví`}
                  fill
                  loading={i < 2 ? "eager" : "lazy"}
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  sizes={i === 0 ? "(max-width:768px) 100vw, 40vw" : "(max-width:768px) 50vw, 30vw"}
                />
              </div>
            </figure>
          );
        })}
      </div>

      <div style={{ textAlign: "center", marginTop: "32px" }}>
        <Link
          href="/realizace"
          className="pill-cta pill-cta--ghost"
          style={{ fontSize: "var(--text-base)" }}
          data-track="cta_click"
          data-track-label="gallery_all_realizace"
        >
          Zobrazit všechny realizace
        </Link>
      </div>
    </section>
  );
}
