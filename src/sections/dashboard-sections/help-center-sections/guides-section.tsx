import Button from '@components/ui/button'
import ArrowNarrowRightIcon from '@icons/arrow-narrow-right-icon'

type GuideSectionProps = {
  className?: string
}

export default function GuidesSection({ className }: GuideSectionProps) {
  return (
    <section className={className}>
      <h2 className="text-heading-4-font-size mb-2">Guides</h2>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-heading-6-font-size mb-2 max-w-76">
            If you need assistance with any actions, visit our Guides page for
            helpful step-by-step instructions.
          </h3>
          <p className="max-w-76">
            We offers step-by-step instructions to ensure you can effectively
            navigate the platform and utilize its features.
          </p>
        </div>
        <Button
          href="/dashboard/guides"
          variant="link"
          rightIcon={<ArrowNarrowRightIcon />}
        >
          Guides
        </Button>
      </div>
    </section>
  )
}
