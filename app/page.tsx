import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import Advantages from "@/components/sections/Advantages";
import CategorySections from "@/components/sections/CategorySections";
import Materials from "@/components/sections/Materials";
import ProObce from "@/components/sections/ProObce";
import AboutMedlov from "@/components/sections/AboutMedlov";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import HowWeWork from "@/components/sections/HowWeWork";
import FAQ from "@/components/sections/FAQ";
import ContactBanner from "@/components/sections/ContactBanner";

export const metadata: Metadata = {
  title: "STONIA - Kamenictví Štybner | Kámen ve všech podobách",
  description:
    "STONIA Kamenictví Štybner – pomníky a hrobky na míru, kamenictví pro obce, zahradní a interiérové realizace. Uničov, Olomoucký a Moravskoslezský kraj. Tel: +420 721 024 135",
  keywords: [
    "pomníky na míru",
    "hrobky zakázková výroba",
    "kamenictví Uničov",
    "kamenictví pro obce",
    "kolumbárium",
    "pietní kamenictví",
    "kamenictví Olomoucký kraj",
    "kamenictví Moravskoslezský kraj",
    "kamenná pracovní deska",
    "STONIA",
  ],
  alternates: {
    canonical: "https://www.stonia.cz",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Je zaměření a nacenění zdarma?", acceptedAnswer: { "@type": "Answer", text: "Ano. Přijedeme na místo, zaměříme a připravíme cenový návrh zcela zdarma a bez jakýchkoliv závazků." } },
    { "@type": "Question", name: "Jak dlouho trvá výroba pomníku?", acceptedAnswer: { "@type": "Answer", text: "Závisí na složitosti návrhu a zvoleném materiálu. Standardní pomník obvykle připravíme do 4–8 týdnů od schválení návrhu." } },
    { "@type": "Question", name: "Jaká je orientační cena pomníku?", acceptedAnswer: { "@type": "Answer", text: "Cena závisí na materiálu, rozměrech, tvarování a rytém nápisu. Orientačně začíná cena od 15 000 Kč." } },
    { "@type": "Question", name: "Realizujete i mimo Olomoucký kraj?", acceptedAnswer: { "@type": "Answer", text: "Ano. Pravidelně realizujeme v Olomouckém, Moravskoslezském a Zlínském kraji." } },
    { "@type": "Question", name: "Provádíte i renovace starých pomníků?", acceptedAnswer: { "@type": "Answer", text: "Ano. Provádíme čištění, opravy, obnovu nápisů i kompletní rekonstrukce stávajících pomníků a hrobových míst." } },
    { "@type": "Question", name: "Jak probíhá celý proces od poptávky po montáž?", acceptedAnswer: { "@type": "Answer", text: "Po poptávce přijedeme zaměřit, připravíme 3D návrh a cenovou nabídku. Po schválení zahájíme výrobu a vše zakončíme odbornou montáží." } },
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <Hero />
      <AboutPreview />
      <Advantages />
      <Stats />
      <Testimonials />
      <CategorySections only={["hrbitovni-architektura"]} />
      <ProObce />
      <CategorySections only={["exterier", "interier"]} />
      <AboutMedlov />
      <Materials />
      <HowWeWork />
      <FAQ />
      <ContactBanner />
    </>
  );
}
