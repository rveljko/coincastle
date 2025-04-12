import Container from '@components/container'
import BenefitCellsList from '@components/landing-page-components/benefit-cells-list'
import { investmentBenefits } from '@data/benefits'
import Section from '@sections/landing-page-sections/section'

export default function InvestmentSection() {
  return (
    <Section>
      <Container>
        <Section.Heading>Enhance Your Investment Skills</Section.Heading>
        <Section.Paragraph>
          Access educational resources and expert insights to boost your
          investment decisions and develop effective strategies
        </Section.Paragraph>
        <BenefitCellsList benefits={investmentBenefits} />
      </Container>
    </Section>
  )
}
