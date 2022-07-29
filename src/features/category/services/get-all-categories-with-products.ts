import { handleError } from 'core/helpers/handle-error'
import { api } from 'core/lib/api'
import { Category } from 'features/category/types/category'
import getAllProductsService from 'features/product/services/get-all-products'
import { Product } from 'features/product/types/product'

type CategoryWithProducts = Category & { products: Product[] }

export type Response = CategoryWithProducts[]
type ServiceType = () => Promise<Response>
const getAllCategoriesWithProductsService: ServiceType = async () => {
  try {
    const { data: categories } = await api.get<Category[]>('/categories')
    const categoriesWithProducts = Promise.all(
      categories.map(async (category) => {
        const products = await getAllProductsService({
          category: category.id,
          size: 5,
          page: 1,
        })
        return { ...category, products }
      })
    )
    return categoriesWithProducts
  } catch (error: any) {
    throw handleError(error)
  }
}

export default getAllCategoriesWithProductsService
