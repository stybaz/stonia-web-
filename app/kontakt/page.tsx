import type { Metadata } from "next";
import Link from "next/link";
import ContactBanner from "@/components/sections/ContactBanner";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Kontakt – kamenictví STONIA Uničov",
  description:
    "Kontaktujte kamenictví STONIA Uničov. Poptávky, zaměření zdarma. Tel: +420 721 024 135, e-mail: info@stonia.cz. Olomoucký a Moravskoslezský kraj.",
  alternates: {
    canonical: "https://www.stonia.cz/kontakt",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "STONIA – kamenictví",
  telephone: "+420721024135",
  email: "info@stonia.cz",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Uničov",
    postalCode: "78391",
    addressLocality: "Uničov",
    addressCountry: "CZ",
  },
  geo: { "@type": "GeoCoordinates", latitude: 49.7719, longitude: 17.1222 },
  url: "https://www.stonia.cz",
  hasMap: "https://maps.google.com/?q=Uničov,+Czechia",
  areaServed: ["Olomoucký kraj", "Moravskoslezský kraj"],
};

export default function KontaktPage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd} />

      {/* Hero */}
      <div style={{ background: "var(--dark)", paddingTop: "140px", paddingBottom: "64px" }}>
        <div style={{ width: "min(100% - 48px, 1280px)", margin: "0 auto" }}>
          <nav aria-label="Drobečková navigace" style={{ marginBottom: "20px" }}>
            <ol style={{ display: "flex", alignItems: "center", gap: "8px", listStyle: "none", padding: 0, margin: 0, fontSize: "0.85rem" }}>
              <li><Link href="/" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Domů</Link></li>
              <li style={{ color: "rgba(255,255,255,0.3)" }}>/</li>
              <li style={{ color: "var(--accent)", fontWeight: 600 }} aria-current="page">Kontakt</li>
            </ol>
          </nav>
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
            Kontaktujte nás
          </h1>
          <p style={{ marginTop: "20px", color: "rgba(255,255,255,0.72)", lineHeight: 1.7, maxWidth: "560px", fontSize: "1.05rem" }}>
            Napište nebo zavolejte. Zaměření a nacenění provádíme zdarma.
          </p>
        </div>
      </div>

      {/* Map (non-interactive so mouse wheel scroll keeps working) */}
      <div style={{ width: "100%", height: "380px", overflow: "hidden", position: "relative" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20629.4!2d17.1222!3d49.7719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713e4a94dc99221%3A0x96e2e2d7fce1ac2e!2sUni%C4%8Dov!5e0!3m2!1scs!2scz!4v1000000000000"
          width="100%"
          height="380"
          style={{
            border: 0,
            display: "block",
            filter: "grayscale(0.35) contrast(1.03) saturate(0.9)",
            pointerEvents: "none",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa – STONIA kamenictví, Uničov"
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(17,16,15,0.06) 0%, rgba(17,16,15,0.18) 100%)",
          }}
        />
        <a
          href="https://maps.google.com/?q=Uničov,+Czechia"
          target="_blank"
          rel="noopener noreferrer"
          className="pill-cta pill-cta--accent"
          style={{ position: "absolute", right: "20px", bottom: "20px", zIndex: 2 }}
          aria-label="Otevřít adresu v mapách"
          data-track="map_open"
          data-track-label="kontakt_page_map"
        >
          Otevřít v mapách
        </a>
      </div>

      <ContactBanner />
    </>
  );
}
