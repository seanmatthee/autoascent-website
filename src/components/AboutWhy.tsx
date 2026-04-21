import { CheckCircle, Users, Shield, ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

const items = [
  {
    icon: <CheckCircle size={24} color="#63CF6F" />,
    title: "Zapier Specialists, Not Generalists",
    desc: "We do one thing and do it exceptionally well.",
  },
  {
    icon: <Users size={24} color="#63CF6F" />,
    title: "Small Business DNA",
    desc: "We understand your constraints. Every solution is scoped to be affordable and impactful.",
  },
  {
    icon: <Shield size={24} color="#63CF6F" />,
    title: "Built to Last",
    desc: "We document every workflow and test rigorously. Your automations won't break at 2am.",
  },
  {
    icon: <ArrowUpRight size={24} color="#63CF6F" />,
    title: "Results-First Pricing",
    desc: "Our projects are scoped to deliver clear ROI. You'll know exactly what you're getting before you pay.",
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
