import Image from "next/image";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function FounderTeaser() {
  return (
    <section style={{ padding: "80px 24px", background: "#F5F5F5" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
        <AnimatedSection>
          <SectionLabel text="THE FOUNDER" />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                border: "2px solid #000",
                boxShadow: "3px 3px 0px #000",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <Image
                src="/founder2.jpeg"
                alt="Sean Matthee — Founder of AutoAscent"
                width={80}
                height={80}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 800,
              fontSize: "clamp(24px, 4vw, 36px)",
              letterSpacing: "-0.025em",
              color: "#000",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            Sean Matthee
          </h2>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: "#3D3D3D",
              fontFamily: "var(--font-jakarta)",
              marginBottom: "8px",
            }}
          >
            At 17, Sean co-founded MotoSwop — a South African motorbike marketplace — before launching AutoAscent to help businesses worldwide cut manual work and build a web presence that actually converts.
          </p>
          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.75,
              color: "#3D3D3D",
              fontFamily: "var(--font-jakarta)",
              marginBottom: "28px",
            }}
          >
            Every project gets his personal attention from scoping to delivery.
          </p>
          <Link
            href="/about"
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 600,
              fontSize: "16px",
              color: "#000",
              textDecoration: "none",
              borderBottom: "2px solid #63CF6F",
              paddingBottom: "2px",
            }}
          >
            Read the full story →
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
