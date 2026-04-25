import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Our Services | SMIRROR Solutions",
  description: "Comprehensive software development services from concept to deployment. Elite engineering, strategy, design, and system operations.",
  keywords: ["software services", "custom development", "IT strategy", "UI/UX design", "DevOps services Kenya"],
};

export default function ServicesPage() {
  return <ServicesContent />;
}
