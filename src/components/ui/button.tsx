"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-full overflow-hidden";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantStyles = {
    primary:
      "bg-sakura text-black hover:bg-sakura-dark hover:shadow-lg hover:shadow-sakura/20",
    secondary:
      "bg-violet text-white hover:bg-violet-dark hover:shadow-lg hover:shadow-violet/20",
    outline:
      "border border-white/10 text-white hover:bg-white/5 hover:border-white/20",
    ghost: "text-white/60 hover:text-white hover:bg-white/5",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}