import BentoCard from '@components/landing-page-components/ui/bento-card'
import { Customer } from '@utils/types'

type CustomerBentoCardProps = {
  customer: Customer
}

export default function CustomerBentoCard({
  customer: { logoUrl, name, description },
}: CustomerBentoCardProps) {
  return (
    <BentoCard>
      <BentoCard.Body>
        <div className="relative isolate flex items-center justify-center py-8">
          <div className="border-clickable/30 bg-clickable/5 absolute inset-0 -z-1 rounded-t-lg border border-b-0 mask-linear-from-transparent mask-linear-to-black"></div>
          <img src={logoUrl} alt={name} title={name} />
        </div>
      </BentoCard.Body>
      <BentoCard.Header>
        <BentoCard.Heading>{name}</BentoCard.Heading>
        <BentoCard.Paragraph>{description}</BentoCard.Paragraph>
      </BentoCard.Header>
    </BentoCard>
  )
}
