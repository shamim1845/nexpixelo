import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: "icon",
      title: "Icon Name",
      type: "string",
      description:
        'Icon identifier used on the frontend (e.g. "palette", "code", "megaphone").',
    }),
    defineField({
      name: "color",
      title: "Accent Color",
      type: "string",
      description: 'CSS color value (e.g. "#6C5CE7", "hsl(260 60% 55%)").',
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
