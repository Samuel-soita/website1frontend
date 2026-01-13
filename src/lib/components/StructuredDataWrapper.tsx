"use client";

import dynamic from "next/dynamic";

// Dynamic import with SSR disabled to avoid hydration issues
const StructuredData = dynamic(() => import("@/components/StructuredData"), {
  ssr: false,
});

export default function StructuredDataWrapper() {
  return <StructuredData />;
}
