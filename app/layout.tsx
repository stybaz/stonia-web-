import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import GoogleAnalyticsLoader from "@/components/seo/GoogleAnalyticsLoader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FloatingCTA from "@/components/ui/FloatingCTA";
import CookieBanner from "@/components/ui/CookieBanner";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.stonia.cz"
  ),
  title: {
    default: "STONIA - Kamenictví Štybner | Kámen ve všech podobách",
    template: "%s | STONIA - Kamenictví Štybner",
  },
  description:
    "STONIA - Kamenictví Štybner, Uničov. Specializujeme se na pomníky a hrobky na míru, kamenictví pro obce a pietní místa. Realizujeme v celém Olomouckém a Moravskoslezském kraji. Tel: +420 721 024 135",
  keywords: [
    "pomníky na míru",
    "hrobky zakázková výroba",
    "kamenictví pomníky",
    "pietní kamenictví",
    "kamenictví pro obce",
    "kolumbárium",
    "kamenictví Uničov",
    "kamenictví Olomoucký kraj",
    "kamenictví Moravskoslezský kraj",
    "kuchyňské desky z kamene",
    "kamenné schody",
    "STONIA Štybner",
  ],
  authors: [{ name: "STONIA - Kamenictví Štybner" }],
  creator: "STONIA - Kamenictví Štybner",
  publisher: "STONIA - Kamenictví Štybner",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://www.stonia.cz",
    siteName: "STONIA - Kamenictví Štybner",
    title: "STONIA - Kamenictví Štybner | Kámen ve všech podobách",
    description:
      "Zakázkové kamenictví pro exteriér, interiér i pietní místa. Pomníky, schody, kuchyně, obklady. Uničov, Olomoucký kraj.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "STONIA - Kamenictví Štybner | Kámen ve všech podobách",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STONIA - Kamenictví Štybner | Kámen ve všech podobách",
    description:
      "Zakázkové kamenictví pro exteriér, interiér i pietní místa. Pomníky, schody, kuchyně, obklady. Uničov, Olomoucký kraj.",
    images: ["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"],
  },
  icons: {
    icon: { url: "/favicon.svg?v=5", type: "image/svg+xml" },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "STONIA - Kamenictví Štybner",
  description:
    "Specializujeme se na pomníky a hrobky na míru, kamenictví pro obce a pietní místa. Realizujeme také exteriérové a interiérové kamenické práce. Olomoucký a Moravskoslezský kraj.",
  url: "https://www.stonia.cz",
  telephone: "+420721024135",
  email: "info@stonia.cz",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Uničov",
    postalCode: "78391",
    addressLocality: "Uničov",
    addressCountry: "CZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.7719,
    longitude: 17.1222,
  },
  areaServed: [
    // Kraje
    "Olomoucký kraj", "Moravskoslezský kraj",
    // Okresy a větší města
    "Uničov", "Šumperk", "Jeseník", "Bruntál", "Opava", "Ostrava",
    "Nový Jičín", "Hranice", "Šternberk", "Olomouc", "Mohelnice",
    "Zábřeh", "Rýmařov", "Litovel", "Přerov", "Prostějov", "Bílovec",
    // Novojičínsko
    "Příbor", "Hukvaldy", "Paskov", "Baška", "Dobrá", "Brušperk",
    "Třanovice", "Sedlnice", "Bartošovice", "Kunín", "Mankovice", "Spálov",
    // Fulnecko / Odersko
    "Fulnek", "Odry", "Pustějov", "Jakubčovice nad Odrou",
    "Vítkov", "Radkov", "Melč", "Moravice", "Nové Lublice", "Kružberk",
    "Budišov nad Budišovkou", "Čermná ve Slezsku",
    // Opavsko
    "Stěbořice", "Slavkov u Opavy", "Otice", "Komárov",
    "Velké Hoštice", "Kravaře", "Štítina", "Suché Lazce", "Mokré Lazce",
    "Hrabyně", "Dolní Benešov", "Háj ve Slezsku", "Hlučín", "Březiny",
    "Třebovice", "Jistebník", "Velké Albrechtice", "Štěpánkovice",
    // Šumpersko
    "Petrov nad Desnou", "Velké Losiny", "Loučná nad Desnou", "Bohdíkov",
    "Kopřivná", "Hanušovice", "Staré Město", "Malá Morava",
    "Horní Studénky", "Jindřichov", "Sobotín", "Rejhotice", "Hraběšice",
    "Libina", "Horní Loděnice", "Nová Hradečná", "Břevenec", "Stará Ves",
    // Jesenicko
    "Jeseník", "Česká Ves", "Písečná", "Supíkovice", "Mikulovice",
    "Lípová Lázně", "Bělá pod Pradědem", "Janov", "Jívová",
    "Hraničné Petrovice", "Domašov nad Bystřicí",
    // Králicko / Lanškrounsko
    "Králíky", "Červená Voda", "Těhonín", "Štíty",
    "Jablonné nad Orlicí", "Letohrad",
    // Olomoucko – venkov
    "Potštát", "Velký Újezd", "Hlásnice", "Norberčany", "Guntramovice",
    "Staré Těchanovice",
    // Bruntálsko
    "Světlá Hora", "Karlovice", "Heřmanovice", "Holčovice",
    "Město Albrechtice", "Brantice", "Zátor", "Lichnov", "Sosnová",
    "Horní Životice", "Staré Heřminovy", "Leskovec nad Moravicí",
    "Razová", "Milotice nad Opavou", "Oborná",
    "Petrovice u Janova",
  ],
  hasMap: "https://maps.google.com/?q=Uničov,+Czechia",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={inter.variable}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=5" />
        <link rel="shortcut icon" href="/favicon.svg?v=5" />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Přeskočit na obsah
        </a>
        <JsonLd data={localBusinessJsonLd} />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalyticsLoader gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <ScrollReveal />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingCTA />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
