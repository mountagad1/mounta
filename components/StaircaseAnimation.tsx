"use client";
import { useEffect, useRef } from "react";

export default function StaircaseAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const STEP_W = 62;
    const STEP_H = 36;
    const VISIBLE_STEPS = 14;
    const SPEED = 0.9;

    let figPos = 0;
    let walkPhase = 0;
    let offset = 0;
    let lastTime = 0;
    let raf: number;

    function resize() {
      const rect = canvas!.parentElement!.getBoundingClientRect();
      canvas!.width = rect.width * window.devicePixelRatio;
      canvas!.height = rect.height * window.devicePixelRatio;
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas!.parentElement!.getBoundingClientRect().width;
    const H = () => canvas!.parentElement!.getBoundingClientRect().height;

    function drawStairs(w: number, h: number, camOffset: number) {
      const startStep = Math.floor(camOffset / STEP_W) - 2;
      const endStep = startStep + VISIBLE_STEPS + 4;
      for (let i = startStep; i <= endStep; i++) {
        const sx = i * STEP_W - camOffset;
        const sy = h - 60 - i * STEP_H;
        const treadGrad = ctx!.createLinearGradient(sx, sy - 4, sx, sy + STEP_H * 0.3);
        treadGrad.addColorStop(0, "rgba(255,255,255,0.92)");
        treadGrad.addColorStop(1, "rgba(200,225,248,0.75)");
        ctx!.beginPath();
        ctx!.rect(sx, sy, STEP_W, 6);
        ctx!.fillStyle = treadGrad;
        ctx!.fill();
        const riserGrad = ctx!.createLinearGradient(sx, sy, sx + STEP_W * 0.15, sy);
        riserGrad.addColorStop(0, "rgba(190,219,255,0.85)");
        riserGrad.addColorStop(1, "rgba(147,197,253,0.6)");
        ctx!.beginPath();
        ctx!.rect(sx, sy + 6, STEP_W, STEP_H - 6);
        ctx!.fillStyle = riserGrad;
        ctx!.fill();
        ctx!.beginPath();
        ctx!.moveTo(sx, sy);
        ctx!.lineTo(sx + STEP_W, sy);
        ctx!.strokeStyle = "rgba(37,99,235,0.35)";
        ctx!.lineWidth = 1.5;
        ctx!.stroke();
        ctx!.beginPath();
        ctx!.moveTo(sx, sy);
        ctx!.lineTo(sx, sy + STEP_H);
        ctx!.strokeStyle = "rgba(37,99,235,0.18)";
        ctx!.lineWidth = 0.8;
        ctx!.stroke();
        if (i > 0 && i % 5 === 0) {
          ctx!.fillStyle = "rgba(37,99,235,0.45)";
          ctx!.font = "500 10px DM Sans, sans-serif";
          ctx!.textAlign = "center";
          ctx!.fillText(String(i), sx + STEP_W / 2, sy - 4);
        }
      }
      ctx!.beginPath();
      ctx!.rect(0, h - 60, w, 60);
      const groundGrad = ctx!.createLinearGradient(0, h - 60, 0, h);
      groundGrad.addColorStop(0, "rgba(147,197,253,0.3)");
      groundGrad.addColorStop(1, "rgba(147,197,253,0.08)");
      ctx!.fillStyle = groundGrad;
      ctx!.fill();
    }

    function drawFigure(x: number, y: number, phase: number, bob: number) {
      ctx!.save();
      ctx!.translate(x, y - bob * 3);
      ctx!.beginPath();
      ctx!.ellipse(2, 4, 10, 3, 0, 0, Math.PI * 2);
      ctx!.fillStyle = "rgba(37,99,235,0.12)";
      ctx!.fill();
      const legSwing = Math.sin(phase) * 22;
      const legSwing2 = Math.sin(phase + Math.PI) * 22;
      ctx!.lineWidth = 2.8;
      ctx!.lineCap = "round";
      // back leg
      ctx!.beginPath();
      ctx!.moveTo(0, 0);
      const bkx = Math.sin((legSwing2 * Math.PI) / 180) * 12;
      const bky = Math.cos((legSwing2 * Math.PI) / 180) * 14 + 14;
      ctx!.lineTo(bkx, bky);
      ctx!.lineTo(bkx + (legSwing2 > 0 ? 5 : -5), bky + 6);
      ctx!.strokeStyle = "#2563eb";
      ctx!.stroke();
      // front leg
      ctx!.beginPath();
      ctx!.moveTo(0, 0);
      const fkx = Math.sin((legSwing * Math.PI) / 180) * 12;
      const fky = Math.cos((legSwing * Math.PI) / 180) * 14 + 14;
      ctx!.lineTo(fkx, fky);
      ctx!.lineTo(fkx + (legSwing > 0 ? 5 : -5), fky + 6);
      ctx!.strokeStyle = "#1e40af";
      ctx!.stroke();
      // torso
      ctx!.beginPath();
      ctx!.moveTo(0, 0);
      ctx!.lineTo(0, -18);
      ctx!.strokeStyle = "#3b82f6";
      ctx!.lineWidth = 3.2;
      ctx!.stroke();
      // arms
      const armSwing = Math.sin(phase + Math.PI) * 18;
      const armSwing2 = Math.sin(phase) * 18;
      ctx!.lineWidth = 2.2;
      ctx!.beginPath();
      ctx!.moveTo(0, -14);
      ctx!.lineTo(Math.sin((armSwing2 * Math.PI) / 180) * 10, -14 + Math.cos((armSwing2 * Math.PI) / 180) * 10 - 4);
      ctx!.strokeStyle = "#2563eb";
      ctx!.stroke();
      ctx!.beginPath();
      ctx!.moveTo(0, -14);
      ctx!.lineTo(Math.sin((armSwing * Math.PI) / 180) * 10, -14 + Math.cos((armSwing * Math.PI) / 180) * 10 - 4);
      ctx!.strokeStyle = "#1e40af";
      ctx!.stroke();
      // head
      ctx!.beginPath();
      ctx!.arc(0, -24, 7, 0, Math.PI * 2);
      ctx!.fillStyle = "#fde68a";
      ctx!.fill();
      ctx!.strokeStyle = "#f59e0b";
      ctx!.lineWidth = 1.2;
      ctx!.stroke();
      ctx!.beginPath();
      ctx!.arc(0, -28, 5, Math.PI, 0);
      ctx!.fillStyle = "#92400e";
      ctx!.fill();
      ctx!.restore();
    }

    function drawProgressBadge(x: number, y: number, step: number) {
      ctx!.save();
      ctx!.translate(x, y);
      ctx!.beginPath();
      (ctx as any).roundRect(-22, -16, 44, 20, 10);
      ctx!.fillStyle = "rgba(255,255,255,0.92)";
      ctx!.fill();
      ctx!.strokeStyle = "rgba(37,99,235,0.28)";
      ctx!.lineWidth = 1;
      ctx!.stroke();
      ctx!.fillStyle = "#1e40af";
      ctx!.font = "600 11px DM Sans, sans-serif";
      ctx!.textAlign = "center";
      ctx!.fillText("Step " + Math.max(1, Math.floor(step)), 0, -2);
      ctx!.restore();
    }

    function drawTrail(figX: number, figY: number) {
      for (let i = 1; i <= 5; i++) {
        const tx = figX - i * 18;
        const ty = figY + i * STEP_H;
        ctx!.beginPath();
        ctx!.arc(tx, ty - 10, 2.5 - i * 0.3, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(37,99,235,${0.25 - i * 0.04})`;
        ctx!.fill();
      }
    }

    function animate(ts: number) {
      const dt = Math.min((ts - lastTime) / 1000, 0.05);
      lastTime = ts;
      figPos += SPEED * dt;
      walkPhase += SPEED * dt * Math.PI * 3.2;
      const bob = Math.abs(Math.sin(walkPhase)) * 0.5;
      const targetCam = figPos * STEP_W - W() * 0.35;
      offset += (targetCam - offset) * 0.12;
      const figX = figPos * STEP_W - offset;
      const figY = H() - 60 - figPos * STEP_H;
      const w = W(); const h = H();
      ctx!.clearRect(0, 0, w, h);
      const bg = ctx!.createLinearGradient(0, 0, w, h);
      bg.addColorStop(0, "rgba(219,234,254,0.4)");
      bg.addColorStop(1, "rgba(240,249,255,0.2)");
      ctx!.fillStyle = bg;
      ctx!.fillRect(0, 0, w, h);
      drawStairs(w, h, offset);
      drawTrail(figX, figY);
      drawFigure(figX, figY - 20, walkPhase, bob);
      drawProgressBadge(figX, figY - 58, figPos);
      raf = requestAnimationFrame(animate);
    }

    raf = requestAnimationFrame((ts) => { lastTime = ts; animate(ts); });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "760px",
        margin: "0 auto",
        height: "340px",
        overflow: "hidden",
        borderRadius: "20px",
        background: "rgba(255,255,255,0.18)",
        border: "1px solid rgba(255,255,255,0.5)",
        backdropFilter: "blur(8px)",
      }}
    >
      <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
    </div>
  );
}
