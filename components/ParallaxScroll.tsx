"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function ParallaxScroll() {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-parallax]");

      items.forEach((el) => {
        const speed = Number(el.dataset.speed ?? "0.25");
        gsap.fromTo(
          el,
          { y: -60 * speed },
          {
            y: 60 * speed,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="mt-16" id="parallax">
      <div ref={root} className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Scroll Parallax (GSAP)</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              Ini parallax beneran: elemen bergerak beda speed saat kamu scroll.
            </p>
          </div>
          <div className="hidden md:block text-white/50 text-sm">Scrub on scroll</div>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
            <div data-parallax data-speed="0.35" className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-cyan-400/25 blur-2xl" />
            <div data-parallax data-speed="0.18" className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="relative">
              <div className="text-lg font-semibold">Depth Card</div>
              <p className="mt-2 text-white/70 text-sm">
                Blob-nya bergerak beda speed, jadi terasa “depth”.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
            <div data-parallax data-speed="0.50" className="absolute -top-12 left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div data-parallax data-speed="0.22" className="absolute -bottom-14 -right-10 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="relative">
              <div className="text-lg font-semibold">Smooth Scrub</div>
              <p className="mt-2 text-white/70 text-sm">
                ScrollTrigger + scrub bikin animasi ngikut scroll halus.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
            <div data-parallax data-speed="0.40" className="absolute top-10 -left-10 h-44 w-44 rounded-full bg-fuchsia-500/18 blur-2xl" />
            <div data-parallax data-speed="0.16" className="absolute -bottom-16 left-10 h-64 w-64 rounded-full bg-white/8 blur-3xl" />
            <div className="relative">
              <div className="text-lg font-semibold">Premium Feel</div>
              <p className="mt-2 text-white/70 text-sm">
                Dipakai di landing page kelas atas biar “mahal”.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
