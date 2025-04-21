import Container from '@components/container'
import BenefitCellsList from '@components/landing-page-components/benefit-cells-list'
import { marketAwarenessBenefits } from '@data/benefits'
import Section from '@sections/landing-page-sections/section'

export default function BenefitsSection() {
  return (
    <Section>
      <Container>
        <Section.Heading>Essential Benefits for Investors</Section.Heading>
        <Section.Paragraph>
          We deliver essential benefits and real-time insights to simplify your
          investment journey confidently
        </Section.Paragraph>
        <BenefitCellsList benefits={marketAwarenessBenefits} />
      </Container>
    </Section>
  )
}
