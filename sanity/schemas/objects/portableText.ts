import { defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "portableText",
  title: "Portable Text",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Underline", value: "underline" },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "Link",
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ["http", "https", "mailto", "tel"],
                  }),
              },
              {
                name: "blank",
                type: "boolean",
                title: "Open in new tab",
                initialValue: true,
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
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
    defineArrayMember({
      name: "pullQuote",
      type: "object",
      title: "Pull Quote",
      fields: [
        {
          name: "text",
          type: "text",
          title: "Quote Text",
        },
        {
          name: "alignment",
          type: "string",
          title: "Alignment",
          options: {
            list: [
              { title: "Left", value: "left" },
              { title: "Center", value: "center" },
              { title: "Right", value: "right" },
            ],
          },
          initialValue: "center",
        },
      ],
      preview: {
        select: {
          text: "text",
        },
        prepare({ text }) {
          return {
            title: "Pull Quote",
            subtitle: text ? `"${text.substring(0, 50)}..."` : "",
          };
        },
      },
    }),
  ],
});
