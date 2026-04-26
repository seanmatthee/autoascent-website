import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import HoursSavedCounter from "@/components/HoursSavedCounter";

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
                AutoAscent was built to solve two problems every growing business faces: they don't have a website that does them justice, and they're wasting hours on tasks that should run automatically. We fix both.
              </p>
              <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#3D3D3D", fontFamily: "var(--font-jakarta)", maxWidth: "none" }}>
                We build custom websites — landing pages, business sites, eCommerce stores — and we build Zapier automation workflows that connect your tools and eliminate manual work. You don't need a different agency for each. We do both, and we do them well.
              </p>
              <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#3D3D3D", fontFamily: "var(--font-jakarta)", maxWidth: "none" }}>
                Every project starts with a free discovery call where we learn your business before we build a single thing. The result is a website or workflow that fits how you actually operate — not a generic template dropped into your stack.
              </p>
            </div>
          </article>
        </AnimatedSection>

        {/* Hours Saved Counter */}
        <AnimatedSection delay={0.15}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "32px",
            }}
          >
            <HoursSavedCounter />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
