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
    transition: { duration: 0.7, delay: i * 0.15, ease: EASE },
  }),
};

const decorationEntrance = {
  hidden: { opacity: 0, scale: 0.6, rotate: -10 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, delay: 0.4 + i * 0.15, ease: EASE },
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
      className="relative overflow-hidden flex items-center justify-center px-5 md:px-8 lg:px-10 pt-16 pb-32 md:pt-24 md:pb-48 lg:pt-30 lg:pbe-60 "
      id="hero-section"
    >
      {/* Disable infinite animations inside the Sanity Presentation Tool iframe */}
      {/* This prevents the VisualEditing MutationObserver from crashing React! */}
      {typeof window !== "undefined" && window.self !== window.parent && (
        <span id="studio-detector" style={{ display: "none" }} />
      )}

      <div className="relative z-20 w-full max-w-[1200px] mx-auto">
        {/* ---------- Star decorations ---------- */}
        <div className="absolute inset-0 z-10 pointer-events-none" aria-hidden="true">
          {/* Top  badge */}
          <motion.div
            className="hidden lg:block absolute left-1/2  -translate-x-1/2 top-[-15%] -rotate-[9deg]"
            variants={decorationEntrance}
            custom={0}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              {...float(1.5, 4, 5, typeof window !== "undefined" && window.self !== window.parent)}
            >
              <div
                className="inline-flex items-center w-fit h-[60px] px-8 py-2 rounded-full text-[20px] font-semibold text-foreground no-underline bg-[#FFFFFF33] border border-white/70 transition-colors duration-200 whitespace-nowrap relative"
              >
                <Image src="/star_white.svg" alt="" width={50} height={48}
                  className="absolute left-[-5px] top-[-5px] w-[28px] h-[28px]" />

                Creative Agency
              </div>
            </motion.div>
          </motion.div>

          {/* Center  badge left*/}
          <motion.div
            className="hidden xl:block absolute left-[-10%] bottom-[50%] -rotate-[32deg]"
            variants={decorationEntrance}
            custom={1}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              {...float(1.7, 4, 5, typeof window !== "undefined" && window.self !== window.parent)}
            >
              <div
                className="inline-flex items-center w-fit h-[60px] p-1 rounded-full text-[20px] font-semibold text-foreground no-underline bg-[#C1BFFF] transition-colors duration-200 whitespace-nowrap relative shadow-[3px_6px_0_0_#0000001A] pointer-events-auto"
              >
                <div className="w-full h-full flex items-center gap-3 border border-[#0a0a0a] rounded-[40px] px-6 py-2 md:px-8 md:py-3 ">

                  <Image src="/star_white.svg" alt="" width={50} height={48}
                    className="absolute right-[-1px] top-[-7px] w-[28px] h-[28px] rotate-[32deg]" />

                  Digital Branding
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Center  badge right*/}
          <motion.div
            className="hidden xl:block absolute right-[-10%] bottom-[40%] rotate-[25deg]"
            variants={decorationEntrance}
            custom={2}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              {...float(1.9, 4, 5, typeof window !== "undefined" && window.self !== window.parent)}
            >
              <div
                className="inline-flex items-center w-fit h-[60px] p-1 rounded-full text-[20px] font-semibold text-foreground no-underline bg-[#C1BFFF] transition-colors duration-200 whitespace-nowrap relative shadow-[3px_6px_0_0_#0000001A] pointer-events-auto"
              >
                <div className="w-full h-full flex items-center gap-3 border border-[#0a0a0a] rounded-[40px] px-6 py-2 md:px-8 md:py-3 ">

                  <Image src="/star_white.svg" alt="" width={50} height={48}
                    className="absolute right-[-1px] top-[-7px] w-[28px] h-[28px] rotate-[32deg]" />

                  UI/UX Design
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Top Stars */}
          <motion.div
            className="absolute top-[4%] left-[0%] md:top-[5%] md:left-[18%] lg:top-[8%] lg:left-[20%]"
            variants={decorationEntrance}
            custom={3}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              {...float(2.1, 4, 10, typeof window !== "undefined" && window.self !== window.parent)}
            >
              <Image src="/star_purple.svg" alt="" width={50} height={48}
                className="w-[34px] h-auto lg:w-[40px] xl:w-[50px]" />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute top-[4%] right-[0%] md:top-[5%] md:right-[18%] lg:top-[8%] lg:right-[20%]"
            variants={decorationEntrance}
            custom={4}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              {...float(2.3, 3.5, 8, typeof window !== "undefined" && window.self !== window.parent)}
            >
              <Image src="/star_orange.svg" alt="" width={56} height={52} className="w-[34px] h-auto lg:w-[40px] xl:w-[50px]" />
            </motion.div>
          </motion.div>

          {/* Bottom Stars */}
          <motion.div
            className="absolute bottom-[12%] left-[2%]"
            variants={decorationEntrance}
            custom={5}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              {...float(2.5, 3, 6, typeof window !== "undefined" && window.self !== window.parent)}
            >
              <Image src="/star_orange_group.svg" alt="" width={56} height={52} className="w-[34px] h-auto lg:w-[40px] xl:w-[50px]" />
            </motion.div>
          </motion.div>



        </div>

        {/* ---------- Main content ---------- */}
        <div className="relative z-20 text-center flex flex-col items-center gap-6 lg:gap-8">
          <motion.h1
            className="text-[clamp(2.5rem,8vw,6rem)] font-black font-boldonse font-normal uppercase text-foreground max-w-[950px] leading-[1.5] tracking-wide"
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
            className="text-[clamp(0.9375rem,1.5vw,1.125rem)] leading-[1.6] text-[#000000] max-w-[500px] lg:max-w-[540px] mx-auto"
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
              href="/contact"
              className="inline-flex items-center justify-center w-fit h-[50px] xl:h-[60px] px-8 md:px-10 lg:px-12 py-2 ml-1 rounded-full text-[14px] xl:text-[16px] font-medium text-white bg-[#000000] border border-black shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-200 whitespace-nowrap hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)] active:translate-y-0"
            >
              {primaryCta.label ?? "Let's Connect"}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ---------- Infinite Marquee Background Overlay ---------- */}
      {marqueeList.length > 0 && (
        <div
          className="absolute left-1/2 bottom-[0%] md:bottom-[2%] lg:bottom-[3%] xl:bottom-[5%] w-[120vw] -translate-x-1/2 -rotate-[4deg] overflow-hidden pointer-events-none z-10 flex"
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
                    className="flex items-center gap-3 px-2 py-1.5 md:px-3 md:py-1.5 mx-2 md:mx-3 rounded-[40px] shadow-[4px_4px_0_0_#0a0a0a] md:shadow-[6px_6px_0_0_#0a0a0a] pointer-events-auto"
                    style={{ backgroundColor: bgColor }}
                  >
                    <div className="w-full h-full flex items-center gap-3 border-2 border-[#0a0a0a] rounded-[40px] px-6 py-2 md:px-8 md:py-3 ">

                      <span className="text-[17px] md:text-[22px] lg:text-[28px] font-semibold text-[#0a0a0a] leading-none whitespace-nowrap">
                        {item.text_1}
                      </span>
                      <span className="text-[20px] md:text-[26px] lg:text-[28px] opacity-80 px-2 text-[#0a0a0a] leading-none">
                        ✦
                      </span>
                      <span className="text-[17px] md:text-[22px] lg:text-[28px] font-semibold text-[#0a0a0a] leading-none whitespace-nowrap">
                        {item.text_2}
                      </span>
                    </div>
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
