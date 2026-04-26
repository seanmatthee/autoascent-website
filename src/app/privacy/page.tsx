import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "AutoAscent Privacy Policy — how we collect, use, and protect your data.",
  alternates: {
    canonical: "https://auto-ascent.us/privacy",
  },
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <section style={{ padding: "80px 24px 100px", background: "#fff" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <SectionLabel text="LEGAL" />
        <h1
          style={{
            fontFamily: "var(--font-outfit)",
            fontWeight: 800,
            fontSize: "clamp(28px, 5vw, 48px)",
            letterSpacing: "-0.025em",
            color: "#000",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Privacy Policy
        </h1>
        <p
          style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "17px",
            color: "#555",
            lineHeight: 1.75,
          }}
        >
          [Content pending review]
        </p>
      </div>
    </section>
  );
}
