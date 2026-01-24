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
        // Primary brand colors from Figma design
        gold: {
          DEFAULT: "#B8860B",
          light: "#D4A21A",
          dark: "#8B6508",
        },
        teal: {
          DEFAULT: "#007A8C",
          dark: "#005F6B",
          light: "#009AAD",
        },
        dark: "#1A1A1A",
        light: "#F8F8F8",

        // Legacy WALEI colors (kept for compatibility)
        "walei-blue": {
          50: "#e6f1fc",
          100: "#cce3f9",
          200: "#99c7f3",
          300: "#66abed",
          400: "#338fe7",
          500: "#046bd2",
          600: "#035eb8",
          700: "#02519e",
          800: "#024484",
          900: "#012d5a",
        },
        "walei-gold": "#B8860B",
        "walei-smoke": "#f9f5ed",
        "walei-pale": "#f2f0ee",
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
        crisp: "0 2px 8px rgba(4,107,210,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
