"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

const FilterIcon2 = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#63CF6F" />
    <path d="M4 6h16M7 12h10M10 18h4" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CalendarIcon2 = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="4" fill="#4285F4" />
    <rect x="5" y="7" width="14" height="12" rx="1" stroke="white" strokeWidth="1.5" fill="none" />
    <line x1="5" y1="10" x2="19" y2="10" stroke="white" strokeWidth="1.5" />
    <line x1="9" y1="5" x2="9" y2="9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="15" y1="5" x2="15" y2="9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const STEPS = [
  // eslint-disable-next-line @next/next/no-img-element
  { id: "gmail",    icon: <img src="/logos/gmail.svg"   alt="Gmail"   width={22} height={22} style={{ objectFit: "contain", width: 22, height: 22 }} />, label: "Gmail",    event: "New Form Submission", type: "trigger" as const, color: "#EA4335" },
  { id: "filter",   icon: <FilterIcon2 />,                                                                                                                label: "Filter",   event: "Qualify Lead Score",  type: "filter"  as const, color: "#63CF6F" },
  // eslint-disable-next-line @next/next/no-img-element
  { id: "notion",   icon: <img src="/logos/notion.svg"  alt="Notion"  width={22} height={22} style={{ objectFit: "contain", width: 22, height: 22 }} />, label: "Notion",   event: "Add to Database",     type: "action"  as const, color: "#000"    },
  // eslint-disable-next-line @next/next/no-img-element
  { id: "slack",    icon: <img src="/logos/slack.svg"   alt="Slack"   width={22} height={22} style={{ objectFit: "contain", width: 22, height: 22 }} />, label: "Slack",    event: "Notify Sales Team",   type: "action"  as const, color: "#4A154B" },
  { id: "calendar", icon: <CalendarIcon2 />,                                                                                                              label: "Calendar", event: "Book Follow-up",      type: "action"  as const, color: "#4285F4" },
];

const STEP_MS = 1000;

function Connector({ active, completed }: { active: boolean; completed: boolean }) {
  return (
    <div
      style={{
        flex: "0 0 40px",
        height: "2px",
        background: completed || active ? "#63CF6F" : "#E5E7EB",
        position: "relative",
        alignSelf: "center",
        transition: "background 0.4s ease",
        overflow: "visible",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -1,
          top: "50%",
          transform: "translateY(-50%)",
          width: 0,
          height: 0,
          borderTop: "5px solid transparent",
          borderBottom: "5px solid transparent",
          borderLeft: `6px solid ${completed || active ? "#63CF6F" : "#E5E7EB"}`,
          transition: "border-left-color 0.4s ease",
        }}
      />
      <AnimatePresence>
        {active && (
          <motion.div
            key="dot"
            initial={{ left: 0, opacity: 1 }}
            animate={{ left: "100%", opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: STEP_MS / 1000, ease: "linear" }}
            style={{
              position: "absolute",
              top: "50%",
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#63CF6F",
              transform: "translate(-50%, -50%)",
              boxShadow: "0 0 8px #63CF6F",
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function Node({
  step,
  active,
  completed,
  index,
}: {
  step: (typeof STEPS)[0];
  active: boolean;
  completed: boolean;
  index: number;
}) {
  const typeLabel = step.type === "trigger" ? "TRIGGER" : step.type === "filter" ? "LOGIC" : "ACTION";
  const typeBg    = step.type === "trigger" ? "#FEF3C7" : step.type === "filter" ? "#F0FDF4" : "#EFF6FF";
  const typeColor = step.type === "trigger" ? "#92400E" : step.type === "filter" ? "#166534" : "#1E3A8A";

  return (
    <div
      style={{
        background: active ? "#F0FDF4" : completed ? "#FAFFFE" : "#fff",
        border: active ? "2px solid #63CF6F" : completed ? "1.5px solid #BBF7D0" : "1.5px solid #E5E7EB",
        borderRadius: "14px",
        padding: "16px 14px",
        width: "150px",
        flexShrink: 0,
        position: "relative",
        transition: "background 0.35s ease, border-color 0.35s ease, transform 0.25s ease",
        transform: active ? "translateY(-4px)" : "translateY(0)",
        boxShadow: active ? "0 8px 24px rgba(99,207,111,0.25)" : "0 1px 4px rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -10,
          left: 12,
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: completed || active ? "#63CF6F" : "#E5E7EB",
          border: "1.5px solid #fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "10px",
          fontWeight: 700,
          fontFamily: "var(--font-outfit)",
          color: completed || active ? "#000" : "#9CA3AF",
          transition: "background 0.35s ease",
          zIndex: 1,
        }}
      >
        {completed ? (
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          String(index + 1)
        )}
      </div>

      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          background: typeBg,
          borderRadius: "4px",
          padding: "2px 6px",
          fontSize: "9px",
          fontWeight: 700,
          letterSpacing: "0.06em",
          color: typeColor,
          fontFamily: "var(--font-outfit)",
          marginBottom: "10px",
        }}
      >
        {typeLabel}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
        <div style={{ flexShrink: 0 }}>{step.icon}</div>
        <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: "13px", color: "#000" }}>
          {step.label}
        </span>
      </div>

      <p
        style={{
          fontFamily: "var(--font-jakarta)",
          fontSize: "11px",
          color: active ? "#166534" : "#6B7280",
          lineHeight: 1.4,
          margin: 0,
          transition: "color 0.35s ease",
        }}
      >
        {step.event}
      </p>

      {active && (
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            width: 12,
            height: 12,
            borderRadius: "50%",
            border: "2px solid #BBF7D0",
            borderTopColor: "#22C55E",
            animation: "wv-spin 0.7s linear infinite",
          }}
        />
      )}
    </div>
  );
}

