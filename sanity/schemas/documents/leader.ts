import { defineField, defineType } from "sanity";

export default defineType({
  name: "leader",
  title: "Leader",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "portrait",
      title: "Portrait",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "title",
      title: "Professional Title",
      type: "string",
      description: "E.g., CEO, Professor, Director",
    }),
    defineField({
      name: "organization",
      title: "Organization",
      type: "string",
      description: "Company, institution, or affiliation",
    }),
    defineField({
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 3,
      description: "A brief bio for cards and previews (max 200 characters)",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "fullBio",
      title: "Full Biography",
      type: "portableText",
    }),
    defineField({
      name: "keyQuote",
      title: "Key Quote",
      type: "quote",
      description: "A memorable quote from this leader",
    }),
    defineField({
      name: "achievements",
      title: "Key Achievements",
      type: "array",
      of: [{ type: "string" }],
      description: "Notable achievements or awards",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "socialLinks",
    }),
    defineField({
      name: "featured",
      title: "Featured Leader",
      type: "boolean",
      description: "Show this leader in featured sections",
      initialValue: false,
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title",
      media: "portrait",
      organization: "organization",
    },
    prepare({ title, subtitle, media, organization }) {
      return {
        title,
        subtitle: subtitle ? `${subtitle}${organization ? ` at ${organization}` : ""}` : organization,
        media,
      };
    },
  },
});
