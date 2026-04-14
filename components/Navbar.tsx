"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

// ---------------------------------------------------------------------------
// Icons (hamburger / close only — everything else uses real assets)
// ---------------------------------------------------------------------------

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="navbar" id="main-navbar">
      <nav className="navbar__inner" aria-label="Main navigation">
        {/* ---- Left: Logo + socials ---- */}
        <div className="navbar__left">
          <Link href="/" className="navbar__logo" aria-label="Nexpixelo Home">
            <Image
              src="/logo.svg"
              alt="Nexpixelo"
              width={180}
              height={32}
              priority
              className="navbar__logo-img"
            />
          </Link>

          <div className="navbar__socials" aria-label="Social links">
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__social-link"
              aria-label="Dribbble"
            >
              <Image
                src="/dribble.svg"
                alt="Dribbble"
                width={34}
                height={34}
              />
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__social-link"
              aria-label="Behance"
            >
              <Image
                src="/behance.svg"
                alt="Behance"
                width={34}
                height={34}
              />
            </a>
          </div>
        </div>

        {/* ---- Right: Desktop nav + CTA ---- */}
        <div className="navbar__right">
          <ul className="navbar__links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="navbar__link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" className="navbar__cta">
            Get In Touch
          </Link>
        </div>

        {/* ---- Mobile toggle ---- */}
        <button
          className="navbar__toggle"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* ---- Mobile drawer ---- */}
      <div
        className={`navbar__mobile ${mobileOpen ? "navbar__mobile--open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <ul className="navbar__mobile-links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="navbar__mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="navbar__cta navbar__cta--mobile"
          onClick={() => setMobileOpen(false)}
        >
          Get In Touch
        </Link>
      </div>
    </header>
  );
}