export default function WorkflowVisualiser() {
  const [active, setActive]       = useState<number>(-1);
  const [completed, setCompleted] = useState<Set<number>>(new Set());
  const [running, setRunning]     = useState(false);
  const [runCount, setRunCount]   = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const runWorkflow = useCallback(() => {
    if (running) return;
    setRunning(true);
    setActive(-1);
    setCompleted(new Set());
    setRunCount((c) => c + 1);

    let stepIndex = 0;
    const runStep = () => {
      setActive(stepIndex);
      if (stepIndex > 0) {
        setCompleted((prev) => {
          const next = new Set(prev);
          next.add(stepIndex - 1);
          return next;
        });
      }
      if (stepIndex < STEPS.length - 1) {
        stepIndex++;
        timeoutRef.current = setTimeout(runStep, STEP_MS);
      } else {
        timeoutRef.current = setTimeout(() => {
          setCompleted((prev) => {
            const next = new Set(prev);
            next.add(stepIndex);
            return next;
          });
          setActive(-1);
          setRunning(false);
        }, STEP_MS + 400);
      }
    };

    timeoutRef.current = setTimeout(runStep, 200);
  }, [running]);

  useEffect(() => {
    const initial = setTimeout(runWorkflow, 800);
    return () => {
      clearTimeout(initial);
      clearTimers();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section style={{ padding: "100px 24px", background: "#fff", overflow: "hidden" }}>
      <style>{`
        @keyframes wv-spin  { to { transform: rotate(360deg); } }
        @keyframes wv-pulse { 0% { opacity: 1; transform: scale(1); } 100% { opacity: 0; transform: scale(2); } }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <AnimatedSection>
          <div style={{ marginBottom: "56px", textAlign: "center" }}>
            <SectionLabel text="AUTOMATION IN ACTION" />
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
              Watch a Workflow Run Live
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
              A lead submits your form. Your entire follow-up sequence runs in seconds — automatically, every time, without you touching anything.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div
            style={{
              background: "#F9FAFB",
              border: "1.5px solid #E5E7EB",
              borderRadius: "20px",
              padding: "40px 32px 36px",
              overflowX: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "32px",
                flexWrap: "wrap",
                gap: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: running ? "#22C55E" : completed.size === STEPS.length ? "#63CF6F" : "#9CA3AF",
                    animation: running ? "wv-pulse 1.4s ease-out infinite" : "none",
                  }}
                />
                <span style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, fontSize: "13px", color: "#000" }}>
                  {running
                    ? `Running step ${active + 1} of ${STEPS.length}…`
                    : completed.size === STEPS.length
                    ? `Workflow complete — ${runCount} run${runCount !== 1 ? "s" : ""} logged`
                    : "Workflow ready"}
                </span>
              </div>

              <button
                onClick={runWorkflow}
                disabled={running}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: running ? "#F3F4F6" : "#63CF6F",
                  border: "2px solid #000",
                  borderRadius: "10px",
                  padding: "10px 20px",
                  fontFamily: "var(--font-outfit)",
                  fontWeight: 700,
                  fontSize: "14px",
                  color: running ? "#9CA3AF" : "#000",
                  cursor: running ? "not-allowed" : "pointer",
                  transition: "all 0.2s ease",
                  userSelect: "none",
                }}
              >
                {running ? (
                  <>
                    <div
                      style={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        border: "2px solid #D1D5DB",
                        borderTopColor: "#6B7280",
                        animation: "wv-spin 0.7s linear infinite",
                      }}
                    />
                    Running…
                  </>
                ) : (
                  <>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    Run Workflow
                  </>
                )}
              </button>
            </div>

            <div style={{ display: "flex", alignItems: "center", minWidth: "min-content", margin: "0 auto" }}>
              {STEPS.map((step, i) => (
                <div key={step.id} style={{ display: "flex", alignItems: "center" }}>
                  <Node step={step} active={active === i} completed={completed.has(i)} index={i} />
                  {i < STEPS.length - 1 && (
                    <Connector active={active === i} completed={completed.has(i) && active !== i} />
                  )}
                </div>
              ))}
            </div>

            <AnimatePresence>
              {completed.size === STEPS.length && !running && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    marginTop: "28px",
                    padding: "12px 16px",
                    background: "#F0FDF4",
                    border: "1.5px solid #BBF7D0",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span style={{ fontFamily: "var(--font-jakarta)", fontSize: "14px", color: "#166534", fontWeight: 500 }}>
                    Lead qualified, added to Notion, team notified on Slack, and follow-up booked on Google Calendar — all in under 3 seconds.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "24px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#F9FAFB",
                border: "1.5px solid #E5E7EB",
                borderRadius: "999px",
                padding: "8px 18px",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#63CF6F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span style={{ fontFamily: "var(--font-jakarta)", fontSize: "13px", color: "#555", fontWeight: 500 }}>
                Real workflow pattern — scoped to your exact tools and business logic
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
