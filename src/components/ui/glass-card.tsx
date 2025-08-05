"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlassCard({ children, className = "", delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`relative ${className}`}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-sm rounded-lg border border-white/20"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
      />
      <Card className="relative bg-white/10 backdrop-blur-md border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
        {children}
      </Card>
    </motion.div>
  );
} 