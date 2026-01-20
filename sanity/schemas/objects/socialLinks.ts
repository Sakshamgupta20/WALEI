import { defineField, defineType } from "sanity";

export default defineType({
  name: "socialLinks",
  title: "Social Links",
  type: "object",
  fields: [
    defineField({
      name: "linkedin",
      title: "LinkedIn",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),
    defineField({
      name: "twitter",
      title: "Twitter / X",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),
    defineField({
      name: "website",
      title: "Personal Website",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }),
    }),
  ],
});
