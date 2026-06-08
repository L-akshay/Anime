"use client";

import { Brain, Heart, Star } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "深い考察",
    description: "表面的な感想で終わらせず、作品に宿る倫理、孤独、存在の問いを読み解きます。",
  },
  {
    icon: Heart,
    title: "正直なレビュー",
    description: "過度に飾らず、アニメを芸術として尊重しながら率直な言葉で向き合います。",
  },
  {
    icon: Star,
    title: "アニメとその先へ",
    description: "哲学、心理、記憶、感情をつなぎ、作品が人間経験に触れる瞬間を探します。",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#FFFFFF] text-black pt-32 pb-24 border-b border-black/5 min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-baseline gap-4 mb-12 border-b border-black/5 pb-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-widest font-mono text-[#0B0B0F]">
            私たちについて
          </h1>
          <span className="text-[#FF6FAE] text-xs font-semibold tracking-wider uppercase font-mono">
            ABOUT
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="aspect-[16/10] w-full bg-gray-50 rounded-sm overflow-hidden border border-black/5 shadow-sm relative">
              <div
                className="w-full h-full bg-cover bg-center filter grayscale-[5%]"
                style={{ backgroundImage: `url('/images/about-sunset.png')` }}
              />
            </div>

            <div className="space-y-4 font-serif text-black/80 leading-relaxed text-sm md:text-base font-light">
              <p>
                Neuroblastismは、アニメをただの娯楽ではなく、私たちの思考、感情、生き方を揺らす表現として読むために生まれました。
              </p>
              <p>
                ここは、作品に残された沈黙や痛み、美しさを記録する小さな批評誌です。レビュー、考察、感情のメモを通して、アニメの奥にある人間らしさを見つめます。
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-10 lg:pl-8">
            <div className="space-y-8">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-sm bg-[#FF6FAE]/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#FF6FAE]" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-base text-[#0B0B0F] mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-[#9A9AA6] leading-relaxed font-light">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-black/5 pt-8">
              <div className="border-l-2 border-[#FF6FAE] pl-6 py-2 bg-[#FAFAFA]">
                <p className="font-serif italic text-base text-[#0B0B0F] leading-relaxed mb-1">
                  すべての思考は、何かを生み出す。
                </p>
                <p className="text-[10px] font-mono text-[#9A9AA6] uppercase tracking-widest">
                  Neuroblastism
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
