import DashboardRoutes from '@routes/dashboard-routes'
import UserInformationContextProvider from '@services/contexts/user-information-context'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './assets/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <UserInformationContextProvider>
        <DashboardRoutes />
      </UserInformationContextProvider>
    </BrowserRouter>
  </StrictMode>
)
