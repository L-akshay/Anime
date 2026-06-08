"use client";

import { useMousePosition } from "@/hooks/use-mouse-position";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="cursor-glow"
      style={{ left: x, top: y }}
      animate={{ left: x, top: y }}
      transition={{ type: "spring", stiffness: 100, damping: 30, mass: 0.5 }}
    />
  );
}