import Container from '@components/container'
import Footer from '@components/landing-page-components/footer'
import Header from '@components/landing-page-components/header'
import { Outlet } from 'react-router-dom'

export default function LandingPageLayout() {
  return (
    <>
      <Container className="pointer-events-none fixed top-4 bottom-4 left-1/2 z-999 -translate-x-1/2">
        <Header />
      </Container>
      <main className="relative pt-20.5 before:absolute before:inset-x-0 before:top-0 before:-z-1 before:h-50 before:bg-(image:--light-gradient)">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
