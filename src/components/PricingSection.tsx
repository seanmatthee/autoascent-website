"use client";

import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

const plans = [
  {
    name: "Landing Page",
    price: "From $200",
    cadence: "Starting price",
    features: [
      "Custom design (no templates)",
      "Mobile-first, fast-loading",
      "Contact / lead capture form",
      "SEO-ready on launch",
      "1 round of revisions",
    ],
    popular: false,
  },
  {
    name: "Full Website",
    price: "From $800",
    cadence: "Starting price",
    features: [
      "Everything in Landing Page",
      "Up to 6 pages",
      "Blog or portfolio section",
      "Google Analytics setup",
      "2 rounds of revisions",
    ],
    popular: true,
  },
  {
    name: "Monthly Retainer",
    price: "$100",
    cadence: "per month",
    features: [
      "Ongoing Zapier automation",
      "Monthly workflow updates",
      "Priority support",
      "New zaps on request",
      "Cancel anytime",
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section style={{ padding: "100px 24px", background: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ marginBottom: "56px", textAlign: "center" }}>
            <SectionLabel text="PRICING" />
            <h2
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 800,
                fontSize: "clamp(32px, 5vw, 52px)",
                letterSpacing: "-0.02em",
                color: "#000",
                lineHeight: 1.1,
              }}
            >
              Simple, Transparent Pricing
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#555",
                lineHeight: 1.7,
                maxWidth: "560px",
                fontFamily: "var(--font-jakarta)",
                marginTop: "16px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              No surprise invoices. Every project is scoped upfront so you know exactly what you're getting.
            </p>
          </div>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
            alignItems: "stretch",
          }}
        >
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={i * 0.1}>
              <div
                style={{
                  background: "#fff",
                  border: plan.popular ? "3px solid #63CF6F" : "2px solid #000",
                  borderRadius: "16px",
                  boxShadow: plan.popular ? "8px 8px 0px #63CF6F" : "6px 6px 0px #000",
                  padding: "36px 28px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {plan.popular && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-14px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#63CF6F",
                      border: "2px solid #000",
                      borderRadius: "999px",
                      padding: "4px 16px",
                      fontFamily: "var(--font-outfit)",
                      fontWeight: 700,
                      fontSize: "11px",
                      letterSpacing: "0.08em",
                      color: "#000",
                      whiteSpace: "nowrap",
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}

                <div style={{ marginBottom: "24px" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-outfit)",
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "#000",
                      marginBottom: "8px",
                    }}
                  >
                    {plan.name}
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-outfit)",
                        fontWeight: 800,
                        fontSize: "40px",
                        color: "#000",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {plan.price}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-jakarta)",
                        fontSize: "15px",
                        color: "#888",
                      }}
                    >
                      {plan.cadence}
                    </span>
                  </div>
                </div>

                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    flex: 1,
                    marginBottom: "0",
                  }}
                >
                  {plan.features.map((feat) => (
                    <li
                      key={feat}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        fontFamily: "var(--font-jakarta)",
                        fontSize: "15px",
                        color: "#3D3D3D",
                        lineHeight: 1.5,
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#63CF6F"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ flexShrink: 0, marginTop: "2px" }}
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "center",
                    marginTop: "20px",
                    background: "#63CF6F",
                    border: "2px solid #000",
                    borderRadius: "10px",
                    padding: "13px",
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "#000",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "4px 4px 0px #000";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Get Started →
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <p
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "15px",
                color: "#888",
                marginBottom: "24px",
                lineHeight: 1.6,
              }}
            >
              Prices shown in USD. All projects are scoped on a free discovery call — final price confirmed before any work begins.
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontFamily: "var(--font-outfit)",
                fontWeight: 600,
                fontSize: "16px",
                color: "#000",
                textDecoration: "none",
                background: "#63CF6F",
                border: "2px solid #000",
                borderRadius: "10px",
                padding: "14px 28px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "4px 4px 0px #000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Get a Free Scope Call
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
