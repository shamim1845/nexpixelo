import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  icon: () => "✨",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().min(2).max(60),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required().min(10).max(300),
    }),
    defineField({
      name: "icon",
      title: "Predefined Icon",
      type: "string",
      description: "Select a predefined icon for the service.",
      options: {
        list: [
          { title: "UI/UX Design", value: "ui-ux" },
          { title: "Web Design", value: "web-design" },
          { title: "Marketing", value: "marketing" },
          { title: "Webflow", value: "webflow" },
        ],
      },
    }),
    defineField({
      name: "iconImage",
      title: "Custom Icon Image",
      type: "image",
      description: "Upload a custom icon. This will override the predefined icon above if provided.",
      options: { hotspot: true },
    }),
    defineField({
      name: "cardNumberIcon",
      title: "Card Number Icon",
      type: "image",
      description: "Upload a custom card number icon. It will be placed at the top right corner of the card.",
      options: { hotspot: true },
    }),
    defineField({
      name: "color",
      title: "Accent Color",
      type: "string",
      description: 'Card background hex color (e.g. "#D5CFEF").',
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
    defineField({
      name: "navigationUrl",
      title: "Navigation URL",
      type: "string",
      description: "The internal path where this service card should lead to (e.g. /services/ui-ux).",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "iconImage",
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
