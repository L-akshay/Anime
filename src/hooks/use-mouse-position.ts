"use client";

import { useState, useEffect, useRef } from "react";

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const latest = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      latest.current = { x: e.clientX, y: e.clientY };
      // Only schedule one RAF at a time — prevents setState spam on every mouse pixel
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(() => {
          setPosition({ ...latest.current });
          rafId.current = null;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return position;
}