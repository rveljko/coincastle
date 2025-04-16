import BentoCard from '@components/landing-page-components/ui/bento-card'
import { Integration } from '@utils/types'

type IntegrationBentoCardProps = {
  integration: Integration
}

export default function IntegrationBentoCard({
  integration: { logoBigUrl, name, description },
}: IntegrationBentoCardProps) {
  return (
    <BentoCard>
      <BentoCard.Body>
        <div className="relative isolate flex items-center justify-center px-2 py-8">
          <div className="border-clickable/30 bg-clickable/5 absolute inset-0 -z-1 rounded-t-lg border border-b-0 mask-linear-from-transparent mask-linear-to-black"></div>
          <img src={logoBigUrl} alt={name} title={name} />
        </div>
      </BentoCard.Body>
      <BentoCard.Header>
        <BentoCard.Heading>{name}</BentoCard.Heading>
        <BentoCard.Paragraph>{description}</BentoCard.Paragraph>
      </BentoCard.Header>
    </BentoCard>
  )
}
