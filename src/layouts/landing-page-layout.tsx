import Container from '@components/container'
import Footer from '@components/landing-page-components/footer'
import Header from '@components/landing-page-components/header'
import { Outlet } from 'react-router-dom'

export default function LandingPageLayout() {
  return (
    <>
      <Container className="fixed top-4 bottom-4 left-1/2 -translate-x-1/2">
        <Header />
      </Container>
      <main className="pt-20.5">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
