import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import ServicesOverview from "@/components/ServicesOverview";
import HomeCTA from "@/components/HomeCTA";

export const metadata: Metadata = {
  title: "Zapier Automation for US Small Businesses | AutoAscent",
  description:
    "AutoAscent builds done-for-you Zapier automation workflows for US small businesses. Connect your CRM, email, eCommerce, and ops tools. Save 10+ hours per week. Free discovery call.",
  alternates: {
    canonical: "https://auto-ascent.us",
  },
  openGraph: {
    title: "Zapier Automation for US Small Businesses | AutoAscent",
    description:
      "Done-for-you Zapier workflows. Connect your tools, eliminate manual work, save 10+ hours per week. From $1,000.",
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
