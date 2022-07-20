import { useQuery } from 'react-query'
import getProductsByCategoryService, {
  Response,
} from 'services/products/get-products-by-category'
import { CustomError } from 'types/custom-error'

export const useProductsByCategory = (category: string | undefined) => {
  const { data, error, isLoading } = useQuery<Response, CustomError>(
    `/products/${category}`,
    () => getProductsByCategoryService(category),
    {
      enabled: !!category,
    }
  )

  return { data, error, isLoading }
}
