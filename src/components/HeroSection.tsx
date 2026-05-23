"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import Button from "@/components/ui/Button";

const WebGLShader = dynamic(
  () => import("@/components/ui/web-gl-shader").then((m) => ({ default: m.WebGLShader })),
  { ssr: false }
);

const ROTATING_WORDS = ["Websites", "Automations", "Integrations", "Workflows", "AI Systems"];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        background: "#000",
      }}
    >
      {/* Animated WebGL shader background */}
      <WebGLShader />

      {/* Subtle dark vignette to keep text readable */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.15) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Foreground content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "80px 24px 200px",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            width: "100%",
            margin: "0 auto",
          }}
          className="hero-grid"
        >
          {/* Full-width text column */}
          <div style={{ textAlign: "left" }}>
            <motion.div {...fade(0)} style={{ display: "flex", justifyContent: "flex-start", marginBottom: "14px" }}>
              <Image
                src="/logo-black.png"
                alt="AutoAscent — Web Design & Automation"
                width={2560}
                height={608}
                priority
                quality={85}
                style={{ height: 30, width: "auto" }}
              />
            </motion.div>

            {/* Brand wordmark */}
            <motion.div
              {...fade(0.08)}
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: "clamp(52px, 8vw, 96px)",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                marginBottom: "22px",
              }}
            >
              Auto<span style={{ color: "#63CF6F" }}>Ascent</span>
            </motion.div>

            <motion.h1
              {...fade(0.16)}
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 800,
                fontSize: "clamp(40px, 7vw, 92px)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                color: "#FFFFFF",
                marginBottom: "10px",
              }}
            >
              We Build{" "}
              <span
                style={{
                  display: "inline-block",
                  minWidth: "min(420px, 38vw)",
                  position: "relative",
                  verticalAlign: "bottom",
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    style={{ color: "#63CF6F", display: "inline-block" }}
                  >
                    {ROTATING_WORDS[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br />
              for Businesses Worldwide
            </motion.h1>

            <motion.p
              {...fade(0.2)}
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 700,
                fontSize: "clamp(18px, 2.4vw, 26px)",
                color: "#E5E5E5",
                letterSpacing: "-0.01em",
                margin: "10px 0 20px",
              }}
            >
              Build Smarter. Grow Faster.
            </motion.p>

            <motion.p
              {...fade(0.24)}
              style={{
                fontSize: "clamp(16px, 1.6vw, 19px)",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.65,
                maxWidth: "560px",
                margin: "0 0 28px",
              }}
            >
              We build custom websites and Zapier automation workflows — everything your business needs to look professional and run on autopilot.
            </motion.p>

            <motion.div
              {...fade(0.32)}
              style={{ display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center" }}
            >
              <Button label="Get a Free Consultation" href="/contact" variant="primary" />
              <button
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "#FFFFFF",
                  padding: 0,
                }}
              >
                See how it works →
              </button>
            </motion.div>

            <motion.div
              {...fade(0.4)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "22px",
                marginTop: "30px",
                flexWrap: "wrap",
              }}
            >
              {["Custom Web Design", "Zapier Automation", "Worldwide Clients"].map((label) => (
                <span
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.75)",
                    fontFamily: "var(--font-jakarta)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#63CF6F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
