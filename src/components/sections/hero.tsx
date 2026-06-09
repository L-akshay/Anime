"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaXTwitter, FaInstagram, FaDiscord } from "react-icons/fa6";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Subtle parallax transform for the image
  const yParallax = useTransform(scrollY, [0, 500], [0, 80]);
  // Headline drifts up gently and fades as the user scrolls
  const yContent = useTransform(scrollY, [0, 500], [0, -60]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Falling sakura (cherry-blossom) petals — fixed seeds so SSR/CSR match
  const petals = useMemo(
    () =>
      [
        { left: "8%", size: 14, delay: 0, duration: 11, drift: 40, hue: "#FF6FAE" },
        { left: "20%", size: 10, delay: 3.5, duration: 14, drift: -30, hue: "#ff9ccb" },
        { left: "33%", size: 16, delay: 1.5, duration: 12, drift: 55, hue: "#FF6FAE" },
        { left: "47%", size: 9, delay: 6, duration: 15, drift: -45, hue: "#ffc2dd" },
        { left: "61%", size: 13, delay: 2.2, duration: 13, drift: 35, hue: "#FF6FAE" },
        { left: "74%", size: 11, delay: 5, duration: 16, drift: -25, hue: "#ff9ccb" },
        { left: "88%", size: 15, delay: 0.8, duration: 12.5, drift: 50, hue: "#FF6FAE" },
        { left: "95%", size: 8, delay: 4, duration: 17, drift: -40, hue: "#ffc2dd" },
      ] as const,
    []
  );

  // Twinkling "kira" sparkles — reduced to 3 to cut down concurrent Framer Motion loops
  const sparkles = useMemo(
    () =>
      [
        { top: "18%", left: "12%", size: 18, delay: 0 },
        { top: "68%", left: "22%", size: 14, delay: 0.7 },
        { top: "44%", left: "8%", size: 11, delay: 1.1 },
      ] as const,
    []
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#0B0B0F] text-white overflow-hidden border-b border-white/5"
    >
      {/* Ambient gradient glows — give the dark canvas depth and color */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Single combined glow instead of two separate infinite-looping motion.divs */}
        <div
          className="absolute -top-32 -left-32 h-112 w-md rounded-full bg-[#FF6FAE]/20 blur-[120px]"
          style={{ willChange: "auto" }}
        />
        <div
          className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-[#7C5CFF]/20 blur-[120px]"
          style={{ willChange: "auto" }}
        />
      </div>

      {/* Subtle grain / noise overlay for a premium print-like texture */}
      <div
        className="pointer-events-none absolute inset-0 z-1 opacity-[0.04] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Manga speed-lines radiating from behind the headline (left side) */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 z-1 hidden h-[120vh] w-[60vw] -translate-y-1/2 opacity-[0.06] md:block"
        style={{
          backgroundImage:
            "repeating-conic-gradient(from 0deg at 0% 50%, #fff 0deg 0.4deg, transparent 0.4deg 3deg)",
          maskImage:
            "radial-gradient(circle at 0% 50%, #000 0%, transparent 55%)",
          WebkitMaskImage:
            "radial-gradient(circle at 0% 50%, #000 0%, transparent 55%)",
        }}
      />

      {/* Falling sakura petals */}
      <div className="pointer-events-none absolute inset-0 z-2 overflow-hidden">
        {petals.map((p, i) => (
          <motion.span
            key={i}
            className="absolute -top-10"
            style={{ left: p.left }}
            initial={{ y: -40, x: 0, rotate: 0, opacity: 0 }}
            animate={{
              y: ["-5vh", "105vh"],
              x: [0, p.drift, 0],
              rotate: [0, 180, 360],
              opacity: [0, 0.9, 0.9, 0],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Petal shape */}
            <svg width={p.size} height={p.size} viewBox="0 0 20 20" fill="none">
              <path
                d="M10 1C12 6 19 7 19 12c0 4-4 7-9 7s-9-3-9-7c0-5 7-6 9-11z"
                fill={p.hue}
                opacity="0.85"
              />
            </svg>
          </motion.span>
        ))}
      </div>

      {/* Twinkling kira sparkles */}
      <div className="pointer-events-none absolute inset-0 z-2">
        {sparkles.map((s, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ top: s.top, left: s.left }}
            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0], rotate: [0, 90, 180] }}
            transition={{
              duration: 2.6,
              delay: s.delay,
              repeat: Infinity,
              repeatDelay: 2.5,
              ease: "easeInOut",
            }}
          >
            <svg width={s.size} height={s.size} viewBox="0 0 24 24" fill="none">
              <path
                d="M12 0c1 6.5 5.5 11 12 12-6.5 1-11 5.5-12 12-1-6.5-5.5-11-12-12C6.5 11 11 6.5 12 0z"
                fill="#fff"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Hero Artwork — large, full-height, bleeding to the right edge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 right-0 h-full w-full lg:w-[60%] z-0"
        style={{ willChange: "opacity" }}
      >
        {/* Parallax image layer — will-change: transform lets browser promote to own layer */}
        <motion.div
          className="absolute -top-16 -bottom-16 left-0 right-0 bg-cover bg-center"
          style={{
            y: yParallax,
            backgroundImage: `url('/hero-image.png')`,
            backgroundPosition: "center 20%",
            willChange: "transform",
          }}
        />
        {/* Left-edge fade so the headline stays legible over the art */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0F] via-[#0B0B0F]/55 to-transparent" />
        {/* Bottom + top vignette to seat the image in the section */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/70 via-transparent to-[#0B0B0F]/30" />

        {/* Slider page numbers, lower-left of the artwork */}
        <div className="absolute bottom-10 left-6 lg:left-10 z-20 flex items-center gap-4 text-xs font-mono tracking-widest text-white/50">
          <span className="text-white text-sm font-semibold">01</span>
          <span className="w-12 h-px bg-white/25" />
          <span>03</span>
        </div>
      </motion.div>

      {/* Left Vertical Border Sidebar - Japanese Text */}
      <div className="absolute left-0 top-0 bottom-0 w-16 border-r border-white/5 flex flex-col items-center justify-between py-10 z-20 bg-[#0B0B0F]/80 backdrop-blur-sm hidden md:flex">
        {/* Hamburger Menu Icon */}
        <button
          className="flex flex-col gap-1.5 group cursor-pointer p-2"
          aria-label="Menu"
        >
          <span className="w-6 h-[2px] bg-white transition-all duration-300 group-hover:w-4" />
          <span className="w-6 h-[2px] bg-white transition-all duration-300" />
          <span className="w-4 h-[2px] bg-white transition-all duration-300 group-hover:w-6" />
        </button>

        {/* Vertical Japanese Text */}
        <div className="flex-1 flex items-center justify-center">
          <p
            className="text-[10px] tracking-[0.4em] text-white/40 font-mono select-none"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            すべての思考は、何かを生み出す。
          </p>
        </div>

        {/* Empty placeholder to balance top icon */}
        <div className="h-6 w-6" />
      </div>

      {/* Main Content Container — block-centered (mirrors Latest Posts), vertical-centered via flex */}
      <motion.div
        style={{ y: yContent, opacity: contentOpacity, willChange: "transform, opacity" }}
        className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 lg:px-24 min-h-screen flex items-center"
      >

        {/* Left Side: Typography Content */}
        <div className="relative max-w-xl flex flex-col justify-center text-left py-32">

          {/* Giant ghosted kanji — 物語 "story" — sits behind the headline */}
          <motion.span
            aria-hidden
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute -left-6 -top-6 -z-10 select-none text-[10rem] font-bold leading-none text-white/[0.04] md:text-[14rem]"
            style={{ writingMode: "vertical-rl" }}
          >
            物語
          </motion.span>

          {/* Eyebrow tag */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6FAE] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FF6FAE]" />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/70">
              アニメ批評ジャーナル
            </span>
          </motion.div>

          {/* Main Title */}
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold font-serif tracking-tight leading-[0.95] flex flex-col"
            >
              <span className="bg-linear-to-br from-white via-white to-white/60 bg-clip-text text-transparent">
                思考。
              </span>
              <span className="mt-1 bg-linear-to-br from-white via-white to-white/60 bg-clip-text text-transparent">
                感情。
              </span>
              <motion.span
                className="mt-1 bg-clip-text text-transparent [text-shadow:0_0_40px_rgba(255,111,174,0.35)] animate-gradient-shift"
                style={{
                  backgroundImage:
                    "linear-gradient(110deg, #FF6FAE 0%, #ff8fc1 25%, #fff 45%, #ff8fc1 60%, #7C5CFF 100%)",
                  backgroundSize: "200% 100%",
                }}
              >
                アニメ。
              </motion.span>
            </motion.h1>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#9A9AA6] max-w-sm mb-10 leading-relaxed font-light"
          >
            アニメと深い思考、生々しい感情、忘れられない物語が出会う場所。
          </motion.p>

          {/* Button CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-5"
          >
            <Link
              href="/blog"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#FF6FAE] px-8 py-3.5 text-xs font-medium uppercase tracking-widest text-white shadow-lg shadow-[#FF6FAE]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF6FAE]/40 hover:-translate-y-0.5"
            >
              {/* Sheen sweep on hover */}
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">ブログを読む</span>
              <ArrowRight size={14} className="relative transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/reviews"
              className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-white/70 transition-colors duration-300 hover:text-white"
            >
              <span>レビューを見る</span>
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Socials floating on the right edge, vertically centered */}
      <div className="absolute right-5 lg:right-8 top-1/2 -translate-y-1/2 flex-col gap-5 items-center z-20 hidden sm:flex">
        <div className="w-px h-14 bg-white/15" />
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 text-white/50 hover:text-[#FF6FAE] transition-colors">
          <FaXTwitter size={15} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 text-white/50 hover:text-[#FF6FAE] transition-colors">
          <FaInstagram size={15} />
        </a>
        <a href="https://discord.com" target="_blank" rel="noreferrer" className="p-2 text-white/50 hover:text-[#FF6FAE] transition-colors">
          <FaDiscord size={15} />
        </a>
        <div className="w-px h-14 bg-white/15" />
      </div>
    </section>
  );
}
