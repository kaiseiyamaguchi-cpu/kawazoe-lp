import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Trophy, TrendingUp } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="bg-secondary/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Ranking Feature */}
          <Card className="border-0 bg-card shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
            <CardHeader className="pb-4">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold">ランキングで熱くなる</CardTitle>
              <CardDescription className="text-base">早起きと学習が「ポイント」に変わる</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed text-muted-foreground">
                起床成功で10点、学習1日で5.5点。毎日の頑張りがスコア化され、ライバルと順位を競い合えます。
                <br />
                ゲーム感覚だから、苦しい朝も起きられます。
              </p>
            </CardContent>
          </Card>

          {/* Visualization Feature */}
          <Card className="border-0 bg-card shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
            <CardHeader className="pb-4">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-accent/20">
                <TrendingUp className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-xl font-bold">努力を可視化する</CardTitle>
              <CardDescription className="text-base">連続記録（ストリーク）を伸ばそう</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed text-muted-foreground">
                「何日続いたか」「何ページ進んだか」がグラフで見える化されます。
                <br />
                積み上げた記録が自信になり、途切れさせたくない心理が働きます。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
