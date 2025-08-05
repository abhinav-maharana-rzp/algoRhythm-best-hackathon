"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface GlowingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function GlowingButton({ children, onClick, className = "" }: GlowingButtonProps) {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glowing background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 rounded-full blur-lg opacity-75"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.75, 0.5, 0.75],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Button */}
      <Button
        onClick={onClick}
        size="lg"
        className="relative bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 font-bold tracking-wide"
      >
        <span className="text-white font-semibold drop-shadow-sm">
          {children}
        </span>
        <motion.div
          animate={{
            x: [0, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowRight className="ml-2 h-5 w-5" />
        </motion.div>
      </Button>
    </motion.div>
  );
} 