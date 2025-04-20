import NotFoundPageSkeleton from '@components/dashboard-components/not-found-page-skeleton'
import SettingsLayoutSkeleton from '@components/dashboard-components/settings-layout-skeleton'
import DashboardLayout from '@layouts/dashboard-layout'
import AccountPage from '@pages/dashboard-pages/account-page'
import CoinPage from '@pages/dashboard-pages/coin-page'
import CryptoCurrenciesPage from '@pages/dashboard-pages/crypto-currencies-page'
import GuidePage from '@pages/dashboard-pages/guide-page'
import GuidesPage from '@pages/dashboard-pages/guides-page'
import HelpCenterPage from '@pages/dashboard-pages/help-center-page'
import IntegrationsPage from '@pages/dashboard-pages/integrations-page'
import NftCollectionPage from '@pages/dashboard-pages/nft-collection-page'
import NftPage from '@pages/dashboard-pages/nft-page'
import NftWalletPage from '@pages/dashboard-pages/nft-wallet-page'
import NftsPage from '@pages/dashboard-pages/nfts-page'
import PasswordPage from '@pages/dashboard-pages/password-page'
import PreferencesPage from '@pages/dashboard-pages/preferences-page'
import StockPage from '@pages/dashboard-pages/stock-page'
import StocksPage from '@pages/dashboard-pages/stocks-page'
import WalletPage from '@pages/dashboard-pages/wallet-page'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const SettingsLayout = lazy(() => import('@layouts/settings-layout'))
const NotFoundPage = lazy(() => import('@pages/dashboard-pages/not-found-page'))

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<WalletPage />} />
        <Route path="crypto" element={<CryptoCurrenciesPage />} />
        <Route path="coin/:coinId" element={<CoinPage />} />
        <Route path="nfts" element={<NftsPage />} />
        <Route
          path="collection/:contractAddress"
          element={<NftCollectionPage />}
        />
        <Route
          path="collection/:contractAddress/:tokenId"
          element={<NftPage />}
        />
        <Route path="wallet/:walletAddress" element={<NftWalletPage />} />
        <Route path="stocks" element={<StocksPage />} />
        <Route path="stock/:stockSymbol" element={<StockPage />} />
        <Route path="guides" element={<GuidesPage />} />
        <Route path="guide/:guide" element={<GuidePage />} />
        <Route path="help-center" element={<HelpCenterPage />} />
        <Route
          path="settings"
          element={
            <Suspense fallback={<SettingsLayoutSkeleton />}>
              <SettingsLayout />
            </Suspense>
          }
        >
          <Route index element={<AccountPage />} />
          <Route path="password" element={<PasswordPage />} />
          <Route path="preferences" element={<PreferencesPage />} />
          <Route path="integrations" element={<IntegrationsPage />} />
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<NotFoundPageSkeleton />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}
