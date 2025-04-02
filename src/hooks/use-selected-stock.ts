import { useSearchParams } from 'react-router-dom'

export default function useSelectedStock() {
  const [searchParams, setSearchParams] = useSearchParams()
  const stockSymbol = searchParams.get('stock') || 'AAPL'

  function setStock(stockSymbol: string) {
    setSearchParams((prevParams) => {
      prevParams.set('stock', stockSymbol)
      return prevParams
    })
  }

  return { stockSymbol, setStock }
}
