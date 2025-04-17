import Container from '@components/container'
import GuideSectionSkeleton from '@components/dashboard-components/guide-section-skeleton'

export default function GuidePageSkeleton() {
  return (
    <Container className="max-w-(--small-container-width) px-0">
      <GuideSectionSkeleton />
    </Container>
  )
}
