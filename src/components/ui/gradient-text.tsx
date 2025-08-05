"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}

export function GradientText({ children, className = "", animate = true }: GradientTextProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={animate ? { opacity: 0, y: 20 } : false}
      animate={animate ? { opacity: 1, y: 0 } : false}
      transition={{ duration: 0.8 }}
    >
      <motion.span
        className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent"
        animate={
          animate
            ? {
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }
            : {}
        }
        transition={
          animate
            ? {
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }
            : {}
        }
      >
        {children}
      </motion.span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-violet-600/20 to-purple-600/20 blur-xl -z-10"
        animate={
          animate
            ? {
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }
            : {}
        }
        transition={
          animate
            ? {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : {}
        }
      />
    </motion.div>
  );
} 