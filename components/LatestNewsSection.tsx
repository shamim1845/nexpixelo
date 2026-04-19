"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { urlFor } from "@/lib/sanity";
import type { Post } from "@/types";
import { decorationEntrance, float } from "@/lib/animations";


interface LatestNewsSectionProps {
  posts: Post[];
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}




export default function LatestNewsSection({ posts }: LatestNewsSectionProps) {
  if (!posts || posts.length === 0) return null;

  const latestPosts = posts.slice(0, 5);

  return (
    <section className="content_container py-20 md:py-24 lg:py-28" id="latest-news-section">
      {/* heading and sub heading */}
      <div className="flex flex-col items-center md:flex-row  justify-between gap-5 md:gap-6 mb-20 md:mb-16 lg:mb-20 pt-15 md:pt-20 lg:pt-28">
        <div className="relative">
          {/* Top  badge */}
          <div className="absolute -top-18 md:-top-20 left-0">
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
                  About Agency
                </div>
              </motion.div>
            </motion.div>
          </div>

          <h2 className="text-[32px] sm:text-[48px] md:text-[clamp(3rem,5vw,120px)] max-w-[1000px] font-boldonse uppercase text-black">
            Latest News & Updates
          </h2>
        </div>

        {/* More News List button */}
        <Link
          href="/blog"
          className="inline-flex items-center justify-center w-fit h-[50px] xl:h-[60px] px-8 md:px-10 lg:px-12 py-2 ml-1 rounded-full text-[14px] xl:text-[16px] font-medium text-white bg-[#000000] border border-black shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-200 whitespace-nowrap hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)] active:translate-y-0"

        >
          More News List
        </Link>
      </div>

      {/* news cards */}
      <div className="flex flex-col gap-8 md:gap-12">
        {latestPosts.map((post) => {
          const imageUrl = urlFor(post.image).width(900).height(520).fit("crop").url();

          return (
            <article
              key={post._id}
              className="grid items-center gap-6 md:gap-8 lg:gap-10 rounded-[35px] md:rounded-[43px] bg-[#FFFFFF] px-6 py-6 md:px-10 md:py-10 lg:px-16 lg:py-16 lg:grid-cols-[1.05fr_1.15fr_auto]  "
            >
              <div className="relative overflow-hidden rounded-[27px] border-2 border-black aspect-[1.63/1]">
                <Image
                  src={imageUrl}
                  alt={post.image?.alt || post.title}
                  fill
                  sizes="(max-width: 569px) 100vw, 569px"
                  className="object-cover"
                />
              </div>

              <div className="">
                <p className="mb-5 inline-flex rounded-[30px] bg-black px-[15px] py-[9px] md:px-[20px] text-[15px] font-medium text-white">
                  {formatDate(post.publishedAt)}
                </p>
                <h3 className="text-[clamp(1.5rem,2.5vw,31px)] leading-[1.7] font-boldonse font-normal text-black">
                  {post.title}
                </h3>
                <p className="mt-5 max-w-[600px] text-[20px] leading-[1.55] text-[#5E5D62]">
                  {post.excerpt}
                </p>
              </div>

              <div>
                <Link
                  href={`/blog/${post.slug}`}
                  aria-label={`Read ${post.title}`}
                  className="inline-flex p-3 md:p-3.5 items-center justify-center rounded-full transition-transform duration-200 hover:-translate-y-0.5 w-fit"
                  style={{ backgroundColor: "#7571FF" }}
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

            </article>
          );
        })}
      </div>
    </section>
  );
}
