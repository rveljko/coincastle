import Container from '@components/container'
import BenefitCellsList from '@components/landing-page-components/benefit-cells-list'
import HeroText from '@components/landing-page-components/hero-text'
import { securityBenefits } from '@data/benefits'

export default function SecuritySection() {
  return (
    <section className="py-16">
      <Container>
        <HeroText
          heading="Rock-Solid Security for Your Complete Peace of Mind"
          paragraph="Safeguarding your assets is our highest priority, using advanced encryption and cutting-edge protocols"
        />
        <div className="pt-16">
          <BenefitCellsList benefits={securityBenefits} />
        </div>
      </Container>
    </section>
  )
}
