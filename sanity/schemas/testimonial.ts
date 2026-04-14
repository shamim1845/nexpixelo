import { defineField, defineType } from "sanity";

/**
 * Testimonial — client quotes displayed on the homepage.
 * Each card shows a quote, author name, role, avatar, and accent color.
 */
export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  icon: () => "💬",

  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      description: "The testimonial text / client quote.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "name",
      title: "Author Name",
      type: "string",
      description: 'e.g. "Apen Copart"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Author Role",
      type: "string",
      description: 'e.g. "Web Designer", "UI Designer"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "avatar",
      title: "Author Avatar",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "color",
      title: "Card Background Color",
      type: "string",
      description:
        'Hex color for the card background, e.g. "#E0D4F5", "#F5E6A3", "#F5D0C4", "#C8DDE0"',
      initialValue: "#E0D4F5",
      validation: (rule) =>
        rule.regex(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/, {
          name: "hex color",
          invert: false,
        }),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first.",
      initialValue: 0,
    }),
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "avatar",
    },
  },
});
