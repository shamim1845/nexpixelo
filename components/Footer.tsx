"use client";

import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Case Gallery", href: "/projects" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Term", href: "/terms" },
] as const;

const COMPANY_LINKS = [
  { label: "Faq's", href: "/faqs" },
  { label: "Meet Our Team", href: "/team" },
  { label: "Latest News", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Footer() {
  return (
    <footer
      className="mt-auto px-5 pb-8 pt-16 md:px-8 md:pt-20 lg:px-10"
      style={{
        background:
          "radial-gradient(38% 55% at 48% 50%, rgba(220,255,126,0.45) 0%, rgba(220,255,126,0) 100%), #F3F3F1",
      }}
    >
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="flex flex-col gap-8 border-b border-black/10 pb-10 md:flex-row md:items-start md:justify-between">
          <h2 className="text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.86] tracking-[-0.03em] text-black">
            Get <span className="inline-block align-middle">🙂</span>
            <br />
            Started Now
          </h2>

          <button
            type="button"
            className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-[#7571FF] text-white transition-transform duration-200 hover:-translate-y-0.5"
            aria-label="Get started"
          >
            <Image src="/arrow_white.svg" alt="" width={36} height={36} />
          </button>
        </div>

        <div className="grid gap-10 py-10 md:grid-cols-4 md:gap-8">
          <div>
            <Link href="/" className="inline-flex">
              <Image
                src="/logo.svg"
                alt="Nexpixelo"
                width={160}
                height={30}
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
            <p className="mt-4 max-w-[280px] text-[1.8rem] leading-[1.55] text-black/85">
              I&apos;m most active on{" "}
              <a
                href="https://linkedin.com"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              , lurking on{" "}
              <a
                href="https://x.com"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>{" "}
              Catch my work on{" "}
              <a
                href="https://behance.net"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Behance
              </a>
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-[1.1rem] font-semibold text-black/70">
              Location
            </h3>
            <p className="max-w-[240px] text-[1.65rem] leading-[1.45] text-black/85">
              Suite 130 1200 Saint-Martin West Blvd. Laval, Quebec USA
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
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

          <div>
            <h3 className="mb-4 text-[1.1rem] font-semibold text-black/70">
              Links
            </h3>
            <ul className="space-y-2">
              {LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    className="text-[1.65rem] text-black/85 hover:underline"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[1.1rem] font-semibold text-black/70">
              Company
            </h3>
            <ul className="space-y-2">
              {COMPANY_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    className="text-[1.65rem] text-black/85 hover:underline"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-[28px] bg-white/65 p-6 md:p-10">
          <div className="grid items-center gap-6 md:grid-cols-[1fr_1.2fr]">
            <h3 className="text-[clamp(2.3rem,4.5vw,5.1rem)] font-black leading-[0.95] tracking-[-0.02em] text-black">
              Subscribe To Our Newsletter
            </h3>

            <form className="w-full">
              <label
                htmlFor="newsletter-email"
                className="mb-3 block text-[1.3rem] text-black/70"
              >
                Join Our Newsletter
              </label>
              <div className="flex items-center rounded-full border border-black bg-white px-3 py-2">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter your email..."
                  className="h-10 w-full border-none bg-transparent px-2 text-[1.45rem] text-black outline-none placeholder:text-black/45"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-[1.2rem] font-semibold text-black"
                >
                  Subscribe
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-[1.2rem] text-black/60 md:flex-row md:items-center md:justify-between">
          <p>Copyright © 2026 All Rights Reserved.</p>
          <p>Cookies &nbsp; . &nbsp; Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
