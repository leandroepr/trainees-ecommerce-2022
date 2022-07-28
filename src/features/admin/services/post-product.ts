import { handleError } from "core/helpers/handle-error"
import { api } from "core/lib/api"
import { Product } from "features/product/types/product"


type ServiceType = (product: Product) => Promise<Product>
export const postProduct: ServiceType = async (product) => {
  console.log(product)
  try {
    const response = await api.post<Product>('/products', product)
    return response.data
  } catch (error: any) {
    throw handleError(error)
  }
}

