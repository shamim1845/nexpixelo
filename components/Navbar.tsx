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
      className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-[14px] transition-shadow duration-300 "
      id="main-navbar"
    >
      <nav
        className="flex items-center justify-between max-w-[1400px] mx-auto px-5 py-3 lg:px-6 xl:px-10 lg:py-3.5"
        aria-label="Main navigation"
      >
        {/* ---- Left: Logo + socials ---- */}
        <div className="flex items-center gap-2 lg:gap-3 xl:gap-4">
          <Link
            href="/"
            className="flex items-center shrink-0 transition-opacity duration-200 hover:opacity-85 w-[160px] sm:w-[200px] lg:w-[200px] xl:w-[254px]"
            aria-label="Nexpixelo Home"
          >
            <Image
              src="/logo.svg"
              alt="Nexpixelo"
              width={254}
              height={46}
              priority
              className="w-full h-auto"
            />
          </Link>

          <div className="flex items-center gap-1.5 lg:gap-1.5 xl:gap-2 shrink-0" aria-label="Social links">
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center shrink-0 leading-none rounded-full transition-transform duration-200 hover:scale-110"
              aria-label="Dribbble"
            >
              <Image src="/dribble.svg" alt="Dribbble" width={50} height={50} className="w-[34px] h-[34px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px]" />
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center shrink-0 leading-none rounded-full transition-transform duration-200 hover:scale-110"
              aria-label="Behance"
            >
              <Image src="/behance.svg" alt="Behance" width={50} height={50} className="w-[34px] h-[34px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px]" />
            </a>
          </div>
        </div>

        {/* ---- Right: Desktop nav + CTA ---- */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-6 shrink-0 z-10">
          <ul className="flex items-center gap-2 xl:gap-4 m-0 p-0 list-none">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>



                <Link
                  href={href}
                  className="inline-flex items-center w-fit h-[44px] xl:h-[50px] px-4 xl:px-6 py-2 rounded-full text-[15px] xl:text-[18px] font-medium text-foreground no-underline bg-[#FFFFFF33] hover:bg-[#ffffff99] border border-white/70 hover:border-white transition-colors duration-200 whitespace-nowrap"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-fit h-[50px] xl:h-[60px] px-6 xl:px-8 py-2 ml-1 rounded-full text-[14px] xl:text-[16px] font-daysOne font-medium text-white bg-[#000000] border border-black shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-200 whitespace-nowrap hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)] active:translate-y-0"
          >
            Get In Touch
          </Link>
        </div>

        {/* ---- Mobile toggle ---- */}
        <button
          className="flex items-center justify-center w-[44px] h-[44px] border border-white/70 bg-[#FFFFFF33] text-foreground cursor-pointer rounded-full outline-none focus:outline-none transition-colors duration-200 hover:bg-[#ffffff99] hover:border-white lg:hidden"
          style={{ WebkitTapHighlightColor: "transparent" }}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* ---- Mobile drawer ---- */}
      <div
        className={`flex flex-col lg:hidden overflow-hidden bg-white/40 backdrop-blur-[24px] rounded-3xl mx-3 border-white/50 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${mobileOpen
          ? "max-h-[500px] mt-2 p-4 border shadow-[0_8px_32px_rgba(0,0,0,0.1)] gap-3 opacity-100 visible"
          : "max-h-0 m-0 p-0 border-0 shadow-none gap-0 opacity-0 invisible"
          }`}
        aria-hidden={!mobileOpen}
      >
        <ul className="flex flex-col gap-2 m-0 p-0 list-none">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex items-center w-full h-[50px] px-6 py-2 rounded-full text-[18px] font-medium text-foreground no-underline bg-[#FFFFFF33] hover:bg-[#ffffff99] border border-white/70 hover:border-white transition-colors duration-200"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="flex items-center justify-center w-full h-[60px] px-8 py-2 mt-2 rounded-full text-[16px] font-daysOne font-medium text-white bg-[#000000] border border-black shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-200 whitespace-nowrap active:scale-[0.98]"
          onClick={() => setMobileOpen(false)}
        >
          Get In Touch
        </Link>
      </div>
    </header>
  );
}
