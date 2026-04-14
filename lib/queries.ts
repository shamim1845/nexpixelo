import { defineQuery } from "next-sanity";

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

/** All projects ordered by display order, with de-referenced category. */
export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(order asc, _createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    image,
    description,
    category->{ _id, title, "slug": slug.current },
    tags,
    projectUrl,
    order
  }
`);

/** Single project by slug. */
export const PROJECT_BY_SLUG_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    image,
    description,
    category->{ _id, title, "slug": slug.current },
    tags,
    projectUrl,
    order
  }
`);

// ---------------------------------------------------------------------------
// Blog Posts
// ---------------------------------------------------------------------------

/** All posts ordered by published date (newest first). */
export const POSTS_QUERY = defineQuery(`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    image,
    excerpt,
    author,
    publishedAt
  }
`);

/** Single post by slug — includes full body for the detail page. */
export const POST_BY_SLUG_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    image,
    excerpt,
    body,
    author,
    publishedAt
  }
`);

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

/** All services ordered by display order. */
export const SERVICES_QUERY = defineQuery(`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    color,
    order
  }
`);

// ---------------------------------------------------------------------------
// Home Page  (singleton)
// ---------------------------------------------------------------------------

/** Homepage singleton — fetches all sections in a single request. */
export const HOME_PAGE_QUERY = defineQuery(`
  *[_type == "homePage"][0] {
    _id,
    heroTitle,
    heroSubtitle,
    heroImage,
    heroPrimaryCta,
    heroSecondaryCta,
    aboutHeading,
    aboutDescription,
    aboutImage,
    stats,
    ctaHeading,
    ctaDescription,
    newsletterHeading,
    newsletterSubheading,
    newsletterImage
  }
`);

// ---------------------------------------------------------------------------
// Categories
// ---------------------------------------------------------------------------

/** All categories. */
export const CATEGORIES_QUERY = defineQuery(`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description
  }
`);
