"use client";

import { useState } from "react";

const orderTypes = [
  "Pomník / hrobka",
  "Schody a nášlapy",
  "Venkovní kuchyně",
  "Chodník / obrubníky",
  "Kuchyňská pracovní deska",
  "Koupelna / obklady",
  "Krb / parapet",
  "Jiná zakázka",
];

const contactItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.97 9.81 19.79 19.79 0 01.9 1.18 2 2 0 012.88 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "Telefon",
    value: "+420 721 024 135",
    href: "tel:+420721024135",
    iconBg: "rgba(237,98,42,0.18)",
    iconColor: "var(--accent)",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "E-mail",
    value: "info@stonia.cz",
    href: "mailto:info@stonia.cz",
    iconBg: "rgba(237,98,42,0.18)",
    iconColor: "var(--accent)",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Adresa",
    value: "Uničov",
    href: null,
    iconBg: "rgba(237,98,42,0.18)",
    iconColor: "var(--accent)",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Pracovní doba",
    value: "Po–Pá 7:00–17:00",
    href: null,
    iconBg: "rgba(237,98,42,0.18)",
    iconColor: "var(--accent)",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
    label: "Bankovní účet",
    value: "369 671 939 / 0300",
    href: null,
    iconBg: "rgba(237,98,42,0.18)",
    iconColor: "var(--accent)",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
      </svg>
    ),
    label: "IČO",
    value: "17100551",
    href: null,
    iconBg: "rgba(237,98,42,0.18)",
    iconColor: "var(--accent)",
  },
];

