import { CustomError } from 'core/types/custom-error'
import getAllProductsService, {
  Params,
  Response,
} from 'features/product/services/get-all-products'
import { useQuery } from 'react-query'

export const useGetAllProducts = (params?: Params) => {
  const { data, error, isLoading } = useQuery<Response, CustomError>(
    ['/products', params],
    () => getAllProductsService(params)
  )

  return { data, error, isLoading }
}
