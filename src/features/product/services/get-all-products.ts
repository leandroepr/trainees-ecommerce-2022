import { handleError } from 'core/helpers/handle-error'
import { api } from 'core/lib/api'
import { Product } from 'features/product/types/product'

export type Params = {
  category?: string
  search?: string
}
export type Response = Product[]
type ServiceType = (params?: Params) => Promise<Response>
const getAllProductsService: ServiceType = async (params) => {
  const filters = [
    params?.category && `categoryId=${params.category}`,
    params?.search && `name_like=${params.search}`,
    params?.search && `slug_like=${params.search}`,
  ]
    .filter(Boolean)
    .join('&')
  const dynamicUrl = filters ? `?${filters}` : ''
  try {
    const response = await api.get<Product[]>(`/products${dynamicUrl}`)
    return response.data
  } catch (error: any) {
    throw handleError(error)
  }
}

export default getAllProductsService
