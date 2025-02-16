import IntegrationCardsList from '@components/dashboard-components/integration-cards-list'
import Button from '@components/ui/button'
import { integrations } from '@data/integrations'

export default function IntegrationsSection() {
  return (
    <section>
      <h2 className="text-heading-4-font-size mb-2">Connected Applications</h2>
      <IntegrationCardsList className="mb-4" integrations={integrations} />
      <Button variant="primary" size="large" disabled className="ml-auto">
        Save Changes
      </Button>
    </section>
  )
}
