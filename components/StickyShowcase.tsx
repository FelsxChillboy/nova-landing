"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { k: "01", title: "Design System", desc: "Grid rapi, spacing konsisten, dan hierarchy jelas." },
  { k: "02", title: "Motion Layer", desc: "Reveal, hover micro-interactions, dan easing halus." },
  { k: "03", title: "Premium Finish", desc: "Glow, glass, parallax, dan detail yang bikin mahal." },
];

export default function StickyShowcase() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const idx = useTransform(scrollYProgress, [0, 1], [0, steps.length - 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1.02]);
  const glow = useTransform(scrollYProgress, [0, 1], [0.12, 0.28]);

  return (
    <section className="mt-16" id="sticky">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Sticky Cinematic Section</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              Scroll pelan: panel kanan “nempel”, kontennya berubah halus mengikuti progress scroll.
            </p>
          </div>
          <div className="hidden md:block text-white/50 text-sm">Scroll ↓</div>
        </div>

        <div ref={ref} className="mt-8 grid md:grid-cols-2 gap-6">
          {/* Left: long content to create scroll length */}
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.k} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-white/50 text-sm">{s.k}</div>
                <div className="mt-2 text-xl font-semibold">{s.title}</div>
                <p className="mt-2 text-white/70">{s.desc}</p>
              </div>
            ))}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-white/50 text-sm">Tip</div>
              <p className="mt-2 text-white/70">
                Sticky section ini cocok buat: “How it works”, “Process”, atau “Features deep-dive”.
              </p>
            </div>
          </div>

          {/* Right: sticky panel */}
          <div className="md:sticky md:top-28 h-fit">
            <motion.div
              style={{ scale }}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-7"
            >
              <motion.div
                style={{ opacity: glow }}
                className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/40 blur-3xl"
              />
              <motion.div
                style={{ opacity: glow }}
                className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-fuchsia-500/35 blur-3xl"
              />

              <div className="text-white/60 text-sm">Progress</div>
              <div className="mt-2 text-3xl font-semibold">Premium Flow</div>

              <motion.div className="mt-6 space-y-4">
                {steps.map((s, i) => (
                  <motion.div
                    key={s.k}
                    style={{
                      opacity: useTransform(idx, [i - 0.5, i, i + 0.5], [0.35, 1, 0.35]),
                      y: useTransform(idx, [i - 0.5, i, i + 0.5], [10, 0, -10]),
                    }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="text-white/50 text-xs">{s.k}</div>
                    <div className="mt-1 font-semibold">{s.title}</div>
                    <div className="mt-1 text-sm text-white/70">{s.desc}</div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-6 text-sm text-white/60">
                Feel-nya kayak website product modern: halus, fokus, dan berlapis.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
