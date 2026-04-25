import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

export default function AboutFounder() {
  return (
    <section style={{ padding: "100px 24px", background: "#F5F5F5" }}>
      <div
        style={{ maxWidth: "1200px", margin: "0 auto" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
      >
        {/* Photo — left */}
        <AnimatedSection>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "420px",
                aspectRatio: "4 / 5",
                border: "3px solid #000",
                borderRadius: "16px",
                boxShadow: "8px 8px 0px #000",
                overflow: "hidden",
                background: "#E8E8E8",
              }}
            >
              <Image
                src="/founder.jpeg"
                alt="Sean Matthee — Founder of AutoAscent"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Text — right */}
        <AnimatedSection delay={0.15}>
          <article>
            <SectionLabel text="THE FOUNDER" />
            <h2
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 800,
                fontSize: "clamp(28px, 4vw, 44px)",
                letterSpacing: "-0.025em",
                color: "#000",
                lineHeight: 1.1,
                marginBottom: "24px",
              }}
            >
              Sean Matthee
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.75,
                  color: "#3D3D3D",
                  fontFamily: "var(--font-jakarta)",
                  maxWidth: "none",
                }}
              >
                Sean Matthee is the founder of AutoAscent and the driving force behind everything we build. At 17, Sean is already co-founder and CFO of MotoSwop, a South African motorbike marketplace — which means he understands what it actually takes to run a business, manage money, and build systems that hold up under pressure.
              </p>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.75,
                  color: "#3D3D3D",
                  fontFamily: "var(--font-jakarta)",
                  maxWidth: "none",
                }}
              >
                AutoAscent exists because Sean saw first-hand how much time business owners lose to manual, repetitive work — and how transformative the right website and automation stack can be when built correctly. He started AutoAscent to give businesses worldwide access to that same leverage, without the agency overhead.
              </p>
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.75,
                  color: "#3D3D3D",
                  fontFamily: "var(--font-jakarta)",
                  maxWidth: "none",
                }}
              >
                Every project that leaves AutoAscent has Sean's personal attention. He scopes it, builds it, and stands behind it.
              </p>
            </div>

            {/* Signature-style name badge */}
            <div
              style={{
                marginTop: "32px",
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                background: "#fff",
                border: "2px solid #000",
                borderRadius: "12px",
                boxShadow: "4px 4px 0px #000",
                padding: "14px 20px",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#63CF6F",
                  flexShrink: 0,
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "#000",
                  }}
                >
                  Sean Matthee
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "13px",
                    color: "#888",
                  }}
                >
                  Founder, AutoAscent
                </div>
              </div>
            </div>
          </article>
        </AnimatedSection>
      </div>
    </section>
  );
}
