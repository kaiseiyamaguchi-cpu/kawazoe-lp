import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { FeaturesSection } from "@/components/features-section"
import { TrackingSection } from "@/components/tracking-section"
import { CommunitySection } from "@/components/community-section"
import { FooterCTA } from "@/components/footer-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <FeaturesSection />
      <TrackingSection />
      <CommunitySection />
      <FooterCTA />
      <Footer />
    </main>
  )
}
