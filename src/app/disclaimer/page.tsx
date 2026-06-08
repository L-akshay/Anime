import { Metadata } from "next";

export const metadata: Metadata = {
  title: "免責事項",
  description: "Neuroblastismの編集方針と免責事項。",
};

export default function DisclaimerPage() {
  return (
    <div className="bg-[#FFFFFF] text-black pt-32 pb-24 border-b border-black/5 min-h-screen">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
        <div className="flex items-baseline gap-4 mb-12 border-b border-black/5 pb-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-widest font-mono text-[#0B0B0F]">
            免責事項
          </h1>
          <span className="text-[#FF6FAE] text-xs font-semibold tracking-wider uppercase font-mono">
            DISCLAIMER
          </span>
        </div>

        <div className="space-y-10 font-serif text-black/80 text-sm md:text-base leading-relaxed max-w-3xl font-light">
          <section className="space-y-3">
            <h2 className="font-serif font-bold text-lg md:text-xl text-[#0B0B0F]">
              編集コンテンツについて
            </h2>
            <p>
              Neuroblastismは、アニメ文化の批評、分析、鑑賞を目的とした独立メディアです。記事やレビューは各執筆者の見解であり、必ずしも運営全体の意見を代表するものではありません。
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="font-serif font-bold text-lg md:text-xl text-[#0B0B0F]">
              引用と著作権
            </h2>
            <p>
              本サイトでは、批評、教育、分析の目的でアニメ作品に関する情報や宣材を参照する場合があります。商標、画像、作品の著作権は各権利者に帰属します。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
