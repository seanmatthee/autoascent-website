import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import AnimatedLogo from "@/components/AnimatedLogo";

export const metadata: Metadata = {
  title: "Book a Free Discovery Call | AutoAscent",
  description:
    "Book a free 30-minute discovery call with AutoAscent. Tell us about your business and we'll show you what we'd build — website, automation, or both. Clients worldwide welcome.",
  alternates: {
    canonical: "https://auto-ascent.us/contact",
  },
  openGraph: {
    title: "Book a Free Discovery Call | AutoAscent",
    description:
      "Free 30-minute call. Tell us what your business needs and we'll show you exactly what we'd build.",
    url: "https://auto-ascent.us/contact",
    images: [{ url: "/og", width: 1200, height: 630 }],
  },
};

const contactItems = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "seanmatthee@auto-ascent.us",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Centurion, South Africa\n(serving clients worldwide, remotely)",
  },
  {
    icon: <Clock size={18} />,
    label: "Response Time",
    value: "Within 24 hours",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        style={{
          padding: "80px 24px 60px",
          borderBottom: "3px solid #000",
          background: "#fff",
          textAlign: "center",
        }}
      >
        <AnimatedSection>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <SectionLabel text="CONTACT" />
            <h1
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 800,
                fontSize: "clamp(32px, 5.5vw, 58px)",
                letterSpacing: "-0.025em",
                color: "#000",
                lineHeight: 1.1,
                marginBottom: "20px",
              }}
            >
              Let's Build Something Together
            </h1>
            <p
              style={{
                fontSize: "18px",
                color: "#555",
                lineHeight: 1.7,
                fontFamily: "var(--font-jakarta)",
                maxWidth: "none",
              }}
            >
              Fill in the form below so we know a bit about your business before our first free discovery call. Whether you need a website, automation, or both — we'll figure out the right fit.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Two-column layout */}
      <section style={{ padding: "80px 24px 100px", background: "#F5F5F5" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          {/* Left — Contact Info */}
          <AnimatedSection>
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 700,
                  fontSize: "24px",
                  color: "#000",
                  marginBottom: "32px",
                }}
              >
                Get In Touch
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "40px" }}>
                {contactItems.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <div
                      style={{
                        flexShrink: 0,
                        width: "44px",
                        height: "44px",
                        border: "2px solid #63CF6F",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#63CF6F",
                        background: "#fff",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-outfit)",
                          fontWeight: 700,
                          fontSize: "13px",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "#555",
                          marginBottom: "4px",
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-jakarta)",
                          fontSize: "16px",
                          color: "#000",
                          whiteSpace: "pre-line",
                          lineHeight: 1.5,
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  background: "#fff",
                  border: "2px solid #000",
                  borderRadius: "12px",
                  padding: "20px 24px",
                  fontSize: "16px",
                  color: "#555",
                  fontFamily: "var(--font-jakarta)",
                  lineHeight: 1.6,
                }}
              >
                All services are delivered remotely. We work with clients across all time zones, worldwide.
              </div>

              <div style={{ marginTop: "32px", display: "flex", justifyContent: "center" }}>
                <AnimatedLogo />
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Form */}
          <AnimatedSection delay={0.15}>
            <div
              style={{
                background: "#fff",
                border: "2px solid #000",
                borderRadius: "12px",
                boxShadow: "6px 6px 0px #000",
                padding: "40px 36px",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 700,
                  fontSize: "22px",
                  color: "#000",
                  marginBottom: "28px",
                }}
              >
                Tell Us About Your Business
              </h2>
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
