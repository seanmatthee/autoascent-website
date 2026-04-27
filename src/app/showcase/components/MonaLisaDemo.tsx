"use client";

import { useEffect, useRef } from "react";

const COLS = 40;
const ROWS = 50;

function getPortraitLum(col: number, row: number): number {
  const cx = COLS / 2;
  const cy = ROWS * 0.42;
  const x = col - cx;
  const y = row - cy;

  const faceRx = COLS * 0.28;
  const faceRy = ROWS * 0.38;
  const faceOval = (x * x) / (faceRx * faceRx) + (y * y) / (faceRy * faceRy);

  let lum = 0.32 + 0.08 * (1 - row / ROWS);

  if (faceOval < 1.0) {
    lum = 0.72 + 0.2 * (1 - faceOval);

    const leX = cx - COLS * 0.13;
    const reX = cx + COLS * 0.13;
    const eyeY = ROWS * 0.32;
    const eyeR = COLS * 0.065;
    const le = Math.sqrt((col - leX) ** 2 + (row - eyeY) ** 2);
    const re = Math.sqrt((col - reX) ** 2 + (row - eyeY) ** 2);

    const noseY = cy + ROWS * 0.1;
    const noseDist = Math.sqrt(x * x + (row - noseY) ** 2);

    const mouthY = cy + ROWS * 0.19;
    const mouthIn = Math.abs(x) < COLS * 0.13 && Math.abs(row - mouthY) < ROWS * 0.028;

    if (le < eyeR || re < eyeR) lum = 0.1;
    else if (mouthIn) lum = 0.28;
    else if (noseDist < COLS * 0.045) lum *= 0.78;
  } else {
    const hairTop = row < ROWS * 0.21;
    const hairSide = Math.abs(x) > COLS * 0.24 && row < ROWS * 0.65;
    if (hairTop || hairSide) lum = 0.06 + Math.random() * 0.04;
  }

  return Math.max(0, Math.min(1, lum));
}

type Particle = {
  hx: number; hy: number;
  x: number; y: number;
  vx: number; vy: number;
  lum: number;
};

export default function MonaLisaDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let particles: Particle[] = [];
    let rafId: number;

    function initParticles() {
      particles = [];
      const w = canvas.width;
      const h = canvas.height;
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const hx = (c + 0.5) * (w / COLS);
          const hy = (r + 0.5) * (h / ROWS);
          particles.push({ hx, hy, x: hx, y: hy, vx: 0, vy: 0, lum: getPortraitLum(c, r) });
        }
      }
    }

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    function draw() {
      const w = canvas.width;
      const h = canvas.height;
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const p of particles) {
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 90 && dist > 0) {
          const f = ((90 - dist) / 90) * 180 * 0.016;
          p.vx += (dx / dist) * f;
          p.vy += (dy / dist) * f;
        }

        p.vx += (p.hx - p.x) * 0.09;
        p.vy += (p.hy - p.y) * 0.09;
        p.vx *= 0.74;
        p.vy *= 0.74;
        p.x += p.vx;
        p.y += p.vy;

        const g = Math.round(p.lum * 255);
        ctx.fillStyle = `rgb(${g},${Math.round(g * 0.91)},${Math.round(g * 0.76)})`;
        const size = Math.max(1, p.lum * 3.5);
        ctx.fillRect(p.x - size / 2, p.y - size / 2, size, size);
      }

      rafId = requestAnimationFrame(draw);
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };

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
