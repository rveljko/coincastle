import DashboardLayout from '@layouts/dashboard-layout'
import CryptoCurrenciesPage from '@pages/dashboard-pages/crypto-currencies-page'
import NftsPage from '@pages/dashboard-pages/nfts-page'
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
      </Route>
    </Routes>
  )
}
