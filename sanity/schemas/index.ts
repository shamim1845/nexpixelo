import { type SchemaTypeDefinition } from "sanity";

import { blockContent } from "./blockContent";
import { homePage } from "./homePage";
import { category } from "./category";
import { post } from "./post";
import { project } from "./project";
import { service } from "./service";
import { testimonial } from "./testimonial";

export const schemaTypes: SchemaTypeDefinition[] = [
  // Primitives / reusable types
  blockContent,

  // Documents
  homePage,
  category,
  post,
  project,
  service,
  testimonial,
];
