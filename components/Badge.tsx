"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { decorationEntrance, float } from "@/lib/animations";

interface BadgeProps {
  text: string;
  color?: string;
  className?: string;
  index?: number;
  rotation?: string;
  delayOffset?: number;
  starPosition?: "left" | "right";
}

/**
 * Reusable Star Badge component with entrance and floating animations.
 */
export default function Badge({ 
  text, 
  color = "#FFB44B", 
  className = "", 
  index = 0,
  rotation = "-rotate-[9deg]",
  delayOffset = 0,
  starPosition = "left"
}: BadgeProps) {
  const isStudio = typeof window !== "undefined" && window.self !== window.parent;

  return (
    <motion.div
      className={`${rotation} ${className}`}
      variants={decorationEntrance}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        {...float(1.5 + delayOffset, 4, 5, isStudio)}
      >
        <div
          className="inline-flex items-center w-fit h-[45px] md:h-[60px] p-0.5 md:p-1 rounded-full text-[14px] md:text-[20px] font-semibold text-foreground no-underline transition-colors duration-200 whitespace-nowrap relative shadow-[2px_4px_0_0_#000000] md:shadow-[3px_6px_0_0_#000000] pointer-events-auto"
          style={{ backgroundColor: color }}
        >
          <Image 
            src="/star_white.svg" 
            alt="" 
            width={50} 
            height={48} 
            className={`absolute ${starPosition === "left" ? "left-[-5px]" : "right-[-5px]"} top-[-5px] w-[24px] h-[24px] md:w-[28px] md:h-[28px]`} 
          />
          <div className="w-full h-full flex items-center gap-2 md:gap-3 border-2 border-[#0a0a0a] rounded-[40px] px-4 py-1 md:px-8 md:py-3 ">
            {text}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
