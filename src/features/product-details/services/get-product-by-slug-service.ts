import { handleError } from 'core/helpers/handle-error'
import { api } from 'core/lib/api'
import { Product } from 'features/product/types/product'

export type Params = {
  search?: string
}
export type Response = Product[]
type ProductBySlugServiceType = (slug: string) => Promise<Response>
const getProductBySlugService: ProductBySlugServiceType = async (slug) => {
  try {
    const response = await api.get<Product[]>(`/products?slug_like=${slug}`)
    return response.data
  } catch (error: any) {
    throw handleError(error)
  }
}

export default getProductBySlugService
