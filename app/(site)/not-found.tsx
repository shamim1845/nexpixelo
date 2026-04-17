"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="relative flex flex-col items-center justify-center flex-1 min-h-[calc(100vh-140px)] px-5 py-20 text-center overflow-hidden">
      {/* Decorative Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-[10%] left-[10%] md:top-[15%] md:left-[25%]"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src="/star_purple.svg" alt="" width={50} height={48} className="w-[30px] h-[30px] md:w-[50px] md:h-[50px] opacity-70 rotate-12" />
        </motion.div>

        <motion.div
          className="absolute bottom-[20%] right-[10%] md:bottom-[25%] md:right-[20%]"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Image src="/star_orange.svg" alt="" width={50} height={50} className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] opacity-70 -rotate-12" />
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-5 max-w-[600px] mt-[-50px]">
        {/* Huge 404 */}
        <motion.h1 
          className="text-[clamp(6rem,22vw,14rem)] font-boldonse uppercase text-foreground leading-[1] tracking-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.h2 
          className="text-[clamp(1.5rem,4vw,2.5rem)] font-semibold text-foreground leading-tight px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          Oops! We lost that page
        </motion.h2>

        <motion.p 
          className="text-[16px] md:text-[18px] text-[#666666] mb-5 w-[80%] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>

        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center h-[50px] md:h-[60px] px-8 md:px-10 rounded-full text-[15px] md:text-[16px] font-daysOne font-medium text-white bg-[#000000] border border-black shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-200 whitespace-nowrap hover:-translate-y-[2px] hover:shadow-[0_6px_24px_rgba(0,0,0,0.2)] active:translate-y-0"
          >
            Return Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}