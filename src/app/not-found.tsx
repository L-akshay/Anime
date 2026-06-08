import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-serif font-bold text-gradient-sakura mb-6">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          ページが見つかりません
        </h2>
        <p className="text-muted max-w-md mx-auto mb-8">
          このページは存在しないか、Wiredの奥へ迷い込んでしまったようです。
        </p>
        <Link href="/">
          <Button variant="primary" size="lg">
            <ArrowLeft size={16} className="mr-2" />
            ホームへ戻る
          </Button>
        </Link>
      </div>
    </div>
  );
}
