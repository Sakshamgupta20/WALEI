"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function ProductsRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`${basePath}/startups`);
  }, [router]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <p className="text-gray-500 text-sm">Redirecting to Start-ups...</p>
    </div>
  );
}
