import Switch from '@components/dashboard-components/ui/switch'
import { useIntegrations } from '@services/contexts/integrations-context'
import { Integration } from '@utils/types'
import { useState } from 'react'

type IntegrationCardProps = {
  integration: Integration
}

export default function IntegrationCard({
  integration: { id, name, description, logoUrl, isActive },
}: IntegrationCardProps) {
  const [isIntegrationActive, setIsIntegrationActive] = useState(isActive)
  const { addIntegrationId } = useIntegrations()

  return (
    <article className="rounded-md p-2 shadow-[inset_0_0_0_1px_hsl(from_var(--color-clickable)_h_s_l_/_20%)]">
      <div className="mb-1 flex items-start justify-between">
        <div className="max-w-max rounded-md bg-neutral-800 p-1.25 shadow-[inset_0_0_0_1px_hsl(from_var(--color-clickable)_h_s_l_/_20%)]">
          <img className="size-5.5" src={logoUrl} alt={`${name} logo`} />
        </div>
        <Switch
          checked={isIntegrationActive}
          onChange={() => {
            setIsIntegrationActive((prev) => !prev)
            addIntegrationId(id)
          }}
        />
      </div>
      <h3 className="text-heading-5-font-size">{name}</h3>
      <p className="line-clamp-2 max-w-50 text-ellipsis">{description}</p>
    </article>
  )
}
