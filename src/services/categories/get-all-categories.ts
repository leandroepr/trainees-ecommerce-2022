import { handleError } from 'helpers/handle-error'
import { api } from 'lib/api'
import { Category } from 'types/category'

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
