"use client";

import { useEffect, useRef } from "react";

const LINE_COUNT = 40;
const VIEW_HEIGHT = 1000;
const VIEW_WIDTH = 1000;
const STEPS = 100;

function buildPaths(time: number): string[] {
  const paths: string[] = [];

  for (let i = 0; i < LINE_COUNT; i++) {
    const baseY = (i / (LINE_COUNT - 1)) * (VIEW_HEIGHT + 160) - 80;
    const points: string[] = [];

    for (let j = 0; j <= STEPS; j++) {
      const x = (j / STEPS) * VIEW_WIDTH;
      const t = (x * Math.PI) / VIEW_WIDTH;

      // Each line gets a slightly different time offset for a ripple effect
      const linePhase = i * 0.08;
      const dy =
        50 * Math.sin(2.0 * t + 0.5 + time * 0.3 + linePhase) +
        20 * Math.sin(3.6 * t + 1.2 - time * 0.2 + linePhase * 0.7) +
        10 * Math.sin(5.8 * t + 2.0 + time * 0.15 + linePhase * 0.5);

      const y = baseY + dy;
      points.push(`${j === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`);
    }

    paths.push(points.join(" "));
  }

  return paths;
}

export default function BauhausWaves() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    let start: number | null = null;

    function animate(timestamp: number) {
      if (!start) start = timestamp;
      const elapsed = (timestamp - start) / 1000;
      const paths = buildPaths(elapsed);

      for (let i = 0; i < paths.length; i++) {
        pathRefs.current[i]?.setAttribute("d", paths[i]);
      }

      frameRef.current = requestAnimationFrame(animate);
    }

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  // Initial static paths for SSR
  const initialPaths = buildPaths(0);

  return (
    <div className="absolute inset-0 z-0">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        aria-hidden="true"
      >
        {initialPaths.map((d, i) => (
          <path
            key={i}
            ref={(el) => { pathRefs.current[i] = el; }}
            d={d}
            fill="none"
            stroke="var(--foreground)"
            strokeWidth="1.5"
            opacity="0.3"
          />
        ))}
      </svg>
    </div>
  );
}
