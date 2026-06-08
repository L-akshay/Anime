"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function AnimatedLink({
  href,
  children,
  className = "",
}: AnimatedLinkProps) {
  return (
    <Link href={href} className={`group relative inline-block ${className}`}>
      <span className="relative">
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-px bg-sakura transition-all duration-300 group-hover:w-full" />
      </span>
    </Link>
  );
}