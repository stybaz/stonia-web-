/**
 * ServiceAreas — viditelná sekce s výčtem obcí pro lokální SEO.
 * Kompaktní, nenásilná, čitelná pro Google i pro návštěvníky.
 */

const areas = [
  {
    region: "Novojičínsko",
    places: [
      "Příbor", "Hukvaldy", "Paskov", "Baška", "Dobrá", "Brušperk",
      "Třanovice", "Sedlnice", "Bartošovice", "Kunín", "Mankovice", "Spálov",
    ],
  },
  {
    region: "Fulnecko / Odersko",
    places: [
      "Fulnek", "Odry", "Pustějov", "Jakubčovice nad Odrou", "Vítkov",
      "Radkov", "Melč", "Moravice", "Nové Lublice", "Kružberk",
      "Budišov nad Budišovkou", "Čermná ve Slezsku",
    ],
  },
  {
    region: "Opavsko / Hlučínsko",
    places: [
      "Stěbořice", "Slavkov u Opavy", "Otice", "Komárov (Opava)",
      "Velké Hoštice", "Kravaře", "Štítina", "Suché Lazce", "Mokré Lazce",
      "Hrabyně", "Dolní Benešov", "Háj ve Slezsku", "Hlučín", "Březiny",
      "Třebovice", "Jistebník", "Velké Albrechtice", "Bílovec", "Štěpánkovice",
    ],
  },
  {
    region: "Šumpersko",
    places: [
      "Petrov nad Desnou", "Velké Losiny", "Loučná nad Desnou", "Bohdíkov",
      "Kopřivná", "Hanušovice", "Staré Město", "Malá Morava",
      "Horní Studénky", "Jindřichov", "Sobotín", "Rejhotice", "Hraběšice",
      "Libina", "Horní Loděnice", "Nová Hradečná", "Břevenec", "Stará Ves",
    ],
  },
  {
    region: "Jesenicko",
    places: [
      "Jeseník", "Česká Ves", "Písečná", "Supíkovice", "Mikulovice",
      "Lípová Lázně", "Bělá pod Pradědem", "Janov", "Jívová",
      "Hraničné Petrovice", "Domašov nad Bystřicí",
    ],
  },
  {
    region: "Králicko / Lanškrounsko",
    places: [
      "Králíky", "Červená Voda", "Těhonín", "Štíty",
      "Jablonné nad Orlicí", "Letohrad",
    ],
  },
  {
    region: "Olomoucko – venkov",
    places: [
      "Potštát", "Velký Újezd", "Hlásnice (u Šternberka)", "Norberčany",
      "Guntramovice", "Staré Těchanovice",
    ],
  },
  {
    region: "Bruntálsko",
    places: [
      "Světlá Hora", "Karlovice", "Heřmanovice", "Holčovice",
      "Město Albrechtice", "Brantice", "Zátor", "Lichnov", "Sosnová",
      "Horní Životice", "Staré Heřminovy", "Leskovec nad Moravicí",
      "Razová", "Milotice nad Opavou", "Oborná", "Petrovice (u Janova)",
    ],
  },
];

export default function ServiceAreas() {
  return (
    <section
      aria-label="Oblasti realizace pomníků a kamenických prací"
      style={{
        width: "min(100% - 48px, 1100px)",
        margin: "0 auto",
        padding: "48px 0 64px",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div style={{ marginBottom: "28px" }}>
        <p className="eyebrow">Oblasti působení</p>
        <h2
          style={{
            margin: "0 0 8px",
            fontSize: "clamp(1.25rem, 2vw, 1.7rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            color: "var(--dark)",
          }}
        >
          Kde realizujeme pomníky a kamenické práce
        </h2>
        <p style={{ margin: 0, fontSize: "0.93rem", color: "var(--muted)", maxWidth: "600px", lineHeight: 1.65 }}>
          Pohřební kamenictví a výrobu pomníků realizujeme na hřbitovech v celém Olomouckém a Moravskoslezském kraji.
          Přijedeme zaměřit a poradit zdarma.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {areas.map((area) => (
          <div
            key={area.region}
            style={{
              padding: "16px 20px",
              borderRadius: "16px",
              background: "var(--surface-strong)",
              border: "1px solid var(--line)",
            }}
          >
            <p
              style={{
                margin: "0 0 10px",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}
            >
              {area.region}
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "0.83rem",
                color: "var(--text)",
                lineHeight: 1.75,
              }}
            >
              {area.places.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
