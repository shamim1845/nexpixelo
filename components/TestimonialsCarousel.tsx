"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { urlFor } from "@/lib/sanity";
import type { Testimonial } from "@/types";

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const FALLBACK_COLORS = ["#CFCBFF", "#F6D675", "#F5D5CD", "#C2D9DB"];

export default function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  if (!testimonials || testimonials.length === 0) return null;

  const loopCards = [...testimonials, ...testimonials, ...testimonials];

  // Disable infinite animations inside the Sanity Presentation Tool iframe
  // This prevents the VisualEditing MutationObserver from crashing React!
  const isStudio = typeof window !== "undefined" && window.self !== window.parent;

  return (
    <section
      className="overflow-hidden px-4 mt-20 md:px-8 md:mt-24 lg:mt-28 lg:px-10"
      id="testimonials-section"
    >
      <motion.div
        className="flex w-max items-stretch gap-4 md:gap-5 lg:gap-6"
        animate={{ x: isStudio ? "0%" : ["0%", "-33.333%"] }}
        transition={isStudio ? {} : { duration: 28, ease: "linear", repeat: Infinity }}
      >
        {loopCards.map((item, index) => {
          const bgColor = item.color || FALLBACK_COLORS[index % FALLBACK_COLORS.length];
          const avatarUrl = item.avatar
            ? urlFor(item.avatar).width(120).height(120).fit("crop").url()
            : null;

          return (
            <article
              key={`${item._id}-${index}`}
              className="flex min-h-[250px] w-[280px] sm:w-[340px] md:w-[400px] flex-col rounded-[10px] p-5 md:p-7"
              style={{
                backgroundColor: bgColor,

                transform: `rotate(${[-2, 0, 2, 0][index % 4]}deg)`
              }}
            >
              <p className="mt-2 line-clamp-7 text-[18px] sm:text-[20px] md:text-[24px] font-medium leading-[1.45] text-black">
                {item.quote}
              </p>

              <div className="mt-auto flex items-end gap-3 pt-6 md:pt-8">
                <span className="relative h-10 w-10 md:h-12 md:w-12 shrink-0 overflow-hidden rounded-full bg-white/90">
                  {avatarUrl && (
                    <Image
                      src={avatarUrl}
                      alt={item.name}
                      fill
                      sizes="60px"
                      className="object-cover"
                    />
                  )}
                </span>

                <div className="leading-tight">
                  <p className="text-[18px] sm:text-[20px] md:text-[24px] font-medium text-black">
                    {item.name}
                  </p>
                  <p className="text-[14px] sm:text-[16px] md:text-[18px] text-medium text-[#666567]">{item.role}</p>
                </div>
              </div>
            </article>
          );
        })}
      </motion.div>
    </section>
  );
}
