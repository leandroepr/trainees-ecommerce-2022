import { handleError } from 'core/helpers/handle-error'
import { api } from 'core/lib/api'
import { Product } from 'features/product/types/product'

export type Params = {
  category?: string
  search?: string
  size?: number
  page?: number
}
export type Response = Product[]
type ServiceType = (params?: Params) => Promise<Response>
const getAllProductsService: ServiceType = async (params) => {
  const filters = [
    params?.category && `categoryId=${params.category}`,
    params?.search && `slug_like=${params.search}`,
    params?.search && `name_like=${params.search}`,
    params?.size && `_limit=${params.size}`,
    params?.page && `_page=${params.page}`,
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
