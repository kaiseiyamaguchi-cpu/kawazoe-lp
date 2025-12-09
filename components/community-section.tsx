import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Shield, Zap } from "lucide-react"

const communityFeatures = [
  {
    icon: Heart,
    title: "励まし合いでモチベ維持",
    description: "誰かの頑張りがあなたの刺激になります。質問や相談も可能です。",
  },
  {
    icon: Shield,
    title: "健全な環境で安心",
    description: "通報機能や管理体制で、学習に集中できるポジティブな場を提供します。",
  },
  {
    icon: Zap,
    title: "まずは無料で参加",
    description: "アプリを入れるだけで、すぐに仲間の投稿が見られます。",
  },
]

export function CommunitySection() {
  return (
    <section className="bg-primary/5 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
            <Users className="h-8 w-8 text-primary" />
          </div>
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            孤独な学習にさよなら。
            <br />
            仲間がいるコミュニティ
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            「起きたよ！」「今日も頑張ろう」と声をかけ合える掲示板機能。
            <br />
            同じ目標を持つ仲間がいるから、挫折しません。
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
          {communityFeatures.map((feature) => (
            <Card
              key={feature.title}
              className="border-0 bg-card shadow-md transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
