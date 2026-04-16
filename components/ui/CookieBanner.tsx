"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    window.dispatchEvent(new Event("cookie-consent-change"));
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie_consent", "declined");
    window.dispatchEvent(new Event("cookie-consent-change"));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Souhlas s cookies"
      aria-describedby="cookie-desc"
      style={{
        position: "fixed",
        bottom: "24px",
        left: "24px",
        zIndex: 1000,
        maxWidth: "420px",
        padding: "24px",
        borderRadius: "var(--radius-lg)",
        background: "rgba(255,251,247,0.97)",
        border: "1px solid var(--line)",
        boxShadow: "var(--shadow-xl)",
        backdropFilter: "blur(12px)",
      }}
    >
      <p
        style={{
          margin: "0 0 6px",
          fontWeight: 700,
          fontSize: "0.95rem",
          color: "var(--dark)",
        }}
      >
        Tento web používá cookies
      </p>
      <p id="cookie-desc" style={{ margin: "0 0 18px", fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.6 }}>
        Používáme analytické cookies (Google Analytics) ke zlepšení webu.
        Váš souhlas můžete kdykoliv odvolat.
      </p>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={accept}
          style={{
            flex: 1,
            height: "40px",
            borderRadius: "999px",
            border: "none",
            background: "var(--accent)",
            color: "#fff",
            fontWeight: 600,
            fontSize: "0.88rem",
            cursor: "pointer",
          }}
        >
          Přijmout vše
        </button>
        <button
          onClick={decline}
          style={{
            flex: 1,
            height: "40px",
            borderRadius: "999px",
            border: "1px solid var(--line)",
            background: "transparent",
            color: "var(--text)",
            fontWeight: 600,
            fontSize: "0.88rem",
            cursor: "pointer",
          }}
        >
          Jen nezbytné
        </button>
      </div>
    </div>
  );
}
