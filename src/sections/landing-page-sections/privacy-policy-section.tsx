import Container from '@components/container'
import MarkdownContentLoader from '@components/dashboard-components/markdown-content-loader'
import ErrorMessage from '@components/dashboard-components/ui/error-message'
import PrivacyPolicySectionSkeleton from '@components/landing-page-components/privacy-policy-section-skeleton'
import useGetPrivacyPolicy from '@hooks/queries/use-get-privacy-policy'

export default function PrivacyPolicySection() {
  const { data, isPending, error } = useGetPrivacyPolicy()

  if (isPending) return <PrivacyPolicySectionSkeleton />

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
