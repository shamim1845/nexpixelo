"use client";

import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import type { AboutCtaSection, AboutSection as AboutSectionType } from "@/types";
import Badge from "./Badge";


interface AboutSectionProps {
  about: AboutSectionType | null | undefined;
  aboutCta: AboutCtaSection | null | undefined;
}





export default function AboutSection({ about, aboutCta }: AboutSectionProps) {
  if (!about && !aboutCta) return null;

  const statCards = about?.stats ?? [];
  const ctaImage = aboutCta?.image
    ? urlFor(aboutCta.image).width(700).height(700).fit("crop").url()
    : null;

  return (
    <section className="content_container" id="about">
      <div className="flex flex-col gap-16 md:gap-20 lg:gap-24">
        <div className="flex items-start justify-center lg:justify-between flex-col lg:flex-row gap-12 lg:gap-8">
          {/* heading and sub heading */}
          <div className="relative flex flex-col gap-8 md:gap-12 lg:gap-14 w-full lg:max-w-[60%]">
            {/* Top  badge */}
            <Badge
              text="About Agency"
              className="z-10"
              rotation="-rotate-[6deg]"
              index={1}
              delayOffset={0.2}
            />

            <h2 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[clamp(3rem,5vw,120px)] font-boldonse uppercase text-black">
              {about?.heading ?? ""}
            </h2>

            <p className="text-[clamp(1.25rem,2.8vw,32px)] font-medium text-[#5E5D62] max-w-[90%] md:max-w-[80%] lg:max-w-none">
              {about?.description ?? ""}
            </p>
          </div>

          {/* stat cards */}
          <div className="w-full lg:max-w-[400px] flex flex-col sm:flex-row lg:flex-col gap-5 items-center justify-center">
            {statCards.map((stat, index) => (
              <article
                key={stat._key}
                className={`w-full h-full flex flex-col justify-center md:aspect-[1.1/1] rounded-[30px] md:rounded-[100px] border-[3px] border-black p-8 pl-8 md:p-7 md:pl-10 ${(index + 1) % 2 !== 0 ? "bg-[#FEEBE9] shadow-[-5px_5px_0px_0px_#000000]" : "bg-[#EAE4FE] shadow-[5px_5px_0px_0px_#000000]"
                  }`}
              >
                <p className="text-[clamp(2rem,3vw,50px)] font-black  font-boldonse  leading-none text-black">
                  {stat.value}
                </p>
                <p className="mt-5  text-[1rem] md:text-[1.1rem] font-semibold leading-[1.35] text-black">
                  {stat.label}
                </p>
                <div className="mt-8">
                  <Image src="/arrow_black.svg" alt="" width={69} height={69} className="w-[52px] h-[52px] sm:w-[69px] sm:h-[69px] object-contain" />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <article className="grid items-center gap-12 rounded-[30px] md:rounded-[60px] bg-[#E8E8FF] px-6 py-12 sm:px-10 sm:py-16 md:px-16 md:py-20 lg:grid-cols-[1.5fr_0.5fr]">
          <div className="max-w-[850px] flex flex-col gap-10 md:gap-16">
            <h3 className="text-[clamp(2rem,5.5vw,64px)] font-normal font-boldonse uppercase text-black">
              {aboutCta?.heading ?? "Design That Defines Your Identity"}
            </h3>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
              <p className="text-[clamp(4.5rem,9vw,130px)] font-normal font-boldonse leading-none text-black">
                {aboutCta?.statValue ?? "06+"}
              </p>
              <p className="text-[clamp(1.1rem,1.8vw,32px)] font-medium uppercase leading-[1.2] text-black max-w-[450px]">
                {aboutCta?.description ?? "Years of experience in UI UX Design"}
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[380px] md:max-w-[450px]">
            {/* Arrow SVG positioned relative to the card */}
            <div className="absolute -left-[30px] sm:-left-[45px] md:-left-[50px]  bottom-[10px] md:bottom-[15px] z-20">
              <svg width="137" height="133"
                className="w-[70px] sm:w-[80px] md:w-[113px]"
                viewBox="0 0 137 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M70.4058 91.5665C67.9388 106.093 65.3913 121.128 76.9063 128.067C100.137 142.073 134.796 119.804 136.264 118.85L133.841 115.143C133.5 115.364 100.036 136.853 79.1891 124.283C70.2155 118.9 72.413 105.972 74.7633 92.308C77.5667 75.7465 80.7535 56.9785 60.7139 52.819C56.6644 51.9725 52.4698 52.1227 48.4913 53.2567C43.4925 42.098 34.9759 29.3958 21.0746 15.5948L35.5053 7.6119C24.7478 7.58972 10.5083 3.99239 5.45237e-05 2.31833e-05C5.35881 9.87725 10.8067 23.5183 12.2569 34.177L18.1971 18.9526C31.4559 32.1836 39.5543 44.2379 44.3204 54.7985C39.2906 57.2684 34.8751 60.8294 31.3958 65.2219C20.5024 78.484 14.9113 99.6043 19.472 110.381C20.1519 112.299 21.3726 113.978 22.9864 115.217C24.6002 116.455 26.5382 117.2 28.5662 117.361C37.093 118.089 46.1873 111.31 51.0248 100.45C53.6124 94.6401 58.5761 79.1878 50.1099 57.3371C53.2669 56.5307 56.5672 56.4618 59.7552 57.1359C74.5892 60.2001 73.6604 72.1967 70.4058 91.5665ZM47.0327 98.6382C42.9641 107.633 35.535 113.526 28.9837 112.973C27.7588 112.869 26.5922 112.404 25.6314 111.637C24.6706 110.87 23.9588 109.835 23.5859 108.664C20.0481 100.267 24.1172 81.1098 34.8541 68.0432C37.8872 64.2116 41.7102 61.0784 46.063 58.8571C53.8918 79.1494 49.4266 93.3012 47.0038 98.6328L47.0327 98.6382Z" fill="black" />
              </svg>
            </div>

            <div className="relative w-full rotate-[7deg] overflow-hidden rounded-[24px] md:rounded-[32px] bg-white p-4 md:p-5 shadow-[0_10px_40px_rgba(0,0,0,0.12)]">
              <div className="relative aspect-[0.9] w-full overflow-hidden rounded-[16px] md:rounded-[24px]">
                {ctaImage && (
                  <Image
                    src={ctaImage}
                    alt={aboutCta?.heading || "About image"}
                    fill
                    sizes="(max-width: 768px) 80vw, 450px"
                    className="object-cover"
                  />
                )}
              </div>

              <div className="py-4 md:py-6 px-2">
                <p className="text-center text-[clamp(1rem,1.5vw,18px)] font-black uppercase text-black">
                  Drop Hi If You Sport Me
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
