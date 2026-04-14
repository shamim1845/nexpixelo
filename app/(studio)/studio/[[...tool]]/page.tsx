/**
 * Embedded Sanity Studio route.
 *
 * Accessible at /studio — handles all sub-routes via the [[...tool]] catch-all.
 */

import Studio from "./Studio";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <Studio />;
}
