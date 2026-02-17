"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#features", label: "Features" },
  { href: "/#sticky", label: "Sticky" },
  { href: "/#parallax", label: "Parallax" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
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
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-xl px-4 py-3">
          <Link data-magnetic href="/" className="font-semibold tracking-wide text-black dark:text-white">
            NOVA<span className="text-black/40 dark:text-white/50">.</span>
          </Link>

          <nav className="hidden md:flex gap-6 text-sm text-black/60 dark:text-white/70">
            {links.map((l) => (
              <Link
                key={l.href}
                data-magnetic
                href={l.href}
                className="hover:text-black dark:hover:text-white transition"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              data-magnetic
              href="/#pricing"
              className="rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
            >
              Get Started
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
