"use client";

import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/lib/sanity";
import type { Post } from "@/types";

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
    <section className="px-5 py-20 md:px-8 md:py-24 lg:px-10 lg:py-28" id="latest-news-section">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/35 px-4 py-1 text-[12px] font-semibold text-black/80">
              <Image src="/star_white.svg" alt="" width={12} height={12} />
              About Agency
            </p>
            <h2 className="max-w-[600px] text-[clamp(2.8rem,8vw,7rem)] font-black uppercase leading-[0.9] tracking-[-0.03em] text-black">
              Latest News & Updates
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex h-14 items-center justify-center rounded-full bg-black px-12 text-[17px] font-semibold text-white transition-opacity duration-200 hover:opacity-90"
          >
            More News List
          </Link>
        </div>

        <div className="flex flex-col gap-8">
          {latestPosts.map((post) => {
            const imageUrl = urlFor(post.image).width(900).height(520).fit("crop").url();

            return (
              <article
                key={post._id}
                className="grid items-center gap-6 rounded-[30px] bg-[#F6F6F6] px-6 py-6 md:grid-cols-[1.05fr_1.15fr_auto] md:gap-8 md:px-10 md:py-10"
              >
                <div className="relative min-h-[230px] overflow-hidden rounded-[24px] border border-black/60 bg-[#D9D9D9]">
                  <Image
                    src={imageUrl}
                    alt={post.image?.alt || post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 36vw"
                    className="object-cover"
                  />
                </div>

                <div className="max-w-[620px]">
                  <p className="mb-5 inline-flex rounded-full bg-black px-4 py-1 text-[12px] font-medium text-white">
                    {formatDate(post.publishedAt)}
                  </p>
                  <h3 className="text-[clamp(2rem,3.5vw,4.2rem)] font-black leading-[0.95] tracking-[-0.02em] text-black">
                    {post.title}
                  </h3>
                  <p className="mt-5 max-w-[600px] text-[20px] leading-[1.55] text-black/55">
                    {post.excerpt}
                  </p>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  aria-label={`Read ${post.title}`}
                  className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#7571FF] md:mx-0"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.15)]">
                    <Image src="/arrow_black.svg" alt="" width={18} height={18} />
                  </span>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
