import { useMutation } from 'react-query'
import { postProduct } from '../services/post-product'

export const UsePostProduct = () => {
  const { isLoading, mutate } = useMutation(postProduct)
  return { isLoading, mutate }
}
