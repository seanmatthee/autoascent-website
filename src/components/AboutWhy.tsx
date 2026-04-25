import { CheckCircle, Users, Shield, ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

const items = [
  {
    icon: <CheckCircle size={24} color="#63CF6F" />,
    title: "Two Services, One Team",
    desc: "We build websites and automation workflows. You get a single partner who understands both — and how they work together to grow your business.",
  },
  {
    icon: <Users size={24} color="#63CF6F" />,
    title: "Built for Real Budgets",
    desc: "We work with businesses at every stage. Every project is scoped to be affordable, impactful, and clear before you commit.",
  },
  {
    icon: <Shield size={24} color="#63CF6F" />,
    title: "Built to Last",
    desc: "We document everything and test rigorously. Your website won't go down and your automations won't break at 2am.",
  },
  {
    icon: <ArrowUpRight size={24} color="#63CF6F" />,
    title: "Results-First Pricing",
    desc: "Every project is scoped to deliver clear value. You'll know exactly what you're getting — and what it'll do for your business — before you pay.",
  },
];

export default function AboutWhy() {
  return (
    <section style={{ padding: "100px 24px", background: "#F5F5F5" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel text="WHY US" />
            <h2
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 800,
                fontSize: "clamp(28px, 4vw, 48px)",
                letterSpacing: "-0.02em",
                color: "#000",
              }}
            >
              What Sets Us Apart
            </h2>
          </div>
        </AnimatedSection>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {items.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div
                style={{
                  background: "#fff",
                  border: "2px solid #000",
                  borderRadius: "12px",
                  boxShadow: "6px 6px 0px #000",
                  padding: "28px 32px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: "48px",
                    height: "48px",
                    minWidth: "48px",
                    border: "2px solid #63CF6F",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#fff",
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-outfit)",
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "#000",
                      marginBottom: "6px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "#555",
                      fontSize: "16px",
                      lineHeight: 1.65,
                      fontFamily: "var(--font-jakarta)",
                      maxWidth: "none",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
