import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "Neuroblastismのプライバシーポリシー。",
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#FFFFFF] text-black pt-32 pb-24 border-b border-black/5 min-h-screen">
      <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
        <div className="flex items-baseline gap-4 mb-12 border-b border-black/5 pb-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-widest font-mono text-[#0B0B0F]">
            プライバシー
          </h1>
          <span className="text-[#FF6FAE] text-xs font-semibold tracking-wider uppercase font-mono">
            PRIVACY
          </span>
        </div>

        <div className="space-y-10 font-serif text-black/80 text-sm md:text-base leading-relaxed max-w-3xl font-light">
          <section className="space-y-3">
            <h2 className="font-serif font-bold text-lg md:text-xl text-[#0B0B0F]">
              1. 収集する情報
            </h2>
            <p>
              Neuroblastismは利用者のプライバシーを尊重します。閲覧数、参照元、ブラウザ種別などの基本的な分析情報と、お問い合わせやコメントで任意に送信された情報のみを扱います。
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="font-serif font-bold text-lg md:text-xl text-[#0B0B0F]">
              2. 情報の利用目的
            </h2>
            <p>
              収集した情報は、コンテンツ改善、読者理解、お問い合わせへの返信のために使用します。個人情報を第三者へ販売、交換、共有することはありません。
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="font-serif font-bold text-lg md:text-xl text-[#0B0B0F]">
              3. Cookieと分析
            </h2>
            <p>
              必要最小限の機能と基本的な分析のためにCookieを使用する場合があります。広告目的の追跡Cookieは使用しません。
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="font-serif font-bold text-lg md:text-xl text-[#0B0B0F]">
              4. お問い合わせ
            </h2>
            <p>
              本ポリシーに関する質問は neuroblastism@gmail.com までご連絡ください。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
