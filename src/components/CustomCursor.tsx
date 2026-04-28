"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos     = useRef({ x: -100, y: -100 });
  const ring    = useRef({ x: -100, y: -100 });
  const rafRef  = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnterClickable = () => {
      if (dotRef.current)  dotRef.current.style.transform  = "translate(-50%,-50%) scale(2.2)";
      if (ringRef.current) ringRef.current.style.transform = "translate(-50%,-50%) scale(1.6)";
      if (ringRef.current) ringRef.current.style.opacity   = "0.5";
    };

    const onLeaveClickable = () => {
      if (dotRef.current)  dotRef.current.style.transform  = "translate(-50%,-50%) scale(1)";
      if (ringRef.current) ringRef.current.style.transform = "translate(-50%,-50%) scale(1)";
      if (ringRef.current) ringRef.current.style.opacity   = "1";
    };

    document.addEventListener("mousemove", onMove);

    const attachHover = () => {
      document
        .querySelectorAll<HTMLElement>("a, button, [role='button'], input, label, select, textarea, [tabindex]")
        .forEach((el) => {
          el.addEventListener("mouseenter", onEnterClickable);
          el.addEventListener("mouseleave", onLeaveClickable);
        });
    };
    attachHover();

    const observer = new MutationObserver(attachHover);
    observer.observe(document.body, { childList: true, subtree: true });

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.left = `${pos.current.x}px`;
        dotRef.current.style.top  = `${pos.current.y}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top  = `${ring.current.y}px`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 99999,
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#63CF6F",
          transform: "translate(-50%,-50%) scale(1)",
          transition: "transform 0.15s ease",
          willChange: "left, top",
          top: 0,
          left: 0,
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 99998,
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          border: "1.5px solid #63CF6F",
          transform: "translate(-50%,-50%) scale(1)",
          transition: "transform 0.2s ease, opacity 0.2s ease",
          opacity: 1,
          willChange: "left, top",
          top: 0,
          left: 0,
        }}
      />
    </>
  );
}
