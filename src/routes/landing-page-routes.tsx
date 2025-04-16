import LandingPageLayout from '@layouts/landing-page-layout'
import CustomersPage from '@pages/landing-pages/customers-page'
import FeaturesPage from '@pages/landing-pages/features-page'
import IntegrationsPage from '@pages/landing-pages/integrations-page'
import LandingPage from '@pages/landing-pages/landing-page'
import { Route, Routes } from 'react-router-dom'

export default function LandingPageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="customers" element={<CustomersPage />} />
        <Route path="integrations" element={<IntegrationsPage />} />
      </Route>
    </Routes>
  )
}
