import LandingPageLayout from '@layouts/landing-page-layout'
import LandingPage from '@pages/landing-pages/landing-page'
import { Route, Routes } from 'react-router-dom'

export default function LandingPageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<LandingPage />} />
      </Route>
    </Routes>
  )
}
