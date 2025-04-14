import BenefitsSection from '@sections/landing-page-sections/benefits-section'
import FeaturesSection from '@sections/landing-page-sections/features-section'
import FilteringSection from '@sections/landing-page-sections/filtering-section'
import HeroSection from '@sections/landing-page-sections/hero-section'
import InvestmentSection from '@sections/landing-page-sections/investment-section'
import LearnSomethingNewSection from '@sections/landing-page-sections/learn-something-new-section'
import PreferencesSection from '@sections/landing-page-sections/preferences-section'

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <PreferencesSection />
      <FilteringSection />
      <LearnSomethingNewSection />
      <InvestmentSection />
    </>
  )
}
