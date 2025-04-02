import { useSearchParams } from "react-router-dom"

export default function useSelectedCoin() {
  const [searchParams, setSearchParams] = useSearchParams()
  const coinId = searchParams.get('coin') || 'bitcoin'

  function setCoin(coinId: string) {
    setSearchParams((prevParams) => {
      prevParams.set('coin', coinId)
      return prevParams
    })
  }

  return {coinId, setCoin}
}
