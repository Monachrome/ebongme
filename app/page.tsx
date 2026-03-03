import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MarqueeTicker } from "@/components/marquee-ticker"
import { AboutSection } from "@/components/about-section"
import { CategoriesSection } from "@/components/categories-section"
import { CommunitySection } from "@/components/community-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MarqueeTicker />
      <AboutSection />
      <CategoriesSection />
      <CommunitySection />
      <CTASection />
      <Footer />
    </main>
  )
}
