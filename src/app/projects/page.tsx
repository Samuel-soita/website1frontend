import type { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Global Work | SMIRROR Solutions",
  description: "Explore our portfolio of elite digital solutions. From enterprise ERPs to luxury e-commerce and AI-driven security, we deliver excellence globally.",
  keywords: ["software portfolio", "enterprise solutions", "SaaS development", "mobile apps portfolio", "SMIRROR projects"],
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
