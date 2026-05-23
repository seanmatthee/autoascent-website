"use client";

import dynamic from "next/dynamic";
import { Calendar, Map, Code2, Layers, Rocket } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import type { TimelineItem } from "@/components/ui/radial-orbital-timeline";

const RadialOrbitalTimeline = dynamic(
  () => import("@/components/ui/radial-orbital-timeline"),
  { ssr: false }
);

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "1. Discovery Call",
    date: "Day 1",
    content: "We dig into your business — what you build, who you serve, and exactly where you're losing time or missing customers. Free, no pressure, no pitch.",
    category: "Planning",
    icon: Calendar,
    relatedIds: [2],
    status: "completed",
    energy: 100,
  },
  {
    id: 2,
    title: "2. Workflow Mapping",
    date: "Day 2–3",
    content: "Every automation step gets mapped out. Every page wireframed. You see exactly what we're building before we write a single line of code.",
    category: "Planning",
    icon: Map,
    relatedIds: [3],
    status: "completed",
    energy: 80,
  },
  {
    id: 3,
    title: "3. Build & Test",
    date: "Day 4–10",
    content: "We build your website or automation stack from scratch. Every edge case tested, every integration verified, every trigger confirmed live.",
    category: "Development",
    icon: Code2,
    relatedIds: [4],
    status: "in-progress",
    energy: 60,
  },
  {
    id: 4,
    title: "4. Integration",
    date: "Day 11–12",
    content: "Everything gets wired together — forms, CRMs, email sequences, Slack, calendars. Full stack, fully connected, nothing manual.",
    category: "Development",
    icon: Layers,
    relatedIds: [5],
    status: "pending",
    energy: 35,
  },
  {
    id: 5,
    title: "5. Go Live",
    date: "Day 13–14",
    content: "We deploy, monitor the first 48 hours, and hand you a clean documentation package. You own it, you control it, we're on call.",
    category: "Launch",
    icon: Rocket,
    relatedIds: [1],
    status: "pending",
    energy: 15,
  },
];

export default function ProcessTimeline() {
  return (
    <section style={{ background: "#000", padding: "100px 24px 40px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <AnimatedSection>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "32px",
              marginBottom: "16px",
            }}
          >
            {/* Left: heading */}
            <div>
              <SectionLabel text="HOW IT WORKS" />
              <h2
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 800,
                  fontSize: "clamp(32px, 5vw, 52px)",
                  letterSpacing: "-0.02em",
                  color: "#fff",
                  lineHeight: 1.1,
                  maxWidth: "540px",
                }}
              >
                From Discovery to Live in Days
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  color: "#aaa",
                  lineHeight: 1.7,
                  maxWidth: "480px",
                  fontFamily: "var(--font-jakarta)",
                  marginTop: "16px",
                }}
              >
                We move fast. Most projects go from first call to live in under two weeks. Click any step to explore.
              </p>
            </div>

            {/* Right: 14-day stat card */}
            <div
              style={{
                background: "#fff",
                border: "2px solid #fff",
                borderRadius: "16px",
                boxShadow: "6px 6px 0px #63CF6F",
                padding: "28px 32px",
                minWidth: "260px",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 800,
                  fontSize: "clamp(36px, 5vw, 52px)",
                  color: "#63CF6F",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: "6px",
                }}
              >
                14 days
              </div>
              <div
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "#000",
                  marginBottom: "16px",
                }}
              >
                Average time from discovery to live
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
                      fontSize: "13px",
                      color: "#3D3D3D",
                    }}
                  >
                    <svg
                      width="13"
                      height="13"
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
          </div>
        </AnimatedSection>
      </div>

      {/* Full-width orbital timeline */}
      <RadialOrbitalTimeline timelineData={timelineData} />
    </section>
  );
}
