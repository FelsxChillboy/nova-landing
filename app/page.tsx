"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

import SmoothProvider from "@/components/SmoothProvider";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

const cards = [
  { title: "Glass UI", desc: "Blur + border halus, modern banget." },
  { title: "Reveal on Scroll", desc: "Elemen muncul smooth saat discroll." },
  { title: "Parallax", desc: "Depth effect biar terasa premium." },
];

export default function Page() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const orb1 = useRef<HTMLDivElement | null>(null);
  const orb2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const nx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const ny = (e.clientY - (r.top + r.height / 2)) / r.height;

      gsap.to(orb1.current, { x: nx * 40, y: ny * 40, duration: 0.6, ease: "power3.out" });
      gsap.to(orb2.current, { x: nx * -55, y: ny * -55, duration: 0.6, ease: "power3.out" });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <SmoothProvider>
      <Nav />

      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 gridbg opacity-40" />
        <div ref={orb1} className="blob absolute -left-24 top-10 h-72 w-72 rounded-full bg-fuchsia-500/40" />
        <div ref={orb2} className="blob absolute right-0 top-36 h-96 w-96 rounded-full bg-cyan-400/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-zinc-950 to-zinc-950" />
      </div>

      <main className="mx-auto max-w-6xl px-4 pt-28">
        <div ref={heroRef} className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="p-8 md:p-14">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Smooth • Modern • Animated
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
              className="mt-6 text-4xl md:text-6xl font-semibold leading-tight"
            >
              Build a{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-300 text-transparent bg-clip-text">
                premium landing
              </span>{" "}
              that feels expensive.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
              className="mt-5 max-w-2xl text-white/70"
            >
              Starter template Next.js + Tailwind + Framer Motion + Lenis + GSAP.
              Animasi halus, reveal on scroll, parallax, dan micro-interactions.
            </motion.p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <MagneticButton className="rounded-full bg-white text-black px-6 py-3 font-semibold">
                Start Project
              </MagneticButton>

              <a
                href="#features"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition text-center"
              >
                See Features
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3">
              {["60fps feel", "Modern UI", "Easy to extend"].map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.18 + i * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/70"
                >
                  <span className="text-white font-semibold">{t}</span>
                  <div className="mt-1">Polished motion + smooth scroll</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div classNametext-black px-3 py-1 text-xs font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="text-lg font-semibold">{p.name}</div>
                  <div className="mt-2 text-3xl font-semibold">{p.price}</div>
                  <div className="mt-1 text-white/60 text-sm">{p.tag}</div>

                  <ul className="mt-5 space-y-2 text-white/70 text-sm">
                    <li>• Smooth scrolling</li>
                    <li>• Reveal animations</li>
                    <li>• Glass + gradients</li>
                  </ul>

                  <MagneticButton className="mt-6 w-full rounded-2xl bg-white text-black px-5 py-3 font-semibold">
                    Choose {p.name}
                  </MagneticButton>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <footer className="mt-12 text-center text-white/50 text-sm">
              © {new Date().getFullYear()} NOVA. Built with Next.js + Motion.
            </footer>
          </Reveal>
        </section>
      </main>
    </SmoothProvider>
  );
}
