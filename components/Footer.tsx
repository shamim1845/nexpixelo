"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { EASE } from "@/lib/animations";

const footerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: EASE },
  }),
};

// Navigation links
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
      className="pt-16 pb-10"
      id="contact"
      style={{
        background: "linear-gradient(120deg, rgba(255, 255, 255, 0) 10%, rgba(234, 244, 122, 0.7) 36.84%, rgba(255, 255, 255, 0.224) 65.38%)",
      }}
    >
      <div className="content_container">
        <motion.div
          className="flex flex-col gap-8 border-b border-[#B8B2B2] pb-10 md:flex-row md:items-start md:justify-between"
          variants={footerVariants}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-[clamp(1.5rem,6.7vw,96px)] font-black font-boldonse uppercase text-black">
            Get <span className="inline-block align-middle">
              <Image
                src="/smile_emoji.svg"
                alt="Smile emoji"
                width={105}
                height={105}
                className="w-[50px] md:w-[80px] lg:w-[105px]"
              />
            </span>
            <br />
            Started Now
          </h2>

          <div className="w-fit">
            <Image src="/arrow_purple_external.svg" alt="" width={232} height={232} className="w-[100px] md:w-[180px] lg:w-[232px]" />
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16 md:gap-8"
          variants={footerVariants}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <Link href="/" className="inline-flex">
              <Image
                src="/logo_footer.svg"
                alt="Nexpixelo"
                width={166}
                height={46}
                style={{ width: "auto", height: "auto" }}
              />
            </Link>
            <p className="mt-4 max-w-[280px] text-[18px] md:text-[24px] font-medium">
              I&apos;m most active on{" "}
              <a
                href="https://linkedin.com"
                className="text-[#7571FF] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              , lurking on{" "}
              <a
                href="https://x.com"
                className="text-[#7571FF] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>{" "}
              Catch my work on{" "}
              <a
                href="https://behance.net"
                className="text-[#7571FF] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Behance
              </a>
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-[20px] md:text-[24px] font-semibold text-[#5E5D62]">
              Location
            </h3>
            <p className="max-w-[240px] text-[18px] md:text-[20px] font-medium text-black">
              Suite 130 1200 Saint-Martin West Blvd. Laval, Quebec USA
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center shrink-0 transition-transform duration-200 hover:scale-110"
                aria-label="Dribbble"
              >
                <Image
                  src="/dribble.svg"
                  alt="Dribbble"
                  width={50}
                  height={50}
                />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center shrink-0 transition-transform duration-200 hover:scale-110"
                aria-label="Behance"
              >
                <Image
                  src="/behance.svg"
                  alt="Behance"
                  width={50}
                  height={50}
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-[20px] md:text-[24px] font-semibold text-[#5E5D62]">
              Links
            </h3>
            <ul className="space-y-2">
              {LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    className="text-[18px] md:text-[20px] text-black hover:underline"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[20px] md:text-[24px] font-semibold text-[#5E5D62]">
              Company
            </h3>
            <ul className="space-y-2">
              {COMPANY_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    className="text-[18px] md:text-[20px] text-black hover:underline"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="rounded-[32px] sm:rounded-[48px] lg:rounded-[59px] bg-white p-6 sm:p-12 lg:p-16"
          variants={footerVariants}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
            <h3 className="text-[24px] sm:text-[36px] lg:text-[48px] font-black font-boldonse text-black max-w-[580px]">
              Subscribe To Our Newsletter
            </h3>

            <form className="w-full">
              <label
                htmlFor="newsletter-email"
                className="mb-3 block text-[20px] text-[#5E5D62]"
              >
                Join Our Newsletter
              </label>
              <div className="flex items-center rounded-full border-2 border-black bg-white px-3 py-2">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter your email..."
                  className="h-10 w-full border-none bg-transparent px-2 text-[18px] font-normal text-black outline-none placeholder:text-black/45"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full px-2 py-2 text-[16px] font-semibold text-black hover:text-[#7571ff] transition-all duration-200 cursor-pointer group"
                >
                  <span className="hidden sm:block"> Subscribe</span>
                  <span aria-hidden="true"><svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:fill-[#7571ff]">
                    <g clipPath="url(#clip0_1_31)">
                      <path d="M23.8412 11.1316L18.3868 5.9044C18.1909 5.68514 17.8466 5.65958 17.6178 5.8474C17.389 6.03517 17.3623 6.36515 17.5583 6.58441C17.5766 6.60485 17.5965 6.62394 17.6178 6.64142L22.1395 10.98H0.545425C0.244213 10.98 0 11.214 0 11.5027C0 11.7914 0.244213 12.0254 0.545425 12.0254H22.1395L17.6178 16.3587C17.389 16.5465 17.3623 16.8764 17.5583 17.0957C17.7543 17.315 18.0986 17.3405 18.3274 17.1527C18.3487 17.1352 18.3686 17.1161 18.3868 17.0957L23.8413 11.8685C24.0527 11.6647 24.0527 11.3355 23.8412 11.1316Z" fill="currentColor" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_31">
                        <rect width="24" height="23" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col gap-3 text-[18px] sm:text-[20px] text-[#5E5D62] font-medium md:flex-row md:items-center md:justify-between"
          variants={footerVariants}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p>Copyright © 2026 All Rights Reserved.</p>
          <p>Cookies &nbsp; . &nbsp; Privacy Policy</p>
        </motion.div>
      </div>
    </footer>
  );
}
