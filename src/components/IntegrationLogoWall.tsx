import AnimatedSection from "@/components/ui/AnimatedSection";

const tools = [
  { name: "Zapier",         color: "#FF4A00", bg: "#FFF0EB", icon: "Z"  },
  { name: "Make",           color: "#6D00CC", bg: "#F4EBFF", icon: "M"  },
  { name: "Gmail",          color: "#EA4335", bg: "#FEECEB", icon: "G"  },
  { name: "Notion",         color: "#000000", bg: "#F5F5F5", icon: "N"  },
  { name: "Slack",          color: "#4A154B", bg: "#F5EBF5", icon: "S"  },
  { name: "Google Sheets",  color: "#0F9D58", bg: "#E8F9F1", icon: "Sh" },
  { name: "Airtable",       color: "#FCB400", bg: "#FFF8E1", icon: "At" },
  { name: "HubSpot",        color: "#FF7A59", bg: "#FFF0EB", icon: "H"  },
  { name: "WhatsApp",       color: "#25D366", bg: "#E8FFF1", icon: "W"  },
  { name: "Stripe",         color: "#635BFF", bg: "#EFEEFC", icon: "St" },
  { name: "Shopify",        color: "#5C6AC4", bg: "#ECEFFE", icon: "Sh" },
  { name: "Calendly",       color: "#006BFF", bg: "#E5F0FF", icon: "C"  },
  { name: "Typeform",       color: "#262627", bg: "#F5F5F5", icon: "Tf" },
  { name: "ActiveCampaign", color: "#004CFF", bg: "#E5EEFF", icon: "Ac" },
];

function LogoCard({ tool }: { tool: (typeof tools)[0] }) {
  return (
    <div
      aria-label={tool.name}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        background: "#fff",
        border: "1.5px solid #E5E7EB",
        borderRadius: "12px",
        padding: "12px 18px",
        flexShrink: 0,
        userSelect: "none",
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: "8px",
          background: tool.bg,
          border: `1.5px solid ${tool.color}22`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-outfit)",
          fontWeight: 800,
          fontSize: "12px",
          color: tool.color,
          letterSpacing: "-0.02em",
          flexShrink: 0,
        }}
      >
        {tool.icon}
      </div>
      <span
        style={{
          fontFamily: "var(--font-jakarta)",
          fontWeight: 600,
          fontSize: "14px",
          color: "#1F2937",
          whiteSpace: "nowrap",
        }}
      >
        {tool.name}
      </span>
    </div>
  );
}

export default function IntegrationLogoWall() {
  const row2 = [...tools.slice(7), ...tools.slice(0, 7)];

  return (
    <section
      style={{
        padding: "80px 0",
        background: "#F9FAFB",
        borderTop: "1.5px solid #E5E7EB",
        borderBottom: "1.5px solid #E5E7EB",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes aa-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes aa-marquee-reverse {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .aa-marquee-track { animation-play-state: paused !important; }
        }
      `}</style>

      <AnimatedSection>
        <div style={{ textAlign: "center", marginBottom: "40px", padding: "0 24px" }}>
          <span
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 700,
              fontSize: "13px",
              color: "#888",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            We connect with the tools you already use
          </span>
        </div>
      </AnimatedSection>

      {/* Row 1 — left */}
      <div
        className="aa-marquee-track"
        aria-hidden="true"
        style={{
          display: "flex",
          width: "max-content",
          gap: "16px",
          marginBottom: "16px",
          animation: "aa-marquee 28s linear infinite",
        }}
      >
        {[...tools, ...tools].map((tool, i) => (
          <LogoCard key={`r1-${i}`} tool={tool} />
        ))}
      </div>

      {/* Row 2 — right (offset) */}
      <div
        className="aa-marquee-track"
        aria-hidden="true"
        style={{
          display: "flex",
          width: "max-content",
          gap: "16px",
          animation: "aa-marquee-reverse 32s linear infinite",
          marginLeft: "-120px",
        }}
      >
        {[...row2, ...row2].map((tool, i) => (
          <LogoCard key={`r2-${i}`} tool={tool} />
        ))}
      </div>

      <AnimatedSection>
        <p
          style={{
            textAlign: "center",
            fontFamily: "var(--font-jakarta)",
            fontSize: "14px",
            color: "#888",
            marginTop: "32px",
            padding: "0 24px",
          }}
        >
          Don&apos;t see your tool? We likely support it.{" "}
          <a href="/contact" style={{ color: "#63CF6F", fontWeight: 600, textDecoration: "none" }}>
            Ask us →
          </a>
        </p>
      </AnimatedSection>
    </section>
  );
}
