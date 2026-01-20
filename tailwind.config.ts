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
        // Primary - WALEI Blue
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
        // Accent - Nobel Gold
        "walei-gold": {
          DEFAULT: "#c9a227",
          light: "#d4b54a",
          dark: "#a8871f",
        },
        // Neutrals (warm, sophisticated)
        "walei-smoke": "#f9f5ed",
        "walei-pale": "#f2f0ee",
        "walei-ivory": "#fffef9",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-source-serif)", "Georgia", "serif"],
      },
      fontSize: {
        "display-1": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-2": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        headline: ["2rem", { lineHeight: "1.25" }],
      },
      boxShadow: {
        natural: "0 1px 3px rgba(0,0,0,0.08)",
        deep: "0 4px 12px rgba(0,0,0,0.12)",
        crisp: "0 2px 8px rgba(4,107,210,0.15)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};

export default config;
