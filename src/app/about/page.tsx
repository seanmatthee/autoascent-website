import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AboutStory from "@/components/AboutStory";
import AboutFounder from "@/components/AboutFounder";
import AboutWhy from "@/components/AboutWhy";

export const metadata: Metadata = {
  title: "About Us — Web Design & Automation Agency",
  description:
    "Learn how AutoAscent builds custom websites and Zapier automation workflows for businesses worldwide. Free discovery call, clear scoping, real results.",
  alternates: {
    canonical: "https://www.auto-ascent.us/about",
  },
  openGraph: {
    title: "About AutoAscent — Web Design & Automation Agency",
    description:
      "We build websites and automation workflows for businesses worldwide. One team, two services, zero fluff.",
    url: "https://www.auto-ascent.us/about",
    images: [{ url: "/og", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About AutoAscent — Web Design & Automation Agency",
    description:
      "We build websites and automation workflows for businesses worldwide. One team, two services, zero fluff.",
    images: ["/og"],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "AutoAscent",
            url: "https://www.auto-ascent.us",
            description:
              "Custom websites and Zapier automation workflows for businesses worldwide.",
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
          }),
        }}
      />
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
              We Build Websites and Automations That Actually Work
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
              AutoAscent was built to give businesses worldwide access to professional web design and no-code automation — without agency overhead or enterprise pricing. One team. Two services. Real results.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <AboutStory />
      <AboutFounder />
      <AboutWhy />
    </>
  );
}
