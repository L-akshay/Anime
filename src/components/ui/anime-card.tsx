"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star } from "lucide-react";
import { AnimeEntry } from "@/types";

interface AnimeCardProps {
  anime: AnimeEntry;
  index?: number;
}

export default function AnimeCard({ anime, index = 0 }: AnimeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative bg-white border border-black/5 rounded-sm p-3 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <Link href={`/anime/${anime.slug}`} className="block">
        {/* Poster Image */}
        <div className="relative overflow-hidden rounded-sm aspect-[3/4] bg-gray-50 border border-black/5 mb-3">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-104 filter grayscale-[5%]"
            style={{
              backgroundImage: `url(${anime.image})`,
            }}
          />
          
          {/* Star Rating Badge (Overlay top-right) */}
          <div className="absolute top-2.5 right-2.5 z-10">
            <div className="flex items-center gap-1 px-2 py-1 bg-black/60 backdrop-blur-md text-[9px] font-mono font-bold rounded-sm text-white">
              <Star size={10} className="text-yellow-400 fill-yellow-400" />
              <span>{anime.rating}</span>
            </div>
          </div>
        </div>

        {/* Content details underneath the image */}
        <div className="space-y-1.5 text-left">
          <span className="text-[8px] font-mono font-bold tracking-widest text-[#FF6FAE] uppercase">
            {anime.studio}
          </span>
          
          <h3 className="font-serif font-semibold text-sm text-[#0B0B0F] tracking-tight leading-snug line-clamp-1 group-hover:text-[#FF6FAE] transition-colors duration-300">
            {anime.title}
          </h3>

          <p className="text-[9px] font-mono text-[#9A9AA6] tracking-wide leading-none">
            {anime.titleJapanese} &bull; {anime.year}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {anime.genre.slice(0, 2).map((g) => (
              <span
                key={g}
                className="px-1.5 py-0.5 text-[8px] font-mono uppercase tracking-wider rounded-sm bg-[#FAFAFA] border border-black/5 text-black/50"
              >
                {g}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}