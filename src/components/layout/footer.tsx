import Link from "next/link";
import { FaXTwitter, FaInstagram, FaDiscord, FaGithub } from "react-icons/fa6";
import LogoMark from "@/components/ui/logo-mark";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0B0F] text-white pt-20 pb-12 overflow-hidden border-t border-white/5">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-16">
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="mb-4 flex items-center gap-2.5 group">
              <LogoMark className="w-7 h-7 shrink-0 text-white transition-colors duration-300 group-hover:text-[#FF6FAE]" />
              <span className="block">
                <span className="text-2xl font-bold tracking-widest font-serif block text-white leading-none">
                  NEUROBLASTISM
                </span>
                <span className="text-[9px] tracking-[0.3em] text-white/40 block font-mono mt-1">
                  ニューロブラステイズム
                </span>
              </span>
            </Link>

            <p className="text-xs text-[#9A9AA6] mb-8 font-light italic">
              思考。感情。アニメ。
            </p>

            <div className="flex items-center gap-4">
              {[
                { href: "https://twitter.com", label: "X", icon: FaXTwitter },
                { href: "https://instagram.com", label: "Instagram", icon: FaInstagram },
                { href: "https://discord.com", label: "Discord", icon: FaDiscord },
                { href: "https://github.com", label: "GitHub", icon: FaGithub },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 border border-white/10 hover:border-white/30 text-white/60 hover:text-[#FF6FAE] transition-all rounded-none bg-white/5"
                    aria-label={item.label}
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] tracking-[0.2em] font-mono text-white/40 uppercase mb-4">
              ナビゲーション
            </h4>
            <ul className="space-y-2.5 text-xs text-[#9A9AA6]">
              <li><Link href="/" className="hover:text-white transition-colors">ホーム</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">ブログ</Link></li>
              <li><Link href="/anime" className="hover:text-white transition-colors">アニメ</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition-colors">レビュー</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">私たち</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] tracking-[0.2em] font-mono text-white/40 uppercase mb-4">
              カテゴリー
            </h4>
            <ul className="space-y-2.5 text-xs text-[#9A9AA6]">
              <li><Link href="/blog?category=Thoughts" className="hover:text-white transition-colors">思考</Link></li>
              <li><Link href="/blog?category=Analysis" className="hover:text-white transition-colors">考察</Link></li>
              <li><Link href="/blog?category=Reviews" className="hover:text-white transition-colors">レビュー</Link></li>
              <li><Link href="/blog?category=News" className="hover:text-white transition-colors">ニュース</Link></li>
              <li><Link href="/anime" className="hover:text-white transition-colors">一覧</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 relative h-40">
            <div className="absolute top-0 left-0">
              <h4 className="text-[10px] tracking-[0.2em] font-mono text-white/40 uppercase mb-4">
                ポリシー
              </h4>
              <ul className="space-y-2.5 text-xs text-[#9A9AA6]">
                <li><Link href="/privacy" className="hover:text-white transition-colors">プライバシー</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">利用規約</Link></li>
                <li><Link href="/disclaimer" className="hover:text-white transition-colors">免責事項</Link></li>
              </ul>
            </div>

            <div
              className="absolute right-0 bottom-0 w-24 h-24 bg-contain bg-no-repeat bg-right-bottom opacity-80 pointer-events-none hidden md:block"
              style={{ backgroundImage: `url('/Footer.png')`, backgroundSize: "contain" }}
            />
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono tracking-wider text-white/30">
          <span>&copy; {new Date().getFullYear()} NEUROBLASTISM. 無断転載を禁じます。</span>
          <span className="mt-2 sm:mt-0 uppercase">アニメを読むための静かな批評誌</span>
        </div>
      </div>
    </footer>
  );
}
