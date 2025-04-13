import Keyboard from '@components/landing-page-components/keyboard'
import BentoCard from '@components/landing-page-components/ui/bento-card'

export default function KeyboardShortcutsFeatureBentoCard() {
  return (
    <BentoCard>
      <BentoCard.Body className="overflow-hidden">
        <Keyboard />
      </BentoCard.Body>
      <BentoCard.Header>
        <BentoCard.Heading>Navigate with Keyboard Shortcuts</BentoCard.Heading>
        <BentoCard.Paragraph>
          Boost your efficiency with keyboard shortcuts that streamline your
          CoinCastle experience
        </BentoCard.Paragraph>
      </BentoCard.Header>
    </BentoCard>
  )
}
