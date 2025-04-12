import BenefitsSection from '@sections/landing-page-sections/benefits-section'
import FeaturesSection from '@sections/landing-page-sections/features-section'
import HeroSection from '@sections/landing-page-sections/hero-section'
import InvestmentSection from '@sections/landing-page-sections/investment-section'

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <InvestmentSection />
    </>
  )
}
