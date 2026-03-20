"use client";

import { useEffect, useRef, useCallback } from "react";

function getConfig(width: number) {
  const mobile = width < 768;
  return {
    maxDrops: mobile ? 8 : 20,
    dropIntervalMin: mobile ? 900 : 500,
    dropIntervalMax: mobile ? 2200 : 1500,
    rippleSpeed: 70,
    maxRadius: mobile ? 250 : 400,
    ringSpacing: 18,
    ringCount: mobile ? 8 : 14,
    lineWidth: 0.7,
  };
}

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

  const configRef = useRef(getConfig(0));

  const spawnDrop = useCallback((time: number, w: number, h: number) => {
    dropsRef.current.push({
      x: Math.random() * w,
      y: Math.random() * h,
      startTime: time,
      strength: 0.5 + Math.random() * 0.5,
    });
    if (dropsRef.current.length > configRef.current.maxDrops) {
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
      configRef.current = getConfig(w);
    }

    resize();
    window.addEventListener("resize", resize);

    function animate(timestamp: number) {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;

      const cfg = configRef.current;

      // Spawn drops
      if (elapsed >= nextDropRef.current) {
        spawnDrop(elapsed, w, h);
        nextDropRef.current =
          elapsed + cfg.dropIntervalMin + Math.random() * (cfg.dropIntervalMax - cfg.dropIntervalMin);
      }

      ctx!.clearRect(0, 0, w, h);

      const drops = dropsRef.current;

      for (let d = 0; d < drops.length; d++) {
        const drop = drops[d];
        const age = (elapsed - drop.startTime) / 1000;
        const baseRadius = age * cfg.rippleSpeed;

        if (baseRadius - cfg.ringCount * cfg.ringSpacing > cfg.maxRadius) continue;

        for (let r = 0; r < cfg.ringCount; r++) {
          const radius = baseRadius - r * cfg.ringSpacing;
          if (radius <= 0 || radius > cfg.maxRadius) continue;

          // Smooth exponential fade
          const radiusFade = Math.exp(-radius / (cfg.maxRadius * 0.4));
          const ringFade = Math.exp(-r * 0.25);
          let opacity = radiusFade * ringFade * drop.strength * 0.22;

          // Additive interference: boost opacity where other drops' wavefronts overlap
          for (let e = 0; e < drops.length; e++) {
            if (e === d) continue;
            const other = drops[e];
            const otherAge = (elapsed - other.startTime) / 1000;
            const otherWavefront = otherAge * cfg.rippleSpeed;

            const dx = drop.x - other.x;
            const dy = drop.y - other.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            for (let or2 = 0; or2 < cfg.ringCount; or2++) {
              const otherRing = otherWavefront - or2 * cfg.ringSpacing;
              if (otherRing <= 0) continue;

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
          ctx!.lineWidth = cfg.lineWidth;
          ctx!.stroke();
        }
      }

      // Remove dead drops
      dropsRef.current = drops.filter((drop) => {
        const age = (elapsed - drop.startTime) / 1000;
        const baseRadius = age * cfg.rippleSpeed;
        return baseRadius - cfg.ringCount * cfg.ringSpacing <= cfg.maxRadius;
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
