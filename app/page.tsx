"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";

import SmoothProvider from "@/components/SmoothProvider";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import TextReveal from "@/components/TextReveal";
import StickyShowcase from "@/components/StickyShowcase";
import ParallaxScroll from "@/components/ParallaxScroll";

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

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 gridbg opacity-40" />
        <div ref={orb1} className="blob absolute -left-24 top-10 h-72 w-72 rounded-full bg-fuchsia-500/40" />
        <div ref={orb2} className="blob absolute right-0 top-36 h-96 w-96 rounded-full bg-cyan-400/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-zinc-950 to-zinc-950" />
      </div>

      {/* HERO */}
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
              Smooth • Modern • Cinematic • Transitions
            </motion.p>

            <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
              <TextReveal text="Build a " />
              <TextReveal
                text="premium landing"
                className="bg-gradient-to-r from-fuchsia-400 to-cyan-300 text-transparent bg-clip-text"
                delay={0.15}
              />
              <TextReveal text=" that feels expensive." delay={0.25} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
              className="mt-5 max-w-2xl text-white/70"
            >
              Sekarang sudah lengkap: page transitions, sticky cinematic section, dan GSAP parallax scroll.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <MagneticButton className="rounded-full bg-white text-black px-6 py-3 font-semibold">
                Start Project
              </MagneticButton>

              <a
                data-magnetic
                href="#sticky"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition text-center"
              >
                Sticky Section
              </a>

              <Link
                data-magnetic
                href="/about"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition text-center"
              >
                About (transition)
              </Link>
            </motion.div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3">
              {["Route transitions", "Sticky cinematic", "GSAP parallax"].map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.55 + i * 0.08 }}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/70"
                >
                  <span className="text-white font-semibold">{t}</span>
                  <div className="mt-1">Halus, smooth, dan kelihatan mahal</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-20 -bottom-24 h-72 w-72 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute left-10 bottom-10 h-40 w-40 rounded-full bg-fuchsia-400/10 blur-2xl" />
          </div>
        </div>

        {/* WORK */}
        <section id="work" className="mt-16">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold">Selected Work</h2>
          </Reveal>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {["Neon Commerce", "Orbit Studio"].map((name, i) => (
              <Reveal key={name} delay={i * 0.08}>
                <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">{name}</div>
                    <div className="text-white/50 text-sm">2026</div>
                  </div>
                  <p className="mt-3 text-white/70">
                    Landing page dengan animasi halus, CTA kuat, dan layout rapi.
                  </p>
                  <div className="mt-5 h-[140px] rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0" />
                  <div className="mt-4 text-sm text-white/60 group-hover:text-white transition">
                    View case study →
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="mt-16">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold">Features</h2>
          </Reveal>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                  <div className="text-lg font-semibold">{c.title}</div>
                  <p className="mt-2 text-white/70">{c.desc}</p>
                  <div className="mt-5 h-10 w-10 rounded-2xl border border-white/10 bg-white/5" />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* NEW: STICKY CINEMATIC */}
        <StickyShowcase />

        {/* NEW: GSAP PARALLAX */}
        <ParallaxScroll />

        {/* PRICING */}
        <section id="pricing" className="mt-16 pb-20">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold">Pricing</h2>
          </Reveal>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {[
              { name: "Starter", price: "Rp0", tag: "Buat latihan" },
              { name: "Pro", price: "Rp49k", tag: "Portfolio serius" },
              { name: "Studio", price: "Rp99k", tag: "Client-ready" },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08}>
                <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                  {p.name === "Pro" && (
                    <div className="absolute -top-3 left-6 rounded-full bg-white text-black px-3 py-1 text-xs font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="text-lg font-semibold">{p.name}</div>
                  <div className="mt-2 text-3xl font-semibold">{p.price}</div>
                  <div className="mt-1 text-white/60 text-sm">{p.tag}</div>

                  <ul className="mt-5 space-y-2 text-white/70 text-sm">
                    <li>• Smooth scrolling</li>
                    <li>• Route transitions</li>
                    <li>• Sticky + GSAP parallax</li>
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
