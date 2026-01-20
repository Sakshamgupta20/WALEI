import type { Metadata } from "next";
import { inter, sourceSerif } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "WALEI - Experiences that inspire",
    template: "%s | WALEI",
  },
  description:
    "A thought leadership platform featuring conversations with visionary leaders. Explore insights on future trends, challenges, and leadership wisdom.",
  keywords: [
    "thought leadership",
    "interviews",
    "innovation",
    "leadership",
    "future trends",
  ],
  authors: [{ name: "WALEI" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://walei.org",
    siteName: "WALEI",
    title: "WALEI - Experiences that inspire",
    description:
      "A thought leadership platform featuring conversations with visionary leaders.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WALEI - Experiences that inspire",
    description:
      "A thought leadership platform featuring conversations with visionary leaders.",
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
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable}`}>
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
