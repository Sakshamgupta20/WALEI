import { Mukta, Playfair_Display } from "next/font/google";

export const mukta = Mukta({
  subsets: ["latin", "devanagari"],
  display: "swap",
  variable: "--font-mukta",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});
