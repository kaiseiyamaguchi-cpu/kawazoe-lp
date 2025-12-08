import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"

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
          <p className="mb-8 text-lg text-muted-foreground">
            まずは無料でダウンロードして、ランキングを覗いてみませんか？
            <br />
            三日坊主の自分を変えるチャンスです。
          </p>

          <Button size="lg" className="group gap-2 text-lg font-semibold">
            <Download className="h-5 w-5" />
            無料でダウンロードする
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>

          {/* App store badges placeholder */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <img src="/images/app-store-badge.png" alt="App Store" className="h-12" />
            <img src="/google-play-badge.png" alt="Google Play" className="h-12" />
          </div>
        </div>
      </div>
    </section>
  )
}
