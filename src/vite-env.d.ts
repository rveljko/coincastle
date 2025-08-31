/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_POSTHOG_KEY: string
  readonly VITE_PUBLIC_POSTHOG_HOST: string
  readonly VITE_COINGECKO_API_KEY: string
  readonly VITE_NFTSCAN_API_KEY: string
  readonly VITE_FMP_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
