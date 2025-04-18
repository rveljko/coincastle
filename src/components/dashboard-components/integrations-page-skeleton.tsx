import IntegrationsSectionSkeleton from '@components/dashboard-components/integrations-section-skeleton'
import { TITLE_PREFIX } from '@utils/constants'

export default function IntegrationsPageSkeleton() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Integrations`}</title>
      <IntegrationsSectionSkeleton />
    </>
  )
}
