import Switch from '@components/dashboard-components/ui/switch'
import BentoCard from '@components/landing-page-components/ui/bento-card'
import { integrations } from '@data/integrations'
import { Integration as IntegrationType } from '@utils/types'
import { useState } from 'react'

type IntegrationsFeatureBentoCardProps = {
  className?: string
}

export default function IntegrationsFeatureBentoCard({
  className,
}: IntegrationsFeatureBentoCardProps) {
  return (
    <BentoCard className={className}>
      <BentoCard.Body>
        <div className="relative isolate overflow-hidden rounded-t-lg">
          <div className="border-clickable/30 bg-clickable/5 absolute inset-0 -z-1 rounded-t-lg border border-b-0 mask-linear-from-transparent mask-linear-to-black"></div>
          <div className="border-clickable/30 mx-0.25 border-b p-4">
            <h4 className="text-heading-5-font-size leading-heading-5-line-height">
              Integrations
            </h4>
          </div>
          <ul className="flex flex-col gap-2 p-4">
            {integrations.slice(0, 4).map((integration) => (
              <li key={integration.id} className="w-full">
                <Integration integration={integration} />
              </li>
            ))}
          </ul>
        </div>
      </BentoCard.Body>
      <BentoCard.Header>
        <BentoCard.Heading>Connect Your Favorite Tools</BentoCard.Heading>
        <BentoCard.Paragraph>
          Seamlessly integrate CoinCastle with other applications to enhance
          your trading capabilities
        </BentoCard.Paragraph>
      </BentoCard.Header>
    </BentoCard>
  )
}

type IntegrationProps = {
  integration: IntegrationType
}

function Integration({
  integration: { name, logoUrl, description, isActive },
}: IntegrationProps) {
  const [isIntegrationActive, setIsIntegrationActive] = useState(isActive)

  return (
    <article className="w-full rounded-md">
      <div className="mb-1 flex items-start justify-between">
        <div className="inset-ring-clickable/20 max-w-max rounded-md bg-neutral-800 p-1.25 inset-ring">
          <img className="size-5.5" src={logoUrl} alt={`${name} logo`} />
        </div>
        <Switch
          checked={isIntegrationActive}
          onChange={() => setIsIntegrationActive((prev) => !prev)}
        />
      </div>
      <h3 className="text-heading-5-font-size leading-heading-5-line-height">
        {name}
      </h3>
      <p className="line-clamp-2 text-ellipsis">{description}</p>
    </article>
  )
}
