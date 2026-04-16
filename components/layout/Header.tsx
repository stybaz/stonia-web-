"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/#hrbitovni-architektura", label: "Pomníky" },
  { href: "/#pro-obce", label: "Pro obce" },
  { href: "/#exterier", label: "Exteriér" },
  { href: "/#interier", label: "Interiér" },
  { href: "/realizace", label: "Realizace" },
  { href: "/#kontakt", label: "Kontakt" },
];

function Logo() {
  return (
    <>
      {/* Desktop: logo-desktop.svg — hidden on mobile */}
      <Image
        src="/logo-desktop.svg"
        alt="STONIA – Kamenictví Štybner"
        width={234}
        height={14}
        priority
        className="hidden lg:block"
        style={{ height: "18px", width: "auto" }}
      />
      {/* Mobile: logo.svg — hidden on desktop */}
      <Image
        src="/logo.svg"
        alt="STONIA – Kamenictví Štybner"
        width={140}
        height={52}
        priority
        className="block lg:hidden"
        style={{ height: "36px", width: "auto" }}
      />
    </>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["exterier", "interier", "hrbitovni-architektura", "pro-obce"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header
      className="header-shell"
      style={{
        position: "fixed",
        top: "max(10px, env(safe-area-inset-top))",
        left: "clamp(12px, 4vw, 24px)",
        right: "clamp(12px, 4vw, 24px)",
        zIndex: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "clamp(12px, 2vw, 24px)",
        padding: "10px clamp(12px, 2vw, 20px)",
        background: scrolled ? "rgba(255, 251, 247, 0.96)" : "rgba(255, 251, 247, 0.82)",
        border: "1px solid rgba(255, 255, 255, 0.46)",
        borderRadius: "999px",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        boxShadow: scrolled ? "0 18px 50px rgba(17, 16, 15, 0.13)" : "0 18px 50px rgba(17, 16, 15, 0.08)",
        transition: "background 300ms ease, box-shadow 300ms ease",
      }}
    >
      {/* ── Logo ──────────────────────────────────────────────────── */}
      <Link href="/" aria-label="STONIA – Kamenictví Štybner" style={{ flexShrink: 0, textDecoration: "none" }}>
        <Logo />
      </Link>

      {/* ── Desktop Nav ───────────────────────────────────────────── */}
      <nav
        className="hidden lg:flex items-center gap-5"
        style={{ fontSize: "0.9rem" }}
        aria-label="Hlavní navigace"
      >
        {navLinks.map((link) => {
          const sectionId = link.href.replace("/#", "").replace("/", "");
          const isActive =
            (link.href === "/realizace" && pathname === "/realizace") ||
            (link.href !== "/realizace" && activeSection === sectionId);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link font-medium${isActive ? " active" : ""}`}
              style={{ color: isActive ? "var(--accent)" : "var(--text)" }}
              aria-current={isActive ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}

        {/* Social icons — highlighted */}
        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
          <a
            href="https://www.instagram.com/stonia.cz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram STONIA"
            className="social-icon"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "34px",
              height: "34px",
              borderRadius: "999px",
              background: "var(--surface)",
              border: "1px solid var(--line)",
              color: "var(--text)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61574056055597"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook STONIA"
            className="social-icon"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "34px",
              height: "34px",
              borderRadius: "999px",
              background: "var(--surface)",
              border: "1px solid var(--line)",
              color: "var(--text)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </span>

        <span className="hidden xl:inline-flex items-center gap-3 shrink-0">
          <Link
            href="/realizace"
            className={`nav-link font-medium${pathname === "/realizace" ? " active" : ""}`}
            style={{ color: pathname === "/realizace" ? "var(--accent)" : "var(--text)", fontSize: "0.9rem" }}
            aria-current={pathname === "/realizace" ? "page" : undefined}
          >
            Realizace
          </Link>
          <span style={{ width: "1px", height: "14px", background: "var(--line)" }} aria-hidden="true" />
          <a
            href="tel:+420721024135"
            className="inline-flex items-center gap-2 font-semibold transition-colors duration-150"
            style={{ color: "var(--accent)", fontSize: "0.88rem" }}
            data-track="phone_click"
            data-track-label="header_phone"
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.97 9.81 19.79 19.79 0 01.9 1.18 2 2 0 012.88 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            +420 721 024 135
          </a>
        </span>

        <Link
          href="/#kontakt"
          className="pill-cta pill-cta--accent shrink-0"
          data-track="cta_click"
          data-track-label="header_poptavka"
        >
          Nezávazná poptávka
        </Link>
      </nav>

      {/* ── Hamburger ─────────────────────────────────────────────── */}
      <button
        className="lg:hidden flex flex-col gap-1.5 p-2 -mr-1"
        style={{ color: "var(--dark)" }}
        onClick={() => setMenuOpen(true)}
        aria-label="Otevřít menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
      >
        <span className="block w-5 h-px bg-current" />
        <span className="block w-3.5 h-px bg-current ml-auto" />
        <span className="block w-5 h-px bg-current" />
      </button>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={navLinks}
        activeSection={activeSection}
      />
    </header>
  );
}
