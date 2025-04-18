import Container from '@components/container'
import HeroText from '@components/landing-page-components/hero-text'

export default function AboutUsSection() {
  return (
    <section className="py-16">
      <Container>
        <HeroText
          heading="Empowering Investors with Confidence and Control"
          paragraph="We create a unified platform empowering investors with clarity, confidence, and seamless portfolio management"
        />
      </Container>
    </section>
  )
}
