import { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約",
  description: "Neuroblastismの利用規約。",
};

export default function TermsPage() {
  return (
    <div className="bg-[#FFFFFF] text-black pt-32 pb-24 border-b border-black/5 min-h-screen">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
        <div className="flex items-baseline gap-4 mb-12 border-b border-black/5 pb-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-widest font-mono text-[#0B0B0F]">
            利用規約
          </h1>
          <span className="text-[#FF6FAE] text-xs font-semibold tracking-wider uppercase font-mono">
            TERMS
          </span>
        </div>

        <div className="space-y-10 font-serif text-black/80 text-sm md:text-base leading-relaxed max-w-3xl font-light">
          <section className="space-y-3">
            <h2 className="font-serif font-bold text-lg md:text-xl text-[#0B0B0F]">
              1. コンテンツの利用
            </h2>
            <p>
              Neuroblastismに掲載される文章は著作権により保護されています。適切な出典表示を伴う短い引用や共有は可能ですが、記事全文の無断転載は禁止します。
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="font-serif font-bold text-lg md:text-xl text-[#0B0B0F]">
              2. コメントと利用姿勢
            </h2>
            <p>
              敬意ある知的な対話を歓迎します。嫌がらせ、差別的表現、スパム、攻撃的な行為は許容されず、削除対象となる場合があります。
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="font-serif font-bold text-lg md:text-xl text-[#0B0B0F]">
              3. 著作権に関する表記
            </h2>
            <p>
              Neuroblastismは独立した編集メディアです。言及されるアニメ作品、ロゴ、宣材、キャラクターデザインの権利は、それぞれの制作者および制作会社に帰属します。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
