"use client";

import Link from "next/link";
import { reviews } from "@/data/reviews";

export default function ReviewsPage() {
  return (
    <div className="bg-[#FFFFFF] text-black pt-32 pb-24 border-b border-black/5 min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-baseline gap-4 mb-12 border-b border-black/5 pb-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-widest font-mono text-[#0B0B0F]">
            レビュー
          </h1>
          <span className="text-[#FF6FAE] text-xs font-semibold tracking-wider uppercase font-mono">
            REVIEWS
          </span>
        </div>

        <div className="space-y-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group border border-black/5 p-6 md:p-8 bg-[#FAFAFA] rounded-sm hover:border-[#FF6FAE]/20 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-full max-w-[200px] aspect-[3/4] bg-gray-50 rounded-sm overflow-hidden border border-black/5 mb-4 shadow-sm relative">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-103"
                    style={{ backgroundImage: `url(${review.image})` }}
                  />
                </div>

                <h4 className="font-mono text-[10px] tracking-widest text-[#9A9AA6] uppercase mb-1">
                  評
                </h4>
                <p className="text-xs font-semibold text-[#0B0B0F] leading-relaxed">
                  &ldquo;{review.verdict}&rdquo;
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <span className="text-[9px] font-mono text-[#FF6FAE] uppercase tracking-widest font-bold">
                      批評
                    </span>
                    <span className="text-black/20 font-mono text-[9px]">・</span>
                    <span className="text-black/40 font-mono text-[9px]">{review.date}</span>
                  </div>

                  <Link href={`/anime/${review.animeSlug}`}>
                    <h3 className="font-serif font-bold text-2xl text-[#0B0B0F] hover:text-[#FF6FAE] transition-colors leading-tight mb-3">
                      {review.animeTitle}
                    </h3>
                  </Link>

                  <p className="text-xs md:text-sm font-serif text-black/70 leading-relaxed mb-6 font-light">
                    {review.review}
                  </p>
                </div>

                <div className="flex items-center gap-2 border-t border-black/5 pt-4">
                  <div className="w-6 h-6 rounded-full overflow-hidden border border-black/5">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url('/hero-image.png')`, backgroundPosition: "center 25%" }}
                    />
                  </div>
                  <span className="text-[9px] font-mono tracking-widest text-[#9A9AA6] uppercase">
                    {review.author}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white border border-black/5 p-6 rounded-sm w-full font-mono text-xs text-[#0B0B0F]">
                <h4 className="text-[9px] tracking-[0.2em] font-mono font-bold text-black/40 uppercase mb-4 pb-2 border-b border-black/5">
                  スコア内訳
                </h4>

                <div className="space-y-3">
                  {[
                    ["物語", review.storyScore],
                    ["人物", review.charactersScore],
                    ["作画", review.animationScore],
                    ["音楽・音響", review.musicScore],
                  ].map(([label, score]) => (
                    <div key={label} className="flex justify-between items-center pb-2 border-b border-black/5">
                      <span className="text-black/50">{label}</span>
                      <span className="font-bold">{Number(score).toFixed(1)}</span>
                    </div>
                  ))}

                  <div className="flex justify-between items-center pt-2 text-[#FF6FAE]">
                    <span className="font-bold tracking-widest text-[10px]">総合評価</span>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-2xl font-bold font-serif">{review.rating.toFixed(1)}</span>
                      <span className="text-[9px] text-[#9A9AA6]">/10.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
