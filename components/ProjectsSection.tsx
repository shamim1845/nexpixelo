"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { urlFor } from "@/lib/sanity";
import type { Project } from "@/types";

interface ProjectsSectionProps {
  projects: Project[];
}

const CARD_BACKGROUNDS = [
  "linear-gradient(90deg, #F7F2F7 0%, #E0DCFF 100%)",
  "linear-gradient(90deg, #F8F3F7 0%, #ECFBE6 100%)",
  "linear-gradient(90deg, #F6F0F8 0%, #FBE2F0 100%)",
  "linear-gradient(90deg, #F7F0FA 0%, #F3E6FF 100%)",
];
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

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

const getCategoryBadgeColor = (category: string) => {
  switch (category) {
    case "user-experience":
      return "#BDBCFF";
    case "product-design":
      return "#D3F8B4";
    case "website-design":
      return "#F5DC85";
    case "digital-marketing":
      return "#f2afb5";
    default:
      return "#C1BFFF";
  }
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <section
      className="content_container py-20 md:py-24 lg:py-28"
      id="projects-section"
    >
      <div>
        {/* heading and sub heading */}
        <div className="mb-20 md:mb-16 lg:mb-20 flex flex-col items-center gap-6 text-center">
          {/* Top  badge */}
          <motion.div
            className="-rotate-[9deg]"
            variants={decorationEntrance}
            custom={0}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              {...float(1.5, 4, 5, typeof window !== "undefined" && window.self !== window.parent)}
            >
              <div
                className="inline-flex items-center w-fit h-[50px] sm:h-[60px] px-6 sm:px-8 py-2 rounded-full text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-foreground no-underline bg-[#FFFFFF33] border border-white/70 transition-colors duration-200 whitespace-nowrap relative"
              >
                <Image src="/star_white.svg" alt="" width={50} height={48}
                  className="absolute left-[-5px] top-[-5px] w-[24px] h-[24px] md:w-[28px] md:h-[28px]" />

                Latest Projects
              </div>
            </motion.div>
          </motion.div>

          <h2 className="text-[32px] sm:text-[48px] md:text-[clamp(3rem,5vw,120px)] font-boldonse uppercase text-black">
            Latest Work
          </h2>
        </div>

        {/* projects cards */}
        <div className="flex flex-col gap-6 md:gap-7">
          {projects.map((project, index) => {
            const cardBackground =
              CARD_BACKGROUNDS[index % CARD_BACKGROUNDS.length];
            const imageUrl = urlFor(project.image)
              .width(1100)
              .height(700)
              .fit("crop")
              .url();
            const href = project.projectUrl || "#";

            return (
              <article
                key={project._id}
                className="grid gap-6 rounded-[10px] p-5 md:grid-cols-[1fr_1.25fr] md:gap-7 md:p-8 lg:gap-10"
                style={{ background: cardBackground }}
              >
                <div className="flex flex-col">
                  <p className="mb-2 md:mb-3 text-[18px] md:text-[32px] lg:text-[40px] font-medium text-black">
                    {project.title}
                  </p>
                  <h3 className="mb-4 md:mb-5 text-[20px] sm:text-[32px] md:text-[clamp(1.9rem,3vw,48px)] font-boldonse leading-[2] md:leading-[1.8] lg:leading-[74px] uppercase text-black">
                    {project.description}
                  </h3>

                  <div className="mt-auto flex items-center gap-3">
                    <Link
                      href={href}
                      target={project.projectUrl ? "_blank" : undefined}
                      rel={
                        project.projectUrl ? "noopener noreferrer" : undefined
                      }
                      className="inline-flex p-3 md:p-3.5 items-center justify-center rounded-full transition-transform duration-200 hover:-translate-y-0.5"
                      style={{ backgroundColor: "#7571FF" }}
                      aria-label={`Open ${project.title}`}
                    >
                      <Image
                        src="/arrow_white.svg"
                        alt=""
                        width={83}
                        height={83}
                        className="w-[45px] h-[45px] md:w-[65px] md:h-[65px] lg:w-[83px] lg:h-[83px] object-contain"
                      />
                    </Link>
                  </div>

                  {project.tags && project.tags.length > 0 && (
                    <div className="mt-6 md:mt-10 flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={`${project._id}-${tag}`}
                          className="rounded-full border border-black bg-white py-2 px-4 text-[16px] md:text-[18px] lg:text-[20px] font-semibold uppercase tracking-wide text-[#4D4D4A]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative rounded-[10px] border-[4px] md:border-[6px] border-black bg-[#D9D9D9] aspect-[4/3] md:aspect-auto min-h-[250px] md:min-h-0">
                  <Image
                    src={imageUrl}
                    alt={project.image?.alt || project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 55vw"
                    className="object-cover w-full h-full object-top"
                  />

                  {/* Category Badge */}
                  <motion.div
                    className="absolute left-[-10px] md:left-[-40px] top-[-15px] md:top-[-20px] -rotate-[6deg] z-10"
                    variants={decorationEntrance}
                    custom={1}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div
                      {...float(1.7, 4, 5, typeof window !== "undefined" && window.self !== window.parent)}
                    >
                      <div
                        className="inline-flex items-center w-fit h-[45px] md:h-[60px] p-0.5 md:p-1 rounded-full text-[14px] md:text-[20px] font-semibold text-foreground no-underline transition-colors duration-200 whitespace-nowrap relative shadow-[2px_4px_0_0_#000000] md:shadow-[3px_6px_0_0_#000000] pointer-events-auto"

                        style={{
                          backgroundColor: getCategoryBadgeColor(project?.category?.slug)
                        }}
                      >
                        <div className="w-full h-full flex items-center gap-2 md:gap-3 border-2 border-[#0a0a0a] rounded-[40px] px-4 py-1 md:px-8 md:py-3 ">
                          {project?.category?.title || ""}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
