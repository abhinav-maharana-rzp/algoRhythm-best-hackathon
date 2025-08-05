"use client";

import { motion } from "framer-motion";

export function FloatingElements() {

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating circles */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-indigo-400/30 rounded-full"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-violet-400/40 rounded-full"
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-40 left-20 w-3 h-3 bg-purple-400/50 rounded-full"
        animate={{
          y: [-15, 15, -15],
          x: [-15, 15, -15],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Floating squares */}
      <motion.div
        className="absolute top-60 left-1/4 w-5 h-5 bg-indigo-500/20 rotate-45"
        animate={{
          y: [15, -15, 15],
          rotate: [45, 225, 45],
          scale: [1, 0.7, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      <motion.div
        className="absolute bottom-60 right-1/3 w-4 h-4 bg-violet-500/25 rotate-45"
        animate={{
          y: [-25, 25, -25],
          rotate: [45, -135, 45],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Floating triangles */}
      <motion.div
        className="absolute top-1/3 right-10 w-0 h-0 border-l-[8px] border-l-transparent border-b-[14px] border-b-indigo-400/30 border-r-[8px] border-r-transparent"
        animate={{
          y: [-10, 10, -10],
          x: [5, -5, 5],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-0 h-0 border-l-[6px] border-l-transparent border-b-[10px] border-b-violet-400/35 border-r-[6px] border-r-transparent"
        animate={{
          y: [10, -10, 10],
          x: [-8, 8, -8],
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 7.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </div>
  );
} 