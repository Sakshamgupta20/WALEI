import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#B8860B",
          light: "#D4A853",
          dark: "#8B6508",
        },
        coral: {
          DEFAULT: "#C54B4B",
          light: "#D76B6B",
          dark: "#A33A3A",
        },
        purple: {
          DEFAULT: "#6B5B95",
          light: "#8A7AB5",
          dark: "#524575",
        },
        dark: "#1A1A1A",
        light: "#F8F8F8",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        "display-1": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-2": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        headline: ["2rem", { lineHeight: "1.25" }],
      },
      maxWidth: {
        container: "1400px",
      },
      boxShadow: {
        natural: "0 1px 3px rgba(0,0,0,0.08)",
        deep: "0 4px 12px rgba(0,0,0,0.12)",
        crisp: "0 2px 8px rgba(184,134,11,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
