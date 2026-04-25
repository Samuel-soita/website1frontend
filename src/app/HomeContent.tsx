"use client";

import Hero from "@/components/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import WorkflowProcess from "@/components/home/WorkflowProcess";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import TechnologyTicker from "@/components/home/TechnologyTicker";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-white">
      {/* Hero Section */}
      <Hero />

      {/* Services Overview */}
      <ServicesOverview />

      {/* Technology Solutions Ticker */}
      <TechnologyTicker />

      {/* Value Proposition / Workflow */}
      <WorkflowProcess />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

