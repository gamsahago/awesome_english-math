import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { CurriculumSection } from "@/components/curriculum-section"
import { ReviewsSection } from "@/components/reviews-section"
import { CTASection } from "@/components/cta-section"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CurriculumSection />
      <ReviewsSection />
      <CTASection />
      <LocationSection />
      <Footer />
    </main>
  )
}
