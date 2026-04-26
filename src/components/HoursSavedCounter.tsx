"use client";

import { useState, useEffect, useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

export default function HoursSavedCounter() {
  const [count, setCount] = useState(91);
  const [flipping, setFlipping] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setFlipping(true);
      setTimeout(() => {
        setCount((c) => c + 1);
        setFlipping(false);
      }, 200);
    }, 60000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      style={{
        background: "#fff",
        border: "2px solid #000",
        borderRadius: "16px",
        boxShadow: "6px 6px 0px #000",
        padding: "40px 36px",
        textAlign: "center",
        maxWidth: "320px",
        width: "100%",
      }}
    >
      <SectionLabel text="HOURS SAVED FOR CLIENTS" />
      <div
        style={{
          fontFamily: "var(--font-outfit)",
          fontWeight: 800,
          fontSize: "72px",
          color: "#63CF6F",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          marginBottom: "8px",
          opacity: flipping ? 0 : 1,
          transform: flipping ? "translateY(-8px)" : "translateY(0)",
          transition: "opacity 0.15s ease, transform 0.15s ease",
        }}
      >
        {count}
      </div>
      <div
        style={{
          fontFamily: "var(--font-jakarta)",
          fontSize: "16px",
          color: "#888",
          fontWeight: 500,
        }}
      >
        and counting
      </div>
    </div>
  );
}
