import Container from '@components/container'
import CustomerBentoCardsList from '@components/landing-page-components/customer-bento-cards-list'
import HeroText from '@components/landing-page-components/hero-text'
import { customers } from '@data/customers'

export default function CustomersSection() {
  return (
    <section className="py-16">
      <Container>
        <HeroText
          heading="Join Our Diverse Community of Successful Customers"
          paragraph="Our platform serves a wide range of customers, empowering businesses to achieve their goals effectively and efficiently"
        />
        <div className="pt-16">
          <CustomerBentoCardsList customers={customers} />
        </div>
      </Container>
    </section>
  )
}
