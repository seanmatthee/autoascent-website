"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        backgroundImage: "radial-gradient(circle, #00000008 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        padding: "80px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "860px", width: "100%" }}>
        {/* Logo mark above wordmark */}
        <motion.div {...fade(0)} style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
          <Image
            src="/logo-white.png"
            alt="AutoAscent — Zapier Automation Service"
            width={140}
            height={35}
            priority
          />
        </motion.div>

        {/* Brand wordmark */}
        <motion.div
          {...fade(0.08)}
          style={{
            fontFamily: "var(--font-outfit)",
            fontSize: "clamp(52px, 9vw, 110px)",
            fontWeight: 800,
            color: "#0F0F0F",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            marginBottom: "16px",
          }}
        >
          Auto<span style={{ color: "#63CF6F" }}>Ascent</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fade(0.16)}
          style={{
            fontFamily: "var(--font-outfit)",
            fontWeight: 800,
            fontSize: "clamp(28px, 5vw, 52px)",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: "#000",
            marginBottom: "8px",
          }}
        >
          Zapier Automation for
          <br />
          US Small Businesses
        </motion.h1>

        <motion.p
          {...fade(0.20)}
          style={{
            fontFamily: "var(--font-outfit)",
            fontWeight: 700,
            fontSize: "clamp(18px, 3vw, 28px)",
            color: "#3D3D3D",
            letterSpacing: "-0.01em",
            margin: "8px 0 24px",
          }}
        >
          Automate Smarter. Scale Faster.
        </motion.p>

        <motion.p
          {...fade(0.24)}
          style={{
            fontSize: "clamp(17px, 2vw, 20px)",
            color: "#555",
            lineHeight: 1.7,
            maxWidth: "600px",
            margin: "0 auto 40px",
          }}
        >
          We save you hours of work by building fully automated Zapier workflows suited to your needs.
        </motion.p>

        <motion.div
          {...fade(0.32)}
          style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}
        >
          <Button label="Get a Free Consultation" href="/contact" variant="primary" />
          <Button
            label="See How It Works"
            variant="secondary"
            onClick={() => {
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </motion.div>

        {/* 2 badges */}
        <motion.div
          {...fade(0.4)}
          style={{ display: "flex", alignItems: "center", gap: "24px", marginTop: "32px", flexWrap: "wrap", justifyContent: "center" }}
        >
          {["Zapier Certified", "US Small Business Focused"].map((label) => (
            <span
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                fontSize: "15px",
                fontWeight: 500,
                color: "#555",
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

        {/* SEO context paragraph — visible but secondary */}
        <motion.p
          {...fade(0.5)}
          style={{
            fontSize: "13px",
            color: "#aaa",
            maxWidth: "560px",
            margin: "20px auto 0",
            lineHeight: 1.6,
            fontFamily: "var(--font-jakarta)",
          }}
        >
          Based in South Africa, serving US clients remotely. We build Zapier
          workflows for lead capture, eCommerce, agency operations, accounting
          automation, and more — starting at $1,000 per project.
        </motion.p>
      </div>
    </section>
  );
}
