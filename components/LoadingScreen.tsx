"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const KEY = "nova_intro_seen";

export default function LoadingScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // show only once per tab/session
    const seen = sessionStorage.getItem(KEY);
    if (seen) {
      setShow(false);
      return;
    }

    setShow(true);
    sessionStorage.setItem(KEY, "1");

    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-black text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <div className="w-full max-w-md px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl font-semibold tracking-wide"
            >
              NOVA<span className="text-white/50">.</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-3 text-white/60 text-sm"
            >
              Loading experience…
            </motion.p>

            <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-white"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>

            <motion.div
              className="mt-10 text-xs text-white/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              Smooth • Modern • Cinematic
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
