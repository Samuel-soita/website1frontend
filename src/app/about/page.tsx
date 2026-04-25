import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "The Mirror | SMIRROR Solutions",
  description: "Discover our philosophy, meet our founder, and understand our promise. At SMIRROR Solutions, we reflect engineering excellence in every project.",
  keywords: ["about smirror", "samuel soita watua", "software philosophy", "engineering excellence Kenya"],
};

export default function AboutPage() {
  return <AboutContent />;
}
