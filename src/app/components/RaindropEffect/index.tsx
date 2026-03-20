"use client";

import { useEffect, useRef, useCallback } from "react";

const MAX_DROPS = 20;
const DROP_INTERVAL_MIN = 500;
const DROP_INTERVAL_MAX = 1500;
const RIPPLE_SPEED = 70; // px/s
const MAX_RADIUS = 400;
const RING_SPACING = 18;
const RING_COUNT = 14;
const LINE_WIDTH = 0.7;

interface Drop {
  x: number;
  y: number;
  startTime: number;
  strength: number;
}

export default function RaindropEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const dropsRef = useRef<Drop[]>([]);
  const nextDropRef = useRef(300);
  const startTimeRef = useRef<number | null>(null);

  const spawnDrop = useCallback((time: number, w: number, h: number) => {
    dropsRef.current.push({
      x: Math.random() * w,
      y: Math.random() * h,
      startTime: time,
      strength: 0.5 + Math.random() * 0.5,
    });
    if (dropsRef.current.length > MAX_DROPS) {
      dropsRef.current.shift();
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);

    function animate(timestamp: number) {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;

      // Spawn drops
      if (elapsed >= nextDropRef.current) {
        spawnDrop(elapsed, w, h);
        nextDropRef.current =
          elapsed + DROP_INTERVAL_MIN + Math.random() * (DROP_INTERVAL_MAX - DROP_INTERVAL_MIN);
      }

      ctx!.clearRect(0, 0, w, h);

      const drops = dropsRef.current;

      for (let d = 0; d < drops.length; d++) {
        const drop = drops[d];
        const age = (elapsed - drop.startTime) / 1000;
        const baseRadius = age * RIPPLE_SPEED;

        if (baseRadius - RING_COUNT * RING_SPACING > MAX_RADIUS) continue;

        for (let r = 0; r < RING_COUNT; r++) {
          const radius = baseRadius - r * RING_SPACING;
          if (radius <= 0 || radius > MAX_RADIUS) continue;

          // Smooth exponential fade
          const radiusFade = Math.exp(-radius / (MAX_RADIUS * 0.4));
          const ringFade = Math.exp(-r * 0.25);
          let opacity = radiusFade * ringFade * drop.strength * 0.22;

          // Additive interference: boost opacity where other drops' wavefronts overlap
          for (let e = 0; e < drops.length; e++) {
            if (e === d) continue;
            const other = drops[e];
            const otherAge = (elapsed - other.startTime) / 1000;
            const otherWavefront = otherAge * RIPPLE_SPEED;

            const dx = drop.x - other.x;
            const dy = drop.y - other.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Check if any of the other drop's rings are near this radius from this drop's center
            for (let or2 = 0; or2 < RING_COUNT; or2++) {
              const otherRing = otherWavefront - or2 * RING_SPACING;
              if (otherRing <= 0) continue;

              // Distance from other drop center to a point on this ring at closest approach
              const overlap = Math.abs(dist - otherRing - radius);
              if (overlap < 8) {
                const boost = (1 - overlap / 8) * other.strength * 0.06;
                opacity += boost;
              }
            }
          }

          if (opacity < 0.005) continue;
          opacity = Math.min(opacity, 0.25);

          ctx!.beginPath();
          ctx!.arc(drop.x, drop.y, radius, 0, Math.PI * 2);
          ctx!.strokeStyle = `rgba(26, 26, 26, ${opacity})`;
          ctx!.lineWidth = LINE_WIDTH;
          ctx!.stroke();
        }
      }

      // Remove dead drops
      dropsRef.current = drops.filter((drop) => {
        const age = (elapsed - drop.startTime) / 1000;
        const baseRadius = age * RIPPLE_SPEED;
        return baseRadius - RING_COUNT * RING_SPACING <= MAX_RADIUS;
      });

      frameRef.current = requestAnimationFrame(animate);
    }

    // Initial drops
    spawnDrop(0, w, h);
    setTimeout(() => spawnDrop(200, w, h), 200);
    setTimeout(() => spawnDrop(500, w, h), 500);

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [spawnDrop]);

  return (
    <div className="absolute inset-0 z-0">
      <canvas ref={canvasRef} className="w-full h-full" aria-hidden="true" />
    </div>
  );
}
