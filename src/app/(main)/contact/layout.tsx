import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with WALEI. Reach out for partnerships, collaborations, or general inquiries.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
