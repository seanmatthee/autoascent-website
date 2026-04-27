import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We dig into your business — what you build, who you serve, and exactly where you're losing time or missing customers. Free, no pressure, no pitch.",
  },
  {
    num: "02",
    title: "Workflow Mapping",
    desc: "Every automation step gets mapped out. Every page wireframed. You see exactly what we're building before we write a single line of code.",
  },
  {
    num: "03",
    title: "Build & Test",
    desc: "We build your website or automation stack from scratch. Every edge case tested, every integration verified, every trigger confirmed live.",
  },
  {
    num: "04",
    title: "Integration",
    desc: "Everything gets wired together — forms, CRMs, email sequences, Slack, calendars. Full stack, fully connected, nothing manual.",
  },
  {
    num: "05",
    title: "Go Live",
    desc: "We deploy, monitor the first 48 hours, and hand you a clean documentation package. You own it, you control it, we're on call.",
  },
];

export default function ProcessTimeline() {
  return (
    <section style={{ padding: "100px 24px", background: "#F5F5F5" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ marginBottom: "64px" }}>
            <SectionLabel text="HOW IT WORKS" />
            <h2
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 800,
                fontSize: "clamp(32px, 5vw, 52px)",
                letterSpacing: "-0.02em",
                color: "#000",
                lineHeight: 1.1,
                maxWidth: "540px",
              }}
            >
              From Discovery to Live in Days
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#555",
                lineHeight: 1.7,
                maxWidth: "560px",
                fontFamily: "var(--font-jakarta)",
                marginTop: "16px",
              }}
            >
              We move fast. Most projects go from first call to live in under two weeks. Here&apos;s exactly how.
            </p>
          </div>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "0px",
            position: "relative",
          }}
        >
          {/* Left column: steps */}
          <div style={{ position: "relative" }}>
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.1}>
                <div
                  style={{
                    display: "flex",
                    gap: "24px",
                    alignItems: "flex-start",
                    position: "relative",
                  }}
                >
                  {/* Number + connector */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "50%",
                        background: "#63CF6F",
                        border: "2px solid #000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-outfit)",
                        fontWeight: 800,
                        fontSize: "16px",
                        color: "#000",
                        flexShrink: 0,
                        zIndex: 1,
                        position: "relative",
                      }}
                    >
                      {step.num}
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        style={{
                          width: "2px",
                          height: "64px",
                          background:
                            "repeating-linear-gradient(to bottom, #63CF6F 0px, #63CF6F 6px, transparent 6px, transparent 12px)",
                          margin: "4px 0",
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    style={{
                      paddingTop: "12px",
                      paddingBottom: i < steps.length - 1 ? "52px" : "0",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-outfit)",
                        fontWeight: 700,
                        fontSize: "20px",
                        color: "#000",
                        marginBottom: "8px",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-jakarta)",
                        fontSize: "16px",
                        color: "#3D3D3D",
                        lineHeight: 1.7,
                        maxWidth: "440px",
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Right column: stat card */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px",
            }}
          >
            <AnimatedSection delay={0.3}>
              <div
                style={{
                  background: "#fff",
                  border: "2px solid #000",
                  borderRadius: "16px",
                  boxShadow: "6px 6px 0px #000",
                  padding: "36px 32px",
                  maxWidth: "340px",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 800,
                    fontSize: "clamp(36px, 5vw, 56px)",
                    color: "#63CF6F",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  14 days
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontWeight: 700,
                    fontSize: "16px",
                    color: "#000",
                    marginBottom: "16px",
                  }}
                >
                  Average time from discovery call to live
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    "No bloated project timelines",
                    "No back-and-forth that goes nowhere",
                    "Daily updates while we build",
                  ].map((point) => (
                    <div
                      key={point}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        fontFamily: "var(--font-jakarta)",
                        fontSize: "14px",
                        color: "#3D3D3D",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#63CF6F"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
