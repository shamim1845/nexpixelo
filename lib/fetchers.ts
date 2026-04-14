import { sanityFetch } from "@/sanity/lib/live";
import {
  PROJECTS_QUERY,
  PROJECT_BY_SLUG_QUERY,
  POSTS_QUERY,
  POST_BY_SLUG_QUERY,
  SERVICES_QUERY,
  HOME_PAGE_QUERY,
  CATEGORIES_QUERY,
  TESTIMONIALS_QUERY,
} from "@/lib/queries";
import type {
  Project,
  Post,
  Service,
  HomePage,
  Category,
  Testimonial,
} from "@/types";

// ---------------------------------------------------------------------------
// Revalidation
// ---------------------------------------------------------------------------

/**
 * Default ISR revalidation interval (in seconds).
 * Content refreshes from Sanity's CDN at most once per this interval.
 * Override per-fetcher when needed.
 */
const REVALIDATE = 60; // 60 seconds

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export async function getProjects(): Promise<Project[]> {
  const { data } = await sanityFetch({
    query: PROJECTS_QUERY,
  });
  return data;
}

export async function getProjectBySlug(
  slug: string,
): Promise<Project | null> {
  const { data } = await sanityFetch({
    query: PROJECT_BY_SLUG_QUERY,
    params: { slug },
  });
  return data;
}

// ---------------------------------------------------------------------------
// Blog Posts
// ---------------------------------------------------------------------------

export async function getPosts(): Promise<Post[]> {
  const { data } = await sanityFetch({
    query: POSTS_QUERY,
  });
  return data;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const { data } = await sanityFetch({
    query: POST_BY_SLUG_QUERY,
    params: { slug },
  });
  return data;
}

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export async function getServices(): Promise<Service[]> {
  const { data } = await sanityFetch({
    query: SERVICES_QUERY,
  });
  return data;
}

// ---------------------------------------------------------------------------
// Home Page
// ---------------------------------------------------------------------------

export async function getHomePage(): Promise<HomePage | null> {
  const { data } = await sanityFetch({
    query: HOME_PAGE_QUERY,
  });
  return data;
}

// ---------------------------------------------------------------------------
// Categories
// ---------------------------------------------------------------------------

export async function getCategories(): Promise<Category[]> {
  const { data } = await sanityFetch({
    query: CATEGORIES_QUERY,
  });
  return data;
}

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

export async function getTestimonials(): Promise<Testimonial[]> {
  const { data } = await sanityFetch({
    query: TESTIMONIALS_QUERY,
  });
  return data;
}
