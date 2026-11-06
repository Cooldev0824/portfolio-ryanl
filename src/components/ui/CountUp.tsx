"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts the numeric part of a value like "9+" or "10+" up from zero when it scrolls into view.
 * The final value is rendered on the server, so it is correct without JS and for reduced motion.
 */
export function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!match || !el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const target = Number(match[1]);
    const suffix = match[2];
    let frame = 0;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / 1400);
        const eased = 1 - Math.pow(1 - t, 3);
        setShown(`${Math.round(target * eased)}${suffix}`);
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      setShown(`0${suffix}`);
      frame = requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {shown}
    </span>
  );
}
