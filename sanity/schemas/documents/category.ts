import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "A brief description of this category",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Background image for the category page hero",
    }),
    defineField({
      name: "color",
      title: "Accent Color",
      type: "string",
      description: "Hex color code for this category (e.g., #046bd2)",
      validation: (Rule) =>
        Rule.regex(/^#[0-9A-Fa-f]{6}$/).error("Must be a valid hex color"),
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "heroImage",
    },
  },
});
