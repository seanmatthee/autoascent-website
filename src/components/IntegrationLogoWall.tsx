import AnimatedSection from "@/components/ui/AnimatedSection";

const tools = [
  { name: "Zapier",          file: "zapier.svg"          },
  { name: "Make",            file: "make.svg"            },
  { name: "Gmail",           file: "gmail.svg"           },
  { name: "Notion",          file: "notion.svg"          },
  { name: "Slack",           file: "slack.svg"           },
  { name: "Google Sheets",   file: "googlesheets.svg"    },
  { name: "Airtable",        file: "airtable.svg"        },
  { name: "HubSpot",         file: "hubspot.svg"         },
  { name: "WhatsApp",        file: "whatsapp.svg"        },
  { name: "Stripe",          file: "stripe.svg"          },
  { name: "Shopify",         file: "shopify.svg"         },
  { name: "Calendly",        file: "calendly.svg"        },
  { name: "Typeform",        file: "typeform.svg"        },
  { name: "ActiveCampaign",  file: "activecampaign.svg"  },
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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/logos/${tool.file}`}
        alt={tool.name}
        width={28}
        height={28}
        style={{ objectFit: "contain", width: 28, height: 28, flexShrink: 0 }}
      />
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
            margin: "32px auto 0",
            padding: "0 24px",
            maxWidth: "none",
            width: "100%",
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
