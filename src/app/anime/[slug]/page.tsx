"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { Star, ArrowLeft, BookOpen, Film } from "lucide-react";
import Link from "next/link";
import { animeEntries } from "@/data/anime-entries";
import { blogPosts } from "@/data/blog-posts";
import AnimeCard from "@/components/ui/anime-card";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function AnimeDetailPage({ params }: Props) {
  const { slug } = use(params);
  const anime = animeEntries.find((a) => a.slug === slug);

  if (!anime) {
    notFound();
  }

  // Find essays related to this anime (or similar)
  const relatedArticles = blogPosts
    .filter((post) => post.tags.includes(anime.slug) || post.title.toLowerCase().includes(anime.title.toLowerCase()))
    .slice(0, 2);

  // If no exact matches, show any 2 featured essays
  const essaysToShow = relatedArticles.length > 0 
    ? relatedArticles 
    : blogPosts.slice(0, 2);

  // Recommended anime (exclude current)
  const recommendations = animeEntries
    .filter((a) => a.id !== anime.id)
    .slice(0, 3);

  return (
    <div className="bg-[#FFFFFF] text-black pt-32 pb-24 border-b border-black/5 min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Back Link */}
        <Link
          href="/anime"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-[#9A9AA6] hover:text-[#FF6FAE] transition-colors mb-10"
        >
          <ArrowLeft size={12} />
          <span>一覧へ戻る</span>
        </Link>

        {/* Two-Column Detail Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Block: Anime Poster Card (5 columns) */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto">
            <div className="aspect-[3/4] rounded-sm overflow-hidden bg-gray-50 border border-black/5 shadow-md relative">
              <div
                className="w-full h-full bg-cover bg-center filter grayscale-[5%]"
                style={{ backgroundImage: `url(${anime.image})` }}
              />
            </div>
          </div>

          {/* Right Block: Content metadata (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-start text-left space-y-6">
            <span className="text-[10px] tracking-[0.2em] font-mono text-[#FF6FAE] uppercase font-bold">
              アニメプロフィール
            </span>
            
            <h1 className="font-serif font-bold text-3xl md:text-5xl text-[#0B0B0F] tracking-tight leading-tight">
              {anime.title}
            </h1>
            
            <p className="text-sm font-mono text-[#9A9AA6] leading-none">
              {anime.titleJapanese} &bull; {anime.year}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 px-2.5 py-1 bg-[#FAFAFA] border border-black/5 text-xs font-mono rounded-sm font-bold text-black">
                <Star size={12} className="text-yellow-400 fill-yellow-400" />
                <span>{anime.rating}</span>
              </div>
              <span className="px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase rounded-sm bg-[#7C4DFF] text-white">
                {anime.studio}
              </span>
              <span className="px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase rounded-sm bg-black/5 border border-black/5 text-black/60">
                {anime.episodes}話
              </span>
            </div>

            {/* Genre Pills */}
            <div className="flex flex-wrap gap-2">
              {anime.genre.map((g) => (
                <span
                  key={g}
                  className="px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider rounded-sm bg-white border border-black/10 text-black/60"
                >
                  {g}
                </span>
              ))}
            </div>

            <div className="border-t border-black/5 pt-6 space-y-4">
              <h4 className="text-[10px] tracking-[0.2em] font-mono font-bold text-black/40 uppercase">
                あらすじ
              </h4>
              <p className="text-[#0B0B0F]/80 text-xs md:text-sm font-serif leading-relaxed">
                {anime.description}
              </p>
            </div>

            {/* Read Essays Button */}
            <div className="pt-6">
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#FF6FAE] hover:bg-[#ff5596] text-white font-mono text-xs tracking-widest uppercase transition-all duration-300"
              >
                <BookOpen size={12} />
                <span>関連記事を読む</span>
              </Link>
            </div>

          </div>

        </div>

        {/* Video Trailer Section */}
        <div className="border-t border-black/5 pt-16 mb-20">
          <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#0B0B0F] uppercase mb-8 flex items-center gap-2">
            <Film size={14} className="text-[#FF6FAE]" />
            <span>予告映像</span>
          </h3>

          <div className="aspect-[16/9] w-full rounded-sm overflow-hidden bg-black relative border border-black/5 flex items-center justify-center">
            {/* Cinematic video simulator background */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 blur-sm"
              style={{ backgroundImage: `url(${anime.image})` }}
            />
            {/* Play overlay content */}
            <div className="relative z-10 text-center text-white px-6">
              <button className="w-16 h-16 rounded-full bg-white/10 hover:bg-[#FF6FAE] hover:scale-105 border border-white/20 hover:border-transparent flex items-center justify-center mx-auto mb-4 transition-all duration-300 shadow-lg">
                <span className="ml-1 text-0 tracking-none border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[16px] border-l-white" />
              </button>
              <h4 className="font-serif text-sm tracking-wider uppercase font-semibold">プロモーション映像を再生</h4>
              <p className="text-[10px] font-mono text-white/50 mt-1 uppercase">シネマティックプレビュー</p>
            </div>
          </div>
        </div>

        {/* Related Essays Column */}
        <div className="border-t border-black/5 pt-16 mb-20">
          <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#0B0B0F] uppercase mb-10 pb-2 border-b border-black/5">
            関連エッセイ
          </h3>

          {essaysToShow.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {essaysToShow.map((post) => (
                <div key={post.id} className="group border border-black/5 p-6 bg-[#FAFAFA] hover:border-[#FF6FAE]/20 transition-all rounded-sm flex gap-4">
                  <div className="w-20 aspect-square shrink-0 rounded-sm overflow-hidden relative border border-black/5">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${post.image})` }}
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <span className="text-[8px] font-mono font-bold text-[#FF6FAE] uppercase tracking-widest block mb-1">
                        {post.category}
                      </span>
                      <Link href={`/blog/${post.slug}`}>
                        <h4 className="font-serif font-semibold text-sm text-[#0B0B0F] tracking-tight leading-snug line-clamp-2 group-hover:text-[#FF6FAE] transition-colors duration-300">
                          {post.title}
                        </h4>
                      </Link>
                    </div>
                    <span className="text-[8px] font-mono text-[#9A9AA6] uppercase tracking-wider block mt-2">
                      {post.date} &bull; {post.readTime}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs font-mono text-[#9A9AA6]">この作品についての記事はまだありません。</p>
          )}
        </div>

        {/* Recommended Anime Section (3 columns grid of other entries) */}
        <div className="border-t border-black/5 pt-16">
          <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#0B0B0F] uppercase mb-10 pb-2 border-b border-black/5">
            おすすめ作品
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {recommendations.map((recAnime, i) => (
              <AnimeCard key={recAnime.id} anime={recAnime} index={i} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
