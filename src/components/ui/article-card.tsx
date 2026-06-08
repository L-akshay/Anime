"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/types";

interface ArticleCardProps {
  post: BlogPost;
  index?: number;
}

const categoryLabels: Record<string, string> = {
  THOUGHTS: "思考",
  ANALYSIS: "考察",
  REVIEWS: "レビュー",
  NEWS: "ニュース",
};

export default function ArticleCard({ post, index = 0 }: ArticleCardProps) {
  // Determine tag color based on category
  const getTagStyle = (category: string) => {
    switch (category.toUpperCase()) {
      case "THOUGHTS":
        return "bg-[#FF6FAE] text-white";
      case "ANALYSIS":
        return "bg-[#7C4DFF] text-white";
      case "REVIEWS":
        return "bg-[#FF6FAE]/20 text-[#FF6FAE] border border-[#FF6FAE]/20";
      default:
        return "bg-black/10 text-black/60";
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group flex flex-col"
    >
      <Link href={`/blog/${post.slug}`} className="block flex-1 flex flex-col">
        {/* Card Image Wrapper */}
        <div className="relative overflow-hidden rounded-md mb-4 aspect-[4/3] bg-gray-100 border border-black/5">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-102 filter grayscale-[10%] contrast-[1.05]"
            style={{
              backgroundImage: `url(${post.image})`,
            }}
          />
          
          {/* Overlay Tag in bottom-left corner of the image */}
          <div className="absolute bottom-3 left-3 z-10">
            <span className={`px-2.5 py-1 text-[9px] font-bold tracking-widest uppercase rounded-sm ${getTagStyle(post.category)}`}>
              {categoryLabels[post.category.toUpperCase()] ?? post.category}
            </span>
          </div>
        </div>

        {/* Content details */}
        <div className="flex-1 flex flex-col pt-1">
          {/* Title */}
          <h3 className="font-serif font-semibold text-lg md:text-xl text-[#0B0B0F] tracking-tight leading-snug mb-2 group-hover:text-[#FF6FAE] transition-colors duration-300">
            {post.title}
          </h3>

          {/* Description */}
          <p className="text-[#9A9AA6] text-xs leading-relaxed mb-4 line-clamp-3 font-light">
            {post.excerpt}
          </p>

          {/* Spacer to push metadata to the bottom */}
          <div className="mt-auto pt-2 flex items-center justify-between border-t border-black/5 text-[9px] font-mono tracking-widest text-[#9A9AA6] uppercase">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
