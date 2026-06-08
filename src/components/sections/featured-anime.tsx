"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { animeEntries } from "@/data/anime-entries";

export default function FeaturedAnime() {
  const featured = animeEntries.find((a) => a.slug === "violet-evergarden") || animeEntries[0];

  return (
    <section className="relative bg-[#0B0B0F] text-white py-24 overflow-hidden border-b border-white/5">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none mix-blend-screen"
        style={{ backgroundImage: `url('/Footer.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0F] via-transparent to-[#0B0B0F] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black/40 border border-white/10 rounded-lg p-8 md:p-12 backdrop-blur-md">
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            <span className="text-[10px] tracking-[0.3em] font-mono text-[#FF6FAE] uppercase mb-4">
              注目のアニメ
            </span>

            <h2 className="text-4xl md:text-5xl font-bold font-serif tracking-tight leading-tight mb-4 text-white">
              {featured.title}
            </h2>

            <p className="text-[#9A9AA6] text-sm md:text-base font-light mb-8 max-w-sm leading-relaxed">
              心を癒しながら、同じ場所をそっと壊していく物語。
            </p>

            <Link
              href={`/anime/${featured.slug}`}
              className="group inline-flex items-center gap-2 self-start px-6 py-2.5 border border-white/20 text-white font-medium text-[10px] tracking-widest uppercase hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            >
              <span>詳細を見る</span>
              <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="lg:col-span-4 flex justify-center items-center my-6 lg:my-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[280px] aspect-[3/4] rounded-md overflow-hidden border border-white/10 group shadow-lg"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${featured.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

          <div className="lg:col-span-3 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8 font-mono text-xs text-[#9A9AA6] space-y-5">
            <div className="pb-3 border-b border-white/5">
              <span className="text-white/30 block mb-1 uppercase tracking-widest text-[9px]">形式</span>
              <span className="text-white font-medium">テレビシリーズ</span>
            </div>
            <div className="pb-3 border-b border-white/5">
              <span className="text-white/30 block mb-1 uppercase tracking-widest text-[9px]">話数</span>
              <span className="text-white font-medium">{featured.episodes}</span>
            </div>
            <div className="pb-3 border-b border-white/5">
              <span className="text-white/30 block mb-1 uppercase tracking-widest text-[9px]">制作</span>
              <span className="text-white font-medium">{featured.studio}</span>
            </div>
            <div>
              <span className="text-white/30 block mb-1 uppercase tracking-widest text-[9px]">ジャンル</span>
              <span className="text-white font-medium">{featured.genre.slice(0, 2).join("、")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
