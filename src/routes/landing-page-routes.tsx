import LandingPageLayout from '@layouts/landing-page-layout'
import FeaturesPage from '@pages/landing-pages/features-page'
import LandingPage from '@pages/landing-pages/landing-page'
import { Route, Routes } from 'react-router-dom'

export default function LandingPageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="features" element={<FeaturesPage />} />
      </Route>
    </Routes>
  )
}
