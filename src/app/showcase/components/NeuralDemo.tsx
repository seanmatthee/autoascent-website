"use client";

import { useEffect, useRef } from "react";

const NODE_COUNT = 40;
const CONNECT_DIST = 140;
const HOP_MS = 220;

type Node = { x: number; y: number; lit: number; litTarget: number };
type Edge = { a: number; b: number };
type Signal = { a: number; b: number; t: number };

export default function NeuralDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    let nodes: Node[] = [];
    let edges: Edge[] = [];
    let signals: Signal[] = [];
    let adjacency = new Map<number, number[]>();
    let rafId: number;

    function buildNetwork() {
      const w = canvas.width;
      const h = canvas.height;
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * w * 0.88 + w * 0.06,
        y: Math.random() * h * 0.88 + h * 0.06,
        lit: 0,
        litTarget: 0,
      }));
      edges = [];
      adjacency = new Map();
      for (let i = 0; i < NODE_COUNT; i++) {
        adjacency.set(i, []);
        for (let j = i + 1; j < NODE_COUNT; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          if (Math.sqrt(dx * dx + dy * dy) < CONNECT_DIST) {
            edges.push({ a: i, b: j });
            adjacency.get(i)!.push(j);
            if (!adjacency.has(j)) adjacency.set(j, []);
            adjacency.get(j)!.push(i);
          }
        }
      }
      signals = [];
    }

    function firePulse(startIdx: number) {
      const visited = new Set<number>([startIdx]);
      const queue: Array<{ idx: number; depth: number }> = [{ idx: startIdx, depth: 0 }];

      nodes[startIdx].litTarget = 1;
      const t0 = setTimeout(() => { nodes[startIdx].litTarget = 0; }, 500);
      timeouts.push(t0);

      let qi = 0;
      while (qi < queue.length) {
        const { idx, depth } = queue[qi++];
        for (const nb of (adjacency.get(idx) || [])) {
          if (!visited.has(nb)) {
            visited.add(nb);
            const arriveMs = (depth + 1) * HOP_MS;
            const startMs = depth * HOP_MS;

            const ta = setTimeout(() => {
              nodes[nb].litTarget = 1;
              const tb = setTimeout(() => { nodes[nb].litTarget = 0; }, 500);
              timeouts.push(tb);
            }, arriveMs);
            timeouts.push(ta);

            const ts = setTimeout(() => {
              signals.push({ a: idx, b: nb, t: 0 });
            }, startMs);
            timeouts.push(ts);

            queue.push({ idx: nb, depth: depth + 1 });
          }
        }
      }
    }

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      buildNetwork();
    };

    const onClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      let closest = -1;
      let closestD = 35;
      for (let i = 0; i < nodes.length; i++) {
        const d = Math.sqrt((nodes[i].x - mx) ** 2 + (nodes[i].y - my) ** 2);
        if (d < closestD) { closestD = d; closest = i; }
      }
      if (closest !== -1) firePulse(closest);
    };

    function draw() {
      const w = canvas.width;
      const h = canvas.height;
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, w, h);

      for (const n of nodes) {
        n.lit += (n.litTarget - n.lit) * 0.14;
      }

      for (const e of edges) {
        const na = nodes[e.a];
        const nb = nodes[e.b];
        const bright = Math.max(na.lit, nb.lit);
        ctx.beginPath();
        ctx.moveTo(na.x, na.y);
        ctx.lineTo(nb.x, nb.y);
        ctx.strokeStyle = `rgba(87,154,194,${0.055 + bright * 0.22})`;
        ctx.lineWidth = 0.9;
        ctx.stroke();
      }

      const alive: Signal[] = [];
      for (const s of signals) {
        s.t += 0.055;
        if (s.t < 1) {
          const na = nodes[s.a];
          const nb = nodes[s.b];
          const x = na.x + (nb.x - na.x) * s.t;
          const y = na.y + (nb.y - na.y) * s.t;

          const grad = ctx.createRadialGradient(x, y, 0, x, y, 8);
          grad.addColorStop(0, `rgba(87,154,194,${0.9 - s.t * 0.4})`);
          grad.addColorStop(1, "rgba(87,154,194,0)");
          ctx.beginPath();
          ctx.arc(x, y, 8, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(x, y, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200,230,255,${1 - s.t * 0.3})`;
          ctx.fill();

          alive.push(s);
        }
      }
      signals = alive;

      for (const n of nodes) {
        const r = 4.5 + n.lit * 5;
        if (n.lit > 0.04) {
          const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 3.5);
          grd.addColorStop(0, `rgba(87,154,194,${n.lit * 0.45})`);
          grd.addColorStop(1, "rgba(87,154,194,0)");
          ctx.beginPath();
          ctx.arc(n.x, n.y, r * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(87,154,194,${0.18 + n.lit * 0.82})`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    canvas.addEventListener("click", onClick);
    resize();
    draw();

    setTimeout(() => {
      if (nodes.length > 0) firePulse(Math.floor(Math.random() * NODE_COUNT));
    }, 900);

    return () => {
      cancelAnimationFrame(rafId);
      timeouts.forEach(clearTimeout);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block", cursor: "pointer" }}
    />
  );
}
