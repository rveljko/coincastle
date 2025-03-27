import Container from '@components/container'
import GuideSection from '@sections/dashboard-sections/guide-section'
import { useParams } from 'react-router-dom'

export default function GuidePage() {
  const { guide } = useParams()

  if (!guide) return

  return (
    <Container className="max-w-(--small-container-width) px-0">
      <GuideSection guide={guide} />
    </Container>
  )
}
