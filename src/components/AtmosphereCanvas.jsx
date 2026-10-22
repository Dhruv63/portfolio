import React, { useEffect, useRef } from 'react';

/**
 * Cartier-Grade Atmospheric Canvas
 * Subtle, ethereal drift of champagne and diamond micro-particles on velvet obsidian.
 * Ultra-low overhead, non-intrusive, purely aesthetic depth.
 */
export default function AtmosphereCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // 40 delicate luxury particles
    const particleCount = 42;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2 + 0.4,
      alpha: Math.random() * 0.4 + 0.1,
      targetAlpha: Math.random() * 0.5 + 0.1,
      speedX: (Math.random() - 0.5) * 0.18,
      speedY: -Math.random() * 0.25 - 0.05,
      hue: Math.random() > 0.4 ? 'rgba(197, 168, 128, ' : 'rgba(245, 245, 247, ' // Champagne or Titanium
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around seamlessly
        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        // Gentle breathing alpha
        p.alpha += (p.targetAlpha - p.alpha) * 0.02;
        if (Math.abs(p.targetAlpha - p.alpha) < 0.02) {
          p.targetAlpha = Math.random() * 0.45 + 0.08;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.hue}${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
      aria-hidden="true"
    />
  );
}
