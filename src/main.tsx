import DashboardRoutes from '@routes/dashboard-routes'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './assets/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <DashboardRoutes />
    </BrowserRouter>
  </StrictMode>
)
