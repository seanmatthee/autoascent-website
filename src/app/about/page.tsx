import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AboutStory from "@/components/AboutStory";
import AboutWhy from "@/components/AboutWhy";

export const metadata: Metadata = {
  title: "About Us — Zapier Automation Specialists | AutoAscent",
  description:
    "AutoAscent specialises exclusively in Zapier automation for US small businesses. Learn about our approach: free discovery call, custom workflow builds, and reliable automations that actually work.",
  alternates: {
    canonical: "https://auto-ascent.us/about",
  },
  openGraph: {
    title: "About AutoAscent — Zapier Automation Specialists",
    description:
      "We specialise exclusively in Zapier. Deep expertise in connecting your tech stack and making it run itself.",
    url: "https://auto-ascent.us/about",
    images: [{ url: "/og", width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        style={{
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fff",
          borderBottom: "3px solid #000",
          padding: "80px 24px",
          textAlign: "center",
        }}
      >
        <AnimatedSection>
          <div style={{ maxWidth: "720px" }}>
            <SectionLabel text="ABOUT US" />
            <h1
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 800,
                fontSize: "clamp(32px, 5.5vw, 60px)",
                letterSpacing: "-0.025em",
                color: "#000",
                lineHeight: 1.1,
                marginBottom: "24px",
              }}
            >
              We Build Automations That Actually Work
            </h1>
            <p
              style={{
                fontSize: "18px",
                color: "#555",
                lineHeight: 1.7,
                fontFamily: "var(--font-jakarta)",
                maxWidth: "none",
              }}
            >
              AutoAscent was founded to give small businesses access to the same operational leverage that enterprise companies take for granted. We will help you scale by saving hours of your time.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <AboutStory />
      <AboutWhy />
    </>
  );
}
