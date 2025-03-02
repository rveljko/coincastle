import Accordion from '@components/dashboard-components/ui/accordion'
import { faq } from '@data/faq'

type FaqSectionProps = {
  className?: string
}

export default function FaqSection({ className }: FaqSectionProps) {
  return (
    <section className={className}>
      <h2 className="text-heading-4-font-size leading-heading-4-line-height mb-2">
        FAQ
      </h2>
      <Accordion defaultActive="item-1">
        {faq.map(({ id, summary, details }) => (
          <Accordion.Item value={`item-${id}`} key={id}>
            <Accordion.Summary valueForItem={`item-${id}`}>
              {summary}
            </Accordion.Summary>
            <Accordion.Details>{details}</Accordion.Details>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  )
}
