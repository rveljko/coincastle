import Container from '@components/container'
import MarkdownContentLoader from '@components/dashboard-components/markdown-content-loader'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import TermsOfServiceSectionSkeleton from '@components/landing-page-components/terms-of-service-section-skeleton'
import useGetTermsOfService from '@hooks/queries/use-get-terms-of-service'

export default function TermsOfServiceSection() {
  const { data, isPending, error } = useGetTermsOfService()

  if (isPending) return <TermsOfServiceSectionSkeleton />

  if (error)
    return (
      <section>
        <ErrorMessage />
      </section>
    )

  return (
    <section className="py-16">
      <Container className="max-w-(--small-container-width)">
        <MarkdownContentLoader content={data} />
      </Container>
    </section>
  )
}
