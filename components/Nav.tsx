"use client";

import { motion } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3">
          <a data-magnetic href="#" className="font-semibold tracking-wide">
            NOVA<span className="text-white/50">.</span>
          </a>

          <nav className="hidden md:flex gap-6 text-sm text-white/70">
            {links.map((l) => (
              <a
                key={l.href}
                data-magnetic
                href={l.href}
                className="hover:text-white transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            data-magnetic
            href="#pricing"
            className="rounded-full bg-white text-black px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </motion.header>
  );
}
