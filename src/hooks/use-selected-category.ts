import { Category } from '@utils/types'
import { useSearchParams } from 'react-router-dom'

export default function useSelectedCategory() {
  const [searchParams, setSearchParams] = useSearchParams()
  const category = (searchParams.get('category') || 'crypto') as Category

  function setCategory(category: Category) {
    setSearchParams((prevParams) => {
      prevParams.set('category', category)
      return prevParams
    })
  }

  const isCategoryCrypto = category === 'crypto'

  const isCategoryStocks = category === 'stocks'

  return { category, isCategoryCrypto, isCategoryStocks, setCategory }
}
