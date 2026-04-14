"use client";

import Image from "next/image";
import Link from "next/link";

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

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <section
      className="px-5 py-20 md:px-8 md:py-24 lg:px-10 lg:py-28"
      id="projects-section"
    >
      <div className="mx-auto w-full max-w-[1080px]">
        <div className="mb-10 flex flex-col items-center gap-3 text-center md:mb-12">
          <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1 text-[12px] font-semibold uppercase tracking-[0.16em] text-black/70">
            <Image src="/star_white.svg" alt="" width={14} height={14} />
            Latest Projects
          </p>
          <h2 className="text-[clamp(2.4rem,7vw,5rem)] font-black uppercase leading-[0.9] tracking-[-0.02em] text-black">
            Latest Work
          </h2>
        </div>

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
                className="grid gap-6 rounded-[16px] border-2 border-black/10 p-5 md:grid-cols-[1fr_1.25fr] md:gap-7 md:p-8"
                style={{ background: cardBackground }}
              >
                <div className="flex flex-col">
                  <p className="mb-3 text-[1rem] font-medium text-black/75">
                    {project.title}
                  </p>
                  <h3 className="mb-5 text-[clamp(1.9rem,3vw,3rem)] font-black uppercase leading-[0.95] tracking-[-0.01em] text-black">
                    {project.description}
                  </h3>

                  <div className="mt-auto flex items-center gap-3">
                    <Link
                      href={href}
                      target={project.projectUrl ? "_blank" : undefined}
                      rel={
                        project.projectUrl ? "noopener noreferrer" : undefined
                      }
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-200 hover:-translate-y-0.5"
                      style={{ backgroundColor: "#7571FF" }}
                      aria-label={`Open ${project.title}`}
                    >
                      <Image
                        src="/arrow_white.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                    </Link>
                  </div>

                  {project.tags && project.tags.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={`${project._id}-${tag}`}
                          className="rounded-full border border-black/15 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-black/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative overflow-hidden rounded-[12px] border-2 border-black bg-white/50 min-h-[220px]">
                  <Image
                    src={imageUrl}
                    alt={project.image?.alt || project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 55vw"
                    className="object-cover"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
