import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ValueProposition from "@/components/ValueProposition";
import ServicesOverview from "@/components/ServicesOverview";
import HomeCTA from "@/components/HomeCTA";
import InteractiveDivider from "@/components/InteractiveDivider";
import WorkflowWidget from "@/components/WorkflowWidget";
import FounderTeaser from "@/components/FounderTeaser";
import PricingSection from "@/components/PricingSection";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Web Design & Automation for Businesses Worldwide",
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
      <InteractiveDivider />
      <ValueProposition />

      {/* Workflow Widget */}
      <section style={{ padding: "80px 24px", background: "#F5F5F5" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ marginBottom: "40px", textAlign: "center" }}>
              <SectionLabel text="AUTOMATION IN ACTION" />
              <h2
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 800,
                  fontSize: "clamp(28px, 4vw, 44px)",
                  letterSpacing: "-0.025em",
                  color: "#000",
                  lineHeight: 1.1,
                }}
              >
                Watch a Workflow Run
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  color: "#555",
                  lineHeight: 1.7,
                  maxWidth: "520px",
                  fontFamily: "var(--font-jakarta)",
                  marginTop: "16px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                This is what a real Zapier automation looks like. A lead comes in — and your entire follow-up sequence runs automatically.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <WorkflowWidget />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ServicesOverview />
      <FounderTeaser />
      <PricingSection />
      <HomeCTA />
    </>
  );
}
