"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ROICalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const [hourlyRate, setHourlyRate]     = useState(650);

  const results = useMemo(() => {
    const annualHours = hoursPerWeek * 52;
    const annualCost  = annualHours * hourlyRate;
    const savings     = Math.round(annualCost * 0.8);
    const savedHours  = Math.round(annualHours * 0.8);
    const roiMonths   = savings > 0 ? Math.max(1, Math.round((3500 / (savings / 12)) * 10) / 10) : 0;
    return { annualCost, savings, savedHours, roiMonths, annualHours };
  }, [hoursPerWeek, hourlyRate]);

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-ZA", { style: "currency", currency: "ZAR", maximumFractionDigits: 0 }).format(n);

  return (
    <section style={{ padding: "100px 24px", background: "#F5F5F5" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ marginBottom: "56px", textAlign: "center" }}>
            <SectionLabel text="ROI CALCULATOR" />
            <h2
              style={{
                fontFamily: "var(--font-outfit)",
                fontWeight: 800,
                fontSize: "clamp(28px, 4vw, 48px)",
                letterSpacing: "-0.025em",
                color: "#000",
                lineHeight: 1.1,
              }}
            >
              What Is Manual Work Costing You?
            </h2>
            <p
              style={{
                fontSize: "17px",
                color: "#555",
                lineHeight: 1.7,
                maxWidth: "520px",
                fontFamily: "var(--font-jakarta)",
                marginTop: "16px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Move the sliders to see how much your team&apos;s manual tasks are costing you every year — and how much AutoAscent saves.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div
            style={{
              background: "#fff",
              border: "2px solid #000",
              borderRadius: "20px",
              boxShadow: "6px 6px 0px #000",
              padding: "clamp(28px, 5vw, 56px)",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {/* Sliders */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "40px",
                marginBottom: "48px",
              }}
            >
              {/* Hours */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
                  <label style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: "15px", color: "#000" }}>
                    Hours wasted per week
                  </label>
                  <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 800, fontSize: "24px", color: "#63CF6F", letterSpacing: "-0.02em" }}>
                    {hoursPerWeek}h
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={40}
                  step={1}
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  style={{
                    width: "100%",
                    height: "6px",
                    borderRadius: "3px",
                    appearance: "none",
                    background: `linear-gradient(to right, #63CF6F ${((hoursPerWeek - 1) / 39) * 100}%, #E5E7EB ${((hoursPerWeek - 1) / 39) * 100}%)`,
                    outline: "none",
                    cursor: "pointer",
                  }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px", fontFamily: "var(--font-jakarta)", fontSize: "12px", color: "#888" }}>
                  <span>1 hr</span><span>40 hrs</span>
                </div>
              </div>

              {/* Hourly rate */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "10px" }}>
                  <label style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: "15px", color: "#000" }}>
                    Your team&apos;s hourly rate
                  </label>
                  <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 800, fontSize: "24px", color: "#63CF6F", letterSpacing: "-0.02em" }}>
                    R{hourlyRate}
                  </span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={3000}
                  step={50}
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  style={{
                    width: "100%",
                    height: "6px",
                    borderRadius: "3px",
                    appearance: "none",
                    background: `linear-gradient(to right, #63CF6F ${((hourlyRate - 100) / 2900) * 100}%, #E5E7EB ${((hourlyRate - 100) / 2900) * 100}%)`,
                    outline: "none",
                    cursor: "pointer",
                  }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px", fontFamily: "var(--font-jakarta)", fontSize: "12px", color: "#888" }}>
                  <span>R100/hr</span><span>R3,000/hr</span>
                </div>
              </div>
            </div>

            <div style={{ height: "1px", background: "#E5E7EB", marginBottom: "40px" }} />

            {/* Results */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "24px",
                marginBottom: "40px",
              }}
            >
              {[
                {
                  label: "Annual time cost",
                  value: fmt(results.annualCost),
                  sub: `${results.annualHours} hrs/year wasted`,
                  highlight: false,
                },
                {
                  label: "AutoAscent saves you",
                  value: fmt(results.savings),
                  sub: `~${results.savedHours} hours recovered/year`,
                  highlight: true,
                },
                {
                  label: "Payback period",
                  value: results.roiMonths <= 1 ? "< 1 month" : `${results.roiMonths} months`,
                  sub: "Based on Landing Page tier",
                  highlight: false,
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: stat.highlight ? "#F0FDF4" : "#F9FAFB",
                    border: stat.highlight ? "1.5px solid #BBF7D0" : "1.5px solid #E5E7EB",
                    borderRadius: "14px",
                    padding: "20px 18px",
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "12px", color: stat.highlight ? "#166534" : "#6B7280", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "8px" }}>
                    {stat.label}
                  </p>
                  <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 800, fontSize: "clamp(22px, 3vw, 30px)", color: stat.highlight ? "#16A34A" : "#000", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "6px" }}>
                    {stat.value}
                  </p>
                  <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "12px", color: "#888" }}>
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-jakarta)", fontSize: "15px", color: "#555", marginBottom: "20px", lineHeight: 1.6 }}>
                You&apos;re spending{" "}
                <strong style={{ color: "#000", fontFamily: "var(--font-outfit)" }}>{fmt(results.annualCost)}/year</strong>{" "}
                on work that can be automated. Let&apos;s fix that.
              </p>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#63CF6F",
                  border: "2px solid #000",
                  borderRadius: "10px",
                  padding: "14px 28px",
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "#000",
                  textDecoration: "none",
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
                Get My Custom Automation Plan →
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
