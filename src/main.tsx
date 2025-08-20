import ScrollToTop from '@components/scroll-to-top'
import DashboardRoutes from '@routes/dashboard-routes'
import LandingPageRoutes from '@routes/landing-page-routes'
import ChartContextProvider from '@services/contexts/chart-context'
import IntegrationsContextProvider from '@services/contexts/integrations-context'
import ThemeContextProvider from '@services/contexts/theme-context'
import UserInformationContextProvider from '@services/contexts/user-information-context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import HolyLoader from 'holy-loader'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './assets/index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

posthog.init('phc_e0pktfUJpOw363gFB0WCQfUx8KS6FNUzgGBqyvXEz7o', {
  api_host: 'https://eu.i.posthog.com',
  capture_pageview: false,
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <PostHogProvider client={posthog}>
        <BrowserRouter>
          <ScrollToTop />
          <HolyLoader
            color="var(--color-brand-500)"
            height={2}
            ignoreSearchParams
          />
          <UserInformationContextProvider>
            <IntegrationsContextProvider>
              <ThemeContextProvider>
                <ChartContextProvider>
                  <LandingPageRoutes />
                  <DashboardRoutes />
                </ChartContextProvider>
              </ThemeContextProvider>
            </IntegrationsContextProvider>
          </UserInformationContextProvider>
        </BrowserRouter>
      </PostHogProvider>
    </QueryClientProvider>
  </StrictMode>
)
