import { Globe, Zap, TrendingUp } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const cards = [
  {
    num: "01",
    icon: <Globe size={28} color="#63CF6F" />,
    title: "Websites That Convert",
    desc: "We design and build custom websites, landing pages, and eCommerce stores — clean, fast, and built to turn visitors into customers.",
  },
  {
    num: "02",
    icon: <Zap size={28} color="#63CF6F" />,
    title: "Automation That Saves Hours",
    desc: "We connect your tools with Zapier workflows that run 24/7 — from lead capture and CRM sync to invoicing and fulfilment. No manual work required.",
  },
  {
    num: "03",
    icon: <TrendingUp size={28} color="#63CF6F" />,
    title: "Built for Growth",
    desc: "Everything we build is designed to scale with you. Whether you need a website today and automation next month, we're your long-term digital partner.",
  },
];

export default function ValueProposition() {
  return (
    <section id="value-prop" aria-label="Why AutoAscent" style={{ padding: "100px 24px", background: "#F5F5F5" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
            alignItems: "stretch",
          }}
        >
          {cards.map((card, i) => (
            <AnimatedSection key={i} delay={i * 0.1} style={{ height: "100%" }}>
              <div
                style={{
                  background: "#fff",
                  border: "2px solid #000",
                  borderRadius: "12px",
                  boxShadow: "6px 6px 0px #000",
                  padding: "40px 32px",
                  position: "relative",
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "-10px",
                    right: "20px",
                    fontSize: "80px",
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 800,
                    color: "#E8E8E8",
                    lineHeight: 1,
                    userSelect: "none",
                  }}
                >
                  {card.num}
                </span>
                <div style={{ marginBottom: "20px" }}>{card.icon}</div>
                <h3
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 700,
                    fontSize: "22px",
                    color: "#000",
                    marginBottom: "12px",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    color: "#3D3D3D",
                    fontSize: "17px",
                    lineHeight: 1.65,
                    fontFamily: "var(--font-jakarta)",
                    maxWidth: "none",
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
