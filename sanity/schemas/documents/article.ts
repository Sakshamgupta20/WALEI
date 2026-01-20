import { defineField, defineType } from "sanity";

export default defineType({
  name: "article",
  title: "Article",
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
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "A brief subtitle or deck for the article",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description: "Important for SEO and accessibility",
        },
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
      ],
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "A brief summary for article cards and SEO",
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: "leader",
      title: "Featured Leader",
      type: "reference",
      to: [{ type: "leader" }],
      description: "The leader featured in this article/interview",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "portableText",
    }),
    defineField({
      name: "pullQuote",
      title: "Pull Quote",
      type: "quote",
      description: "A highlighted quote to display prominently",
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "featured",
      title: "Featured Article",
      type: "boolean",
      description: "Show this article in featured sections",
      initialValue: false,
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
    defineField({
      name: "relatedArticles",
      title: "Related Articles",
      type: "array",
      of: [{ type: "reference", to: [{ type: "article" }] }],
      validation: (Rule) => Rule.max(3),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "featuredImage",
      category: "category.title",
      publishedAt: "publishedAt",
    },
    prepare({ title, media, category, publishedAt }) {
      const date = publishedAt
        ? new Date(publishedAt).toLocaleDateString()
        : "Draft";
      return {
        title,
        subtitle: `${category || "Uncategorized"} • ${date}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Published Date, New",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Title",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
});
