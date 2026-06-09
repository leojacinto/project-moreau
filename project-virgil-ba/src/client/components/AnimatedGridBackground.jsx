import React, { useEffect, useRef, useCallback } from "react";

const COLS = 50, ROWS = 50, SPACING = 18;
const FOV = 600, CAM_H = 250, CAM_DIST = 400;
const ROT_X = -0.85, ROT_Z = 0.4;
const cosZ = Math.cos(ROT_Z), sinZ = Math.sin(ROT_Z);
const cosX = Math.cos(ROT_X), sinX = Math.sin(ROT_X);

function projectPt(x, y, z, W, H) {
  const x1 = x * cosZ - y * sinZ;
  const y1 = x * sinZ + y * cosZ;
  const y2 = y1 * cosX - z * sinX;
  const z2 = y1 * sinX + z * cosX + CAM_DIST;
  const scale = FOV / (FOV + z2);
  return { x: x1 * scale + W / 2, y: (y2 + CAM_H) * scale + H / 2, scale, z: z2 };
}

function heightAt(wx, wy, t) {
  let h = 0;
  h += Math.sin(wx * 0.012 + t * 0.8) * Math.cos(wy * 0.01 + t * 0.6) * 80;
  h += Math.sin(wx * 0.025 + wy * 0.02 + t * 1.2) * 35;
  h += Math.cos(wx * 0.04 - t * 0.9) * Math.sin(wy * 0.035 + t * 0.7) * 20;
  const d = Math.sqrt(wx * wx + wy * wy);
  h += Math.sin(d * 0.015 - t * 0.5) * 40;
  const ef = Math.max(0, 1 - d / (COLS * SPACING * 0.45));
  return h * ef * ef;
}

export default function AnimatedGridBackground() {
  const canvasRef = useRef(null);
  const tRef = useRef(0);
  const rafRef = useRef(null);

  const loop = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const W = canvas.width / dpr;
    const H = canvas.height / dpr;
    const t = tRef.current;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);

    // BG
    const bg = ctx.createRadialGradient(W * 0.5, H * 0.45, 0, W * 0.5, H * 0.45, W * 0.7);
    bg.addColorStop(0, "#1e3a38");
    bg.addColorStop(0.5, "#1a2e2e");
    bg.addColorStop(1, "#111f1f");
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // Grid points
    const pts = [];
    for (let r = 0; r < ROWS; r++) {
      pts[r] = [];
      for (let c = 0; c < COLS; c++) {
        const wx = (c - COLS / 2) * SPACING;
        const wy = (r - ROWS / 2) * SPACING;
        const wz = heightAt(wx, wy, t);
        const cx2 = c - COLS / 2, cy2 = r - ROWS / 2;
        const d = Math.sqrt(cx2 * cx2 + cy2 * cy2) / (COLS / 2);
        const fade = Math.max(0, 1 - d * 1.1);
        const op = fade * fade;
        const p = projectPt(wx, wy, wz, W, H);
        pts[r][c] = { sx: p.x, sy: p.y, scale: p.scale, op, wz };
      }
    }

    // Grid lines
    const drawSeg = (p1, p2) => {
      const a = Math.min(p1.op, p2.op);
      if (a < 0.02) return;
      const hn = (p1.wz + p2.wz) / 2;
      const br = 0.4 + 0.6 * Math.max(0, Math.min(1, (hn + 80) / 160));
      ctx.beginPath();
      ctx.moveTo(p1.sx, p1.sy);
      ctx.lineTo(p2.sx, p2.sy);
      ctx.strokeStyle = `rgba(${30 + br * 60 | 0},${180 + br * 75 | 0},${60 + br * 30 | 0},${a * 0.7})`;
      ctx.lineWidth = 0.5 + br * 0.8;
      ctx.stroke();
    };
    for (let r = 0; r < ROWS; r++)
      for (let c = 0; c < COLS - 1; c++) drawSeg(pts[r][c], pts[r][c + 1]);
    for (let c = 0; c < COLS; c++)
      for (let r = 0; r < ROWS - 1; r++) drawSeg(pts[r][c], pts[r + 1][c]);

    // Peak glow
    for (let r = 0; r < ROWS; r += 2) {
      for (let c = 0; c < COLS; c += 2) {
        const p = pts[r][c];
        if (p.op < 0.1 || p.wz <= 30) continue;
        const ga = p.op * ((p.wz - 30) / 120) * 0.15;
        if (ga < 0.01) continue;
        const gr = 6 * p.scale;
        const g = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, gr);
        g.addColorStop(0, `rgba(100,255,140,${ga})`);
        g.addColorStop(1, "rgba(100,255,140,0)");
        ctx.fillStyle = g;
        ctx.fillRect(p.sx - gr, p.sy - gr, gr * 2, gr * 2);
      }
    }

    tRef.current += 0.015;
    rafRef.current = requestAnimationFrame(loop);
  }, []);

  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    };
    resize();
    window.addEventListener("resize", resize);
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [loop]);

  return (
    <div className="animated-grid-bg">
      <canvas ref={canvasRef} className="animated-grid-canvas" />
    </div>
  );
}
