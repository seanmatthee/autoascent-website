import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function HomeCTA() {
  return (
    <section style={{ background: "#000", padding: "100px 24px" }}>
      <AnimatedSection>
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 800,
              fontSize: "clamp(28px, 4.5vw, 48px)",
              letterSpacing: "-0.02em",
              color: "#fff",
              marginBottom: "20px",
              lineHeight: 1.15,
            }}
          >
            Ready to Build Something That Works?
          </h2>
          <p
            style={{
              color: "#555",
              fontSize: "17px",
              lineHeight: 1.7,
              marginBottom: "40px",
              fontFamily: "var(--font-jakarta)",
              maxWidth: "none",
            }}
          >
            Book a free 30-minute consultation. Whether you need a website, an automation, or both — we'll scope exactly what your business needs and show you what it would look like.
          </p>
          <Button label="Book Your Free Consultation" href="/contact" variant="primary" />
        </div>
      </AnimatedSection>
    </section>
  );
}
