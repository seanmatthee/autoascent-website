import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

const tools = [
  { name: "Zapier",          file: "zapier logo.svg"          },
  { name: "Make",            file: "make.com logo.svg"        },
  { name: "Gmail",           file: "Gmail Logo.svg"           },
  { name: "Notion",          file: "Notion Logo.svg"          },
  { name: "Slack",           file: "Slack Logo.svg"           },
  { name: "Google Sheets",   file: "googlesheets logo.svg"    },
  { name: "Airtable",        file: "Airtable Logo.svg"        },
  { name: "HubSpot",         file: "HubSpot Logo.svg"         },
  { name: "WhatsApp",        file: "Whatsapp Logo.svg"        },
  { name: "Stripe",          file: "Stripe Logo.svg"          },
  { name: "Shopify",         file: "Shopify Logo.svg"         },
  { name: "Calendly",        file: "Calendly Logo.svg"        },
  { name: "Typeform",        file: "Typeform Logo.svg"        },
  { name: "ActiveCampaign",  file: "ActiveCampaign Logo.svg"  },
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
          width: 28,
          height: 28,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Image
          src={`/logos/${tool.file}`}
          alt={tool.name}
          width={28}
          height={28}
          style={{ objectFit: "contain" }}
        />
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
