import Container from '@components/container'
import GuidesSection from '@sections/dashboard-sections/guides-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function GuidesPage() {
  return (
    <Container className="max-w-(--small-container-width) px-0 py-4">
      <title>{`${TITLE_PREFIX}Guides`}</title>
      <GuidesSection />
    </Container>
  )
}
