import { Button } from "@/components/ui/button"
import { Download, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-20 -left-20 h-60 w-60 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            継続学習＆コミュニティ
          </div>

          {/* Main heading */}
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="text-primary">「続く」</span>を科学した
            <br />
            習慣化アプリ <span className="text-primary">TSUZUKU</span>
          </h1>

          {/* CTA Button */}
          <Button size="lg" className="group gap-2 text-lg font-semibold">
            <Download className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
            アプリをダウンロード
          </Button>

          {/* App mockup */}
          <div className="mt-12 w-full max-w-md">
            <div className="relative mx-auto w-80 bg-transparent">
              <img src="/mobile-app-habit-tracking-dashboard-with-ranking-a.png" alt="TSUZUKU アプリ画面" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
