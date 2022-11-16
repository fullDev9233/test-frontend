import axios from '../utils/setupInterceptor'

export const getStockDataBySymbol = async (symbol: string) => {
  try {
    const { data } = await axios.post('/get-stock', { symbol })
    return data
  } catch (error: any) {
    throw new Error(error)
  }
}
