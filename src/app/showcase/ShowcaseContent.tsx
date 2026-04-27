"use client";

import Link from "next/link";
import ShowcaseCard from "./components/ShowcaseCard";
import MonaLisaDemo from "./components/MonaLisaDemo";
import EyesDemo from "./components/EyesDemo";
import FluidInkDemo from "./components/FluidInkDemo";
import WarpGridDemo from "./components/WarpGridDemo";
import NeuralDemo from "./components/NeuralDemo";

const DEMOS = [
  {
    id: "portrait",
    title: "Portrait Particles",
    description:
      "A generative portrait built from 2,000 particles. Move your cursor close to push them apart — watch them spring back into place.",
    Demo: MonaLisaDemo,
  },
  {
    id: "eyes",
    title: "28 Eyes",
    description:
      "Every eye tracks your cursor in real time. Pupils are clamped within the iris radius, with asynchronous random blinks.",
    Demo: EyesDemo,
  },
  {
    id: "ink",
    title: "Fluid Ink",
    description:
      "Drag to paint. Ink particles carry momentum from stroke velocity and fade slowly — leaving a persistent trail.",
    Demo: FluidInkDemo,
  },
  {
    id: "warp",
    title: "Warp Grid",
    description:
      "A 600-dot grid that warps toward your cursor. Adjacent dots draw connection lines and shift color based on displacement.",
    Demo: WarpGridDemo,
  },
  {
    id: "neural",
    title: "Neural Pulse",
    description:
      "Click any node to fire a BFS signal across the network. Glowing particles travel along each edge as the pulse propagates outward.",
    Demo: NeuralDemo,
  },
];

export default function ShowcaseContent() {
  return (
    <div style={{ background: "#050505", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ padding: "80px 24px 60px", maxWidth: "1200px", margin: "0 auto" }}>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: "var(--font-outfit)",
            fontWeight: 600,
            fontSize: "14px",
            color: "#63CF6F",
            textDecoration: "none",
            marginBottom: "40px",
            opacity: 0.85,
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.85"; }}
        >
          ← Back to Home
        </Link>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(99,207,111,0.1)",
            border: "1px solid rgba(99,207,111,0.3)",
            borderRadius: "999px",
            padding: "6px 14px",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-outfit)",
              fontWeight: 700,
              fontSize: "11px",
              letterSpacing: "0.1em",
              color: "#63CF6F",
              textTransform: "uppercase",
            }}
          >
            Interactive Demos
          </span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-outfit)",
            fontWeight: 800,
            fontSize: "clamp(36px, 6vw, 64px)",
            letterSpacing: "-0.03em",
            color: "#fff",
            lineHeight: 1.05,
            marginBottom: "20px",
          }}
        >
          Built to Move.
          <br />
          <span style={{ color: "#63CF6F" }}>See It in Action.</span>
        </h1>

        <p
          style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "18px",
            color: "#777",
            lineHeight: 1.7,
            maxWidth: "560px",
          }}
        >
          Five fully interactive canvas and SVG demos — each one hand-coded, no libraries.
          Hover, click, and drag to explore.
        </p>
      </section>

      {/* Grid */}
      <section style={{ padding: "0 24px 100px", maxWidth: "1200px", margin: "0 auto" }}>
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: "24px" }}
        >
          {DEMOS.slice(0, 4).map((demo) => (
            <ShowcaseCard key={demo.id} title={demo.title} description={demo.description}>
              <demo.Demo />
            </ShowcaseCard>
          ))}
          <div className="md:col-span-2">
            {(() => {
              const { title, description, Demo: LastDemo } = DEMOS[4];
              return (
                <ShowcaseCard title={title} description={description} demoHeight={380}>
                  <LastDemo />
                </ShowcaseCard>
              );
            })()}
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: "72px",
            textAlign: "center",
            borderTop: "1px solid #1a1a1a",
            paddingTop: "60px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: "16px",
              color: "#666",
              marginBottom: "24px",
            }}
          >
            Like what you see? We build custom websites and automation that perform just as well in production.
          </p>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
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
        </div>
      </section>
    </div>
  );
}
