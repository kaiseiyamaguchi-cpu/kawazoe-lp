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
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              孤独な学習にさよなら。
              <br />
              仲間がいるコミュニティ
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              「起きたよ！」「今日も頑張ろう」と声をかけ合える掲示板機能。
              <br />
              同じ目標を持つ仲間がいるから、挫折しません。
            </p>

            {/* Community mockup */}
            <div className="overflow-hidden rounded-2xl bg-card shadow-xl">
              <img src="/community-forum-social-feed-motivation-posts-japan.jpg" alt="コミュニティ画面" className="w-full" />
            </div>
          </div>

          {/* Right features */}
          <div className="space-y-4">
            {communityFeatures.map((feature) => (
              <Card
                key={feature.title}
                className="border-0 bg-card shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
