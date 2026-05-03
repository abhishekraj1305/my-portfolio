import { useEffect, useRef } from "react";

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

export function NeuronBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let nodes = [];
    let edges = [];
    const t0 = performance.now();

    const prefersReduce = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function dist(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      return Math.hypot(dx, dy);
    }

    function buildGraph() {
      const count = clamp(Math.floor((w * h) / 17000), 56, 108);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.46,
        vy: (Math.random() - 0.5) * 0.46,
        phase: Math.random() * Math.PI * 2,
        r: 1.2 + Math.random() * 2.2,
      }));

      edges = [];
      const linksPer = 5;
      for (let i = 0; i < nodes.length; i++) {
        const nodeI = nodes[i];
        const dists = [];
        for (let j = 0; j < nodes.length; j++) {
          dists.push({ j, d: i === j ? Infinity : dist(nodeI, nodes[j]) });
        }
        dists.sort((x, y) => x.d - y.d);
        const nearest = dists.slice(0, linksPer);
        for (const { j } of nearest) {
          const key = i < j ? `${i}-${j}` : `${j}-${i}`;
          if (!edges.some((e) => e.key === key)) {
            edges.push({ a: i, b: j, key, w: 0.35 + Math.random() * 0.65 });
          }
        }
      }
      const extra = Math.floor(nodes.length * 0.55);
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

    function drawStatic() {
      if (!w || !h) return;
      ctx.clearRect(0, 0, w, h);
      const wash = ctx.createRadialGradient(w * 0.35, h * 0.1, 0, w * 0.5, h * 0.5, Math.max(w, h));
      wash.addColorStop(0, "rgba(0, 202, 235, 0.16)");
      wash.addColorStop(0.45, "rgba(223, 63, 139, 0.08)");
      wash.addColorStop(1, "rgba(2, 6, 23, 0)");
      ctx.fillStyle = wash;
      ctx.fillRect(0, 0, w, h);

      ctx.lineWidth = 1;
      for (const e of edges) {
        const A = nodes[e.a];
        const B = nodes[e.b];
        const lg = ctx.createLinearGradient(A.x, A.y, B.x, B.y);
        lg.addColorStop(0, "rgba(0, 202, 235, 0.42)");
        lg.addColorStop(1, "rgba(223, 63, 139, 0.34)");
        ctx.strokeStyle = lg;
        ctx.beginPath();
        ctx.moveTo(A.x, A.y);
        ctx.lineTo(B.x, B.y);
        ctx.stroke();
      }
      for (const n of nodes) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(154, 247, 255, 0.35)";
        ctx.arc(n.x, n.y, n.r * 3.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "rgba(240, 249, 255, 0.95)";
        ctx.shadowColor = "rgba(0, 202, 235, 0.95)";
        ctx.shadowBlur = 12;
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    function frame(now) {
      const reduced = prefersReduce();
      const t = (now - t0) / 1000;

      ctx.clearRect(0, 0, w, h);
      const wash = ctx.createRadialGradient(w * 0.2, 0, 0, w * 0.55, h * 0.4, Math.max(w, h) * 0.9);
      wash.addColorStop(0, "rgba(0, 202, 235, 0.18)");
      wash.addColorStop(0.35, "rgba(223, 63, 139, 0.08)");
      wash.addColorStop(1, "rgba(2, 6, 23, 0)");
      ctx.fillStyle = wash;
      ctx.fillRect(0, 0, w, h);

      if (reduced) {
        drawStatic();
        return;
      }

      for (const n of nodes) {
        n.x += n.vx + Math.sin(t * 0.7 + n.phase) * 0.12;
        n.y += n.vy + Math.cos(t * 0.55 + n.phase * 1.3) * 0.1;
        if (n.x < -20) n.x = w + 20;
        if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        if (n.y > h + 20) n.y = -20;
      }

      const pulse = 0.35 + Math.sin(t * 1.4) * 0.12;
      for (const e of edges) {
        const A = nodes[e.a];
        const B = nodes[e.b];
        const midX = (A.x + B.x) / 2;
        const midY = (A.y + B.y) / 2;
        const flicker = 0.15 + 0.55 * e.w * pulse;

        const lg = ctx.createLinearGradient(A.x, A.y, B.x, B.y);
        lg.addColorStop(0, `rgba(0, 202, 235, ${flicker * 0.6})`);
        lg.addColorStop(0.5, `rgba(223, 63, 139, ${flicker * 0.55})`);
        lg.addColorStop(1, `rgba(154, 247, 255, ${flicker * 0.5})`);

        ctx.strokeStyle = lg;
        ctx.lineWidth = 1.25;
        ctx.lineCap = "round";
        const dash = 10 + Math.sin(t * 2 + e.a) * 4;
        ctx.setLineDash([dash, dash * 1.1]);
        ctx.lineDashOffset = -t * 28;
        ctx.beginPath();
        const cx = midX + Math.sin(t * 0.8 + e.b) * 6;
        const cy = midY + Math.cos(t * 0.9 + e.a) * 5;
        ctx.moveTo(A.x, A.y);
        ctx.quadraticCurveTo(cx, cy, B.x, B.y);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      for (const n of nodes) {
        const glow = 10 + Math.sin(t * 3 + n.phase) * 4;
        const coreRadi = n.r * (1 + Math.sin(t * 2.2 + n.phase) * 0.15);
        ctx.beginPath();
        ctx.fillStyle = "rgba(154, 247, 255, 0.38)";
        ctx.arc(n.x, n.y, coreRadi * 3.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = "rgba(240, 249, 255, 0.95)";
        ctx.shadowColor = "rgba(0, 202, 235, 0.98)";
        ctx.shadowBlur = glow;
        ctx.arc(n.x, n.y, coreRadi, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      raf = requestAnimationFrame(frame);
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
      if (prefersReduce()) drawStatic();
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);
    resize();

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMq = () => {
      cancelAnimationFrame(raf);
      if (prefersReduce()) {
        drawStatic();
      } else {
        raf = requestAnimationFrame(frame);
      }
    };
    mq.addEventListener?.("change", onMq);

    if (!prefersReduce()) {
      raf = requestAnimationFrame(frame);
    } else {
      drawStatic();
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      mq.removeEventListener?.("change", onMq);
    };
  }, []);

  return <canvas ref={canvasRef} className="neuron-canvas" aria-hidden />;
}
