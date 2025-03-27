import Container from '@components/container'
import GuideSection from '@sections/dashboard-sections/guide-section'
import { TITLE_PREFIX } from '@utils/constants'
import { getGuideTitle } from '@utils/helpers/get-guide-title'
import { useParams } from 'react-router-dom'

export default function GuidePage() {
  const { guide } = useParams()

  if (!guide) return

  return (
    <Container className="max-w-(--small-container-width) px-0">
      <title>{`${TITLE_PREFIX}${getGuideTitle(guide)}`}</title>
      <GuideSection guide={guide} />
    </Container>
  )
}
