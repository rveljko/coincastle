import Container from '@components/container'

export default function PrivacyPolicySectionSkeleton() {
  return (
    <section className="py-16">
      <Container className="max-w-(--small-container-width)">
        <div className="bg-clickable/10 mb-4 h-10.5 w-full max-w-120 animate-pulse rounded-sm"></div>
        <div className="space-y-4">
          {Array.from({ length: 10 }, (_, index) => index).map((index) => (
            <div className="space-y-2" key={index}>
              <div className="bg-clickable/10 h-6.5 w-full max-w-60 animate-pulse rounded-sm"></div>
              <div className="bg-clickable/10 h-4 w-full animate-pulse rounded-sm"></div>
              <div className="bg-clickable/10 h-4 w-full animate-pulse rounded-sm"></div>
              <div className="bg-clickable/10 h-4 w-full animate-pulse rounded-sm"></div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
