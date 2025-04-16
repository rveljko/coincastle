import Container from '@components/container'

export default function TermsOfServiceSectionSkeleton() {
  return (
    <section className="py-16">
      <Container className="max-w-(--small-container-width)">
        <div className="bg-clickable/10 mb-4 h-9 w-full max-w-120 animate-pulse rounded-sm"></div>
        <div className="space-y-4">
          {Array.from({ length: 12 }, (_, index) => index).map((index) => (
            <div className="space-y-2" key={index}>
              <div className="bg-clickable/10 h-4 w-full max-w-35 animate-pulse rounded-sm"></div>
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
