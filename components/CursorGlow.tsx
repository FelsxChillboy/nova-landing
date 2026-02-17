"use client";

import { useEffect, useRef, useState } from "react";

type Vec2 = { x: number; y: number };

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const target = useRef<Vec2>({ x: 0, y: 0 });
  const dot = useRef<Vec2>({ x: 0, y: 0 });
  const ring = useRef<Vec2>({ x: 0, y: 0 });

  const raf = useRef<number>(0);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // only enable on fine pointer devices
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const onDown = () => {
      ringRef.current?.classList.add("cursor--down");
      dotRef.current?.classList.add("cursor--down");
    };
    const onUp = () => {
      ringRef.current?.classList.remove("cursor--down");
      dotRef.current?.classList.remove("cursor--down");
    };

    const tick = () => {
      // dot follows faster
      dot.current.x += (target.current.x - dot.current.x) * 0.35;
      dot.current.y += (target.current.y - dot.current.y) * 0.35;

      // ring follows slower (trailing)
      ring.current.x += (target.current.x - ring.current.x) * 0.12;
      ring.current.y += (target.current.y - ring.current.y) * 0.12;

      const d = dotRef.current;
      const r = ringRef.current;

      if (d) d.style.transform = `translate3d(${dot.current.x}px, ${dot.current.y}px, 0)`;
      if (r) r.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;

      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    raf.current = requestAnimationFrame(tick);

    // Hover detection for magnetic targets
    const onOver = (e: Event) => {
      const el = (e.target as HTMLElement)?.closest?.("[data-magnetic], a, button");
      if (!el) return;
      ringRef.current?.classList.add("cursor--hover");
      dotRef.current?.classList.add("cursor--hover");
    };

    const onOut = () => {
      ringRef.current?.classList.remove("cursor--hover");
      dotRef.current?.classList.remove("cursor--hover");
    };

    document.addEventListener("mouseover", onOver, true);
    document.addEventListener("mouseout", onOut, true);

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver, true);
      document.removeEventListener("mouseout", onOut, true);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={ringRef} className="cursor cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor cursor-dot" aria-hidden="true" />
    </>
  );
}
