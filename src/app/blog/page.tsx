"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";

const categories = [
  { value: "ALL", label: "すべて" },
  { value: "THOUGHTS", label: "思考" },
  { value: "ANALYSIS", label: "考察" },
  { value: "REVIEWS", label: "レビュー" },
  { value: "NEWS", label: "ニュース" },
];

const categoryCounts = [
  { label: "思考", value: "THOUGHTS", count: 12 },
  { label: "考察", value: "ANALYSIS", count: 15 },
  { label: "レビュー", value: "REVIEWS", count: 18 },
  { label: "ニュース", value: "NEWS", count: 6 },
  { label: "一覧", value: "ALL", count: 8 },
];

const categoryLabels = Object.fromEntries(categories.map((cat) => [cat.value, cat.label]));

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = blogPosts.filter((post) => {
    const query = searchQuery.toLowerCase();
    const matchesCategory =
      activeCategory === "ALL" || post.category.toUpperCase() === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#FFFFFF] text-black pt-32 pb-24 border-b border-black/5 min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-baseline gap-4 mb-10 border-b border-black/5 pb-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-widest font-mono text-[#0B0B0F]">
            ブログ
          </h1>
          <span className="text-[#FF6FAE] text-xs font-semibold tracking-wider uppercase font-mono">
            BLOG
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-black/5">
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => {
                  setActiveCategory(cat.value);
                  setCurrentPage(1);
                }}
                className={`px-4 py-1.5 text-[10px] tracking-widest font-mono font-bold transition-all ${
                  activeCategory === cat.value
                    ? "bg-[#FF6FAE] text-white"
                    : "bg-[#FAFAFA] text-black/60 hover:bg-black/5 hover:text-black border border-black/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative max-w-xs w-full">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40" />
            <input
              type="text"
              placeholder="記事を検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#FAFAFA] border border-black/15 text-xs font-mono placeholder:text-black/30 text-black focus:outline-none focus:border-[#FF6FAE]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-10">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <article key={post.id} className="group flex flex-col md:flex-row gap-6 border-b border-black/5 pb-8">
                  <div className="w-full md:w-56 aspect-[16/10] bg-gray-50 rounded-sm overflow-hidden shrink-0 relative border border-black/5">
                    <Link href={`/blog/${post.slug}`} className="block h-full">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-103"
                        style={{ backgroundImage: `url(${post.image})` }}
                      />
                    </Link>
                  </div>

                  <div className="flex-1 flex flex-col justify-between pt-1">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[9px] tracking-widest font-bold text-[#FF6FAE] uppercase">
                          {categoryLabels[post.category] ?? post.category}
                        </span>
                      </div>

                      <Link href={`/blog/${post.slug}`} className="group-hover:text-[#FF6FAE] transition-colors">
                        <h3 className="font-serif font-semibold text-lg md:text-xl text-[#0B0B0F] tracking-tight leading-snug mb-2">
                          {post.title}
                        </h3>
                      </Link>

                      <p className="text-[#9A9AA6] text-xs leading-relaxed font-light mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-[9px] font-mono tracking-widest text-[#9A9AA6] uppercase">
                      <span>{post.date}</span>
                      <span>・</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="text-center py-16 border border-dashed border-black/10 text-black/40 text-xs font-mono">
                条件に一致する記事は見つかりませんでした。
              </div>
            )}

            {filteredPosts.length > 0 && (
              <div className="flex items-center justify-start gap-3.5 pt-6 font-mono text-xs">
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    className={`w-7 h-7 flex items-center justify-center border border-black/10 ${
                      currentPage === page ? "bg-[#0B0B0F] text-white" : "hover:bg-black/5"
                    }`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </button>
                ))}
                <span className="text-black/40 px-1">...</span>
                <button
                  className="w-7 h-7 flex items-center justify-center border border-black/10 hover:bg-black/5"
                  onClick={() => setCurrentPage(8)}
                >
                  8
                </button>
                <button
                  className="inline-flex items-center gap-1.5 hover:text-[#FF6FAE] pl-2 font-bold"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  <span>次へ</span>
                  <span>→</span>
                </button>
              </div>
            )}
          </div>

          <aside className="lg:col-span-4 space-y-10 lg:pl-6 relative border-t lg:border-t-0 lg:border-l border-black/5 pt-10 lg:pt-0">
            <div className="border border-black/5 p-6 bg-[#FAFAFA] rounded-sm relative z-10">
              <h4 className="text-[10px] tracking-[0.2em] font-mono font-bold text-black/40 uppercase mb-4">
                Neuroblastismについて
              </h4>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border border-black/5">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('/hero-image.png')`, backgroundPosition: "center 25%" }}
                  />
                </div>
                <div>
                  <p className="text-xs text-[#0B0B0F] leading-relaxed mb-3 font-light">
                    考えすぎてしまうアニメ好きのための、静かな読み物の場所。
                  </p>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1 text-[9px] font-mono font-bold tracking-widest text-[#FF6FAE] hover:text-[#ff5596]"
                  >
                    <span>もっと知る</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="border border-black/5 p-6 bg-[#FAFAFA] rounded-sm relative z-10">
              <h4 className="text-[10px] tracking-[0.2em] font-mono font-bold text-black/40 uppercase mb-4">
                カテゴリー
              </h4>
              <ul className="space-y-3 font-mono text-xs text-black/70">
                {categoryCounts.map((item) => (
                  <li key={item.label} className="flex justify-between items-center hover:text-[#FF6FAE] transition-colors">
                    <button
                      onClick={() => {
                        setActiveCategory(item.value);
                        setCurrentPage(1);
                      }}
                      className="text-left font-medium"
                    >
                      {item.label}
                    </button>
                    <span className="text-black/35">({item.count})</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-black/5 p-6 bg-[#FAFAFA] rounded-sm relative z-10">
              <h4 className="text-[10px] tracking-[0.2em] font-mono font-bold text-black/40 uppercase mb-2">
                購読
              </h4>
              <p className="text-xs text-[#9A9AA6] leading-relaxed mb-4 font-light">
                新しい記事をメールで受け取れます。
              </p>
              <form onSubmit={(e) => { e.preventDefault(); alert("登録しました。"); }} className="space-y-3">
                <input
                  type="email"
                  placeholder="メールアドレス"
                  className="w-full px-3 py-2 bg-white border border-black/10 text-xs font-mono placeholder:text-black/30 text-black focus:outline-none focus:border-[#FF6FAE]"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-[#FF6FAE] hover:bg-[#ff5596] text-white text-[10px] font-bold font-mono tracking-widest uppercase transition-all duration-300"
                >
                  登録する
                </button>
              </form>
            </div>

            <div className="relative pt-6 flex justify-end">
              <div
                className="w-36 h-36 bg-contain bg-right-bottom bg-no-repeat opacity-80 pointer-events-none"
                style={{ backgroundImage: `url('/corner-image.png')` }}
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
