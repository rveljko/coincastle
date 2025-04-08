import ScrollToTop from '@components/scroll-to-top'
import DashboardRoutes from '@routes/dashboard-routes'
import LandingPageRoutes from '@routes/landing-page-routes'
import IntegrationsContextProvider from '@services/contexts/integrations-context'
import ThemeContextProvider from '@services/contexts/theme-context'
import UserInformationContextProvider from '@services/contexts/user-information-context'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <UserInformationContextProvider>
          <IntegrationsContextProvider>
            <ThemeContextProvider>
              <LandingPageRoutes />
              <DashboardRoutes />
            </ThemeContextProvider>
          </IntegrationsContextProvider>
        </UserInformationContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)
