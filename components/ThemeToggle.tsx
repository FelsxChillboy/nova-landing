"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <motion.button
      data-magnetic
      onClick={() => setTheme(isDark ? "light" : "dark")}
      whileTap={{ scale: 0.95 }}
      className="rounded-full border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/5 backdrop-blur-xl px-4 py-2 text-sm font-semibold text-black/70 dark:text-white/80 hover:bg-black/10 dark:hover:bg-white/10 transition"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {isDark ? "☾ Dark" : "☀ Light"}
    </motion.button>
  );
}
