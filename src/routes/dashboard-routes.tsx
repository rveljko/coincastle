import DashboardLayout from '@layouts/dashboard-layout'
import CryptoCurrenciesPage from '@pages/dashboard-pages/crypto-currencies-page'
import GuidesPage from '@pages/dashboard-pages/guides-page'
import HelpCenterPage from '@pages/dashboard-pages/help-center-page'
import NftsPage from '@pages/dashboard-pages/nfts-page'
import SettingsPage from '@pages/dashboard-pages/settings-page'
import StocksPage from '@pages/dashboard-pages/stocks-page'
import WalletPage from '@pages/dashboard-pages/wallet-page'
import { Route, Routes } from 'react-router-dom'

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<WalletPage />} />
        <Route path="crypto-currencies" element={<CryptoCurrenciesPage />} />
        <Route path="nfts" element={<NftsPage />} />
        <Route path="stocks" element={<StocksPage />} />
        <Route path="guides" element={<GuidesPage />} />
        <Route path="help-center" element={<HelpCenterPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  )
}
