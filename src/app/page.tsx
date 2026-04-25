import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import ServicesOverview from "@/components/ServicesOverview";
import HomeCTA from "@/components/HomeCTA";

export const metadata: Metadata = {
  title: "Web Design & Automation for Businesses Worldwide | AutoAscent",
  description:
    "AutoAscent builds custom websites and done-for-you Zapier automation workflows for businesses worldwide. Landing pages, eCommerce stores, CRM integrations, and more. Free discovery call.",
  alternates: {
    canonical: "https://auto-ascent.us",
  },
  openGraph: {
    title: "Web Design & Automation for Businesses Worldwide | AutoAscent",
    description:
      "Custom websites and Zapier workflows for businesses worldwide. We build what you need to grow — from landing pages to full automation stacks.",
    url: "https://auto-ascent.us",
    images: [{ url: "/og", width: 1200, height: 630 }],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValueProposition />
      <ServicesOverview />
      <HomeCTA />
    </>
  );
}
