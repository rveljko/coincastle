import Container from '@components/container'
import HelpCenterHeader from '@components/dashboard-components/help-center-header'
import ContactUsSection from '@sections/dashboard-sections/help-center-sections/contact-us-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function HelpCenterPage() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Help Center`}</title>
      <Container className="max-w-(--help-center-container-width) px-0 py-4">
        <HelpCenterHeader className="mb-4" />
        <ContactUsSection />
      </Container>
    </>
  )
}
