"use client";

import { useState } from "react";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import InteractiveCodeBlock, { type CodeStep } from "@/components/InteractiveCodeBlock";

// ── Types ─────────────────────────────────────────────────────────────────────

type Service = "websites" | "ai";

interface Tier {
  name: string;
  price: string;
  tag: string;
  popular: boolean;
  description: string;
  features: string[];
}

// ── Data ──────────────────────────────────────────────────────────────────────

const WEB_TIERS: Tier[] = [
  {
    name: "Landing Page",
    price: "From $200",
    tag: "Starting price",
    popular: false,
    description:
      "A single high-converting page for a product launch, campaign, or lead generation. Clean, fast, and built to turn visitors into enquiries.",
    features: [
      "Custom design (no templates)",
      "Mobile-first, fast-loading",
      "Contact / lead capture form",
      "SEO-ready on launch",
      "1 round of revisions",
    ],
  },
  {
    name: "Full Website",
    price: "From $800",
    tag: "Starting price",
    popular: true,
    description:
      "A complete business website up to 6 pages — mobile-first, SEO-ready, and built to represent your brand properly at every screen size.",
    features: [
      "Everything in Landing Page",
      "Up to 6 pages",
      "Blog or portfolio section",
      "Google Analytics setup",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Custom Web App",
    price: "From $2,000",
    tag: "Scoped per project",
    popular: false,
    description:
      "A fully custom web application with user authentication, dynamic data, and interactive features — built when a standard website isn't enough.",
    features: [
      "Everything in Full Website",
      "User accounts & authentication",
      "Database integration",
      "Custom dashboards or portals",
      "API integrations",
      "3 rounds of revisions",
    ],
  },
];

const AI_TIERS: Tier[] = [
  {
    name: "Single-Agent Workflow",
    price: "From $500",
    tag: "Starting price",
    popular: false,
    description:
      "One AI agent connected to your tools — handling a single defined task autonomously. Ideal for lead qualification, email triage, or data extraction.",
    features: [
      "1 configured AI agent",
      "Connected to 1–2 external tools (email, CRM, sheets)",
      "Defined trigger → action → output loop",
      "Zapier or Make.com orchestration",
      "Handoff documentation",
    ],
  },
  {
    name: "Multi-Agent Pipeline",
    price: "From $1,500",
    tag: "Scoped per project",
    popular: true,
    description:
      "Multiple specialised agents working in sequence — each handling a distinct role in a larger automated workflow. Built for teams that need real end-to-end automation.",
    features: [
      "2–4 co-ordinated AI agents",
      "Inter-agent communication and handoffs",
      "Memory and context passing between agents",
      "Connected to 3–5 tools",
      "Error handling and fallback logic",
      "Full workflow documentation",
    ],
  },
  {
    name: "Full Agentic Stack",
    price: "From $3,500",
    tag: "Scoped per project",
    popular: false,
    description:
      "A fully autonomous multi-agent system with persistent memory, real-time decision-making, and a custom control layer. Built for businesses that want operations to run without human input.",
    features: [
      "Unlimited agents with defined roles",
      "Persistent memory layer (vector store or database)",
      "Real-time event triggers and monitoring",
      "Custom orchestration layer",
      "Human-in-the-loop override controls",
      "Ongoing support and iteration",
    ],
  },
];

const WEB_STEPS: CodeStep[] = [
  {
    title: "Discovery & Scope",
    filename: "discovery-notes.ts",
    code: `/*
 * DISCOVERY CALL NOTES
 * Client: [Business Name]
 * Goal: Convert visitors → enquiries
 * Pages: Home, About, Services, Contact
 * Stack: Next.js + Tailwind CSS
 * Timeline: 7–10 days
 * Deliverable: Figma mockup → code handoff
 */`,
  },
  {
    title: "Design System",
    filename: "tailwind.config.ts",
    code: `// tailwind.config.ts
theme: {
  extend: {
    colors: {
      brand: '#579AC2',
      dark:  '#0F0F0F',
      light: '#F9F9F9',
    },
    fontFamily: {
      display: ['Bebas Neue', 'sans-serif'],
      body:    ['Inter',      'sans-serif'],
    },
    borderRadius: {
      card: '16px',
    }
  }
}`,
  },
  {
    title: "Component Build",
    filename: "HeroSection.tsx",
    code: `// HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col
      items-center justify-center px-6 text-center">
      <span className="text-sm uppercase tracking-widest
        text-brand mb-4">
        AutoAscent
      </span>
      <h1 className="font-display text-7xl text-dark">
        Build Smarter.<br />Grow Faster.
      </h1>
      <p className="mt-6 text-lg text-gray-500 max-w-xl">
        Custom websites and automation workflows
        for businesses worldwide.
      </p>
    </section>
  )
}`,
  },
  {
    title: "SEO & Performance",
    filename: "layout.tsx",
    code: `// app/layout.tsx — metadata
export const metadata: Metadata = {
  title: {
    default:  'AutoAscent',
    template: '%s | AutoAscent',
  },
  description: 'Custom websites and Zapier automation for businesses worldwide.',
  openGraph: {
    siteName: 'AutoAscent',
    type: 'website',
  },
}

// app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.auto-ascent.us',         priority: 1   },
    { url: 'https://www.auto-ascent.us/about',   priority: 0.8 },
    { url: 'https://www.auto-ascent.us/contact', priority: 0.7 },
  ]
}`,
  },
  {
    title: "Deploy & Handoff",
    filename: "vercel.json",
    code: `# vercel.json
{
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["iad1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options",
          "value": "DENY" },
        { "key": "X-Content-Type-Options",
          "value": "nosniff" }
      ]
    }
  ]
}`,
  },
];

const AI_STEPS: CodeStep[] = [
  {
    title: "Agent Architecture",
    filename: "architecture-plan.ts",
    code: `/*
 * AGENT ARCHITECTURE PLAN
 * System:    Lead Qualification Pipeline
 * Agents:    3 (Intake, Qualifier, Notifier)
 * Memory:    Shared JSON context object
 * Triggers:  New form submission (Webhook)
 * Tools:     Gmail, Notion, Slack
 * Fallback:  Human review queue if score < 40
 */`,
  },
  {
    title: "Agent Definition",
    filename: "agents/qualifier-agent.ts",
    code: `// agents/qualifierAgent.ts
const qualifierAgent = {
  name: 'LeadQualifier',
  role: \`You are a lead qualification specialist.
    Given a lead's form data, score them 0–100
    based on: budget fit, business size, urgency,
    and service match. Return only JSON.\`,
  tools: ['notion_read', 'scoring_rubric'],
  outputSchema: {
    score:     'number',
    reasoning: 'string',
    nextAgent: 'string',
  }
}`,
  },
  {
    title: "Orchestration Layer",
    filename: "orchestrator.ts",
    code: `// orchestrator.ts
async function runPipeline(lead: LeadData) {
  // Step 1: Intake agent parses raw form data
  const parsed = await intakeAgent.run(lead)

  // Step 2: Qualifier scores the lead
  const { score, nextAgent } =
    await qualifierAgent.run(parsed)

  // Step 3: Route based on score
  if (score >= 70) {
    await notifierAgent.run({
      channel: 'slack',
      priority: 'HIGH',
      lead: parsed,
      score,
    })
  } else {
    await queueForHumanReview(parsed, score)
  }
}`,
  },
  {
    title: "Tool Integration",
    filename: "tools/notion-tool.ts",
    code: `// tools/notionTool.ts
export const notionTool = {
  name: 'notion_create_record',
  description: 'Creates a new lead record in Notion CRM',
  parameters: {
    name:     { type: 'string', required: true  },
    email:    { type: 'string', required: true  },
    score:    { type: 'number', required: true  },
    notes:    { type: 'string', required: false },
    priority: {
      type: 'string',
      enum: ['HIGH', 'MEDIUM', 'LOW']
    },
  },
  execute: async (params) => {
    return await notion.pages.create({
      parent: { database_id: LEADS_DB_ID },
      properties: mapToNotionProps(params),
    })
  }
}`,
  },
  {
    title: "Memory & Persistence",
    filename: "memory/context-store.ts",
    code: `// memory/contextStore.ts
interface AgentContext {
  sessionId:   string
  leadData:    LeadData
  agentLog:    AgentLogEntry[]
  currentStep: number
  metadata: {
    startedAt:   string
    lastUpdated: string
    status: 'running' | 'complete' | 'failed'
  }
}

// Context is passed between every agent in the pipeline
// and written to the database after each step completes.
// Agents can read prior steps' outputs before acting.`,
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function Check() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#63CF6F"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0, marginTop: "2px" }}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function TierCard({ tier }: { tier: Tier }) {
  return (
    <div
      style={{
        background: "#fff",
        border: tier.popular ? "3px solid #63CF6F" : "2px solid #000",
        borderRadius: "16px",
        boxShadow: tier.popular ? "8px 8px 0px #63CF6F" : "6px 6px 0px #000",
        padding: "36px 28px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {tier.popular && (
        <div
          style={{
            position: "absolute",
            top: "-14px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#63CF6F",
            border: "2px solid #000",
            borderRadius: "999px",
            padding: "4px 16px",
            fontFamily: "var(--font-outfit)",
            fontWeight: 700,
            fontSize: "11px",
            letterSpacing: "0.08em",
            color: "#000",
            whiteSpace: "nowrap",
          }}
        >
          MOST POPULAR
        </div>
      )}

      <div style={{ marginBottom: "16px" }}>
        <div
          style={{
            fontFamily: "var(--font-outfit)",
            fontWeight: 700,
            fontSize: "18px",
            color: "#000",
            marginBottom: "8px",
          }}
        >
          {tier.name}
        </div>
        <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
          <span
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 800,
              fontSize: "36px",
              color: "#000",
              letterSpacing: "-0.03em",
            }}
          >
            {tier.price}
          </span>
          <span
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "14px",
              color: "#888",
            }}
          >
            {tier.tag}
          </span>
        </div>
      </div>

      <p
        style={{
          fontFamily: "var(--font-jakarta)",
          fontSize: "15px",
          color: "#555",
          lineHeight: 1.65,
          marginBottom: "20px",
          maxWidth: "none",
        }}
      >
        {tier.description}
      </p>

      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          flex: 1,
        }}
      >
        {tier.features.map((f) => (
          <li
            key={f}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              fontFamily: "var(--font-jakarta)",
              fontSize: "14px",
              color: "#3D3D3D",
              lineHeight: 1.5,
            }}
          >
            <Check />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function WhatWeBuildContent() {
  const [activeService, setActiveService] = useState<Service>("websites");
  const [transitioning, setTransitioning] = useState(false);

  function handleToggle(s: Service) {
    if (s === activeService) return;
    setTransitioning(true);
    setTimeout(() => {
      setActiveService(s);
      setTransitioning(false);
    }, 180);
  }

  const tiers = activeService === "websites" ? WEB_TIERS : AI_TIERS;
  const steps = activeService === "websites" ? WEB_STEPS : AI_STEPS;

  const animStyle = {
    opacity: transitioning ? 0 : 1,
    transform: transitioning ? "translateY(10px)" : "translateY(0)",
    transition: "opacity 0.18s ease, transform 0.18s ease",
  };

  return (
    <>
      {/* ── Hero ── */}
      <section
        style={{
          padding: "80px 24px 60px",
          background: "#fff",
          borderBottom: "3px solid #000",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <SectionLabel text="SERVICES" />
          <h1
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 800,
              fontSize: "clamp(32px, 5.5vw, 58px)",
              letterSpacing: "-0.025em",
              color: "#000",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            What We Build
          </h1>
          <p
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 700,
              fontSize: "clamp(18px, 3vw, 26px)",
              color: "#3D3D3D",
              letterSpacing: "-0.01em",
              marginBottom: "20px",
            }}
          >
            Two services. Six tiers. One team.
          </p>
          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "18px",
              color: "#555",
              lineHeight: 1.7,
              marginBottom: "16px",
              maxWidth: "none",
            }}
          >
            We build custom websites and agentic AI systems — from a single landing page to a fully
            autonomous multi-agent pipeline. Every tier is scoped, priced, and delivered with the
            same attention to detail.
          </p>
          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "14px",
              color: "#aaa",
              lineHeight: 1.6,
              maxWidth: "none",
            }}
          >
            Agentic AI systems are priced higher than websites — they involve architecture, prompting,
            tool integration, and ongoing orchestration.
          </p>
        </div>
      </section>

      {/* ── Toggle ── */}
      <section
        style={{
          padding: "48px 24px",
          background: "#fff",
          textAlign: "center",
          borderBottom: "1px solid #E8E8E8",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            background: "#F5F5F5",
            border: "2px solid #000",
            borderRadius: "999px",
            padding: "4px",
            gap: "4px",
          }}
        >
          <button
            onClick={() => handleToggle("websites")}
            style={{
              padding: "12px 28px",
              borderRadius: "999px",
              border: activeService === "websites" ? "2px solid #000" : "2px solid transparent",
              background: activeService === "websites" ? "#63CF6F" : "transparent",
              fontFamily: "var(--font-outfit)",
              fontWeight: 700,
              fontSize: "16px",
              color: "#000",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            Websites
          </button>
          <button
            onClick={() => handleToggle("ai")}
            style={{
              padding: "12px 28px",
              borderRadius: "999px",
              border: activeService === "ai" ? "2px solid #000" : "2px solid transparent",
              background: activeService === "ai" ? "#63CF6F" : "transparent",
              fontFamily: "var(--font-outfit)",
              fontWeight: 700,
              fontSize: "16px",
              color: "#000",
              cursor: "pointer",
              transition: "all 0.2s ease",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            Agentic AI Systems
            <span
              style={{
                background: "#FEF3C7",
                border: "1px solid #F59E0B",
                borderRadius: "999px",
                padding: "2px 10px",
                fontSize: "11px",
                fontWeight: 600,
                color: "#92400E",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
              }}
            >
              Higher investment
            </span>
          </button>
        </div>
      </section>

      {/* ── Tier Cards ── */}
      <section style={{ padding: "64px 24px 80px", background: "#F5F5F5" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={animStyle}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "32px",
                alignItems: "stretch",
              }}
            >
              {tiers.map((tier, i) => (
                <TierCard key={i} tier={tier} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How We Build It ── */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
            <SectionLabel text="HOW WE BUILD IT" />
            <h2
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 800,
                fontSize: "clamp(28px, 4vw, 44px)",
                letterSpacing: "-0.025em",
                color: "#000",
                lineHeight: 1.1,
                marginBottom: "12px",
              }}
            >
              Our Build Process
            </h2>
            <p
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: "17px",
                color: "#555",
                lineHeight: 1.7,
                maxWidth: "520px",
              }}
            >
              Click any step to see exactly how we approach it.
            </p>
          </div>

          <div style={animStyle}>
            <InteractiveCodeBlock key={activeService} steps={steps} />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          padding: "80px 24px 100px",
          background: "#F5F5F5",
          borderTop: "3px solid #000",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <SectionLabel text="GET STARTED" />
          <h2
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 800,
              fontSize: "clamp(26px, 4vw, 42px)",
              letterSpacing: "-0.025em",
              color: "#000",
              lineHeight: 1.15,
              marginBottom: "20px",
            }}
          >
            Not sure which tier fits your business?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "18px",
              color: "#555",
              lineHeight: 1.7,
              marginBottom: "36px",
              maxWidth: "none",
            }}
          >
            Every project starts with a free 30-minute discovery call. We'll scope exactly what you
            need — website, AI system, or both — and tell you what it would cost before you commit
            to anything.
          </p>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/contact"
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 600,
                fontSize: "16px",
                color: "#000",
                textDecoration: "none",
                background: "#63CF6F",
                border: "2px solid #000",
                borderRadius: "10px",
                padding: "14px 28px",
                transition: "all 0.2s ease",
                display: "inline-flex",
                alignItems: "center",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "4px 4px 0px #000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Book a Free Discovery Call
            </Link>
            <Link
              href="/#services"
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
              See our full service list →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
