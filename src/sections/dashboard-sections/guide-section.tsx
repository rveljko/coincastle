import GuideSectionSkeleton from '@components/dashboard-components/guide-section-skeleton'
import MarkdownContentLoader from '@components/dashboard-components/markdown-content-loader'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import Button from '@components/ui/button'
import useGetGuide from '@hooks/queries/use-get-guide'
import ArrowNarrowLeftIcon from '@icons/arrow-narrow-left-icon'
import Section from '@sections/dashboard-sections/section'

type GuideSectionProps = {
  guide: string
}

export default function GuideSection({ guide }: GuideSectionProps) {
  const { data, isPending, error } = useGetGuide(guide)

  if (isPending) return <GuideSectionSkeleton />

  if (error) return <ErrorMessage />

  return (
    <Section>
      <Button
        variant="link"
        leftIcon={<ArrowNarrowLeftIcon />}
        className="mb-2 pl-0"
        href="/dashboard/guides"
      >
        Back to Guides
      </Button>
      <MarkdownContentLoader content={data} />
    </Section>
  )
}
