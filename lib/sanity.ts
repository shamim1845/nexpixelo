import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

// ---------------------------------------------------------------------------
// Environment
// ---------------------------------------------------------------------------

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-04-14";

// ---------------------------------------------------------------------------
// Client
// ---------------------------------------------------------------------------

/**
 * Sanity client used for data fetching in Server Components & Route Handlers.
 *
 * `useCdn: true`  → fast, cached reads (production).
 * `useCdn: false` → fresh reads (draft / preview mode).
 */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

// ---------------------------------------------------------------------------
// Image helpers
// ---------------------------------------------------------------------------

const builder = imageUrlBuilder(client);

/**
 * Generate optimised image URLs from Sanity image references.
 *
 * @example
 * ```tsx
 * <img src={urlFor(doc.image).width(800).url()} />
 * ```
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
