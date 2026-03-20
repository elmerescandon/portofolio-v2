"use client";

import { useState, useEffect, useRef } from "react";
import BauhausWaves from "../BauhausWaves";
import RaindropEffect from "../RaindropEffect";

export type AnimationMode = "waves" | "rain";

interface Props {
  children: React.ReactNode;
  isVisible?: boolean;
}

export default function BackgroundEffect({ children, isVisible = true }: Props) {
  const [mode, setMode] = useState<AnimationMode>("waves");
  // Delay unmounting so animation stays visible during the scroll transition
  const [shouldRender, setShouldRender] = useState(isVisible);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (isVisible) {
      // Mount immediately when becoming visible
      setShouldRender(true);
    } else {
      // Delay unmount by the transition duration so animation is visible while sliding away
      timeoutRef.current = setTimeout(() => {
        setShouldRender(false);
      }, 700);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isVisible]);

  const toggle = () => {
    setMode((m) => (m === "waves" ? "rain" : "waves"));
  };

  return (
    <>
      {shouldRender && (mode === "waves" ? <BauhausWaves /> : <RaindropEffect />)}

      {isVisible && (
        <button
          onClick={toggle}
          className="fixed top-4 left-4 md:left-6 z-[60] font-sans text-[10px] md:text-xs font-bold lowercase tracking-[0.2em] px-3 md:px-4 py-2 bg-foreground/80 backdrop-blur-sm text-background hover:bg-foreground transition-colors"
          aria-label="Toggle background animation"
        >
          {mode === "waves" ? "rain" : "waves"}
        </button>
      )}

      <div className="relative z-10 flex flex-col items-center">
        <div className={`px-8 py-6 transition-all duration-300 ${mode === "waves" ? "bg-background/80 backdrop-blur-sm" : ""}`}>
          {children}
        </div>
      </div>
    </>
  );
}
