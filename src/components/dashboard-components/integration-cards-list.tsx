import IntegrationCard from '@components/dashboard-components/integration-card'
import { Integration } from '@utils/types'
import { cn } from '@utils/utils'

type IntegrationCardsListProps = {
  integrations: Integration[]
  className?: string
}

export default function IntegrationCardsList({
  integrations,
  className,
}: IntegrationCardsListProps) {
  return (
    <ul className={cn('flex flex-wrap gap-2', className)}>
      {integrations.map((integration) => (
        <li className="grow" key={integration.id}>
          <IntegrationCard integration={integration} />
        </li>
      ))}
    </ul>
  )
}
