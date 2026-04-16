import Image from "next/image";
import { images } from "@/lib/images";

const sections = [
  {
    id: "hrbitovni-architektura",
    eyebrow: "Pomníky a hrobky",
    title: "Pomníky a pietní realizace",
    desc: "Naše hlavní specializace. Vyrábíme a obnovujeme pomníky, náhrobky a další kamenické prvky pro hrobová místa s důrazem na kvalitu zpracování, důstojný vzhled a dlouhou životnost.",
    items: [
      { label: "Výroba nových pomníků", detail: "Klasické i moderní pomníky ze žuly v různých provedeních" },
      { label: "Renovace a opravy pomníků", detail: "Čištění, přebroušení, opravy poškozených částí a celková obnova" },
      { label: "Broušení a renovace teracových pomníků", detail: "Obnova povrchu, přebroušení a celkové oživení starších teracových pomníků" },
      { label: "Sekané a strojové písmo", detail: "Nové nápisy, přisekání textů, obnova a zvýraznění původního písma" },
      { label: "Fotokeramika a doplňky", detail: "Fotokeramika, vázy, lucerny a další hřbitovní doplňky" },
      { label: "Hrobky a krycí desky", detail: "Rodinné hrobky, zákryvné desky, rámy a další kamenné části hrobového místa" },
      { label: "Veškeré kamenické práce na hřbitově", detail: "Kompletní realizace a úpravy hrobových míst včetně souvisejících kamenických prací" },
    ],
    images: [
      { src: images.hrbitov.detail1, alt: "Kamenický pomník na hřbitově" },
      { src: images.hrbitov.detail2, alt: "Kamenná hrobka a pietní místo" },
      { src: images.hrbitov.detail3, alt: "Rytý nápis na náhrobní desce" },
      { src: images.hrbitov.detail4, alt: "Kamenná urna a doplňky" },
      { src: images.hrbitov.detail5, alt: "Moderní pomník ze žuly" },
      { src: images.hrbitov.detail6, alt: "Rekonstrukce hrobu" },
    ],
    accent: false,
  },
  {
    id: "exterier",
    eyebrow: "Exteriér",
    title: "Kamenné realizace pro venkovní prostory",
    desc: "Přírodní kámen snese mráz, déšť i každodenní provoz. Navrhujeme a vyrábíme exteriérové prvky, které vydrží desítky let a dodají prostoru charakter.",
    items: [
      { label: "Schody a nášlapy", detail: "Venkovní schodiště, vstupní nášlapy, terasy" },
      { label: "Chodníky a obrubníky", detail: "Dlažba, cestičky, ohraničení zahradních ploch" },
      { label: "Venkovní kuchyně", detail: "Kuchyňské pracovní desky a prvky do venkovního prostoru" },
      { label: "Zahradní prvky", detail: "Opěrné zdi, lavičky, fontány, dekorativní prvky" },
      { label: "Stavební kamenictví", detail: "Obklady fasád, sokly, architektonické detaily" },
    ],
    images: [
      { src: images.exterier.detail1, alt: "Kamenné schody v exteriéru" },
      { src: images.exterier.detail2, alt: "Kamenná terasa a zahrada" },
      { src: images.exterier.detail3, alt: "Exteriérová kamenná realizace" },
      { src: images.exterier.detail4, alt: "Kamenné prvky zahrady" },
      { src: images.exterier.detail5, alt: "Kamenné oplocení a zídka" },
      { src: images.exterier.detail6, alt: "Kamenná dlažba" },
    ],
    accent: false,
  },
  {
    id: "interier",
    eyebrow: "Interiér",
    title: "Kamenné povrchy pro váš domov",
    desc: "Kámen v interiéru spojuje eleganci s praktičností. Každý projekt zaměřujeme na místě, zpracujeme 3D vizualizaci a realizujeme přesně podle schváleného návrhu.",
    items: [
      { label: "Kuchyňské pracovní desky", detail: "Žula, mramor, křemen — odolnost a elegance v jednom" },
      { label: "Koupelnové desky a obklady", detail: "Podlahové desky, obklady stěn, police a parapety" },
      { label: "Obložení krbů", detail: "Krbové portály, obložení krbových vložek a kamen" },
      { label: "Parapety a okenní desky", detail: "Vnitřní parapety z přírodního i kompozitního kamene" },
      { label: "Zakázková výroba", detail: "Originální interiérové prvky přesně na míru" },
    ],
    images: [
      { src: images.interier.detail1, alt: "Kuchyňská pracovní deska z kamene" },
      { src: images.interier.detail2, alt: "Kamenná koupelna" },
      { src: images.interier.detail3, alt: "Kamenný obklad krbu" },
      { src: images.interier.detail4, alt: "Interiérový parapet z kamene" },
      { src: images.interier.detail5, alt: "Kamenná koupelna detail" },
      { src: images.interier.detail6, alt: "Kamenné schodiště interiér" },
    ],
    accent: false,
  },
];

