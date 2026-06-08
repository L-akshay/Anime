"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
}

export default function FloatingSakuraParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize particles
    const particleCount = Math.min(15, Math.floor(window.innerWidth / 100));
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 8 + 4,
      speedX: Math.random() * 0.3 - 0.15,
      speedY: Math.random() * 0.2 + 0.1,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 0.5 - 0.25,
      opacity: Math.random() * 0.3 + 0.1,
    }));

    const drawSakura = (ctx: CanvasRenderingContext2D, p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;

      // Draw a simple 5-petal sakura shape
      const size = p.size;
      ctx.fillStyle = "#ff6b9d";

      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = (i * 72 * Math.PI) / 180;
        const px = Math.cos(angle) * size;
        const py = Math.sin(angle) * size;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);

        // Inner curve
        const innerAngle = angle + 36 * (Math.PI / 180);
        const innerX = Math.cos(innerAngle) * size * 0.4;
        const innerY = Math.sin(innerAngle) * size * 0.4;
        ctx.quadraticCurveTo(innerX, innerY, 0, 0);
        ctx.quadraticCurveTo(innerX, innerY, px, py);
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        // Wrap around
        if (p.y > canvas.height + 20) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.x < -20) p.x = canvas.width + 20;

        drawSakura(ctx, p);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      aria-hidden="true"
    />
  );
}