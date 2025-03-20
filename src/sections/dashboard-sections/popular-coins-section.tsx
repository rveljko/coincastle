import CryptoCoinsTable from '@components/dashboard-components/crypto-coins-table'
import Button from '@components/ui/button'
import Section from '@sections/dashboard-sections/section'

export default function PopularCoinsSection() {
  return (
    <Section>
      <h2 className="text-heading-4-font-size leading-heading-4-line-height mb-2">
        Popular Coins
      </h2>
      <CryptoCoinsTable numberOfCoins={5} className="mb-1" />
      <Button
        href="/dashboard/crypto-currencies"
        variant="link"
        size="large"
        className="mx-auto"
      >
        View More
      </Button>
    </Section>
  )
}
