"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import LogoMark from "@/components/ui/logo-mark";

const navLinks = [
  { label: "ホーム", href: "/" },
  { label: "ブログ", href: "/blog" },
  { label: "アニメ", href: "/anime" },
  { label: "レビュー", href: "/reviews" },
  { label: "私たち", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const isDarkPage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavbarStyles = () => {
    if (isDarkPage) {
      return isScrolled
        ? "bg-[#0B0B0F]/90 backdrop-blur-md py-4 border-b border-white/5 text-white"
        : "bg-transparent py-6 text-white";
    }

    return isScrolled
      ? "bg-white/90 backdrop-blur-md py-4 border-b border-black/5 text-[#0B0B0F]"
      : "bg-white py-6 border-b border-black/5 text-[#0B0B0F]";
  };

  const getActiveLinkStyle = (href: string) => {
    const isActive = pathname
      ? pathname === href || (href !== "/" && pathname.startsWith(href))
      : false;

    if (isDarkPage) {
      return isActive ? "text-[#FF6FAE] font-medium" : "text-white/60";
    }

    return isActive ? "text-[#FF6FAE] font-medium" : "text-black/60";
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavbarStyles()}`}>
        <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
          <Link href="/" className="relative z-10 flex items-center gap-2.5 group">
            <LogoMark className="w-6 h-6 shrink-0 transition-colors duration-300 group-hover:text-[#FF6FAE]" />
            <span className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-widest font-serif">
                NEUROBLASTISM
              </span>
              <span className={`text-[8px] tracking-[0.2em] font-mono mt-0.5 transition-colors duration-300 ${isDarkPage ? "text-white/30" : "text-black/30"}`}>
                ニューロブラステイズム
              </span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-xs tracking-widest uppercase transition-colors duration-300 ${getActiveLinkStyle(link.href)}`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#FF6FAE]"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              className={`p-2 transition-colors duration-300 ${isDarkPage ? "text-white/60 hover:text-white" : "text-black/60 hover:text-black"}`}
              aria-label="検索"
            >
              <Search size={16} />
            </button>

            <button
              className={`md:hidden p-2 transition-colors duration-300 ${isDarkPage ? "text-white/60 hover:text-white" : "text-black/60 hover:text-black"}`}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="メニューを切り替える"
            >
              {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-x-0 top-0 bottom-0 z-40 flex flex-col pt-24 px-8 ${
              isDarkPage ? "bg-[#0B0B0F] text-white" : "bg-white text-black"
            }`}
          >
            <div className="flex flex-col items-center gap-8 py-8 border-t border-black/5 mt-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-xl font-serif tracking-widest uppercase hover:text-[#FF6FAE] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
