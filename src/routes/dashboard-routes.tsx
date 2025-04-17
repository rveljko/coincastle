import CoinPageSkeleton from '@components/dashboard-components/coin-page-skeleton'
import CryptoCurrenciesPageSkeleton from '@components/dashboard-components/crypto-currencies-page-skeleton'
import NftsPageSkeleton from '@components/dashboard-components/nfts-page-skeleton'
import WalletPageSkeleton from '@components/dashboard-components/wallet-page-skeleton'
import DashboardLayout from '@layouts/dashboard-layout'
import SettingsLayout from '@layouts/settings-layout'
import AccountPage from '@pages/dashboard-pages/account-page'
import GuidePage from '@pages/dashboard-pages/guide-page'
import GuidesPage from '@pages/dashboard-pages/guides-page'
import HelpCenterPage from '@pages/dashboard-pages/help-center-page'
import IntegrationsPage from '@pages/dashboard-pages/integrations-page'
import NftCollectionPage from '@pages/dashboard-pages/nft-collection-page'
import NftPage from '@pages/dashboard-pages/nft-page'
import NftWalletPage from '@pages/dashboard-pages/nft-wallet-page'
import PasswordPage from '@pages/dashboard-pages/password-page'
import PreferencesPage from '@pages/dashboard-pages/preferences-page'
import StockPage from '@pages/dashboard-pages/stock-page'
import StocksPage from '@pages/dashboard-pages/stocks-page'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const CryptoCurrenciesPage = lazy(
  () => import('@pages/dashboard-pages/crypto-currencies-page')
)
const WalletPage = lazy(() => import('@pages/dashboard-pages/wallet-page'))
const CoinPage = lazy(() => import('@pages/dashboard-pages/coin-page'))
const NftsPage = lazy(() => import('@pages/dashboard-pages/nfts-page'))

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<WalletPageSkeleton />}>
              <WalletPage />
            </Suspense>
          }
        />
        <Route
          path="crypto"
          element={
            <Suspense fallback={<CryptoCurrenciesPageSkeleton />}>
              <CryptoCurrenciesPage />
            </Suspense>
          }
        />
        <Route
          path="coin/:coinId"
          element={
            <Suspense fallback={<CoinPageSkeleton />}>
              <CoinPage />
            </Suspense>
          }
        />
        <Route
          path="nfts"
          element={
            <Suspense fallback={<NftsPageSkeleton />}>
              <NftsPage />
            </Suspense>
          }
        />
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
