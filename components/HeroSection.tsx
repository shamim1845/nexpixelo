"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import "./HeroSection.css";

import type { HomePage } from "@/types";

// ---------------------------------------------------------------------------
// Floating tag data (static decorative elements)
// ---------------------------------------------------------------------------

const FLOATING_TAGS = [
  {
    icon: "/logo_web_design.svg",
    label: "Web Design",
    color: "#FFF3E0",
    iconW: 40,
    iconH: 28,
    position: "hero__tag--top-left" as const,
  },
  {
    icon: "/logo_ui_ux.svg",
    label: "UI/UX",
    color: "#F3E5F5",
    iconW: 32,
    iconH: 32,
    position: "hero__tag--top-right" as const,
  },
  {
    icon: "/logo_marketing.svg",
    label: "Marketing",
    color: "#E8F5E9",
    iconW: 36,
    iconH: 36,
    position: "hero__tag--bottom-left" as const,
  },
  {
    icon: "/logo_webflow.svg",
    label: "Webflow",
    color: "#E3F2FD",
    iconW: 36,
    iconH: 22,
    position: "hero__tag--bottom-right" as const,
  },
];

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: EASE },
  }),
};

const float = (delay: number, duration: number, y: number) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -y, 0],
    transition: {
      duration,
      delay,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut" as const,
    },
  },
});

const tagReveal = (delay: number) => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay, ease: EASE },
  },
});

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface HeroSectionProps {
  data: HomePage | null;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function HeroSection({ data }: HeroSectionProps) {
  const heroTitle = data?.heroTitle ?? "";
  const heroSubtitle =
    data?.heroSubtitle ??
    "";
  const primaryCta = data?.heroPrimaryCta ?? { label: "Start", href: "/contact" };

  return (
    <section className="hero" id="hero-section">
      {/* Background gradient orbs */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
      </div>

      <div className="hero__container">
        {/* ---------- Floating tags ---------- */}
        <div className="hero__tags" aria-hidden="true">
          {FLOATING_TAGS.map((tag, i) => (
            <motion.div
              key={tag.label}
              className={`hero__tag ${tag.position}`}
              variants={tagReveal(0.4 + i * 0.15)}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="hero__tag-inner"
                style={{ background: tag.color }}
                {...float(i * 0.5, 3 + i * 0.4, 8 + i * 2)}
              >
                <Image
                  src={tag.icon}
                  alt={tag.label}
                  width={tag.iconW}
                  height={tag.iconH}
                />
                <span className="hero__tag-label">{tag.label}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* ---------- Star decorations ---------- */}
        <div className="hero__stars" aria-hidden="true">
          <motion.div
            className="hero__star hero__star--purple"
            {...float(0, 4, 10)}
          >
            <Image src="/star_purple.svg" alt="" width={50} height={48} />
          </motion.div>
          <motion.div
            className="hero__star hero__star--orange-group"
            {...float(0.5, 3.5, 8)}
          >
            <Image src="/star_orange_group.svg" alt="" width={56} height={52} />
          </motion.div>
          <motion.div
            className="hero__star hero__star--white"
            {...float(1, 3, 6)}
          >
            <Image src="/star_white.svg" alt="" width={22} height={22} />
          </motion.div>
          <motion.div
            className="hero__star hero__star--orange"
            {...float(0.3, 3.8, 7)}
          >
            <Image src="/star_orange.svg" alt="" width={28} height={28} />
          </motion.div>
        </div>

        {/* ---------- Main content ---------- */}
        <div className="hero__content">
          <motion.h1
            className="hero__heading"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            {heroTitle.split("\n").map((line, i) => (
              <span key={i} className="hero__heading-line">
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p
            className="hero__subtitle"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            {heroSubtitle}
          </motion.p>

          <motion.div
            className="hero__actions"
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <Link
              href={primaryCta.href ?? "/contact"}
              className="hero__btn hero__btn--primary"
            >
              {primaryCta.label ?? "Start"}
              <Image
                src="/arrow_white.svg"
                alt=""
                width={28}
                height={28}
                className="hero__btn-arrow"
              />
            </Link>

            <motion.div className="hero__btn-stars" {...float(0, 2.5, 5)}>
              <Image src="/star_orange.svg" alt="" width={20} height={20} />
            </motion.div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
