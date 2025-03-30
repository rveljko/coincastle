import Container from '@components/container'
import HelpCenterHeader from '@components/dashboard-components/help-center-header'
import ContactUsSection from '@sections/dashboard-sections/help-center-sections/contact-us-section'
import FaqSection from '@sections/dashboard-sections/help-center-sections/faq-section'
import GuidesSection from '@sections/dashboard-sections/help-center-sections/guides-section'
import { TITLE_PREFIX } from '@utils/constants'

export default function HelpCenterPage() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Help Center`}</title>
      <Container className="flex max-w-(--small-container-width) flex-col gap-4 px-0 py-4">
        <HelpCenterHeader />
        <ContactUsSection />
        <GuidesSection />
        <FaqSection />
      </Container>
    </>
  )
}
