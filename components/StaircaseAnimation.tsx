"use client";
import { useEffect, useRef } from "react";

export default function StaircaseAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Animation constants
    const STEP_W = 62;
    const STEP_H = 36;
    const TOTAL_STEPS = 10;
    const SPEED = 0.9; // steps per second

    // Animation state
    let figPos = 0;
    let walkPhase = 0;
    let lastTime = 0;
    let raf: number;
    let hasCompleted = false;

    // Resize handling
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

    // Draw static staircase
    function drawStairs(w: number, h: number) {
      const baseX = w * 0.08;
      const baseY = h - 55;

      for (let i = 0; i < TOTAL_STEPS; i++) {
        const sx = baseX + i * STEP_W;
        const sy = baseY - i * STEP_H;

        // Tread (top surface)
        const treadGrad = ctx!.createLinearGradient(sx, sy - 4, sx, sy + STEP_H * 0.3);
        treadGrad.addColorStop(0, "rgba(255,255,255,0.95)");
        treadGrad.addColorStop(1, "rgba(200,225,248,0.8)");
        ctx!.beginPath();
        ctx!.rect(sx, sy, STEP_W, 6);
        ctx!.fillStyle = treadGrad;
        ctx!.fill();

        // Riser (front face)
        const riserGrad = ctx!.createLinearGradient(sx, sy, sx + STEP_W * 0.15, sy);
        riserGrad.addColorStop(0, "rgba(190,219,255,0.9)");
        riserGrad.addColorStop(1, "rgba(147,197,253,0.65)");
        ctx!.beginPath();
        ctx!.rect(sx, sy + 6, STEP_W, STEP_H - 6);
        ctx!.fillStyle = riserGrad;
        ctx!.fill();

        // Top edge highlight
        ctx!.beginPath();
        ctx!.moveTo(sx, sy);
        ctx!.lineTo(sx + STEP_W, sy);
        ctx!.strokeStyle = "rgba(37,99,235,0.4)";
        ctx!.lineWidth = 1.5;
        ctx!.stroke();

        // Left edge
        ctx!.beginPath();
        ctx!.moveTo(sx, sy);
        ctx!.lineTo(sx, sy + STEP_H);
        ctx!.strokeStyle = "rgba(37,99,235,0.2)";
        ctx!.lineWidth = 0.8;
        ctx!.stroke();

        // Step numbers (every 5 steps)
        if (i > 0 && i % 5 === 0) {
          ctx!.fillStyle = "rgba(37,99,235,0.5)";
          ctx!.font = "600 10px 'DM Sans', sans-serif";
          ctx!.textAlign = "center";
          ctx!.fillText(String(i), sx + STEP_W / 2, sy - 4);
        }
      }

      // Ground
      ctx!.beginPath();
      ctx!.rect(0, h - 55, w, 55);
      const groundGrad = ctx!.createLinearGradient(0, h - 55, 0, h);
      groundGrad.addColorStop(0, "rgba(147,197,253,0.35)");
      groundGrad.addColorStop(1, "rgba(147,197,253,0.1)");
      ctx!.fillStyle = groundGrad;
      ctx!.fill();
    }

    // Draw stick figure character
    function drawFigure(x: number, y: number, phase: number, bob: number) {
      ctx!.save();
      ctx!.translate(x, y - bob * 3);

      // Shadow
      ctx!.beginPath();
      ctx!.ellipse(2, 4, 10, 3, 0, 0, Math.PI * 2);
      ctx!.fillStyle = "rgba(37,99,235,0.15)";
      ctx!.fill();

      const legSwing = Math.sin(phase) * 22;
      const legSwing2 = Math.sin(phase + Math.PI) * 22;
      ctx!.lineWidth = 2.8;
      ctx!.lineCap = "round";

      // Back leg
      ctx!.beginPath();
      ctx!.moveTo(0, 0);
      const bkx = Math.sin((legSwing2 * Math.PI) / 180) * 12;
      const bky = Math.cos((legSwing2 * Math.PI) / 180) * 14 + 14;
      ctx!.lineTo(bkx, bky);
      ctx!.lineTo(bkx + (legSwing2 > 0 ? 5 : -5), bky + 6);
      ctx!.strokeStyle = "#2563eb";
      ctx!.stroke();

      // Front leg
      ctx!.beginPath();
      ctx!.moveTo(0, 0);
      const fkx = Math.sin((legSwing * Math.PI) / 180) * 12;
      const fky = Math.cos((legSwing * Math.PI) / 180) * 14 + 14;
      ctx!.lineTo(fkx, fky);
      ctx!.lineTo(fkx + (legSwing > 0 ? 5 : -5), fky + 6);
      ctx!.strokeStyle = "#1e40af";
      ctx!.stroke();

      // Torso
      ctx!.beginPath();
      ctx!.moveTo(0, 0);
      ctx!.lineTo(0, -18);
      ctx!.strokeStyle = "#3b82f6";
      ctx!.lineWidth = 3.2;
      ctx!.stroke();

      // Arms
      const armSwing = Math.sin(phase + Math.PI) * 18;
      const armSwing2 = Math.sin(phase) * 18;
      ctx!.lineWidth = 2.2;
      
      ctx!.beginPath();
      ctx!.moveTo(0, -14);
      ctx!.lineTo(
        Math.sin((armSwing2 * Math.PI) / 180) * 10,
        -14 + Math.cos((armSwing2 * Math.PI) / 180) * 10 - 4
      );
      ctx!.strokeStyle = "#2563eb";
      ctx!.stroke();
      
      ctx!.beginPath();
      ctx!.moveTo(0, -14);
      ctx!.lineTo(
        Math.sin((armSwing * Math.PI) / 180) * 10,
        -14 + Math.cos((armSwing * Math.PI) / 180) * 10 - 4
      );
      ctx!.strokeStyle = "#1e40af";
      ctx!.stroke();

      // Head
      ctx!.beginPath();
      ctx!.arc(0, -24, 7, 0, Math.PI * 2);
      ctx!.fillStyle = "#fde68a";
      ctx!.fill();
      ctx!.strokeStyle = "#f59e0b";
      ctx!.lineWidth = 1.2;
      ctx!.stroke();

      // Hair
      ctx!.beginPath();
      ctx!.arc(0, -28, 5, Math.PI, 0);
      ctx!.fillStyle = "#92400e";
      ctx!.fill();

      ctx!.restore();
    }

    // Draw progress badge
    function drawProgressBadge(x: number, y: number, step: number) {
      ctx!.save();
      ctx!.translate(x, y);
      
      ctx!.beginPath();
      (ctx as any).roundRect(-24, -16, 48, 22, 11);
      ctx!.fillStyle = "rgba(255,255,255,0.95)";
      ctx!.fill();
      ctx!.strokeStyle = "rgba(37,99,235,0.3)";
      ctx!.lineWidth = 1.5;
      ctx!.stroke();
      
      ctx!.fillStyle = "#1e40af";
      ctx!.font = "700 11px 'DM Sans', sans-serif";
      ctx!.textAlign = "center";
      ctx!.fillText("Step " + Math.ceil(step), 0, -2);
      
      ctx!.restore();
    }

    // Draw motion trail
    function drawTrail(figX: number, figY: number) {
      for (let i = 1; i <= 4; i++) {
        const tx = figX - i * 18;
        const ty = figY + i * STEP_H;
        ctx!.beginPath();
        ctx!.arc(tx, ty - 10, 2.5 - i * 0.3, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(37,99,235,${0.25 - i * 0.05})`;
        ctx!.fill();
      }
    }

    // Main animation loop
    function animate(ts: number) {
      const dt = Math.min((ts - lastTime) / 1000, 0.05);
      lastTime = ts;

      figPos += SPEED * dt;
      walkPhase += SPEED * dt * Math.PI * 3.2;

      // Stop at top
      if (figPos >= TOTAL_STEPS) {
        figPos = TOTAL_STEPS;
        hasCompleted = true;
        
        // Final frame
        const bob = Math.abs(Math.sin(walkPhase)) * 0.5;
        const w = W();
        const h = H();
        const baseX = w * 0.08;
        const baseY = h - 55;
        const figX = baseX + figPos * STEP_W + STEP_W * 0.5;
        const figY = baseY - figPos * STEP_H;

        ctx!.clearRect(0, 0, w, h);
        
        // Background gradient
        const bg = ctx!.createLinearGradient(0, 0, w, h);
        bg.addColorStop(0, "rgba(219,234,254,0.4)");
        bg.addColorStop(1, "rgba(240,249,255,0.2)");
        ctx!.fillStyle = bg;
        ctx!.fillRect(0, 0, w, h);

        drawStairs(w, h);
        drawTrail(figX, figY);
        drawFigure(figX, figY - 20, walkPhase, bob);
        drawProgressBadge(figX, figY - 58, figPos);
        
        return;
      }

      const bob = Math.abs(Math.sin(walkPhase)) * 0.5;
      const w = W();
      const h = H();
      const baseX = w * 0.08;
      const baseY = h - 55;
      const figX = baseX + figPos * STEP_W + STEP_W * 0.5;
      const figY = baseY - figPos * STEP_H;

      ctx!.clearRect(0, 0, w, h);

      // Background
      const bg = ctx!.createLinearGradient(0, 0, w, h);
      bg.addColorStop(0, "rgba(219,234,254,0.4)");
      bg.addColorStop(1, "rgba(240,249,255,0.2)");
      ctx!.fillStyle = bg;
      ctx!.fillRect(0, 0, w, h);

      drawStairs(w, h);
      drawTrail(figX, figY);
      drawFigure(figX, figY - 20, walkPhase, bob);
      drawProgressBadge(figX, figY - 58, figPos);

      raf = requestAnimationFrame(animate);
    }

    // Start animation
    raf = requestAnimationFrame((ts) => {
      lastTime = ts;
      animate(ts);
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      className="relative w-full max-w-4xl mx-auto overflow-hidden"
      style={{
        height: "360px",
        borderRadius: "var(--radius-xl)",
        background: "rgba(255,255,255,0.25)",
        border: "1px solid rgba(255,255,255,0.6)",
        backdropFilter: "blur(12px)",
        boxShadow: "var(--shadow-lg)",
      }}
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-full" 
        style={{ display: "block" }}
      />
    </div>
  );
}
