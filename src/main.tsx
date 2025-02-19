import DashboardRoutes from '@routes/dashboard-routes'
import IntegrationsContextProvider from '@services/contexts/integrations-context'
import ThemeContextProvider from '@services/contexts/theme-context'
import UserInformationContextProvider from '@services/contexts/user-information-context'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './assets/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <UserInformationContextProvider>
        <IntegrationsContextProvider>
          <ThemeContextProvider>
            <DashboardRoutes />
          </ThemeContextProvider>
        </IntegrationsContextProvider>
      </UserInformationContextProvider>
    </BrowserRouter>
  </StrictMode>
)
