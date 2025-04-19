import AccountPageSkeleton from '@components/dashboard-components/account-page-skeleton'
import CoinPageSkeleton from '@components/dashboard-components/coin-page-skeleton'
import GuidePageSkeleton from '@components/dashboard-components/guide-page-skeleton'
import GuidesPageSkeleton from '@components/dashboard-components/guides-page-skeleton'
import HelpCenterPageSkeleton from '@components/dashboard-components/help-center-page-skeleton'
import IntegrationsPageSkeleton from '@components/dashboard-components/integrations-page-skeleton'
import NftCollectionPageSkeleton from '@components/dashboard-components/nft-collection-page-skeleton'
import NftWalletPageSkeleton from '@components/dashboard-components/nft-wallet-page-skeleton'
import NftsPageSkeleton from '@components/dashboard-components/nfts-page-skeleton'
import NotFoundPageSkeleton from '@components/dashboard-components/not-found-page-skeleton'
import PasswordPageSkeleton from '@components/dashboard-components/password-page-skeleton'
import PreferencesPageSkeleton from '@components/dashboard-components/preferences-page-skeleton'
import SettingsLayoutSkeleton from '@components/dashboard-components/settings-layout-skeleton'
import StockPageSkeleton from '@components/dashboard-components/stock-page-skeleton'
import StocksPageSkeleton from '@components/dashboard-components/stocks-page-skeleton'
import DashboardLayout from '@layouts/dashboard-layout'
import CryptoCurrenciesPage from '@pages/dashboard-pages/crypto-currencies-page'
import WalletPage from '@pages/dashboard-pages/wallet-page'
import NftPageSkeleton from '@sections/dashboard-sections/nft-page-skeleton'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
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
const SettingsLayout = lazy(() => import('@layouts/settings-layout'))
const AccountPage = lazy(() => import('@pages/dashboard-pages/account-page'))
const PasswordPage = lazy(() => import('@pages/dashboard-pages/password-page'))
const PreferencesPage = lazy(
  () => import('@pages/dashboard-pages/preferences-page')
)
const IntegrationsPage = lazy(
  () => import('@pages/dashboard-pages/integrations-page')
)
const NotFoundPage = lazy(() => import('@pages/dashboard-pages/not-found-page'))

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<WalletPage />} />
        <Route path="crypto" element={<CryptoCurrenciesPage />} />
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
        <Route
          path="settings"
          element={
            <Suspense fallback={<SettingsLayoutSkeleton />}>
              <SettingsLayout />
            </Suspense>
          }
        >
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
          <Route
            path="integrations"
            element={
              <Suspense fallback={<IntegrationsPageSkeleton />}>
                <IntegrationsPage />
              </Suspense>
            }
          />
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
