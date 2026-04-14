"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import type { HeroSection } from "@/types";

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

const float = (delay: number, duration: number, y: number, isStudio: boolean) => ({
  initial: { y: 0 },
  animate: {
    y: isStudio ? 0 : [0, -y, 0],
    transition: isStudio ? {} : {
      duration,
      delay,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut" as const,
    },
  },
});

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface HeroSectionProps {
  data: HeroSection | null | undefined;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function HeroSection({ data }: HeroSectionProps) {
  const heroTitle = data?.title ?? "";
  const heroSubtitle =
    data?.subtitle ??
    "";
  const primaryCta = data?.primaryCta ?? {};
  const marqueeList = data?.marqueeList ?? [];

  return (
    <section
      className="relative overflow-hidden min-h-[calc(100dvh-58px)] flex items-center justify-center px-5 py-12 md:py-16 md:px-8 lg:py-20 lg:px-10"
      id="hero-section"
    >
      {/* Disable infinite animations inside the Sanity Presentation Tool iframe */}
      {/* This prevents the VisualEditing MutationObserver from crashing React! */}
      {typeof window !== "undefined" && window.self !== window.parent && (
        <span id="studio-detector" style={{ display: "none" }} />
      )}

      <div className="relative z-20 w-full max-w-[1200px] mx-auto">
        {/* ---------- Star decorations ---------- */}
        <div className="hidden md:block absolute inset-0 z-10 pointer-events-none" aria-hidden="true">
          <motion.div
            className="absolute top-[2%] left-[35%] xl:top-[5%] xl:left-[32%]"
            {...float(0, 4, 10, typeof window !== "undefined" && window.self !== window.parent)}
          >
            <Image src="/star_purple.svg" alt="" width={50} height={48} />
          </motion.div>
          <motion.div
            className="absolute top-[15%] right-[15%] xl:top-[10%] xl:right-[12%]"
            {...float(0.5, 3.5, 8, typeof window !== "undefined" && window.self !== window.parent)}
          >
            <Image src="/star_orange_group.svg" alt="" width={56} height={52} />
          </motion.div>
          <motion.div
            className="absolute bottom-[30%] left-[12%] xl:bottom-[35%] xl:left-[15%]"
            {...float(1, 3, 6, typeof window !== "undefined" && window.self !== window.parent)}
          >
            <Image src="/star_white.svg" alt="" width={22} height={22} />
          </motion.div>
          <motion.div
            className="absolute bottom-[20%] right-[25%] xl:bottom-[25%] xl:right-[22%]"
            {...float(0.3, 3.8, 7, typeof window !== "undefined" && window.self !== window.parent)}
          >
            <Image src="/star_orange.svg" alt="" width={28} height={28} />
          </motion.div>
        </div>

        {/* ---------- Main content ---------- */}
        <div className="relative z-20 text-center flex flex-col items-center gap-6 lg:gap-8">
          <motion.h1
            className="text-[clamp(2.5rem,8vw,6rem)] font-black leading-none tracking-[-0.02em] md:tracking-[-0.03em] uppercase text-foreground max-w-[900px]"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            {heroTitle.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p
            className="text-[clamp(0.9375rem,1.5vw,1.125rem)] leading-[1.6] text-[#666] max-w-[500px] lg:max-w-[540px] mx-auto"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            {heroSubtitle}
          </motion.p>

          <motion.div
            className="flex items-center gap-3 mt-2"
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <Link
              href={primaryCta.href ?? "/contact"}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[15px] font-semibold no-underline transition-all duration-200 ease-out whitespace-nowrap bg-[#0a0a0a] text-white shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 active:translate-y-0"
            >
              {primaryCta.label ?? "Start"}
              <Image
                src="/arrow_white.svg"
                alt=""
                width={28}
                height={28}
                className="shrink-0"
              />
            </Link>

            <motion.div className="hidden sm:flex" {...float(0, 2.5, 5, typeof window !== "undefined" && window.self !== window.parent)}>
              <Image src="/star_orange.svg" alt="" width={20} height={20} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ---------- Infinite Marquee Background Overlay ---------- */}
      {marqueeList.length > 0 && (
        <div
          className="absolute left-1/2 bottom-[12%] md:bottom-[5%] w-[120vw] -translate-x-1/2 -rotate-[4deg] overflow-hidden pointer-events-none z-10 flex"
          aria-hidden="true"
        >
          <motion.div
            className="flex w-max space-x-6 py-8 items-center"
            animate={{ x: typeof window !== "undefined" && window.self !== window.parent ? "0%" : ["0%", "-50%"] }}
            transition={typeof window !== "undefined" && window.self !== window.parent ? {} : { repeat: Infinity, ease: "linear", duration: 35 }}
          >
            {/* Repeat the list multiple times to ensure seamless infinite scrolling */}
            {[...marqueeList, ...marqueeList, ...marqueeList, ...marqueeList].map(
              (item, i) => {
                const bgColor = i % 2 === 0 ? "#BDBCFF" : "#FFB44B";
                return (
                  <div
                    key={`${item._key}-${i}`}
                    className="flex items-center gap-3 px-8 mx-3 py-3 md:py-4 rounded-[40px] border-2 md:border-[3px] border-[#0a0a0a] shadow-[4px_4px_0_0_#0a0a0a] md:shadow-[6px_6px_0_0_#0a0a0a] pointer-events-auto"
                    style={{ backgroundColor: bgColor }}
                  >
                    <span className="text-[17px] md:text-[22px] font-bold text-[#0a0a0a] leading-none whitespace-nowrap">
                      {item.text_1}
                    </span>
                    <span className="text-[20px] md:text-[26px] opacity-80 px-2 text-[#0a0a0a] leading-none">
                      ✦
                    </span>
                    <span className="text-[17px] md:text-[22px] font-bold text-[#0a0a0a] leading-none whitespace-nowrap">
                      {item.text_2}
                    </span>
                  </div>
                );
              }
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}
