import Image from "next/image";

import { urlFor } from "@/lib/sanity";
import type { AboutCtaSection, AboutSection as AboutSectionType } from "@/types";

interface AboutSectionProps {
  about: AboutSectionType | null | undefined;
  aboutCta: AboutCtaSection | null | undefined;
}

function StatBadge() {
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black">
      <Image src="/star_white.svg" alt="" width={16} height={16} />
    </span>
  );
}

export default function AboutSection({ about, aboutCta }: AboutSectionProps) {
  if (!about && !aboutCta) return null;

  const statCards = about?.stats ?? [];
  const ctaImage = aboutCta?.image
    ? urlFor(aboutCta.image).width(700).height(700).fit("crop").url()
    : null;

  return (
    <section className="px-5 py-20 md:px-8 md:py-24 lg:px-10 lg:py-28" id="about-section">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10">
        <div className="grid items-start gap-8 lg:grid-cols-[1.35fr_0.75fr] lg:gap-10">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-black bg-[#FFB44B] px-4 py-1 text-[12px] font-semibold uppercase tracking-wide text-black shadow-[2px_2px_0_0_#000]">
              <Image src="/star_white.svg" alt="" width={13} height={13} className="rounded-full bg-black p-[2px]" />
              About Agency
            </p>
            <h2 className="max-w-[680px] text-[clamp(2.8rem,7vw,6rem)] font-black uppercase leading-[0.88] tracking-[-0.03em] text-black">
              {about?.heading ?? ""}
            </h2>
            <p className="mt-8 max-w-[680px] text-[clamp(1rem,1.5vw,2rem)] leading-[1.65] text-black/60">
              {about?.description ?? ""}
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {statCards.map((stat, index) => (
              <article
                key={stat._key}
                className="rounded-[42px] border-[3px] border-black p-7 shadow-[5px_5px_0_0_#000]"
                style={{ backgroundColor: index % 2 === 0 ? "#F1DFDF" : "#D4D1F1" }}
              >
                <p className="text-[clamp(2rem,3vw,3.2rem)] font-black leading-none text-black">
                  {stat.value}
                </p>
                <p className="mt-3 max-w-[220px] text-[1.1rem] font-semibold leading-[1.35] text-black/85">
                  {stat.label}
                </p>
                <div className="mt-5">
                  <StatBadge />
                </div>
              </article>
            ))}
          </div>
        </div>

        <article className="grid items-center gap-8 rounded-[30px] bg-[#D6D4F2] px-8 py-10 md:px-12 md:py-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h3 className="max-w-[520px] text-[clamp(2rem,4.5vw,4.1rem)] font-black uppercase leading-[0.93] tracking-[-0.03em] text-black">
              {aboutCta?.heading ?? ""}
            </h3>
            <div className="mt-8 flex items-end gap-4">
              <p className="text-[clamp(4rem,8vw,7rem)] font-black leading-[0.85] text-black">
                09+
              </p>
              <p className="mb-2 max-w-[220px] text-[1.15rem] font-semibold uppercase leading-[1.35] text-black/85">
                {aboutCta?.description ?? ""}
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[360px]">
            <div className="absolute -left-4 top-1/2 hidden -translate-y-1/2 text-[2.6rem] text-black lg:block">
              ↷
            </div>
            <div className="relative aspect-square w-full rotate-[7deg] overflow-hidden rounded-[16px] border-10 border-[#ECEAED] bg-[#E7E1E4] shadow-[0_5px_18px_rgba(0,0,0,0.08)]">
              {ctaImage && (
                <Image
                  src={ctaImage}
                  alt={aboutCta?.heading || "About image"}
                  fill
                  sizes="(max-width: 768px) 80vw, 360px"
                  className="object-cover"
                />
              )}
            </div>
            <p className="mt-3 text-right text-[1rem] font-semibold italic text-black">
              Drop Hit If You Sport Me
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
