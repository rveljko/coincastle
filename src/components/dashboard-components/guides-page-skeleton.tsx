import Container from '@components/container'
import GuidesSectionSkeleton from '@components/dashboard-components/guides-section-skeleton'
import { TITLE_PREFIX } from '@utils/constants'

export default function GuidesPageSkeleton() {
  return (
    <Container className="max-w-(--small-container-width) px-0 py-4">
      <title>{`${TITLE_PREFIX}Guides`}</title>
      <GuidesSectionSkeleton />
    </Container>
  )
}
