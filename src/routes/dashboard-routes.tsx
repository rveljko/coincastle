import DashboardLayout from '@layouts/dashboard-layout'
import SettingsLayout from '@layouts/settings-layout'
import AccountPage from '@pages/dashboard-pages/account-page'
import CoinPage from '@pages/dashboard-pages/coin-page'
import CryptoCurrenciesPage from '@pages/dashboard-pages/crypto-currencies-page'
import GuidesPage from '@pages/dashboard-pages/guides-page'
import HelpCenterPage from '@pages/dashboard-pages/help-center-page'
import IntegrationsPage from '@pages/dashboard-pages/integrations-page'
import NftCollectionPage from '@pages/dashboard-pages/nft-collection-page'
import NftsPage from '@pages/dashboard-pages/nfts-page'
import PasswordPage from '@pages/dashboard-pages/password-page'
import PreferencesPage from '@pages/dashboard-pages/preferences-page'
import StocksPage from '@pages/dashboard-pages/stocks-page'
import WalletPage from '@pages/dashboard-pages/wallet-page'
import { Route, Routes } from 'react-router-dom'

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<WalletPage />} />
        <Route path="crypto-currencies" element={<CryptoCurrenciesPage />} />
        <Route path="coin/:coinId" element={<CoinPage />} />
        <Route path="nfts" element={<NftsPage />} />
        <Route
          path="collection/:contractAddress"
          element={<NftCollectionPage />}
        />
        <Route path="stocks" element={<StocksPage />} />
        <Route path="guides" element={<GuidesPage />} />
        <Route path="help-center" element={<HelpCenterPage />} />
        <Route path="settings" element={<SettingsLayout />}>
          <Route index element={<AccountPage />} />
          <Route path="password" element={<PasswordPage />} />
          <Route path="preferences" element={<PreferencesPage />} />
          <Route path="integrations" element={<IntegrationsPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
