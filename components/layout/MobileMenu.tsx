"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
  activeSection: string;
}

function MobileMenuContent({ onClose, links, activeSection }: Omit<MobileMenuProps, "isOpen">) {
  const closeRef = useRef<HTMLButtonElement>(null);

  // Move focus to close button when menu opens; handle Escape key
  useEffect(() => {
    closeRef.current?.focus();
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        padding: "20px 24px 32px",
        background: "rgba(246, 242, 238, 0.92)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Mobilní menu"
    >
      {/* Top bar — mirrors desktop header pill */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 20px",
          background: "rgba(255, 251, 247, 0.96)",
          border: "1px solid rgba(255, 255, 255, 0.46)",
          borderRadius: "999px",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          boxShadow: "0 18px 50px rgba(17, 16, 15, 0.13)",
          flexShrink: 0,
        }}
      >
        <Link href="/" onClick={onClose} aria-label="STONIA – Kamenictví Štybner">
          <Image
            src="/logo.svg"
            alt="STONIA – Kamenictví Štybner"
            width={140}
            height={52}
            priority
            style={{ height: "36px", width: "auto" }}
          />
        </Link>
        <button
          ref={closeRef}
          onClick={onClose}
          style={{
            padding: "8px",
            color: "var(--text)",
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Zavřít menu"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Nav links */}
      <nav
        id="mobile-menu"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "8px",
          padding: "32px 8px",
        }}
        aria-label="Mobilní navigace"
      >
        {links.map((link) => {
          const sectionId = link.href.replace("/#", "").replace("/", "");
          const isActive = activeSection === sectionId;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`nav-link mobile-menu-link${isActive ? " active" : ""}`}
              style={{
                display: "block",
                fontSize: "clamp(1.35rem, 6.2vw, 1.75rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: isActive ? "var(--accent)" : "var(--dark)",
                paddingTop: "14px",
                paddingBottom: "14px",
              }}
              aria-current={isActive ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer — mirrors desktop right side */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: "20px",
          background: "rgba(255, 251, 247, 0.96)",
          border: "1px solid rgba(255, 255, 255, 0.46)",
          borderRadius: "24px",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          boxShadow: "0 18px 50px rgba(17, 16, 15, 0.08)",
          flexShrink: 0,
        }}
      >
        {/* Social icons */}
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <a
            href="https://www.instagram.com/stonia.cz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram STONIA"
            style={{ display: "inline-flex", alignItems: "center", color: "var(--muted)", gap: "6px", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Instagram
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61574056055597"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook STONIA"
            style={{ display: "inline-flex", alignItems: "center", color: "var(--muted)", gap: "6px", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            Facebook
          </a>
        </div>

        <a
          href="tel:+420721024135"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "var(--accent)",
            fontWeight: 600,
            fontSize: "1rem",
            textDecoration: "none",
          }}
          aria-label="Zavolat: +420 721 024 135"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.42 9.9a19.79 19.79 0 01-3.07-8.68A2 2 0 012.33 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.29 6.29l1.27-.77a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          +420 721 024 135
        </a>
        <Link
          href="/#poptavka"
          onClick={onClose}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "48px",
            borderRadius: "999px",
            background: "var(--accent)",
            color: "#fff",
            fontWeight: 600,
            fontSize: "1rem",
            textDecoration: "none",
            boxShadow: "0 14px 34px rgba(237, 98, 42, 0.24)",
          }}
        >
          Nezávazná poptávka
        </Link>
      </div>
    </div>
  );
}

export default function MobileMenu({ isOpen, onClose, links, activeSection }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <MobileMenuContent onClose={onClose} links={links} activeSection={activeSection} />,
    document.body
  );
}
