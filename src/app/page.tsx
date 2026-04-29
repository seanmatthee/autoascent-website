import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import ServicesOverview from "@/components/ServicesOverview";
import HomeCTA from "@/components/HomeCTA";
import InteractiveDivider from "@/components/InteractiveDivider";
import FounderTeaser from "@/components/FounderTeaser";
import PricingSection from "@/components/PricingSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import WorkflowVisualiser from "@/components/WorkflowVisualiser";
import ROICalculator from "@/components/ROICalculator";
import IntegrationLogoWall from "@/components/IntegrationLogoWall";

export const metadata: Metadata = {
  title: { absolute: "Web Design & Automation for Businesses Worldwide | AutoAscent" },
  description:
    "Custom websites and Zapier automation for businesses worldwide. Landing pages, eCommerce, CRM integrations, and more. Free discovery call.",
  alternates: {
    canonical: "https://www.auto-ascent.us",
  },
  openGraph: {
    title: "Web Design & Automation for Businesses Worldwide | AutoAscent",
    description:
      "Custom websites and Zapier workflows for businesses worldwide. We build what you need to grow — from landing pages to full automation stacks.",
    url: "https://www.auto-ascent.us",
    images: [{ url: "/og", width: 1200, height: 630 }],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "AutoAscent",
            url: "https://www.auto-ascent.us",
            logo: "https://www.auto-ascent.us/logo-white.png",
            description:
              "Custom websites and Zapier automation workflows for businesses worldwide.",
            telephone: "+27713854935",
            areaServed: "Worldwide",
            founder: { "@type": "Person", name: "Sean Matthee" },
            sameAs: ["https://twitter.com/autoascent"],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Centurion",
              addressCountry: "ZA",
            },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              email: "seanmatthee@auto-ascent.us",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom Website Design",
                    description: "Landing pages from $200, full sites from $800.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Zapier Workflow Automation",
                    description: "Done-for-you Zapier automation workflows. Monthly retainer from $100/month.",
                  },
                },
              ],
            },
          }),
        }}
      />
      <HeroSection />
      <InteractiveDivider />
      <ValueProposition />
      <IntegrationLogoWall />
      <WorkflowVisualiser />
      <ServicesOverview />
      <ProcessTimeline />
      <ROICalculator />
      <FounderTeaser />
      <PricingSection />
      <HomeCTA />
    </>
  );
}
