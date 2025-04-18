import AccountPageSkeleton from '@components/dashboard-components/account-page-skeleton'
import CoinPageSkeleton from '@components/dashboard-components/coin-page-skeleton'
import CryptoCurrenciesPageSkeleton from '@components/dashboard-components/crypto-currencies-page-skeleton'
import GuidePageSkeleton from '@components/dashboard-components/guide-page-skeleton'
import GuidesPageSkeleton from '@components/dashboard-components/guides-page-skeleton'
import HelpCenterPageSkeleton from '@components/dashboard-components/help-center-page-skeleton'
import NftCollectionPageSkeleton from '@components/dashboard-components/nft-collection-page-skeleton'
import NftWalletPageSkeleton from '@components/dashboard-components/nft-wallet-page-skeleton'
import NftsPageSkeleton from '@components/dashboard-components/nfts-page-skeleton'
import PasswordPageSkeleton from '@components/dashboard-components/password-page-skeleton'
import PreferencesPageSkeleton from '@components/dashboard-components/preferences-page-skeleton'
import StockPageSkeleton from '@components/dashboard-components/stock-page-skeleton'
import StocksPageSkeleton from '@components/dashboard-components/stocks-page-skeleton'
import WalletPageSkeleton from '@components/dashboard-components/wallet-page-skeleton'
import DashboardLayout from '@layouts/dashboard-layout'
import SettingsLayout from '@layouts/settings-layout'
import IntegrationsPage from '@pages/dashboard-pages/integrations-page'
import NftPageSkeleton from '@sections/dashboard-sections/nft-page-skeleton'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const CryptoCurrenciesPage = lazy(
  () => import('@pages/dashboard-pages/crypto-currencies-page')
)
const WalletPage = lazy(() => import('@pages/dashboard-pages/wallet-page'))
const CoinPage = lazy(() => import('@pages/dashboard-pages/coin-page'))
const NftsPage = lazy(() => import('@pages/dashboard-pages/nfts-page'))
const NftCollectionPage = lazy(
  () => import('@pages/dashboard-pages/nft-collection-page')
)
const NftPage = lazy(() => import('@pages/dashboard-pages/nft-page'))
const NftWalletPage = lazy(
  () => import('@pages/dashboard-pages/nft-wallet-page')
)
const StocksPage = lazy(() => import('@pages/dashboard-pages/stocks-page'))
const StockPage = lazy(() => import('@pages/dashboard-pages/stock-page'))
const GuidesPage = lazy(() => import('@pages/dashboard-pages/guides-page'))
const GuidePage = lazy(() => import('@pages/dashboard-pages/guide-page'))
const HelpCenterPage = lazy(
  () => import('@pages/dashboard-pages/help-center-page')
)
const AccountPage = lazy(() => import('@pages/dashboard-pages/account-page'))
const PasswordPage = lazy(() => import('@pages/dashboard-pages/password-page'))
const PreferencesPage = lazy(
  () => import('@pages/dashboard-pages/preferences-page')
)

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
          element={
            <Suspense fallback={<NftCollectionPageSkeleton />}>
              <NftCollectionPage />
            </Suspense>
          }
        />
        <Route
          path="collection/:contractAddress/:tokenId"
          element={
            <Suspense fallback={<NftPageSkeleton />}>
              <NftPage />
            </Suspense>
          }
        />
        <Route
          path="wallet/:walletAddress"
          element={
            <Suspense fallback={<NftWalletPageSkeleton />}>
              <NftWalletPage />
            </Suspense>
          }
        />
        <Route
          path="stocks"
          element={
            <Suspense fallback={<StocksPageSkeleton />}>
              <StocksPage />
            </Suspense>
          }
        />
        <Route
          path="stock/:stockSymbol"
          element={
            <Suspense fallback={<StockPageSkeleton />}>
              <StockPage />
            </Suspense>
          }
        />
        <Route
          path="guides"
          element={
            <Suspense fallback={<GuidesPageSkeleton />}>
              <GuidesPage />
            </Suspense>
          }
        />
        <Route
          path="guide/:guide"
          element={
            <Suspense fallback={<GuidePageSkeleton />}>
              <GuidePage />
            </Suspense>
          }
        />
        <Route
          path="help-center"
          element={
            <Suspense fallback={<HelpCenterPageSkeleton />}>
              <HelpCenterPage />
            </Suspense>
          }
        />
        <Route path="settings" element={<SettingsLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<AccountPageSkeleton />}>
                <AccountPage />
              </Suspense>
            }
          />
          <Route
            path="password"
            element={
              <Suspense fallback={<PasswordPageSkeleton />}>
                <PasswordPage />
              </Suspense>
            }
          />
          <Route
            path="preferences"
            element={
              <Suspense fallback={<PreferencesPageSkeleton />}>
                <PreferencesPage />
              </Suspense>
            }
          />
          <Route path="integrations" element={<IntegrationsPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
