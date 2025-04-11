import {
  CryptoResultsSkeleton,
  StockResultsSkeleton,
} from '@components/dashboard-components/search-modal-skeleton'
import FirstLetterImageGenerator from '@components/dashboard-components/ui/first-letter-image-generator'
import InformationList from '@components/dashboard-components/ui/information-list'
import VerifiedBadge from '@components/dashboard-components/ui/verified-badge'
import useGetCryptoCurrenciesBySearch from '@hooks/queries/use-get-crypto-currencies-by-search'
import useGetNftCollectionsBySearch from '@hooks/queries/use-get-nft-collections-by-search'
import useGetStocksBySearch from '@hooks/queries/use-get-stocks-by-search'
import useDebounce from '@hooks/use-debounce'
import SearchIcon from '@icons/search-icon'
import isHttpError from '@utils/helpers/is-http-error'
import { useState } from 'react'
import { Link } from 'react-router-dom'

type SearchModalProps = {
  closeModal: () => void
}

export default function SearchModal({ closeModal }: SearchModalProps) {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search)

  return (
    <article className="border-section-outline rounded-lg border bg-(image:--modal-background)">
      <header className="border-section-outline relative border-b">
        <form>
          <span className="absolute top-1/2 left-5 -translate-y-1/2">
            <SearchIcon className="size-4" />
          </span>
          <input
            type="text"
            id="search"
            placeholder="Search Anything..."
            className="w-full p-4 pl-10 text-neutral-100 outline-0 placeholder:text-neutral-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </header>
      <div className="flex flex-col gap-4 p-4">
        {search.length === 0 ? (
          <StartSearch />
        ) : (
          <>
            <CryptoResults search={debouncedSearch} closeModal={closeModal} />
            <NftCollectionResults
              search={debouncedSearch}
              closeModal={closeModal}
            />
            <StockResults search={debouncedSearch} closeModal={closeModal} />
          </>
        )}
      </div>
    </article>
  )
}

function StartSearch() {
  return (
    <div className="py-8">
      <SearchIcon className="mx-auto mb-2 size-8" />
      <h3 className="mx-auto mb-1 text-center">Let's Begin Your Search</h3>
      <p className="text-center">
        Please enter something <br /> to find Crypto or Stocks.
      </p>
    </div>
  )
}

type CryptoResultsProps = {
  search: string
  closeModal: () => void
}

function CryptoResults({ search, closeModal }: CryptoResultsProps) {
  const { data, isPending, error } = useGetCryptoCurrenciesBySearch(search)

  if (isPending) return <CryptoResultsSkeleton />

  if (error) return null

  if (data.length === 0) return null

  return (
    <div>
      <p className="mb-2">Crypo Currencies</p>
      <InformationList className="space-y-0 overflow-x-auto">
        {data.map(({ id, name, symbol, thumb }) => (
          <InformationList.Item
            key={id}
            className="relative p-2 hover:bg-neutral-800"
          >
            <Link to={`/dashboard/coin/${id}`} onClick={closeModal}>
              <span className="absolute inset-0"></span>
              <div className="flex w-max items-center gap-1">
                <img
                  className="size-5.5 rounded-full"
                  src={thumb}
                  title={name}
                  alt={name}
                  loading="lazy"
                />
                <div className="flex items-center gap-0.5">
                  {name}
                  <span className="text-neutral-400">{symbol}</span>
                </div>
              </div>
            </Link>
          </InformationList.Item>
        ))}
      </InformationList>
    </div>
  )
}

type NftCollectionResultsProps = {
  search: string
  closeModal: () => void
}

function NftCollectionResults({
  search,
  closeModal,
}: NftCollectionResultsProps) {
  const { data, isPending, error } = useGetNftCollectionsBySearch(search)

  if (isPending) return <div>loading...</div>

  if (error || isHttpError(data.code)) return null

  if (data.data.length === 0) return null

  return (
    <div>
      <p className="mb-2">NFT Collections</p>
      <InformationList className="space-y-0 overflow-x-auto">
        {data.data.map(
          ({ contract_address, name, logo_url, opensea_verified }) => (
            <InformationList.Item
              key={contract_address}
              className="relative p-2 hover:bg-neutral-800"
            >
              <Link
                to={`/dashboard/collection/${contract_address}`}
                onClick={closeModal}
              >
                <span className="absolute inset-0"></span>
                <div className="flex w-max items-center gap-1">
                  <img
                    className="size-5.5 rounded-full"
                    src={logo_url}
                    title={name}
                    alt={name}
                    loading="lazy"
                  />
                  <div className="flex items-center gap-0.5">
                    {name}
                    {opensea_verified && <VerifiedBadge isSmall />}
                  </div>
                </div>
              </Link>
            </InformationList.Item>
          )
        )}
      </InformationList>
    </div>
  )
}

type StockResultsProps = {
  search: string
  closeModal: () => void
}

function StockResults({ search, closeModal }: StockResultsProps) {
  const { data, isPending, error } = useGetStocksBySearch(search)

  if (isPending) return <StockResultsSkeleton />

  if (error) return null

  if (data.length === 0) return null

  return (
    <div>
      <p className="mb-2">Stocks</p>
      <InformationList className="space-y-0 overflow-x-auto">
        {data.map(({ name, symbol }) => (
          <InformationList.Item
            key={`${name}/${symbol}`}
            className="relative p-2 hover:bg-neutral-800"
          >
            <Link to={`/dashboard/stock/${symbol}`} onClick={closeModal}>
              <span className="absolute inset-0"></span>
              <div className="flex w-max items-center gap-1">
                <FirstLetterImageGenerator word={name} isSmall />
                <div className="flex items-center gap-0.5 break-all">
                  {name}
                  <span className="text-neutral-400">{symbol}</span>
                </div>
              </div>
            </Link>
          </InformationList.Item>
        ))}
      </InformationList>
    </div>
  )
}
