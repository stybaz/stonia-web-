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
    detail2: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80",
    detail3: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=700&q=80",
    detail4: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=700&q=80",
    detail5: "https://images.unsplash.com/photo-1585128792020-803d29415281?w=700&q=80",
    detail6: "https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?w=700&q=80",
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
    card:    "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    detail1: "https://images.unsplash.com/photo-1562774053-701939374585?w=900&q=80",
    detail2: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80",
    detail3: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=700&q=80",
    detail4: "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?w=700&q=80",
    detail5: "https://images.unsplash.com/photo-1544413660-299165566b1d?w=700&q=80",
    detail6: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=700&q=80",
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
  kontakt: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
  // kontakt: "/images/ostatni/kontakt.jpg",

  /** Sekce Jak pracujeme — foto (800×600 px) */
  jakPracujeme: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  // jakPracujeme: "/images/ostatni/jak-pracujeme.jpg",

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
