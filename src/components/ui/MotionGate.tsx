"use client";

import { useEffect } from "react";

/**
 * Marks `[data-motion]` regions with `data-inview` while they are on screen, so CSS can
 * pause their looping animations when they are not (saves main-thread work on long pages).
 */
export function MotionGate() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) e.target.toggleAttribute("data-inview", e.isIntersecting);
    });
    document.querySelectorAll("[data-motion]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
