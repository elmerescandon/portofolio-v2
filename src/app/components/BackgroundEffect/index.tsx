"use client";

import { useState } from "react";
import BauhausWaves from "../BauhausWaves";
import RaindropEffect from "../RaindropEffect";

export type AnimationMode = "waves" | "rain";

interface Props {
  children: React.ReactNode;
}

export default function BackgroundEffect({ children }: Props) {
  const [mode, setMode] = useState<AnimationMode>("waves");

  const toggle = () => {
    setMode((m) => (m === "waves" ? "rain" : "waves"));
  };

  return (
    <>
      {mode === "waves" ? <BauhausWaves /> : <RaindropEffect />}

      <button
        onClick={toggle}
        className="fixed top-4 left-4 md:left-6 z-50 font-sans text-[10px] md:text-xs font-bold lowercase tracking-[0.2em] px-3 md:px-4 py-2 bg-foreground/80 backdrop-blur-sm text-background hover:bg-foreground transition-colors"
        aria-label="Toggle background animation"
      >
        {mode === "waves" ? "rain" : "waves"}
      </button>

      <div className="relative z-10 flex flex-col items-center">
        <div className={`px-8 py-6 transition-all duration-300 ${mode === "waves" ? "bg-background/80 backdrop-blur-sm" : ""}`}>
          {children}
        </div>
      </div>
    </>
  );
}
