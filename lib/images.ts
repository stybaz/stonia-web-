/**
 * Centrální správa fotografií na webu.
 *
 * JAK VYMĚNIT FOTKU:
 *  1. Nahraj novou fotku do složky /public/images/<sekce>/
 *     (např. /public/images/hero/bg.jpg)
 *  2. Změn hodnotu níže na lokální cestu:
 *     heroBg: "/images/hero/bg.jpg"
 *  3. Ulož soubor — web se automaticky aktualizuje.
 *
 * Podporované formáty: .jpg, .jpeg, .webp, .png
 * Doporučené rozměry jsou uvedeny u každé položky.
 *
 * PRIORITA VÝMĚNY (nejvyšší dopad na důvěru a poptávky):
 *  1) heroBg
 *  2) exterier.card, interier.card, hrbitov.card
 *  3) exterier.detail1, interier.detail1, hrbitov.detail1
 *
 * DOPORUČENÍ:
 *  - U klíčových fotek používej vlastní realizace (bez watermarku stock banky)
 *  - U každé fotky zvaž popis místa/zakázky v alt textu (např. "Uničov, žulové schody")
 */

export const images = {

  /** Hlavní fotka na pozadí hero sekce (1920×1080 px nebo větší) */
  heroBg: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85",
  // heroBg: "/images/hero/bg.jpg",

  /** Sekce Exteriér — karta v přehledu + 6 fotek v detailu sekce (800×600 px) */
  exterier: {
    card:    "/images/exterier/exterier-schody-zahrada.png",
    detail1: "/images/exterier/exterier-schody-zahrada.png",
    detail2: "/images/placeholder.svg",
    detail3: "/images/placeholder.svg",
    detail4: "/images/placeholder.svg",
    detail5: "/images/placeholder.svg",
    detail6: "/images/placeholder.svg",
    // card:    "/images/exterier/card.jpg",
    // detail1: "/images/exterier/1.jpg",
    // detail2: "/images/exterier/2.jpg",
    // detail3: "/images/exterier/3.jpg",
    // detail4: "/images/exterier/4.jpg",
    // detail5: "/images/exterier/5.jpg",
    // detail6: "/images/exterier/6.jpg",
  },

  /** Sekce Interiér (800×600 px) */
  interier: {
    card:    "/images/interier/interier-kuchyne-hlavni.jpg",
    detail1: "/images/interier/interier-kuchyne-hlavni.jpg",
    detail2: "/images/interier/interier-schodiste-zula.png",
    detail3: "/images/interier/interier-koupelna-obklad.png",
    detail4: "/images/interier/interier-kuchynska-deska-black-1.png",
    detail5: "/images/interier/interier-kuchynska-deska-black-2.png",
    detail6: "/images/interier/interier-krb-obklad-travertin.png",
    // card:    "/images/interier/card.jpg",
    // detail1: "/images/interier/1.jpg",
    // detail2: "/images/interier/2.jpg",
    // detail3: "/images/interier/3.jpg",
    // detail4: "/images/interier/4.jpg",
    // detail5: "/images/interier/5.jpg",
    // detail6: "/images/interier/6.jpg",
  },

  /** Sekce Pomníky / hřbitovní architektura (800×600 px) */
  hrbitov: {
    card:    "/images/hrbitov/hrbitov-hlavni.png",
    detail1: "/images/hrbitov/hrbitov-hlavni.png",
    detail2: "/images/placeholder.svg",
    detail3: "/images/placeholder.svg",
    detail4: "/images/placeholder.svg",
    detail5: "/images/placeholder.svg",
    detail6: "/images/placeholder.svg",
    // card:    "/images/hrbitov/card.jpg",
    // detail1: "/images/hrbitov/1.jpg",
    // detail2: "/images/hrbitov/2.jpg",
    // detail3: "/images/hrbitov/3.jpg",
    // detail4: "/images/hrbitov/4.jpg",
    // detail5: "/images/hrbitov/5.jpg",
    // detail6: "/images/hrbitov/6.jpg",
  },

  /** Sekce Pro obce — 3 fotky (800×600 px) */
  proObce: {
    // Doporučené názvy souborů:
    // - /images/pro-obce/pro-obce-kolumbarium.png
    // - /images/pro-obce/pro-obce-stojan-na-vodu.png
    // - /images/pro-obce/pro-obce-pietni-prvek.png
    foto1: "/images/pro-obce/pro-obce-kolumbarium.png",
    foto2: "/images/pro-obce/pro-obce-stojan-na-vodu.png",
    foto3: "/images/pro-obce/pro-obce-pietni-prvek.png",
  },

  /** Sekce Kontakt — dekorativní foto (800×1000 px) */
  kontakt: "/images/placeholder.svg",

  /** Sekce Jak pracujeme — foto (800×600 px) */
  jakPracujeme: "/images/ostatni/jak-pracujeme.png",

  /** O nás — fotky výrobny a CNC strojů (1200×800 px) */
  arealMedlov: "/images/o-nas/areal-medlov.png",
  cncPilaKaspe: "/images/o-nas/cnc-pila-kaspe.png",
  cncFrezaHelios: "/images/o-nas/cnc-freza-helios.png",
  cncFrezaPromasz: "/images/o-nas/cnc-freza-promasz.png",

  /** Materiály — 5 fotek (600×400 px) */
  materialy: {
    granit:    "/images/materialy/zula.png",
    mramor:    "/images/materialy/mramor.png",
    piskovec:  "/images/materialy/kompozit.png",
    travertin: "/images/materialy/travertin.png",
    kvartzit:  "/images/materialy/kvartzit.png",
    // granit:    "/images/materialy/granit.jpg",
    // mramor:    "/images/materialy/mramor.jpg",
    // piskovec:  "/images/materialy/piskovec.jpg",
    // travertin: "/images/materialy/travertin.jpg",
  },
};
