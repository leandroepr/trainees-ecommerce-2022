import { CustomError } from 'core/types/custom-error'
import { useQuery } from 'react-query'
import getAllCategoriesWithProductsService, {
  Response,
} from '../services/get-all-categories-with-products'

export const useGetAllCategoriesWithProducts = () => {
  const { data, error, isLoading } = useQuery<Response, CustomError>(
    '/categories-with-products',
    () => getAllCategoriesWithProductsService()
  )

  return { data, error, isLoading }
}
