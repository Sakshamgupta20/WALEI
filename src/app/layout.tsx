import type { Metadata } from "next";
import { mukta, playfair } from "@/styles/fonts";
import "@/styles/globals.css";

// Get basePath for GitHub Pages deployment
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: {
    default: "WALEI - Vision · Insight · Action",
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
    "WALEI",
  ],
  authors: [{ name: "WALEI" }],
  icons: {
    icon: `${basePath}/logo.png`,
    shortcut: `${basePath}/logo.png`,
    apple: `${basePath}/logo.png`,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://walei.org",
    siteName: "WALEI",
    title: "WALEI - Vision · Insight · Action",
    description:
      "Amplifying scientific voices and delivering evidence-based statements to world leaders.",
    images: [
      {
        url: `${basePath}/logo.png`,
        width: 512,
        height: 512,
        alt: "WALEI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WALEI - Vision · Insight · Action",
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
