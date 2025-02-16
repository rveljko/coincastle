import IntegrationCardsList from '@components/dashboard-components/integration-cards-list'
import Button from '@components/ui/button'
import { useIntegrations } from '@services/contexts/integrations-context'

export default function IntegrationsSection() {
  const {
    integrationIds,
    getSortedIntegrations,
    removeIntegrationIds,
    updateIntegrationStatus,
  } = useIntegrations()

  const isButtonDisabled = !integrationIds.length

  return (
    <section>
      <h2 className="text-heading-4-font-size mb-2">Connected Applications</h2>
      <IntegrationCardsList
        className="mb-4"
        integrations={getSortedIntegrations()}
      />
      <Button
        variant="primary"
        size="large"
        disabled={isButtonDisabled}
        className="ml-auto"
        onClick={() => {
          integrationIds.forEach((id) => {
            updateIntegrationStatus(id)
          })
          removeIntegrationIds()
        }}
      >
        Save Changes
      </Button>
    </section>
  )
}
