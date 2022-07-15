import { useQuery } from 'react-query'
import getAllProductsService, {
  Response,
} from 'services/products/get-all-products'
import { CustomError } from 'types/custom-error'

export const useGetAllProducts = () => {
  const { data, error, isLoading } = useQuery<Response, CustomError>(
    '/products',
    () => getAllProductsService()
  )

  return { data, error, isLoading }
}
