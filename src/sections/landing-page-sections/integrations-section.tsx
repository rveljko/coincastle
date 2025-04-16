import Container from '@components/container'
import HeroText from '@components/landing-page-components/hero-text'
import IntegrationBentoCardsList from '@components/landing-page-components/integration-bento-cards-list'
import { integrations } from '@data/integrations'

export default function IntegrationsSection() {
  return (
    <section className="py-16">
      <Container>
        <HeroText
          heading="Seamless Integrations with Popular Tools and Applications"
          paragraph="Effortlessly integrate with popular tools, enhancing workflows and maximizing productivity across platforms"
        />
        <div className="pt-16">
          <IntegrationBentoCardsList integrations={integrations} />
        </div>
      </Container>
    </section>
  )
}
