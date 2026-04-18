import { defineField, defineType, defineArrayMember } from "sanity";

/**
 * Singleton document — only one instance should exist.
 * Controls all editable content on the homepage.
 */
export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",

  groups: [
    { name: "hero", title: "Hero Section" },
    { name: "about", title: "About / Stats Section" },
    { name: "cta", title: "CTA Section" },
  ],

  fields: [
    // -----------------------------------------------------------------------
    // Hero Section
    // -----------------------------------------------------------------------
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      group: "hero",
      fields: [
        defineField({
          name: "title",
          title: "Title",
          type: "string",
          description: 'e.g. "DIGITAL CREATIVITY FOR A VISUAL WORLD"',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "subtitle",
          title: "Subtitle",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "primaryCta",
          title: "Primary CTA",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              initialValue: "Lets Connect",
            }),
            defineField({
              name: "href",
              title: "Link",
              type: "string",
              initialValue: "/contact",
            }),
          ],
        }),
        defineField({
          name: "marqueeList",
          title: "Marquee List",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              title: "Marquee Item",
              fields: [
                defineField({
                  name: "text_1",
                  title: "Text 1",
                  type: "string",
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: "text_2",
                  title: "Text 2",
                  type: "string",
                  validation: (rule) => rule.required(),
                }),
              ],
              preview: {
                select: { title: "text_1", subtitle: "text_2" },
              },
            }),
          ],
        }),
      ],
    }),

    // -----------------------------------------------------------------------
    // About / Stats Section  ("WE'RE STORYTELLERS")
    // -----------------------------------------------------------------------
    defineField({
      name: "about",
      title: "About Section",
      type: "object",
      group: "about",
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
          description: 'e.g. "WE\'RE STORYTELLERS"',
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
          rows: 4,
        }),
        defineField({
          name: "stats",
          title: "Statistics",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              fields: [
                defineField({
                  name: "value",
                  title: "Value",
                  type: "string",
                  description: 'e.g. "50+", "09+"',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: "label",
                  title: "Label",
                  type: "string",
                  description: 'e.g. "Projects Completed", "Years Experience"',
                  validation: (rule) => rule.required(),
                }),
              ],
              preview: {
                select: { title: "value", subtitle: "label" },
              },
            }),
          ],
        }),
      ],
    }),

    // -----------------------------------------------------------------------
    // About CTA tagline  ("DESIGN THAT DEFINES YOUR IDENTITY")
    // -----------------------------------------------------------------------
    defineField({
      name: "aboutCta",
      title: "About CTA Section",
      type: "object",
      group: "about",
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
          description: 'e.g. "DESIGN THAT DEFINES YOUR IDENTITY"',
        }),
        defineField({
          name: "statValue",
          title: "Stat Value",
          type: "string",
          description: 'e.g. "06+", "10+"',
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
          rows: 3,
        }),
        defineField({
          name: "image",
          title: "Section Image",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),


  ],

  preview: {
    prepare: () => ({ title: "Home Page" }),
  },
});
