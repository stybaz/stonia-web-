import type { Metadata } from "next";
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

export default function HomePage() {
  return (
    <>
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
      <ContactBanner />
    </>
  );
}
