import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight } from "lucide-react"

export function FooterCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">継続率アップの決定版</p>
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
            あなたの朝を変えるアプリを
            <br />
            今すぐ手に入れよう
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            まずは無料で使ってみて、ランキングを覗いてみませんか？
            <br />
            三日坊主の自分を変えるチャンスです。
          </p>

          {/* QR Code */}
          <div className="mb-8">
            <p className="mb-4 text-sm text-muted-foreground">スマホでQRコードを読み取ってアクセス</p>
            <div className="inline-block p-6 bg-white rounded-2xl shadow-xl mb-6">
              <img src="/QR.png" alt="QRコード" className="w-56 h-56" />
            </div>
          </div>

          {/* CTA Button */}
          <a href="https://tsuzuku.flutterflow.app/login" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="group gap-3 text-xl font-semibold px-10 py-7">
              <Sparkles className="h-6 w-6" />
              無料で使ってみる
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
