"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import ArticleCard from "@/components/ui/article-card";

export default function FeaturedArticles() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="bg-[#FFFFFF] py-20 border-b border-black/5 relative z-10 text-black">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-baseline justify-between mb-12 border-b border-black/5 pb-4">
          <div className="flex items-center gap-4">
            <h2 className="text-xl md:text-2xl font-bold tracking-widest text-[#0B0B0F] font-mono">
              最新記事
            </h2>
            <span className="text-[#FF6FAE] text-xs font-medium tracking-wider hidden sm:inline-block">
              新しい思考の記録
            </span>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-[#0B0B0F] hover:text-[#FF6FAE] transition-colors"
          >
            <span>すべて読む</span>
            <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <ArticleCard key={post.id} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
