/**
 * Shared application-wide TypeScript types.
 *
 * These mirror the GROQ query projections in `lib/queries.ts`,
 * NOT the raw Sanity schema shape (which includes internal fields).
 */

import type { PortableTextBlock } from "next-sanity";

// ---------------------------------------------------------------------------
// Primitives
// ---------------------------------------------------------------------------

/** Resolved Sanity image — always includes asset ref + optional alt. */
export interface SanityImage {
  _type: "image";
  alt?: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
}

/** CTA button shape used on the homepage. */
export interface CtaLink {
  label?: string;
  href?: string;
}

/** Single stat item (e.g. "50+" / "Projects Completed"). */
export interface Stat {
  _key: string;
  value: string;
  label: string;
}

// ---------------------------------------------------------------------------
// Documents
// ---------------------------------------------------------------------------

/** Category — referenced by Project. */
export interface Category {
  _id: string;
  title: string;
  slug: string;
}

/** Portfolio project. */
export interface Project {
  _id: string;
  title: string;
  slug: string;
  image: SanityImage;
  description: string;
  category: Category;
  tags: string[] | null;
  projectUrl: string | null;
  order: number | null;
}

/** Blog post — body is Portable Text. */
export interface Post {
  _id: string;
  title: string;
  slug: string;
  image: SanityImage;
  excerpt: string;
  body: PortableTextBlock[];
  author: string | null;
  publishedAt: string;
}

/** Service offering. */
export interface Service {
  _id: string;
  title: string;
  description: string;
  icon: string | null;
  color: string | null;
  order: number | null;
}

/** Homepage singleton — all editable sections. */
export interface HomePage {
  _id: string;
  heroTitle: string;
  heroSubtitle: string | null;
  heroImage: SanityImage | null;
  heroPrimaryCta: CtaLink | null;
  heroSecondaryCta: CtaLink | null;
  aboutHeading: string | null;
  aboutDescription: string | null;
  aboutImage: SanityImage | null;
  stats: Stat[] | null;
  ctaHeading: string | null;
  ctaDescription: string | null;
  newsletterHeading: string | null;
  newsletterSubheading: string | null;
  newsletterImage: SanityImage | null;
}
