import { CustomError } from 'core/types/custom-error'
import { Response } from 'features/product/services/get-all-products'
import { useQuery } from 'react-query'
import getProductBySlugService from '../services/get-product-by-slug-service'

export const useGetProductBySlug = (slug: string) => {
  const { data, error, isLoading } = useQuery<Response, CustomError>(
    ['/products', slug],
    () => getProductBySlugService(slug)
  )

  return { data, error, isLoading }
}
