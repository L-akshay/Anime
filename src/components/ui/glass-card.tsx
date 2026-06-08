"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass rounded-2xl p-6 md:p-8",
        hover && "hover:border-white/20 transition-all duration-500",
        className
      )}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow: "0 20px 60px rgba(124, 58, 237, 0.1)",
            }
          : {}
      }
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}