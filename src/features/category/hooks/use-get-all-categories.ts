import { CustomError } from 'core/types/custom-error'
import getAllCategoriesService, {
  Response,
} from 'features/category/services/get-all-categories'
import { useQuery } from 'react-query'

export const useGetAllCategories = () => {
  const { data, error, isLoading } = useQuery<Response, CustomError>(
    '/categories',
    () => getAllCategoriesService()
  )

  return { data, error, isLoading }
}
