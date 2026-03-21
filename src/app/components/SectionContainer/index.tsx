"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useSectionContext } from "@/app/context/SectionContext";

interface Props {
  children: ReactNode[];
}

const TRANSITION_MS = 600;
const COOLDOWN_MS = 900;
const WHEEL_THRESHOLD = 30;
const TOUCH_THRESHOLD = 50;
const SCROLL_EDGE_TOLERANCE = 2; // px tolerance for detecting scroll boundaries

export default function SectionContainer({ children }: Props) {
  const { currentSection, goToSection, totalSections } = useSectionContext();

  const currentRef = useRef(currentSection);
  const totalRef = useRef(totalSections);
  const isTransitioning = useRef(false);
  const wheelAccumulator = useRef(0);
  const wheelTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);
  const goToSectionRef = useRef(goToSection);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  currentRef.current = currentSection;
  totalRef.current = totalSections;
  goToSectionRef.current = goToSection;

  function getCurrentSectionEl() {
    return sectionRefs.current[currentRef.current] ?? null;
  }

  function isAtScrollTop(el: HTMLElement) {
    return el.scrollTop <= SCROLL_EDGE_TOLERANCE;
  }

  function isAtScrollBottom(el: HTMLElement) {
    return el.scrollTop + el.clientHeight >= el.scrollHeight - SCROLL_EDGE_TOLERANCE;
  }

  function canSectionScroll(el: HTMLElement) {
    return el.scrollHeight > el.clientHeight + SCROLL_EDGE_TOLERANCE;
  }

  function shouldNavigate(direction: "up" | "down"): boolean {
    const el = getCurrentSectionEl();
    if (!el || !canSectionScroll(el)) return true;

    if (direction === "down") return isAtScrollBottom(el);
    return isAtScrollTop(el);
  }

  useEffect(() => {
    function navigate(direction: "up" | "down") {
      if (isTransitioning.current) return;
      if (!shouldNavigate(direction)) return;

      const cur = currentRef.current;
      const total = totalRef.current;
      const next =
        direction === "down"
          ? Math.min(cur + 1, total - 1)
          : Math.max(cur - 1, 0);

      if (next !== cur) {
        isTransitioning.current = true;
        wheelAccumulator.current = 0;
        goToSectionRef.current(next);
        setTimeout(() => {
          isTransitioning.current = false;
          wheelAccumulator.current = 0;
        }, COOLDOWN_MS);
      }
    }

    function handleWheel(e: WheelEvent) {
      const el = getCurrentSectionEl();
      const direction = e.deltaY > 0 ? "down" : "up";

      // If the section has scrollable content and isn't at the edge, let it scroll naturally
      if (el && canSectionScroll(el) && !shouldNavigate(direction)) {
        return;
      }

      e.preventDefault();
      if (isTransitioning.current) return;

      wheelAccumulator.current += e.deltaY;

      if (wheelTimeout.current) clearTimeout(wheelTimeout.current);
      wheelTimeout.current = setTimeout(() => {
        wheelAccumulator.current = 0;
      }, 150);

      if (Math.abs(wheelAccumulator.current) >= WHEEL_THRESHOLD) {
        const dir = wheelAccumulator.current > 0 ? "down" : "up";
        navigate(dir);
      }
    }

    function handleTouchStart(e: TouchEvent) {
      touchStartY.current = e.touches[0].clientY;
      touchStartX.current = e.touches[0].clientX;
    }

    function handleTouchEnd(e: TouchEvent) {
      if (isTransitioning.current) return;
      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      const deltaX = touchStartX.current - e.changedTouches[0].clientX;

      if (Math.abs(deltaY) < TOUCH_THRESHOLD || Math.abs(deltaY) < Math.abs(deltaX)) {
        return;
      }

      navigate(deltaY > 0 ? "down" : "up");
    }

    function handleKeyDown(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      let direction: "up" | "down" | null = null;
      switch (e.key) {
        case "ArrowDown":
        case "PageDown":
          direction = "down";
          break;
        case "ArrowUp":
        case "PageUp":
          direction = "up";
          break;
        case " ":
          direction = e.shiftKey ? "up" : "down";
          break;
        default:
          return;
      }

      if (!shouldNavigate(direction)) return;

      e.preventDefault();
      navigate(direction);
    }

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
      if (wheelTimeout.current) clearTimeout(wheelTimeout.current);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div
        style={{
          transform: `translateY(-${currentSection * 100}vh)`,
          transition: `transform ${TRANSITION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
          willChange: "transform",
        }}
      >
        {(children as ReactNode[]).map((child, i) => (
          <div
            key={i}
            ref={(el) => { sectionRefs.current[i] = el; }}
            className="h-screen overflow-y-auto"
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