export default function ContactBanner() {
  const [orderType, setOrderType] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setServerError(null);
    setFieldErrors({});

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      orderType: (form.elements.namedItem("orderType") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      honeypot: (form.elements.namedItem("honeypot") as HTMLInputElement).value,
    };

    const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^(\+420|420)?[\s\-]?[1-9][0-9]{2}[\s\-]?[0-9]{3}[\s\-]?[0-9]{3}$/;

    const errors: Record<string, string> = {};
    if (!data.name || data.name.length < 2) errors.name = "Zadejte jméno (min. 2 znaky)";
    if (!data.email || !emailRegex.test(data.email)) errors.email = "Zadejte platný e-mail (např. jan@email.cz)";
    if (data.phone && !phoneRegex.test(data.phone.replace(/\s/g, ""))) errors.phone = "Zadejte platné telefonní číslo (např. +420 721 024 135)";
    if (!data.orderType) errors.orderType = "Vyberte typ zakázky";
    if (!data.message || data.message.length < 10) errors.message = "Zpráva musí mít alespoň 10 znaků";

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.status === 429) {
        setServerError("Příliš mnoho pokusů. Zkuste to prosím za chvíli.");
      } else if (!res.ok) {
        setServerError("Odeslání se nezdařilo. Zkuste to prosím znovu nebo nás kontaktujte telefonicky.");
      } else {
        setSucceeded(true);
      }
    } catch {
      setServerError("Odeslání se nezdařilo. Zkontrolujte připojení a zkuste znovu.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="kontakt" style={{ background: "var(--dark)" }}>
      {/* Main panel — 2 columns */}
      <div
        style={{
          width: "min(100% - 48px, 1100px)",
          margin: "0 auto",
          padding: "80px 0",
          gap: "clamp(40px, 5vw, 72px)",
          alignItems: "start",
        }}
        className="grid-2"
      >
        {/* Left: contact info */}
        <div>
          <p className="eyebrow" style={{ color: "rgba(255,255,255,0.58)" }}>Kontakt</p>
          <h2
            style={{
              margin: "0 0 12px",
              fontSize: "clamp(1.8rem, 3vw, 3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              fontWeight: 700,
              color: "#fff",
            }}
          >
            Řekněte nám,<br />
            co <span style={{ color: "var(--accent)" }}>plánujete.</span>
          </h2>
          <p style={{ margin: "0 0 48px", color: "rgba(255,255,255,0.55)", lineHeight: 1.75, maxWidth: "440px" }}>
            Přijedeme, zaměříme a připravíme cenový návrh. Nezávazně, bez skrytých poplatků, s odpovědí zpravidla do 24 hodin.
          </p>

          {/* Contact items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {contactItems.map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div
                  style={{
                    flexShrink: 0,
                    width: "48px",
                    height: "48px",
                    borderRadius: "14px",
                    background: item.iconBg,
                    border: `1px solid ${item.iconColor}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: item.iconColor,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p style={{ margin: "0 0 2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: item.iconColor,
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ margin: 0, fontSize: "1rem", fontWeight: 500, color: "rgba(255,255,255,0.7)" }}>
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social */}
          <div style={{ display: "flex", gap: "10px", marginTop: "40px" }}>
            <a
              href="https://www.instagram.com/stonia.cz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: "42px", height: "42px", borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)",
              }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61574056055597"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-icon"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: "42px", height: "42px", borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)",
              }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: form */}
        <div
          id="poptavka"
          style={{
            padding: "40px",
            borderRadius: "var(--radius-lg)",
            background: "rgba(255,251,247,0.97)",
            boxShadow: "var(--shadow-xl)",
          }}
        >
          <p className="eyebrow">Nezávazná poptávka</p>
          <h3
            style={{
              margin: "0 0 8px",
              fontSize: "1.4rem",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              fontWeight: 700,
              color: "var(--dark)",
            }}
          >
            Popište nám váš projekt
          </h3>
          <p style={{ margin: "0 0 24px", color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.65 }}>
            Zaměříme, poradíme s materiálem a připravíme cenový návrh.
          </p>

          {succeeded ? (
            <div
              style={{
                padding: "24px",
                borderRadius: "var(--radius-md)",
                background: "rgba(34,197,94,0.1)",
                border: "1px solid rgba(34,197,94,0.3)",
                color: "#166534",
                fontWeight: 600,
                fontSize: "0.95rem",
                textAlign: "center",
                lineHeight: 1.6,
              }}
              role="status"
              aria-live="polite"
            >
              ✓ Poptávka odeslána. Ozveme se vám co nejdříve.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form" style={{ display: "grid", gap: "12px" }} data-track-form="contact_form_banner" noValidate>
              {/* Honeypot — skryté pole pro ochranu před boty */}
              <input
                type="text"
                name="honeypot"
                defaultValue=""
                tabIndex={-1}
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}
                autoComplete="off"
              />
              <div className="contact-form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <label style={{ display: "grid", gap: "6px" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text)" }}>Jméno</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Vaše jméno"
                    required
                    aria-invalid={!!fieldErrors.name}
                    aria-describedby={fieldErrors.name ? "err-name" : undefined}
                  />
                  {fieldErrors.name && <span id="err-name" role="alert" style={{ fontSize: "0.78rem", color: "#dc2626" }}>{fieldErrors.name}</span>}
                </label>
                <label style={{ display: "grid", gap: "6px" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text)" }}>Telefon</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+420 xxx xxx xxx"
                    aria-invalid={!!fieldErrors.phone}
                    aria-describedby={fieldErrors.phone ? "err-phone" : undefined}
                  />
                  {fieldErrors.phone && <span id="err-phone" role="alert" style={{ fontSize: "0.78rem", color: "#dc2626" }}>{fieldErrors.phone}</span>}
                </label>
              </div>
              <label style={{ display: "grid", gap: "6px" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text)" }}>E-mail</span>
                <input
                  type="email"
                  name="email"
                  placeholder="vas@email.cz"
                  required
                  aria-invalid={!!fieldErrors.email}
                  aria-describedby={fieldErrors.email ? "err-email" : undefined}
                />
                {fieldErrors.email && <span id="err-email" role="alert" style={{ fontSize: "0.78rem", color: "#dc2626" }}>{fieldErrors.email}</span>}
              </label>
              <label style={{ display: "grid", gap: "6px" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text)" }}>Typ zakázky</span>
                <select
                  name="orderType"
                  value={orderType}
                  onChange={(e) => setOrderType(e.target.value)}
                  style={{ fontFamily: "inherit" }}
                  aria-invalid={!!fieldErrors.orderType}
                  aria-describedby={fieldErrors.orderType ? "err-orderType" : undefined}
                >
                  <option value="">Vyberte typ zakázky…</option>
                  {orderTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                {fieldErrors.orderType && <span id="err-orderType" role="alert" style={{ fontSize: "0.78rem", color: "#dc2626" }}>{fieldErrors.orderType}</span>}
              </label>
              <label style={{ display: "grid", gap: "6px" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text)" }}>Zpráva</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Popište nám vaši představu"
                  required
                  style={{ resize: "none" }}
                  aria-invalid={!!fieldErrors.message}
                  aria-describedby={fieldErrors.message ? "err-message" : undefined}
                />
                {fieldErrors.message && <span id="err-message" role="alert" style={{ fontSize: "0.78rem", color: "#dc2626" }}>{fieldErrors.message}</span>}
              </label>
              {serverError && (
                <p role="alert" style={{ margin: 0, fontSize: "0.85rem", color: "#dc2626", fontWeight: 500 }}>
                  {serverError}
                </p>
              )}
              <button
                type="submit"
                disabled={submitting}
                style={{
                  marginTop: "4px",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  minHeight: "48px", padding: "0 24px",
                  borderRadius: "999px", border: "none",
                  background: "var(--accent)", color: "#fff",
                  fontWeight: 600, fontSize: "0.95rem",
                  cursor: submitting ? "not-allowed" : "pointer",
                  opacity: submitting ? 0.7 : 1,
                  boxShadow: "0 14px 34px rgba(var(--accent-rgb),0.24)",
                  transition: "transform 180ms ease",
                  width: "100%",
                }}
                className="btn-primary"
                data-track="cta_click"
                data-track-label="contact_banner_submit"
              >
                {submitting ? "Odesílám…" : "Odeslat poptávku"}
              </button>
              <p style={{ margin: "6px 0 0", fontSize: "0.72rem", color: "var(--muted)", lineHeight: 1.6, textAlign: "center" }}>
                Odpovídáme zpravidla do 24 hodin. Odesláním souhlasíte se zpracováním osobních údajů.
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Map */}
      <div
        style={{
          width: "100%",
          height: "360px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <iframe
          title="STONIA kamenictví – mapa"
          src="https://www.openstreetmap.org/export/embed.html?bbox=17.05%2C49.74%2C17.20%2C49.82&layer=mapnik&marker=49.779%2C17.119"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            border: 0,
            display: "block",
            pointerEvents: "none",
            filter: "invert(1) sepia(1) saturate(2.8) brightness(0.70) contrast(1.12)",
          }}
          loading="lazy"
        />
        {/* Vignette */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: [
              "linear-gradient(90deg, rgba(17,16,15,0.82) 0%, rgba(17,16,15,0.08) 45%, rgba(17,16,15,0.5) 100%)",
              "linear-gradient(180deg, rgba(17,16,15,0.3) 0%, rgba(17,16,15,0) 40%, rgba(17,16,15,0.55) 100%)",
            ].join(", "),
            pointerEvents: "none",
          }}
        />
        {/* Location card */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            marginLeft: "clamp(24px, 6%, 80px)",
            padding: "28px 32px",
            borderRadius: "var(--radius-md)",
            background: "rgba(17,16,15,0.88)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(255,255,255,0.14)",
            maxWidth: "272px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
            <span
              aria-hidden="true"
              style={{
                display: "inline-block",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "var(--accent)",
                boxShadow: "0 0 0 4px rgba(237,98,42,0.2)",
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.38)" }}>
              Kde nás najdete
            </span>
          </div>
          <p style={{ margin: "0 0 3px", fontSize: "1.3rem", fontWeight: 700, color: "#fff", letterSpacing: "-0.025em", lineHeight: 1.15 }}>
            Uničov
          </p>
          <p style={{ margin: "0 0 22px", fontSize: "0.88rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>
            Olomoucký kraj
          </p>
          <a
            href="https://mapy.cz/zakladni?x=17.119&y=49.779&z=15&source=coor&id=17.119%2C49.779"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              padding: "10px 18px",
              borderRadius: "999px",
              background: "var(--accent)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.85rem",
              textDecoration: "none",
              boxShadow: "0 8px 22px rgba(237,98,42,0.28)",
            }}
            data-track="map_open"
            data-track-label="contact_banner_map"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Otevřít na Mapy.cz
          </a>
        </div>
      </div>

    </section>
  );
}
