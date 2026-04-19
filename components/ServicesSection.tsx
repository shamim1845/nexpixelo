"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";

import type { Service } from "@/types";

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
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};


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
    <section className="relative overflow-hidden py-20 md:py-24 lg:py-28" id="services">
      <div className="content_container">

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-x-8 sm:gap-y-20 lg:gap-0"
          variants={containerVariants}
        >
          {services.map((service, i) => {
            const colors = ["#E7E6FF", "#FFE3E2", "#D8F2E3", "#F5E6A3"];
            const bgColor = service.color || colors[i % colors.length];

            // Staggered layout offsets for desktop (lg) and tablet (sm)
            const offsets = [
              "sm:mt-0 lg:mt-0",
              "sm:mt-12 lg:mt-16",
              "sm:mt-0 lg:mt-28",
              "sm:mt-12 lg:mt-8"
            ];
            const offsetClass = offsets[i % offsets.length];

            // Resolve icon source
            let iconSrc: string | null = null;
            if (service.iconImage) {
              iconSrc = urlFor(service.iconImage).width(120).height(120).url();
            } else if (service.icon) {
              iconSrc = ICON_MAP[service.icon] ?? null;
            }

            // resolve card number icon source
            let cardNumberIconSrc: string | null = null;
            if (service.cardNumberIcon) {
              cardNumberIconSrc = urlFor(service.cardNumberIcon).width(120).height(120).url();
            }

            const card = (
              <motion.article
                key={service._id}
                className={`group relative ${offsetClass} transition-all duration-500`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Main Colored Card */}
                <div
                  className="relative flex flex-col gap-5 rounded-[40px] sm:rounded-[50px] lg:rounded-[60px] p-6 sm:p-8 md:p-10 transition-transform duration-300 overflow-hidden  min-h-min"
                  style={{
                    backgroundColor: bgColor,
                    // apply shadow base on even or odd top for odd bottom for even
                    boxShadow: (i + 1) % 2 === 0 ? "0px 5px 0px 0px rgba(0, 0, 0, 1)" : "0px -5px 0px 0px rgba(0, 0, 0, 1)"
                  }}
                >


                  <div className="flex-1 relative z-10">
                    {/* Icon Area */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-6 sm:mb-8 relative">
                      <div className="absolute inset-0 bg-black/5 rounded-full scale-125 sm:scale-150 blur-sm" />
                      {iconSrc ? (
                        <Image
                          src={iconSrc}
                          alt={service.title}
                          width={71}
                          height={71}
                          className="relative z-10 object-contain w-[50px] sm:w-[71px] h-auto"
                        />
                      ) : (
                        <span className="relative z-10 text-[2.5rem] font-bold text-black/20">
                          ✦
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex justify-between gap-3">
                      <h3 className="flex-1 text-[18px] sm:text-[20px] font-boldonse font-normal capitalize text-black">
                        {service.title}
                      </h3>

                      {/* Card Number (Right Side) */}
                      <div className="w-fit pointer-events-none select-none">

                        {
                          cardNumberIconSrc && (
                            <Image
                              src={cardNumberIconSrc}
                              alt={service.title}
                              width={50}
                              height={50}
                              sizes="(max-width: 768px) 50px, 50px"
                              className="relative z-10 object-contain"
                            />
                          )
                        }
                      </div>
                    </div>

                    {/* Description */}
                    {/* <div className="pt-2 w-full max-w-[70%]">
                      <p className="text-base sm:text-[18px] font-normal">{service.description}</p>
                    </div> */}
                  </div>


                  {/* Footer */}
                  <div className="flex flex-col gap-8 relative z-10">
                    <div className="flex justify-start">
                      <Image
                        src={(i + 1) % 2 === 0 ? "/arrow_black.svg" : "/arrow_white.svg"}
                        alt="View Details"
                        width={60}
                        height={60}
                        className="transition-transform duration-300 group-hover:translate-x-1 w-[50px] sm:w-[69px] h-auto"
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            );

            if (service.navigationUrl) {
              return (
                <Link key={service._id} href={service.navigationUrl} className="contents">
                  {card}
                </Link>
              );
            }

            return card;
          })}
        </motion.div>
      </div>
    </section>
  );
}
