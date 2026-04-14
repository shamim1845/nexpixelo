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

  return (
    <section
      className="overflow-hidden px-4 py-16 md:px-8 md:py-20 lg:px-10"
      id="testimonials-section"
    >
      <motion.div
        className="flex w-max items-stretch gap-4 md:gap-5"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 28, ease: "linear", repeat: Infinity }}
      >
        {loopCards.map((item, index) => {
          const bgColor = item.color || FALLBACK_COLORS[index % FALLBACK_COLORS.length];
          const avatarUrl = item.avatar
            ? urlFor(item.avatar).width(120).height(120).fit("crop").url()
            : null;

          return (
            <article
              key={`${item._id}-${index}`}
              className="flex min-h-[250px] w-[286px] flex-col rounded-[4px] border border-black/10 px-6 py-7"
              style={{ backgroundColor: bgColor }}
            >
              <p className="text-[28px] leading-none text-black/40">"</p>
              <p className="mt-2 line-clamp-7 text-[29px] font-medium leading-[1.45] text-black/90">
                {item.quote}
              </p>

              <div className="mt-auto flex items-end justify-between gap-3 pt-6">
                <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white/90">
                  {avatarUrl && (
                    <Image
                      src={avatarUrl}
                      alt={item.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  )}
                </span>

                <div className="text-right leading-tight">
                  <p className="text-[17px] font-semibold text-black/95">
                    {item.name}
                  </p>
                  <p className="text-[14px] text-black/45">{item.role}</p>
                </div>
              </div>
            </article>
          );
        })}
      </motion.div>
    </section>
  );
}
