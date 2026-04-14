import { client } from "@/lib/sanity";
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
  return client.fetch<Project[]>(
    PROJECTS_QUERY,
    {},
    { next: { revalidate: REVALIDATE, tags: ["projects"] } },
  );
}

export async function getProjectBySlug(
  slug: string,
): Promise<Project | null> {
  return client.fetch<Project | null>(
    PROJECT_BY_SLUG_QUERY,
    { slug },
    { next: { revalidate: REVALIDATE, tags: ["projects"] } },
  );
}

// ---------------------------------------------------------------------------
// Blog Posts
// ---------------------------------------------------------------------------

export async function getPosts(): Promise<Post[]> {
  return client.fetch<Post[]>(
    POSTS_QUERY,
    {},
    { next: { revalidate: REVALIDATE, tags: ["posts"] } },
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return client.fetch<Post | null>(
    POST_BY_SLUG_QUERY,
    { slug },
    { next: { revalidate: REVALIDATE, tags: ["posts"] } },
  );
}

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export async function getServices(): Promise<Service[]> {
  return client.fetch<Service[]>(
    SERVICES_QUERY,
    {},
    { next: { revalidate: REVALIDATE, tags: ["services"] } },
  );
}

// ---------------------------------------------------------------------------
// Home Page
// ---------------------------------------------------------------------------

export async function getHomePage(): Promise<HomePage | null> {
  return client.fetch<HomePage | null>(
    HOME_PAGE_QUERY,
    {},
    { next: { revalidate: REVALIDATE, tags: ["homePage"] } },
  );
}

// ---------------------------------------------------------------------------
// Categories
// ---------------------------------------------------------------------------

export async function getCategories(): Promise<Category[]> {
  return client.fetch<Category[]>(
    CATEGORIES_QUERY,
    {},
    { next: { revalidate: REVALIDATE, tags: ["categories"] } },
  );
}

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

export async function getTestimonials(): Promise<Testimonial[]> {
  return client.fetch<Testimonial[]>(
    TESTIMONIALS_QUERY,
    {},
    { next: { revalidate: REVALIDATE, tags: ["testimonials"] } },
  );
}
