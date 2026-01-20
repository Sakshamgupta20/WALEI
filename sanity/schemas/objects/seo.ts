import { defineField, defineType } from "sanity";

export default defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      description: "Override the default page title for search engines",
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 3,
      description: "Description for search engine results",
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      description: "Image for social media sharing (1200x630 recommended)",
    }),
    defineField({
      name: "noIndex",
      title: "No Index",
      type: "boolean",
      description: "Hide this page from search engines",
      initialValue: false,
    }),
  ],
});
