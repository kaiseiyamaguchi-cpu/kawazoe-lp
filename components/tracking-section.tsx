import { Medal, BarChart3, Clock } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "リアルタイム順位",
    description: "月間ランキングで自分の立ち位置を確認。",
  },
  {
    icon: Medal,
    title: "称号・バッジ獲得",
    description: "継続日数に応じて特別な称号をゲット。",
  },
  {
    icon: BarChart3,
    title: "学習ログ・グラフ",
    description: "毎日の起床時間と学習量を一目で把握。",
  },
]

export function TrackingSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-2xl font-bold text-foreground md:text-3xl">モチベーション機能の特徴</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="group flex flex-col items-center text-center">
              <div className="mb-6 overflow-hidden rounded-2xl bg-muted shadow-md transition-shadow group-hover:shadow-lg">
                <img
                  src={`/.jpg?height=240&width=200&query=${encodeURIComponent(feature.title + " mobile app screen japanese")}`}
                  alt={feature.title}
                  className="h-60 w-50 object-cover"
                />
              </div>
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
