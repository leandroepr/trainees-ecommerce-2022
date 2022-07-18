import { handleError } from 'helpers/handle-error'
import { api } from 'lib/api'
import { Product } from 'types/product'

export type Params = null
export type Response = Product[]
type ServiceType = (params?: Params) => Promise<Response>
const getAllProductsService: ServiceType = async (params) => {
  try {
    const response = await api.get<Product[]>('/products', { params })
    return response.data
  } catch (error: any) {
    throw handleError(error)
  }
}

export default getAllProductsService
