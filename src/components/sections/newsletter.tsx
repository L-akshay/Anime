"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`登録ありがとうございます: ${email}`);
    setEmail("");
  };

  return (
    <section className="bg-[#FAFAFA] py-20 text-black border-b border-black/5 relative z-10">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto"
        >
          {/* Heading */}
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#0B0B0F] mb-4 tracking-tight">
            Neuroblastism Journalに参加する
          </h2>
          
          <p className="text-[#9A9AA6] text-xs md:text-sm font-light mb-8 max-w-md mx-auto leading-relaxed">
            毎週のエッセイ、率直なレビュー、深い心理考察を受信箱へお届けします。
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto items-stretch"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="メールアドレス"
              className="flex-1 px-4 py-3 rounded-none bg-white border border-black/10 text-xs font-mono placeholder:text-black/30 focus:outline-none focus:border-[#FF6FAE] transition-colors text-black"
              required
            />
            
            <button
              type="submit"
              className="px-8 py-3 bg-[#FF6FAE] hover:bg-[#ff5596] text-white text-xs font-bold font-mono tracking-widest uppercase transition-all duration-300"
            >
              登録する
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
