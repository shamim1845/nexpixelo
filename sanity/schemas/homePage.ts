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
    { name: "newsletter", title: "Newsletter Section" },
  ],

  fields: [
    // -----------------------------------------------------------------------
    // Hero Section
    // -----------------------------------------------------------------------
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      group: "hero",
      description: 'e.g. "DIGITAL CREATIVITY FOR A VISUAL WORLD"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 3,
      group: "hero",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Background / Decorative Image",
      type: "image",
      options: { hotspot: true },
      group: "hero",
    }),
    defineField({
      name: "heroPrimaryCta",
      title: "Primary CTA",
      type: "object",
      group: "hero",
      fields: [
        defineField({
          name: "label",
          title: "Label",
          type: "string",
          initialValue: "Start a Project",
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
      name: "heroSecondaryCta",
      title: "Secondary CTA",
      type: "object",
      group: "hero",
      fields: [
        defineField({
          name: "label",
          title: "Label",
          type: "string",
          initialValue: "Our Work",
        }),
        defineField({
          name: "href",
          title: "Link",
          type: "string",
          initialValue: "/work",
        }),
      ],
    }),

    // -----------------------------------------------------------------------
    // About / Stats Section  ("WE'RE STORYTELLERS")
    // -----------------------------------------------------------------------
    defineField({
      name: "aboutHeading",
      title: "About Heading",
      type: "string",
      group: "about",
      description: 'e.g. "WE\'RE STORYTELLERS"',
    }),
    defineField({
      name: "aboutDescription",
      title: "About Description",
      type: "text",
      rows: 4,
      group: "about",
    }),
    defineField({
      name: "aboutImage",
      title: "About Section Image",
      type: "image",
      options: { hotspot: true },
      group: "about",
    }),
    defineField({
      name: "stats",
      title: "Statistics",
      type: "array",
      group: "about",
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

    // -----------------------------------------------------------------------
    // Middle CTA tagline  ("DESIGN THAT DEFINES YOUR IDENTITY")
    // -----------------------------------------------------------------------
    defineField({
      name: "ctaHeading",
      title: "CTA Heading",
      type: "string",
      group: "cta",
      description: 'e.g. "DESIGN THAT DEFINES YOUR IDENTITY"',
    }),
    defineField({
      name: "ctaDescription",
      title: "CTA Description",
      type: "text",
      rows: 3,
      group: "cta",
    }),

    // -----------------------------------------------------------------------
    // Bottom CTA / Newsletter  ("GET STARTED NOW!")
    // -----------------------------------------------------------------------
    defineField({
      name: "newsletterHeading",
      title: "Newsletter Heading",
      type: "string",
      group: "newsletter",
      description: 'e.g. "GET STARTED NOW!"',
    }),
    defineField({
      name: "newsletterSubheading",
      title: "Newsletter Subheading",
      type: "string",
      group: "newsletter",
      description: 'e.g. "Subscribe To Our Newsletter"',
    }),
    defineField({
      name: "newsletterImage",
      title: "Newsletter Section Image",
      type: "image",
      options: { hotspot: true },
      group: "newsletter",
    }),
  ],

  preview: {
    prepare: () => ({ title: "Home Page" }),
  },
});
