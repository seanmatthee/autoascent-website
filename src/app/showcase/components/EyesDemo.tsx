"use client";

import { useEffect, useRef } from "react";

const COLS = 7;
const ROWS = 4;
const EYE_R = 20;
const IRIS_R = 12;
const PUPIL_R = 7;
const GAP = 14;

export default function EyesDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const blinks = new Array(COLS * ROWS).fill(false);
    const positions: { cx: number; cy: number }[] = [];
    const timers: ReturnType<typeof setTimeout>[] = [];
    let rafId: number;

    function buildPositions() {
      positions.length = 0;
      const w = canvas.width;
      const h = canvas.height;
      const totalW = COLS * (EYE_R * 2 + GAP) - GAP;
      const totalH = ROWS * (EYE_R * 2 + GAP) - GAP;
      const sx = (w - totalW) / 2 + EYE_R;
      const sy = (h - totalH) / 2 + EYE_R;
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          positions.push({ cx: sx + c * (EYE_R * 2 + GAP), cy: sy + r * (EYE_R * 2 + GAP) });
        }
      }
    }

    function scheduleBlink(i: number) {
      const t = setTimeout(() => {
        blinks[i] = true;
        const t2 = setTimeout(() => {
          blinks[i] = false;
          scheduleBlink(i);
        }, 180);
        timers.push(t2);
      }, Math.random() * 4000 + 1500);
      timers.push(t);
    }

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      buildPositions();
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    function draw() {
      const w = canvas.width;
      const h = canvas.height;
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const MAX_OFF = IRIS_R - PUPIL_R;

      positions.forEach(({ cx, cy }, i) => {
        const dx = mx - cx;
        const dy = my - cy;
        const angle = Math.atan2(dy, dx);
        const raw = Math.sqrt(dx * dx + dy * dy);
        const dist = Math.min(raw * 0.28, MAX_OFF);
        const px = cx + Math.cos(angle) * dist;
        const py = cy + Math.sin(angle) * dist;

        ctx.beginPath();
        ctx.arc(cx, cy, EYE_R, 0, Math.PI * 2);
        ctx.fillStyle = "#f0f0ee";
        ctx.fill();
        ctx.strokeStyle = "#2a2a2a";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        if (!blinks[i]) {
          ctx.beginPath();
          ctx.arc(px, py, IRIS_R, 0, Math.PI * 2);
          ctx.fillStyle = "#63CF6F";
          ctx.fill();

          ctx.beginPath();
          ctx.arc(px, py, PUPIL_R, 0, Math.PI * 2);
          ctx.fillStyle = "#0a0a0a";
          ctx.fill();

          ctx.beginPath();
          ctx.arc(px + 3, py - 3, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255,255,255,0.85)";
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(cx, cy, EYE_R, 0, Math.PI * 2);
          ctx.fillStyle = "#141414";
          ctx.fill();
        }
      });

      rafId = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouseMove);

    resize();
    for (let i = 0; i < COLS * ROWS; i++) {
      setTimeout(() => scheduleBlink(i), Math.random() * 2000);
    }
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      timers.forEach(clearTimeout);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