interface CategorySectionsProps {
  only?: string[];
}

export default function CategorySections({ only }: CategorySectionsProps = {}) {
  const filtered = only ? sections.filter((s) => only.includes(s.id)) : sections;
  return (
    <>
      {filtered.map((sec, idx) => (
        <section
          key={sec.id}
          id={sec.id}
          className="section-padding"
          style={{
            width: "min(100% - 48px, 1100px)",
            margin: "0 auto",
            scrollMarginTop: "100px",
          }}
        >
          <div
            className="grid-process reveal"
            style={{ gap: "56px", alignItems: "center" }}
          >
            {/* Text column — alternates sides */}
            <div className="category-text" style={{ order: idx % 2 === 0 ? 0 : 1 }}>
              <p className="eyebrow">{sec.eyebrow}</p>
              <h2 className="section-title" style={{ margin: "0 0 16px" }}>
                {sec.title}
              </h2>
              <p className="section-lead" style={{ margin: "0 0 28px", maxWidth: "520px" }}>
                {sec.desc}
              </p>

              {/* Items */}
              <ul style={{ margin: "0 0 32px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                {sec.items.map((item) => (
                  <li key={item.label} style={{ display: "flex", gap: "12px" }}>
                    <span
                      style={{
                        flexShrink: 0,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "22px",
                        height: "22px",
                        borderRadius: "6px",
                        background: "var(--accent-bg)",
                        color: "var(--accent)",
                        marginTop: "2px",
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <div>
                      <span style={{ display: "block", fontWeight: 700, color: "var(--dark)", fontSize: "0.95rem" }}>
                        {item.label}
                      </span>
                      <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>
                        {item.detail}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

            </div>

            {/* Image column — 2 photos */}
            <div
              className="category-images"
              style={{
                order: idx % 2 === 0 ? 1 : 0,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              <div
                style={{
                  gridColumn: "1 / 3",
                  position: "relative",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  aspectRatio: "16/9",
                }}
              >
                <Image
                  src={sec.images[0].src}
                  alt={sec.images[0].alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div style={{ position: "relative", borderRadius: "var(--radius-md)", overflow: "hidden", aspectRatio: "4/3" }}>
                <Image
                  src={sec.images[1].src}
                  alt={sec.images[1].alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div style={{ position: "relative", borderRadius: "var(--radius-md)", overflow: "hidden", aspectRatio: "4/3" }}>
                <Image
                  src={sec.images[2].src}
                  alt={sec.images[2].alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>
          </div>

          {/* Gallery strip — 3 more photos */}
          <div
            className="category-gallery-strip"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            {sec.images.slice(3).map((img, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  aspectRatio: "4/3",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>

          {/* Divider between sections */}
          {idx < filtered.length - 1 && (
            <div style={{ marginTop: "80px", height: "1px", background: "var(--line)" }} />
          )}
        </section>
      ))}
    </>
  );
}
