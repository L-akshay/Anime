"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${formData.name}さんのメッセージを送信しました。件名: ${formData.subject}`);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-[#FFFFFF] text-black pt-32 pb-24 border-b border-black/5 min-h-screen relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-baseline gap-4 mb-12 border-b border-black/5 pb-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-widest font-mono text-[#0B0B0F]">
            お問い合わせ
          </h1>
          <span className="text-[#FF6FAE] text-xs font-semibold tracking-wider uppercase font-mono">
            CONTACT
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between h-full">
            <div className="space-y-4">
              <p className="text-[#0B0B0F]/80 text-sm md:text-base font-serif leading-relaxed">
                質問、提案、作品について話したいことがあれば、いつでもお送りください。静かな批評の場所として、ひとつひとつ大切に読みます。
              </p>
            </div>

            <div className="space-y-5 pt-6 border-t border-black/5 font-mono text-xs text-black/70">
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-[#FF6FAE]" />
                <div>
                  <span className="text-[#9A9AA6] text-[9px] uppercase tracking-widest block">メール</span>
                  <span className="font-bold">neuroblastism@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaXTwitter size={14} className="text-[#FF6FAE]" />
                <div>
                  <span className="text-[#9A9AA6] text-[9px] uppercase tracking-widest block">X</span>
                  <span className="font-bold">@neuroblastism_</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaInstagram size={14} className="text-[#FF6FAE]" />
                <div>
                  <span className="text-[#9A9AA6] text-[9px] uppercase tracking-widest block">Instagram</span>
                  <span className="font-bold">@neuroblastism_</span>
                </div>
              </div>
            </div>

            <div className="relative pt-10 flex items-end justify-between">
              <div className="border-l border-black/10 pl-3">
                <p
                  className="text-[9px] tracking-[0.3em] text-black/30 font-mono select-none"
                  style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                >
                  ニューロブラステイズム
                </p>
              </div>
              <div
                className="w-48 h-48 bg-contain bg-right-bottom bg-no-repeat opacity-95 pointer-events-none"
                style={{ backgroundImage: `url('/corner-image.png')` }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-5 bg-[#FAFAFA] border border-black/5 p-6 md:p-8 rounded-sm">
            {[
              ["name", "名前", "お名前", "text"],
              ["email", "メール", "メールアドレス", "email"],
              ["subject", "件名", "お問い合わせの件名", "text"],
            ].map(([key, label, placeholder, type]) => (
              <div key={key} className="space-y-2">
                <label className="text-[10px] tracking-[0.2em] font-mono font-bold text-black/40 uppercase block">
                  {label}
                </label>
                <input
                  type={type}
                  value={formData[key as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                  placeholder={placeholder}
                  className="w-full px-3 py-2.5 bg-white border border-black/10 text-xs font-mono placeholder:text-black/30 text-black focus:outline-none focus:border-[#FF6FAE] transition-colors"
                  required
                />
              </div>
            ))}

            <div className="space-y-2">
              <label className="text-[10px] tracking-[0.2em] font-mono font-bold text-black/40 uppercase block">
                メッセージ
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="メッセージを入力..."
                rows={5}
                className="w-full px-3 py-2.5 bg-white border border-black/10 text-xs font-mono placeholder:text-black/30 text-black focus:outline-none focus:border-[#FF6FAE] transition-colors resize-none"
                required
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="px-8 py-3 bg-[#FF6FAE] hover:bg-[#ff5596] text-white text-xs font-bold font-mono tracking-widest uppercase transition-all duration-300 shadow-sm hover:shadow-md"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
