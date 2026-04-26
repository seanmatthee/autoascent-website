"use client";

import { useRef, useEffect, useCallback } from "react";

export default function InteractiveDivider() {
  const pathRef = useRef<SVGPathElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const ctlYRef = useRef(30);
  const targetRef = useRef(30);

  const animate = useCallback(() => {
    const diff = targetRef.current - ctlYRef.current;
    if (Math.abs(diff) < 0.05) {
      ctlYRef.current = targetRef.current;
      if (pathRef.current) {
        pathRef.current.setAttribute("d", `M 0 30 Q 720 ${ctlYRef.current} 1440 30`);
      }
      return;
    }
    ctlYRef.current += diff * 0.08;
    if (pathRef.current) {
      pathRef.current.setAttribute("d", `M 0 30 Q 720 ${ctlYRef.current} 1440 30`);
    }
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function handleMouseMove(e: React.MouseEvent<SVGSVGElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const relY = e.clientY - rect.top;
    const dist = Math.abs(relY - 30);
    if (dist < 150) {
      const pull = (1 - dist / 150) * 40;
      targetRef.current = relY < 30 ? 30 - pull : 30 + pull;
    } else {
      targetRef.current = 30;
    }
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
  }

  function handleMouseLeave() {
    targetRef.current = 30;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
  }

  return (
    <div style={{ width: "100%", overflow: "hidden", lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "60px", display: "block", cursor: "crosshair" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <path
          ref={pathRef}
          d="M 0 30 Q 720 30 1440 30"
          fill="none"
          stroke="#000"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
