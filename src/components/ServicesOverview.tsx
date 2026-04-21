import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

const services = [
  {
    title: "Lead Capture Automation",
    desc: "Automatically route leads from your forms, ads, and social into your CRM, tag them, and trigger instant email sequences.",
    price: "From $1,000",
    icon: null,
  },
  {
    title: "E-Commerce Workflows",
    desc: "Connect Shopify, WooCommerce, or your store to your fulfilment, inventory, and customer comms. Fewer errors, faster dispatch.",
    price: "From $1,200",
    icon: null,
  },
  {
    title: "Agency Operations",
    desc: "Automate client onboarding, reporting, invoicing, and Slack notifications. Run your agency on autopilot.",
    price: "From $1,500",
    icon: null,
  },
  {
    title: "Retainer Support",
    desc: "Ongoing workflow maintenance, optimisation, and new automations added monthly. We keep your stack running.",
    price: "From $100/mo",
    icon: null,
  },
  {
    title: "Accounting Automation",
    desc: "Automatically sync invoices, expenses, and payments between your store, CRM, and accounting software. Eliminate manual data entry and close your books faster.",
    price: "From $1,000",
    icon: null,
  },
  {
    title: "We Build So Much More",
    desc: "Zapier connects over 6,000 apps — meaning the possibilities are almost endless. From automated reporting and accounting sync, to HR onboarding, inventory alerts, social media scheduling, customer support routing, and beyond. If it's repetitive and happens on a screen, we can automate it. Book a free call and tell us what's slowing you down.",
    price: "Let's Talk",
    icon: null,
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" style={{ padding: "100px 24px", background: "#fff" }}>
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
                <div style={{ marginTop: "24px", display: "flex", justifyContent: "flex-end" }}>
                  <span
                    style={{
                      background: "#63CF6F",
                      border: "1.5px solid #000",
                      borderRadius: "20px",
                      padding: "6px 14px",
                      fontSize: "13px",
                      fontFamily: "var(--font-outfit)",
                      fontWeight: 700,
                      color: "#000",
                    }}
                  >
                    {svc.price}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
