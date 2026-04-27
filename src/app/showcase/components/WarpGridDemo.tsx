"use client";

import { useEffect, useRef } from "react";

const COLS = 30;
const ROWS = 20;

type Dot = {
  hx: number; hy: number;
  x: number; y: number;
  vx: number; vy: number;
};

export default function WarpGridDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let dots: Dot[] = [];
    let rafId: number;

    function initDots() {
      dots = [];
      const w = canvas.width;
      const h = canvas.height;
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const hx = (c / (COLS - 1)) * w;
          const hy = (r / (ROWS - 1)) * h;
          dots.push({ hx, hy, x: hx, y: hy, vx: 0, vy: 0 });
        }
      }
    }

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initDots();
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onMouseLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };

    function draw() {
      const w = canvas.width;
      const h = canvas.height;
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const LINE_THRESH = (w / COLS) * 1.9;

      for (const d of dots) {
        const dx = d.x - mx;
        const dy = d.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110 && dist > 0) {
          const f = ((110 - dist) / 110) * 130 * 0.016;
          d.vx += (dx / dist) * f;
          d.vy += (dy / dist) * f;
        }
        d.vx += (d.hx - d.x) * 0.1;
        d.vy += (d.hy - d.y) * 0.1;
        d.vx *= 0.77;
        d.vy *= 0.77;
        d.x += d.vx;
        d.y += d.vy;
      }

      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const idx = r * COLS + c;
          const d = dots[idx];
          const disp = Math.sqrt((d.x - d.hx) ** 2 + (d.y - d.hy) ** 2);
          const t = Math.min(disp / 28, 1);

          const rr = Math.round(38 + t * 89);
          const gg = Math.round(58 + t * 96);
          const bb = Math.round(78 + t * 116);

          if (c < COLS - 1) {
            const nb = dots[idx + 1];
            const ld = Math.sqrt((d.x - nb.x) ** 2 + (d.y - nb.y) ** 2);
            if (ld < LINE_THRESH) {
              ctx.beginPath();
              ctx.moveTo(d.x, d.y);
              ctx.lineTo(nb.x, nb.y);
              ctx.strokeStyle = `rgba(${rr},${gg},${bb},0.28)`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
          if (r < ROWS - 1) {
            const nb = dots[idx + COLS];
            const ld = Math.sqrt((d.x - nb.x) ** 2 + (d.y - nb.y) ** 2);
            if (ld < LINE_THRESH) {
              ctx.beginPath();
              ctx.moveTo(d.x, d.y);
              ctx.lineTo(nb.x, nb.y);
              ctx.strokeStyle = `rgba(${rr},${gg},${bb},0.28)`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }

          ctx.beginPath();
          ctx.arc(d.x, d.y, 1.4 + t * 1.6, 0, Math.PI * 2);
          ctx.fillStyle = `rgb(${rr},${gg},${bb})`;
          ctx.fill();
        }
      }

      rafId = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    resize();
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block", cursor: "crosshair" }}
    />
  );
}
