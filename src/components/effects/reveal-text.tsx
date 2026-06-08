"use client";

import { motion } from "framer-motion";

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export default function RevealText({
  children,
  className = "",
  delay = 0,
  as: Tag = "p",
}: RevealTextProps) {
  return (
    <Tag className={`relative overflow-hidden ${className}`}>
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </Tag>
  );
}