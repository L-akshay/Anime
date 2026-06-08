"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Link2, MessageSquare } from "lucide-react";
import { FaXTwitter, FaFacebook } from "react-icons/fa6";
import { blogPosts } from "@/data/blog-posts";
import { animeEntries } from "@/data/anime-entries";
import ArticleCard from "@/components/ui/article-card";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: Props) {
  const { slug } = use(params);
  const post = blogPosts.find((p) => p.slug === slug);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [comments, setComments] = useState<{ author: string; text: string; date: string }[]>([
    { author: "Kusanagi_M", text: "この記事は、アニメにおける内省がなぜ特別に感じられるのかをよく捉えています。映像だからこそ届く静かな燃焼があります。", date: "2024年5月12日" },
    { author: "Lain_Wired", text: "すべての思考は何かを生み出します。私たちは思想のネットワークの中でつながっています。", date: "2024年5月11日" }
  ]);
  const [newComment, setNewComment] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!post) {
    notFound();
  }

  // Get 3 related articles (exclude current)
  const relatedArticles = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  // Take the 5 specific anime entries for the grid
  const posterAnime = animeEntries.filter((a) => 
    ["tokyo-ghoul", "attack-on-titan", "death-note", "psycho-pass", "a-silent-voice"].includes(a.slug)
  );

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment || !newAuthor) return;
    setComments([
      ...comments,
      { author: newAuthor, text: newComment, date: "たった今" }
    ]);
    setNewComment("");
    setNewAuthor("");
  };

  return (
    <div className="bg-[#FFFFFF] text-black pt-32 pb-24 border-b border-black/5 min-h-screen relative">
      
      {/* Reading Progress Bar (Sticky Top) */}
      <div className="fixed top-[60px] md:top-[69px] left-0 right-0 h-1 bg-black/5 z-50">
        <div 
          className="h-full bg-[#FF6FAE] transition-all duration-75"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-[9px] font-mono tracking-widest text-[#9A9AA6] uppercase mb-8">
          <Link href="/" className="hover:text-black transition-colors">ホーム</Link>
          <span>&gt;</span>
          <Link href="/blog" className="hover:text-black transition-colors">ブログ</Link>
          <span>&gt;</span>
          <span className="text-black font-semibold">{post.category}</span>
        </div>

        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-[#9A9AA6] hover:text-[#FF6FAE] transition-colors mb-6"
        >
          <ArrowLeft size={12} />
          <span>ブログへ戻る</span>
        </Link>

        {/* Main Article Header */}
        <header className="mb-10 text-left">
          <h1 className="font-serif font-bold text-3xl md:text-5xl text-[#0B0B0F] tracking-tight leading-tight mb-6 max-w-3xl">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/5 pb-6">
            <div className="flex items-center gap-3">
              {/* Author Avatar */}
              <div className="w-8 h-8 rounded-full overflow-hidden border border-black/5">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('/hero-image.png')`, backgroundPosition: "center 25%" }}
                />
              </div>
              
              <div className="text-[10px] font-mono tracking-wider">
                <span className="text-[#0B0B0F] font-bold block">{post.author}</span>
                <span className="text-[#9A9AA6] block">{post.date} &bull; {post.readTime}</span>
              </div>
            </div>

            {/* Category badge */}
            <span className="px-3 py-1 text-[9px] font-bold tracking-widest uppercase rounded-sm bg-[#FF6FAE] text-white">
              {post.category}
            </span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="aspect-[16/9] w-full bg-gray-50 rounded-sm overflow-hidden mb-12 border border-black/5">
          <div
            className="w-full h-full bg-cover bg-center filter grayscale-[5%]"
            style={{ backgroundImage: `url('${post.image}')` }}
          />
        </div>

        {/* Blockquote with Japanese translation */}
        <div className="border-l-2 border-[#FF6FAE] pl-6 py-2 my-10 bg-[#FAFAFA]">
          <span className="text-[#FF6FAE] text-3xl font-serif leading-none block -mt-2 mb-2">“</span>
          <p className="font-serif italic text-lg text-[#0B0B0F] leading-relaxed mb-2">
            すべての思考は、何かを生み出す。
          </p>
          <p className="text-xs font-mono text-[#9A9AA6] uppercase tracking-widest">
            — All thoughts create something.
          </p>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none font-serif text-sm md:text-base text-black/80 leading-relaxed space-y-6">
          {post.content.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Share buttons */}
        <div className="flex items-center gap-3 mt-12 pt-6 border-t border-black/5">
          <span className="text-[10px] font-mono tracking-widest text-[#9A9AA6] uppercase mr-2">共有:</span>
          <button className="p-2 border border-black/10 hover:border-[#FF6FAE] hover:text-[#FF6FAE] transition-all rounded-none bg-[#FAFAFA]">
            <FaXTwitter size={12} />
          </button>
          <button className="p-2 border border-black/10 hover:border-[#FF6FAE] hover:text-[#FF6FAE] transition-all rounded-none bg-[#FAFAFA]">
            <FaFacebook size={12} />
          </button>
          <button className="p-2 border border-black/10 hover:border-[#FF6FAE] hover:text-[#FF6FAE] transition-all rounded-none bg-[#FAFAFA]">
            <Link2 size={12} />
          </button>
        </div>

        {/* Comments Section */}
        <div className="mt-16 border-t border-black/5 pt-12">
          <h3 className="font-serif font-bold text-xl text-[#0B0B0F] mb-6 flex items-center gap-2">
            <MessageSquare size={18} className="text-[#FF6FAE]" />
            <span>コメント</span>
          </h3>

          <div className="space-y-6 mb-10">
            {comments.map((comment, i) => (
              <div key={i} className="bg-[#FAFAFA] p-4 border border-black/5 rounded-sm">
                <div className="flex justify-between items-center mb-2 font-mono text-[9px] text-[#9A9AA6]">
                  <span className="text-[#0B0B0F] font-bold">{comment.author}</span>
                  <span>{comment.date}</span>
                </div>
                <p className="text-xs text-black/80 leading-relaxed font-light">{comment.text}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleAddComment} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="名前"
                value={newAuthor}
                onChange={(e) => setNewAuthor(e.target.value)}
                className="w-full px-3 py-2 bg-[#FAFAFA] border border-black/10 text-xs font-mono placeholder:text-black/30 text-black focus:outline-none focus:border-[#FF6FAE]"
                required
              />
            </div>
            <textarea
              placeholder="感想を書く..."
              rows={4}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full px-3 py-2 bg-[#FAFAFA] border border-black/10 text-xs font-mono placeholder:text-black/30 text-black focus:outline-none focus:border-[#FF6FAE]"
              required
            />
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#FF6FAE] hover:bg-[#ff5596] text-white text-[10px] font-bold font-mono tracking-widest uppercase transition-all duration-300"
            >
              コメントする
            </button>
          </form>
        </div>

        {/* RELATED ARTICLES: YOU MIGHT ALSO LIKE (3 cards) */}
        <div className="mt-20 border-t border-black/5 pt-16">
          <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#0B0B0F] uppercase mb-10 pb-2 border-b border-black/5">
            関連する記事
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((article, i) => (
              <ArticleCard key={article.id} post={article} index={i} />
            ))}
          </div>
        </div>

        {/* 5-Column Anime Poster Grid */}
        <div className="mt-20 border-t border-black/5 pt-16">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {posterAnime.map((anime) => (
              <Link 
                href={`/anime/${anime.slug}`} 
                key={anime.id}
                className="group flex flex-col items-center text-center"
              >
                <div className="w-full aspect-[2/3] bg-gray-50 rounded-sm overflow-hidden border border-black/5 mb-3">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-104 filter grayscale-[10%]"
                    style={{ backgroundImage: `url(${anime.image})` }}
                  />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-tight text-[#0B0B0F] group-hover:text-[#FF6FAE] transition-colors leading-tight line-clamp-1">
                  {anime.title}
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/anime"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#FF6FAE] hover:bg-[#ff5596] text-white font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6FAE]/20"
            >
              <span>もっと見る</span>
              <span>→</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
