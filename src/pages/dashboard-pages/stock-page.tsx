import PopularStocksSection from '@sections/dashboard-sections/popular-stocks-section'
import StockInformationSection from '@sections/dashboard-sections/stock-information-section'
import { useParams } from 'react-router-dom'

export default function StockPage() {
  const { stockSymbol } = useParams()

  if (!stockSymbol) return

  return (
    <>
      <StockInformationSection stockSymbol={stockSymbol} />
      <PopularStocksSection />
    </>
  )
}
