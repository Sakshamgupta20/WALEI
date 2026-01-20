import { defineField, defineType } from "sanity";

export default defineType({
  name: "quote",
  title: "Quote",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "Quote Text",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "attribution",
      title: "Attribution",
      type: "string",
      description: "Who said this quote",
    }),
    defineField({
      name: "context",
      title: "Context",
      type: "string",
      description: "Additional context (e.g., role, event)",
    }),
  ],
  preview: {
    select: {
      text: "text",
      attribution: "attribution",
    },
    prepare({ text, attribution }) {
      return {
        title: text ? `"${text.substring(0, 50)}..."` : "Empty quote",
        subtitle: attribution,
      };
    },
  },
});
