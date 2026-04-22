import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import WorkflowWidget from "@/components/WorkflowWidget";

export default function AboutStory() {
  return (
    <section style={{ padding: "100px 24px", background: "#fff" }}>
      <div
        style={{ maxWidth: "1200px", margin: "0 auto" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      >
        {/* Text */}
        <AnimatedSection>
          <article>
            <SectionLabel text="OUR STORY" />
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#3D3D3D", fontFamily: "var(--font-jakarta)", maxWidth: "none" }}>
                AutoAscent was born out of frustration. Small business owners were drowning in repetitive tasks — copy-pasting data between tools, manually sending follow-ups, losing leads in spreadsheets. We knew Zapier could fix all of it. They just needed someone to build it right.
              </p>
              <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#3D3D3D", fontFamily: "var(--font-jakarta)", maxWidth: "none" }}>
                We specialise exclusively in Zapier automations. Our focus is to save you time. Just deep, focused expertise in connecting your tech stack and making it run itself. That focus is what makes our workflows reliable.
              </p>
              <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#3D3D3D", fontFamily: "var(--font-jakarta)", maxWidth: "none" }}>
                Every project we take on starts with a free discovery call where we learn your business before we touch a single Zap. The result is automations that fit how you actually work instead of generic templates.
              </p>
            </div>
          </article>
        </AnimatedSection>

        {/* WorkflowWidget */}
        <AnimatedSection delay={0.15}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "32px",
            }}
          >
            <WorkflowWidget />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
