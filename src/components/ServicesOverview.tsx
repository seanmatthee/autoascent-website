import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

const services = [
  {
    title: "Custom Website Design",
    desc: "A professionally designed website built from scratch for your business. Fast, mobile-first, and optimised for search — no templates, no compromises.",
  },
  {
    title: "Landing Pages",
    desc: "High-converting single-page sites for campaigns, product launches, or lead generation. Designed to turn visitors into enquiries.",
  },
  {
    title: "eCommerce Stores",
    desc: "We design and build full eCommerce stores on Shopify, WooCommerce, or custom stacks — mobile-first, fast, and built to convert browsers into buyers. Inventory, checkout, and payments, done right.",
  },
  {
    title: "Lead Capture Automation",
    desc: "Automatically route leads from your forms, ads, and social into your CRM, tag them, and trigger instant email sequences.",
  },
  {
    title: "Zapier Workflow Automation",
    desc: "Connect your tools with custom multi-step Zapier workflows. From eCommerce fulfilment and accounting sync to agency onboarding and CRM automation.",
  },
  {
    title: "Not Sure What You Need?",
    desc: "We build websites and automations across every industry — worldwide. If it lives on a screen, we can design it or automate it. Book a free discovery call and tell us where you're losing time or missing out on customers.",
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" aria-label="Zapier Automation Services" style={{ padding: "100px 24px", background: "#fff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel text="SERVICES" />
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
              What We Build
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#555",
                lineHeight: 1.7,
                maxWidth: "640px",
                fontFamily: "var(--font-jakarta)",
                marginTop: "16px",
              }}
            >
              We build two things: custom websites and Zapier automation workflows.
              Whether you need a landing page that converts, an eCommerce store, or
              a fully automated backend that runs without you — we scope it, build
              it, and deliver it. Every project starts with a free discovery call.
            </p>
            <div style={{ marginTop: "28px" }}>
              <Link
                href="/showcase"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 600,
                  fontSize: "15px",
                  color: "#fff",
                  textDecoration: "none",
                  background: "#579AC2",
                  border: "2px solid #000",
                  borderRadius: "10px",
                  padding: "12px 22px",
                  transition: "all 0.2s ease",
                }}
              >
                See It in Action →
              </Link>
            </div>
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
          {services.map((svc, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div
                style={{
                  background: "#fff",
                  border: "2px solid #000",
                  borderRadius: "12px",
                  boxShadow: "6px 6px 0px #000",
                  padding: "36px 28px",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 700,
                    fontSize: "18px",
                    color: "#000",
                    marginBottom: "12px",
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    color: "#3D3D3D",
                    fontSize: "16px",
                    lineHeight: 1.65,
                    fontFamily: "var(--font-jakarta)",
                    flex: 1,
                    maxWidth: "none",
                  }}
                >
                  {svc.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
