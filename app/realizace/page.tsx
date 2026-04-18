import type { Metadata } from "next";
import Link from "next/link";
import GalleryGrid from "@/components/ui/GalleryGrid";
import ContactBanner from "@/components/sections/ContactBanner";
import JsonLd from "@/components/seo/JsonLd";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Realizace – galerie dokončených projektů | STONIA kamenictví",
  description:
    "Prohlédněte si galerii dokončených kamenických projektů STONIA – pomníky, kuchyňské desky, schody, koupelny, exteriérové prvky. Olomoucký a Moravskoslezský kraj.",
  alternates: {
    canonical: "https://www.stonia.cz/realizace",
  },
};

const categories = [
  { value: "pomníky", label: "Pomníky" },
  { value: "pro-obce", label: "Pro obce" },
  { value: "exterier", label: "Exteriér" },
  { value: "interier", label: "Interiér" },
];

const galleryItems = [
  // Pomníky / hřbitovní architektura
  { id: "h1", src: images.hrbitov.detail1, alt: "Pomník z přírodního kamene", title: "Pomník z přírodního kamene", category: "pomníky" },
  { id: "h2", src: images.hrbitov.detail2, alt: "Žulová hrobka", title: "Žulová hrobka", category: "pomníky" },
  { id: "h3", src: images.hrbitov.detail3, alt: "Kamenná hrobka", title: "Kamenná hrobka", category: "pomníky" },
  { id: "h4", src: images.hrbitov.detail4, alt: "Pietní prvek z kamene", title: "Pietní prvek", category: "pomníky" },
  { id: "h5", src: images.hrbitov.detail5, alt: "Hřbitovní architektura", title: "Hřbitovní architektura", category: "pomníky" },
  { id: "h6", src: images.hrbitov.detail6, alt: "Hřbitovní prvek z kamene", title: "Hřbitovní prvek", category: "pomníky" },
  // Pro obce
  { id: "o1", src: images.proObce.foto1, alt: "Kolumbárium pro obec", title: "Kolumbárium", category: "pro-obce" },
  { id: "o2", src: images.proObce.foto2, alt: "Stojan na vodu z kamene", title: "Stojan na vodu", category: "pro-obce" },
  { id: "o3", src: images.proObce.foto3, alt: "Pietní prvek pro veřejný prostor", title: "Pietní prvek", category: "pro-obce" },
  // Exteriér
  { id: "e1", src: images.exterier.detail1, alt: "Exteriérové schody ze žuly", title: "Exteriérové schody", category: "exterier" },
  { id: "e2", src: images.exterier.detail2, alt: "Exteriérová kamenná dlažba", title: "Exteriérová dlažba", category: "exterier" },
  { id: "e3", src: images.exterier.detail3, alt: "Zahradní prvky z přírodního kamene", title: "Zahradní prvky", category: "exterier" },
  { id: "e4", src: images.exterier.detail4, alt: "Kamenné terasy a chodníky", title: "Kamenné terasy", category: "exterier" },
  { id: "e5", src: images.exterier.detail5, alt: "Venkovní kamenná dlažba", title: "Venkovní dlažba", category: "exterier" },
  { id: "e6", src: images.exterier.detail6, alt: "Exteriérové kamenné prvky", title: "Exteriérové prvky", category: "exterier" },
  // Interiér
  { id: "i1", src: images.interier.detail1, alt: "Kuchyňská deska z přírodního kamene", title: "Kuchyňská deska", category: "interier" },
  { id: "i2", src: images.interier.detail2, alt: "Kamenné schodiště v interiéru", title: "Interiérové schodiště", category: "interier" },
  { id: "i3", src: images.interier.detail3, alt: "Koupelnový obklad z přírodního kamene", title: "Koupelnový obklad", category: "interier" },
  { id: "i4", src: images.interier.detail4, alt: "Kuchyňská deska z černého kamene", title: "Kuchyňská deska – čedič", category: "interier" },
  { id: "i5", src: images.interier.detail5, alt: "Kuchyňská deska detail", title: "Kuchyňská deska – detail", category: "interier" },
  { id: "i6", src: images.interier.detail6, alt: "Krbové obložení travertin", title: "Krbové obložení", category: "interier" },
];

const imageGalleryJsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Realizace – STONIA kamenictví",
  description: "Galerie dokončených kamenických projektů – pomníky, exteriéry, interiéry, kamenictví pro obce.",
  url: "https://www.stonia.cz/realizace",
};

export default function RealizacePage() {
  return (
    <>
      <JsonLd data={imageGalleryJsonLd} />

      {/* Page header */}
      <div style={{ background: "var(--dark)", paddingTop: "140px", paddingBottom: "64px" }}>
        <div style={{ width: "min(100% - 48px, 1100px)", margin: "0 auto" }}>
          <nav aria-label="Drobečková navigace" style={{ marginBottom: "20px" }}>
            <ol style={{ display: "flex", alignItems: "center", gap: "8px", listStyle: "none", padding: 0, margin: 0, fontSize: "0.85rem" }}>
              <li><Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Domů</Link></li>
              <li style={{ color: "rgba(255,255,255,0.3)" }}>/</li>
              <li style={{ color: "var(--accent)", fontWeight: 600 }} aria-current="page">Realizace</li>
            </ol>
          </nav>
          <p className="eyebrow" style={{ color: "rgba(255,255,255,0.5)" }}>Galerie projektů</p>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(2.4rem, 4.5vw, 5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.05em",
              fontWeight: 700,
              color: "#fff",
            }}
          >
            Naše realizace
          </h1>
          <p style={{ marginTop: "20px", color: "rgba(255,255,255,0.72)", lineHeight: 1.7, maxWidth: "560px", fontSize: "1.05rem" }}>
            Výběr z dokončených projektů. Každý je originál — stejně jako přírodní kámen.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <section
        style={{
          width: "min(100% - 48px, 1100px)",
          margin: "0 auto",
          paddingTop: "64px",
          paddingBottom: "80px",
        }}
      >
        <GalleryGrid
          items={galleryItems}
          showFilter={true}
          categories={categories}
        />

        {/* CTA pod galerií */}
        <div
          style={{
            marginTop: "64px",
            padding: "40px 48px",
            borderRadius: "var(--radius-lg)",
            background: "var(--dark)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <p style={{ margin: "0 0 6px", fontSize: "1.25rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>
              Chcete něco podobného?
            </p>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.55)", fontSize: "0.97rem" }}>
              Zaměříme zdarma, připravíme návrh a nacenění bez závazků.
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/#poptavka"
              className="pill-cta pill-cta--accent"
              data-track="cta_click"
              data-track-label="realizace_cta"
            >
              Nezávazná poptávka
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="tel:+420721024135"
              className="pill-cta"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff" }}
              data-track="phone_click"
              data-track-label="realizace_phone"
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.97 9.81 19.79 19.79 0 01.9 1.18 2 2 0 012.88 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              +420 721 024 135
            </a>
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
