"use client";

interface MarqueeTextProps {
  text: string;
  className?: string;
}

export default function MarqueeText({ text, className = "" }: MarqueeTextProps) {
  return (
    <div className={`relative overflow-hidden whitespace-nowrap ${className}`}>
      {/* Two copies is enough for a seamless loop — four is wasteful DOM */}
      <div className="animate-marquee inline-flex gap-8" style={{ willChange: "transform" }}>
        <span className="inline-block">{text}</span>
        <span className="inline-block">{text}</span>
      </div>
    </div>
  );
}