"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
    <header
      className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-[14px] border-b border-black/5 transition-shadow duration-300 hover:shadow-[0_1px_12px_rgba(0,0,0,0.04)]"
      id="main-navbar"
    >
      <nav
        className="flex items-center justify-between max-w-[1400px] mx-auto px-5 py-3 lg:px-10 lg:py-3.5"
        aria-label="Main navigation"
      >
        {/* ---- Left: Logo + socials ---- */}
        <div className="flex items-center gap-3.5">
          <Link
            href="/"
            className="flex items-center shrink-0 transition-opacity duration-200 hover:opacity-85"
            aria-label="Nexpixelo Home"
          >
            <Image
              src="/logo.svg"
              alt="Nexpixelo"
              width={180}
              height={32}
              priority
              style={{ width: "auto", height: "auto" }}
              className="h-7 md:h-8"
            />
          </Link>

          <div className="flex items-center gap-1.5" aria-label="Social links">
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center shrink-0 leading-none rounded-full transition-transform duration-200 hover:scale-110"
              aria-label="Dribbble"
            >
              <Image src="/dribble.svg" alt="Dribbble" width={34} height={34} />
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center shrink-0 leading-none rounded-full transition-transform duration-200 hover:scale-110"
              aria-label="Behance"
            >
              <Image src="/behance.svg" alt="Behance" width={34} height={34} />
            </a>
          </div>
        </div>

        {/* ---- Right: Desktop nav + CTA ---- */}
        <div className="hidden md:flex items-center gap-1.5">
          <ul className="flex items-center gap-0.5 m-0 p-0 list-none">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-flex items-center px-5 py-2 rounded-full text-sm font-medium text-foreground no-underline border border-black/5 transition-colors duration-200 hover:bg-black/5 hover:border-black/15"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-2 ml-1 rounded-full text-sm font-semibold text-white no-underline bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-200 whitespace-nowrap hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)] active:translate-y-0"
          >
            Get In Touch
          </Link>
        </div>

        {/* ---- Mobile toggle ---- */}
        <button
          className="flex items-center justify-center p-2 border-none bg-transparent text-foreground cursor-pointer rounded-lg transition-colors duration-200 hover:bg-black/5 md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* ---- Mobile drawer ---- */}
      <div
        className={`flex flex-col md:hidden overflow-hidden bg-white/98 backdrop-blur-[14px] transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${mobileOpen
          ? "max-h-[400px] pt-4 px-5 pb-6 border-b border-black/5 gap-2"
          : "max-h-0 px-5 py-0 gap-0"
          }`}
        aria-hidden={!mobileOpen}
      >
        <ul className="flex flex-col gap-1 m-0 p-0 list-none">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="block px-4 py-3 rounded-xl text-[15px] font-medium text-foreground no-underline transition-colors duration-200 hover:bg-black/[0.04]"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 mt-2 rounded-full text-base font-semibold text-white no-underline bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-200 whitespace-nowrap"
          onClick={() => setMobileOpen(false)}
        >
          Get In Touch
        </Link>
      </div>
    </header>
  );
}
