import LandingPageLayout from '@layouts/landing-page-layout'
import AboutUsPage from '@pages/landing-pages/about-us-page'
import CustomersPage from '@pages/landing-pages/customers-page'
import FeaturesPage from '@pages/landing-pages/features-page'
import IntegrationsPage from '@pages/landing-pages/integrations-page'
import LandingPage from '@pages/landing-pages/landing-page'
import PrivacyPolicyPage from '@pages/landing-pages/privacy-policy-page'
import SecurityPage from '@pages/landing-pages/security-page'
import TermsOfServicePage from '@pages/landing-pages/terms-of-service-page'
import { Route, Routes } from 'react-router-dom'

export default function LandingPageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="customers" element={<CustomersPage />} />
        <Route path="integrations" element={<IntegrationsPage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="terms-of-service" element={<TermsOfServicePage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="security" element={<SecurityPage />} />
      </Route>
    </Routes>
  )
}
