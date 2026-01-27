import type { Metadata } from "next";
import { mukta, playfair } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "WALEI - Making Statements",
    template: "%s | WALEI",
  },
  description:
    "Amplifying scientific voices and delivering evidence-based statements to world leaders. Explore insights on future trends, challenges, and leadership wisdom.",
  keywords: [
    "science policy",
    "thought leadership",
    "evidence-based policy",
    "scientific research",
    "world leaders",
    "innovation",
  ],
  authors: [{ name: "WALEI" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://walei.org",
    siteName: "WALEI",
    title: "WALEI - Making Statements",
    description:
      "Amplifying scientific voices and delivering evidence-based statements to world leaders.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WALEI - Making Statements",
    description:
      "Amplifying scientific voices and delivering evidence-based statements to world leaders.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${mukta.variable} ${playfair.variable}`}>
      <body className="font-sans">
        {/* Skip Links for Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
