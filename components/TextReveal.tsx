"use client";

import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  delay?: number;
};

export default function TextReveal({ text, className = "", delay = 0 }: Props) {
  const letters = Array.from(text);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.02,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
      aria-label={text}
      role="text"
    >
      {letters.map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          variants={child}
          className="inline-block"
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </motion.span>
  );
}
