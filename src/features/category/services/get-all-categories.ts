import { handleError } from 'core/helpers/handle-error'
import { api } from 'core/lib/api'
import { Category } from 'features/category/types/category'

export type Params = null
export type Response = Category[]
type ServiceType = (params?: Params) => Promise<Response>
const getAllCategoriesService: ServiceType = async (params) => {
  try {
    const response = await api.get<Category[]>('/categories', { params })

    return response.data
  } catch (error: any) {
    throw handleError(error)
  }
}

export default getAllCategoriesService
