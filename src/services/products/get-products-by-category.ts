import { handleError } from 'helpers/handle-error'
import { api } from 'lib/api'
import { Product } from 'types/product'

export type Params = string
export type Response = Product[]
type ServiceType = (params?: Params) => Promise<Response>
const getProductsByCategoryService: ServiceType = async (params) => {
  try {
    const response = await api.get<Product[]>(`/products?categoryId=${params}`)
    return response.data
  } catch (error: any) {
    throw handleError(error)
  }
}

export default getProductsByCategoryService
