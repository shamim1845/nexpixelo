"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

import type { Service } from "@/types";

// ---------------------------------------------------------------------------
// Default pastel palette — used when no `color` is set in Sanity
// ---------------------------------------------------------------------------

const PASTEL_COLORS = [
  "#D5CFEF", // lavender
  "#F8D5D0", // rose
  "#D1EDDA", // mint
  "#F3D9F5", // pink
  "#D5E8F5", // sky
  "#FDE8C8", // peach
  "#E0F0E3", // sage
  "#F5E6A3", // butter
];

// ---------------------------------------------------------------------------
// Icon map — maps Sanity `icon` string to a public SVG path.
// Fall back to a generic dot if the icon isn't in the map.
// ---------------------------------------------------------------------------

const ICON_MAP: Record<string, string> = {
  "ui-ux": "/logo_ui_ux.svg",
  "web-design": "/logo_web_design.svg",
  marketing: "/logo_marketing.svg",
  webflow: "/logo_webflow.svg",
};

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

// ---------------------------------------------------------------------------
// Arrow icon (inline SVG)
// ---------------------------------------------------------------------------

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 text-neutral-900"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface ServicesSectionProps {
  services: Service[];
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function ServicesSection({ services }: ServicesSectionProps) {
  if (!services || services.length === 0) return null;

  return (
    <section className="relative overflow-hidden py-20 md:py-24 lg:py-28 px-5 md:px-8 lg:px-10" id="services-section">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <p className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-widest uppercase text-neutral-500 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            What We Do
          </p>
          <h2 className="text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.1] tracking-tight text-foreground">
            Our Services
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((service, i) => {
            const bgColor =
              service.color || PASTEL_COLORS[i % PASTEL_COLORS.length];
            const number = String(i + 1).padStart(2, "0");

            // Resolve icon source
            let iconSrc: string | null = null;
            if (service.iconImage) {
              iconSrc = urlFor(service.iconImage).width(120).height(120).url();
            } else if (service.icon) {
              iconSrc = ICON_MAP[service.icon] ?? null;
            }

            return (
              <motion.article
                key={service._id}
                className="group relative flex flex-col rounded-[28px] p-8 md:p-9 min-h-[280px] md:min-h-[320px] lg:min-h-[360px] overflow-hidden cursor-pointer border-2 border-black/5 transition-all duration-350 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-105 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
                style={{ backgroundColor: bgColor }}
                variants={cardVariants}
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center shrink-0 mb-6">
                  {iconSrc ? (
                    <Image
                      src={iconSrc}
                      alt={service.title}
                      width={56}
                      height={56}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-[2rem] font-bold text-black/25">
                      ✦
                    </span>
                  )}
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 z-10">
                  <h3 className="text-[22px] font-bold text-neutral-900 mb-2 leading-[1.2]">
                    {service.title}
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-black/55 max-w-[280px]">
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="mt-auto pt-5 z-10 w-fit shrink-0">
                  <span
                    className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-all duration-250 ease-out border-none cursor-pointer group-hover:translate-x-1 group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
                    aria-hidden="true"
                  >
                    <ArrowIcon />
                  </span>
                </div>

                {/* Watermark number */}
                <span
                  className="absolute bottom-1 right-4 text-[clamp(5rem,10vw,7.5rem)] font-black leading-none tracking-tight text-black/5 pointer-events-none select-none"
                  aria-hidden="true"
                >
                  {number}
                </span>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
