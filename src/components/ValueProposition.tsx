import { Zap, Clock, TrendingUp } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const cards = [
  {
    num: "01",
    icon: <Zap size={28} color="#63CF6F" />,
    title: "Connect Everything",
    desc: "During our first free meeting we will connect all the relevant apps that you work in daily. Then we will build your fully automated workflow which will save you hours.",
  },
  {
    num: "02",
    icon: <Clock size={28} color="#63CF6F" />,
    title: "Save 10+ Hours Weekly",
    desc: "Our clients recover 10–20 hours per week from manual data entry and follow-ups. That's time you can put back into growth.",
  },
  {
    num: "03",
    icon: <TrendingUp size={28} color="#63CF6F" />,
    title: "Built for Growth",
    desc: "Every workflow is designed to scale with you — not break when you hit 10x volume. We engineer for your next stage, not just today.",
  },
];

export default function ValueProposition() {
  return (
    <section id="value-prop" style={{ padding: "100px 24px", background: "#F5F5F5" }}>
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
