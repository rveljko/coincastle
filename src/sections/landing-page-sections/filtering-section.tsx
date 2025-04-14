import Container from '@components/container'
import BenefitCellsList from '@components/landing-page-components/benefit-cells-list'
import { filteringBenefits } from '@data/benefits'
import Section from '@sections/landing-page-sections/section'

export default function FilteringSection() {
  return (
    <Section>
      <Container>
        <Section.Heading>Filter Investments with Precision</Section.Heading>
        <Section.Paragraph>
          Simplify your investment analysis with CoinCastle's advanced filtering
          tools, helping you focus on what matters most
        </Section.Paragraph>
        <BenefitCellsList benefits={filteringBenefits} />
      </Container>
    </Section>
  )
}
