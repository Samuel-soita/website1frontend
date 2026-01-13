import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import StructuredDataWrapper from "@/components/StructuredDataWrapper";
import { TalkToUsProvider } from "@/contexts/TalkToUsContext";

const Navigation = dynamic(() => import("@/components/Navigation"));

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Optimize font loading
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://smirror.solutions'),
  title: {
    default: "SMIRROR Solutions - Full-Stack Development Experts",
    template: "%s | SMIRROR Solutions"
  },
  description: "Professional web development that lets you relax. We build complete digital solutions from frontend to backend. Custom websites, web applications, mobile apps, SaaS development, IT consulting, and software maintenance services. Based in Nairobi, Kenya.",
  keywords: [
    "web development",
    "full-stack development",
    "React development",
    "Node.js development",
    "custom software development",
    "mobile app development",
    "SaaS development",
    "IT consulting",
    "software consulting",
    "UI/UX design",
    "DevOps services",
    "cloud computing",
    "software maintenance",
    "Nairobi software company",
    "Kenya web development",
    "African tech company",
    "Samuel Soita Watua"
  ],
  authors: [{ name: "Samuel Soita Watua", url: "https://smirror.solutions/who-we-are" }],
  creator: "SMIRROR Solutions",
  publisher: "SMIRROR Solutions",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "https://smirror.solutions",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smirror.solutions",
    siteName: "SMIRROR Solutions",
    title: "SMIRROR Solutions - Full-Stack Development Experts",
    description: "Professional web development that lets you relax. Complete digital solutions from frontend to backend.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SMIRROR Solutions - Full-Stack Development Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SMIRROR Solutions - Full-Stack Development Experts",
    description: "Professional web development that lets you relax. Complete digital solutions from frontend to backend.",
    creator: "@smirrorsolutions",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-verification-code',
    // yandex: 'your-verification-code',
    // bing: 'your-verification-code',
  },
  category: "Technology",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#3b82f6",
  colorScheme: "dark",
};

// Structured Data for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SMIRROR Solutions",
  "alternateName": "SMIRROR",
  "url": "https://smirror.solutions",
  "logo": "https://smirror.solutions/logo.png",
  "description": "Professional web development that lets you relax. We build complete digital solutions from frontend to backend.",
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "Samuel Soita Watua",
    "url": "https://smirror.solutions/who-we-are"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Nairobi",
    "addressCountry": "KE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+254-768-640-343",
    "contactType": "Customer Service",
    "email": "samuelsoita79@gmail.com",
    "areaServed": "Worldwide",
    "availableLanguage": ["English"]
  },
  "sameAs": [
    // Add your social media profiles here
    // "https://www.linkedin.com/company/smirror-solutions",
    // "https://twitter.com/smirrorsolutions",
  ],
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SMIRROR Solutions",
  "url": "https://smirror.solutions",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://smirror.solutions/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased text-white relative overflow-x-hidden`}
        style={{ backgroundColor: '#1a1a1a' }}
      >
        <TalkToUsProvider>
          <div className="geometric-bg fixed inset-0 -z-10" aria-hidden="true"></div>
          <Navigation />
          <StructuredDataWrapper />
          <main className="relative z-10 pt-20" role="main">
            {children}
          </main>
        </TalkToUsProvider>
      </body>
    </html>
  );
}
