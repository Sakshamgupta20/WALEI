import Link from "next/link";
import { cn } from "@/lib/utils/cn";

interface LogoProps {
  variant?: "default" | "white";
  className?: string;
}

export function Logo({ variant = "default", className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "font-serif text-2xl font-bold tracking-tight transition-colors",
        variant === "default"
          ? "text-gray-900 hover:text-[var(--gold)]"
          : "text-white hover:text-gray-200",
        className
      )}
    >
      WALEI
    </Link>
  );
}
