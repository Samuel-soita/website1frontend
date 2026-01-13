"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function StructuredData() {
  const pathname = usePathname();

  useEffect(() => {
    // Skip if not on client
    if (typeof window === 'undefined') return;
    // Only inject scripts on client side after mount to avoid hydration mismatch
    if (typeof window === 'undefined') return;

    // Remove any existing structured data scripts we've added
    const existingScripts = document.querySelectorAll('script[data-structured-data]');
    existingScripts.forEach(script => script.remove());

    // Breadcrumb Schema for navigation
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://smirror.solutions"
        }
      ]
    };

    // Add page-specific breadcrumbs
    if (pathname && pathname !== "/") {
      const pathSegments = pathname.split("/").filter(Boolean);
      pathSegments.forEach((segment, index) => {
        const name = segment
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        breadcrumbSchema.itemListElement.push({
          "@type": "ListItem",
          position: index + 2,
          name: name,
          item: `https://smirror.solutions/${pathSegments.slice(0, index + 1).join("/")}`,
        });
      });
    }

    // Service Schema for services page
    const getServiceSchema = () => {
      if (pathname === "/services") {
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Software Development Services",
          "provider": {
            "@type": "Organization",
            "name": "SMIRROR Solutions"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Worldwide"
          },
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://smirror.solutions/services",
            "servicePhone": "+254-768-640-343",
            "serviceEmail": "samuelsoita79@gmail.com"
          },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          }
        };
      }
      return null;
    };

    // Inject breadcrumb schema
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.setAttribute('data-structured-data', 'breadcrumb');
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    // Inject service schema if applicable
    const serviceSchema = getServiceSchema();
    if (serviceSchema) {
      const serviceScript = document.createElement('script');
      serviceScript.type = 'application/ld+json';
      serviceScript.setAttribute('data-structured-data', 'service');
      serviceScript.textContent = JSON.stringify(serviceSchema);
      document.head.appendChild(serviceScript);
    }

    // Cleanup function
    return () => {
      const scriptsToRemove = document.querySelectorAll('script[data-structured-data]');
      scriptsToRemove.forEach(script => script.remove());
    };
  }, [pathname]);

  // Return null - we inject scripts via useEffect to avoid hydration issues
  return null;
}
