import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import SmoothScrollProvider from "@/providers/smooth-scroll";
import ScrollProgress from "@/components/effects/scroll-progress";
import ShaderBackground from "@/components/effects/shader-background";
import CursorGlow from "@/components/effects/cursor-glow";
import NoiseOverlay from "@/components/effects/noise-overlay";
import FloatingSakuraParticles from "@/components/effects/floating-sakura-particles";
import PageTransition from "@/components/effects/page-transition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Neuroblastism - 思考。感情。アニメ。",
    template: "%s - Neuroblastism",
  },
  description:
    "アニメの哲学、心理、物語表現を深く読み解くエディトリアルメディア。考察、レビュー、批評を静かに届けます。",
  keywords: [
    "anime",
    "philosophy",
    "psychology",
    "anime analysis",
    "anime reviews",
    "editorial",
    "storytelling",
    "japanese animation",
    "アニメ考察",
    "アニメレビュー",
  ],
  authors: [{ name: "Neuroblastism" }],
  creator: "Neuroblastism",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "Neuroblastism",
    title: "Neuroblastism - 思考。感情。アニメ。",
    description:
      "アニメの哲学、心理、物語表現を深く読み解くエディトリアルメディア。",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuroblastism - 思考。感情。アニメ。",
    description:
      "アニメの哲学、心理、物語表現を深く読み解くエディトリアルメディア。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ShaderBackground />
        <FloatingSakuraParticles />
        <NoiseOverlay />
        <CursorGlow />
        <ScrollProgress />

        <SmoothScrollProvider>
          <Navbar />

          <main className="flex-1 relative z-10">
            <PageTransition>{children}</PageTransition>
          </main>

          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
