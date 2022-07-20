import { useQuery } from 'react-query'
import getAllCategoriesService, {
  Response,
} from 'services/categories/get-all-categories'
import { CustomError } from 'types/custom-error'

export const useGetAllCategories = () => {
  const { data, error, isLoading } = useQuery<Response, CustomError>(
    '/categories',
    () => getAllCategoriesService()
  )

  return { data, error, isLoading }
}
