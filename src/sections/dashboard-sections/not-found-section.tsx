import NotFoundCard from '@components/dashboard-components/not-found-card'

export default function NotFoundSection() {
  return (
    <section className="h-full">
      <NotFoundCard linkLabel="Back to Wallet Page" linkHref="/dashboard" />
    </section>
  )
}
