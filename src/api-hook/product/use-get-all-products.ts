import { useQuery } from 'react-query'
import getAllProductsService, {
  Params,
  Response,
} from 'services/products/get-all-products'
import { CustomError } from 'types/custom-error'

export const useGetAllProducts = (params?: Params) => {
  const { data, error, isLoading } = useQuery<Response, CustomError>(
    ['/products', params],
    () => getAllProductsService(params)
  )

  return { data, error, isLoading }
}
