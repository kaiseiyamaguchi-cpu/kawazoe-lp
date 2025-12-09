import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

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
          <a href="https://tsuzuku.flutterflow.app/login" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="group gap-3 text-xl font-semibold px-8 py-7">
              <Sparkles className="h-6 w-6 transition-transform group-hover:-translate-y-0.5" />
              使ってみる
            </Button>
          </a>

          {/* App mockup + QR Code */}
          <div className="mt-12 w-full max-w-5xl">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
              {/* Phone mockup */}
              <div className="relative w-80 bg-transparent">
                <img src="/mobile-app-habit-tracking-dashboard-with-ranking-a.png" alt="TSUZUKU アプリ画面" className="w-full h-auto" />
              </div>
              
              {/* QR Code section */}
              <div className="flex flex-col items-center gap-4 lg:items-start">
                <div className="p-4 bg-white rounded-2xl shadow-xl">
                  <img src="/QR.png" alt="QRコード" className="w-48 h-48" />
                </div>
                <p className="text-lg font-semibold text-primary text-center lg:text-left">
                  スマホで今すぐ始められます！
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
