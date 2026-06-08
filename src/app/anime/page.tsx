"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { animeEntries } from "@/data/anime-entries";
import AnimeCard from "@/components/ui/anime-card";

const genres = ["すべて", "心理", "サイバーパンク", "ドラマ", "スリラー", "SF", "ファンタジー", "日常"];
const studios = ["すべて", "京都アニメーション", "GAINAX", "studioぴえろ", "WIT Studio / MAPPA", "マッドハウス", "Production I.G", "WHITE FOX", "サンライズ"];

export default function AnimePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeGenre, setActiveGenre] = useState("すべて");
  const [activeStudio, setActiveStudio] = useState("すべて");

  const filteredAnime = animeEntries.filter((anime) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      anime.title.toLowerCase().includes(query) ||
      anime.titleJapanese.toLowerCase().includes(query);

    const matchesGenre =
      activeGenre === "すべて" || anime.genre.some((g) => g === activeGenre);

    const matchesStudio =
      activeStudio === "すべて" || anime.studio === activeStudio;

    return matchesSearch && matchesGenre && matchesStudio;
  });

  return (
    <div className="bg-[#FFFFFF] text-black pt-32 pb-24 border-b border-black/5 min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-baseline gap-4 mb-10 border-b border-black/5 pb-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-widest font-mono text-[#0B0B0F]">
            アニメアーカイブ
          </h1>
          <span className="text-[#FF6FAE] text-xs font-semibold tracking-wider uppercase font-mono">
            ANIME
          </span>
        </div>

        <div className="bg-[#FAFAFA] border border-black/5 p-6 rounded-sm mb-10 space-y-6">
          <div className="relative w-full max-w-md">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
            <input
              type="text"
              placeholder="アニメを検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-black/10 text-xs font-mono placeholder:text-black/30 text-black focus:outline-none focus:border-[#FF6FAE]"
            />
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.2em] font-mono font-bold text-black/40 uppercase mb-3">
              ジャンルで絞り込む
            </h4>
            <div className="flex flex-wrap gap-2">
              {genres.map((genre) => (
                <button
                  key={genre}
                  onClick={() => setActiveGenre(genre)}
                  className={`px-3 py-1.5 text-[9px] font-mono font-bold transition-all rounded-sm ${
                    activeGenre === genre
                      ? "bg-[#FF6FAE] text-white"
                      : "bg-white text-black/60 hover:bg-black/5 border border-black/10"
                  }`}
                >
                  {genre}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.2em] font-mono font-bold text-black/40 uppercase mb-3">
              制作スタジオで絞り込む
            </h4>
            <div className="flex flex-wrap gap-2">
              {studios.map((studio) => (
                <button
                  key={studio}
                  onClick={() => setActiveStudio(studio)}
                  className={`px-3 py-1.5 text-[9px] font-mono font-bold transition-all rounded-sm ${
                    activeStudio === studio
                      ? "bg-[#7C4DFF] text-white"
                      : "bg-white text-black/60 hover:bg-black/5 border border-black/10"
                  }`}
                >
                  {studio}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredAnime.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredAnime.map((anime, i) => (
              <AnimeCard key={anime.id} anime={anime} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-black/10 text-black/40 text-xs font-mono rounded-sm">
            条件に一致する作品は見つかりませんでした。
          </div>
        )}
      </div>
    </div>
  );
}
