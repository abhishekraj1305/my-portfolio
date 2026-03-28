import { useEffect, useRef } from "react";

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

export function NeuronBackground() {
  const canvasRef = useRef(null);
  const reduceMotionRef = useRef(false);

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let nodes = [];
    let edges = [];
    let t0 = performance.now();

    const prefersReduce = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function dist(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      return Math.hypot(dx, dy);
    }

    function buildGraph() {
      const count = clamp(Math.floor((w * h) / 22000), 42, 78);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        phase: Math.random() * Math.PI * 2,
        r: 1.2 + Math.random() * 2.2,
      }));

      edges = [];
      const linksPer = 4;
      for (let i = 0; i < nodes.length; i++) {
        const dists = nodes
          .map((n, j) => ({ j, d: i === j ? Infinity : dist(nodes[i], n) }))
          .sort((x, y) => x.d - y.d)
          .slice(0, linksPer);
        for (const { j } of dists) {
          const key = i < j ? `${i}-${j}` : `${j}-${i}`;
          if (!edges.some((e) => e.key === key)) {
            edges.push({ a: i, b: j, key, w: 0.35 + Math.random() * 0.65 });
          }
        }
      }
      const extra = Math.floor(nodes.length * 0.35);
      for (let k = 0; k < extra; k++) {
        const i = Math.floor(Math.random() * nodes.length);
        let j = Math.floor(Math.random() * nodes.length);
        if (j === i) j = (j + 1) % nodes.length;
        const key = i < j ? `${i}-${j}` : `${j}-${i}`;
        if (!edges.some((e) => e.key === key)) {
          edges.push({ a: i, b: j, key, w: 0.2 + Math.random() * 0.4 });
        }
      }
    }

    function resize() {
      const parent = canvas.parentElement;
      if (!parent) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildGraph();
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);
    resize();

 const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMq = () => {
      reduceMotionRef.current = mq.matches;
    };
    mq.addEventListener?.("change", onMq);

    function drawStatic() {
      ctx.clearRect(0, 0, w, h);
      const grd = ctx.createRadialGradient(w * 0.35, h * 0.1, 0, w * 0.5, h * 0.5, Math.max(w, h));
      grd.addColorStop(0, "rgba(56, 189, 248, 0.14)");
      grd.addColorStop(0.45, "rgba(14, 165, 233, 0.04)");
      grd.addColorStop(1, "rgba(2, 6, 23, 0)");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = "rgba(56, 189, 248, 0.22)";
      ctx.lineWidth = 1;
      for (const e of edges) {
        const A = nodes[e.a];
        const B = nodes[e.b];
        ctx.beginPath();
        ctx.moveTo(A.x, A.y);
        ctx.lineTo(B.x, B.y);
        ctx.stroke();
      }
      for (const n of nodes) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(165, 243, 252, 0.95)";
        ctx.shadowColor = "rgba(56, 189, 248, 0.9)";
        ctx.shadowBlur = 12;
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    function tick(now) {
      const reduced = prefersReduce();
      const t = (now - t0) / 1000;

      ctx.clearRect(0, 0, w, h);
      const wash = ctx.createRadialGradient(w * 0.2, 0, 0, w * 0.55, h * 0.4, Math.max(w, h) * 0.9);
      wash.addColorStop(0, "rgba(56, 189, 248, 0.12)");
      wash.addColorStop(0.35, "rgba(129, 140, 248, 0.06)");
      wash.addColorStop(1, "rgba(2, 6, 23, 0)");
      ctx.fillStyle = wash;
      ctx.fillRect(0, 0, w, h);

      if (!reduced) {
        for (const n of nodes) {
          n.x += n.vx + Math.sin(t * 0.7 + n.phase) * 0.12;
          n.y += n.vy + Math.cos(t * 0.55 + n.phase * 1.3) * 0.1;
          if (n.x < -20) n.x = w + 20;
          if (n.x > w + 20) n.x = -20;
          if (n.y < -20) n.y = h + 20;
          if (n.y > h + 20) n.y = -20;
        }
      }

      const pulse = reduced ? 0.35 : 0.35 + Math.sin(t * 1.4) * 0.12;
      for (const e of edges) {
        const A = nodes[e.a];
        const B = nodes[e.b];
        const midX = (A.x + B.x) / 2;
        const midY = (A.y + B.y) / 2;
        const flicker = 0.15 + 0.55 * e.w * pulse;

        const lg = ctx.createLinearGradient(A.x, A.y, B.x, B.y);
        lg.addColorStop(0, `rgba(56, 189, 248, ${flicker * 0.45})`);
        lg.addColorStop(0.5, `rgba(129, 140, 248, ${flicker * 0.85})`);
        lg.addColorStop(1, `rgba(34, 211, 238, ${flicker * 0.5})`);

        ctx.strokeStyle = lg;
        ctx.lineWidth = 1.1;
        ctx.lineCap = "round";
        const dash = 10 + Math.sin(t * 2 + e.a) * 4;
        ctx.setLineDash([dash, dash * 1.1]);
        ctx.lineDashOffset = reduced ? 0 : -t * 28;
        ctx.beginPath();
        const cx = midX + Math.sin(t * 0.8 + e.b) * (reduced ? 0 : 6);
        const cy = midY + Math.cos(t * 0.9 + e.a) * (reduced ? 0 : 5);
        ctx.moveTo(A.x, A.y);
        ctx.quadraticCurveTo(cx, cy, B.x, B.y);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      for (const n of nodes) {
        const glow = reduced ? 10 : 10 + Math.sin(t * 3 + n.phase) * 4;
        const core = n.r * (reduced ? 1 : 1 + Math.sin(t * 2.2 + n.phase) * 0.15);
        ctx.beginPath();
        ctx.fillStyle = "rgba(207, 250, 254, 0.35)";
        ctx.arc(n.x, n.y, core * 3.2, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "rgba(240, 249, 255, 0.95)";
        ctx.shadowColor = "rgba(56, 189, 248, 0.95)";
        ctx.shadowBlur = glow;
        ctx.arc(n.x, n.y, core, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      if (!reduced) raf = requestAnimationFrame(tick);
    }

    function loop(now) {
      if (prefersReduce()) {
        drawStatic();
        return;
      }
      tick(now);
      raf = requestAnimationFrame(loop);
    }

    if (prefersReduce()) {
      drawStatic();
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      mq.removeEventListener?.("change", onMq);
    };
  }, []);

  return <canvas ref={canvasRef} className="neuron-canvas" aria-hidden />;
}
