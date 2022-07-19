import { useGetAllCategories } from 'api-hook/category/use-get-all-categories'
import { useProductsByCategory } from 'api-hook/product/use-get-products-by-category'
import DefaultPublicLayout from 'components/templates/public-layout/default-public-layout'
import CategoryProductsList from 'features/product/product-list/category-products-list'
import React from 'react'

// export interface HomeScreenProps {}
const HomeScreen: React.FC = () => {
  const { isLoading, data: categories } = useGetAllCategories()

  return (
    <DefaultPublicLayout title="Home">
      {isLoading && <div>Carregando...</div>}
      <div className="px-3">
        {categories &&
          categories.map((category) => (
            <CategoryProductsList
              key={category.name}
              categoryName={category.displayName}
              productsList={useProductsByCategory(category.id).data}
            />
          ))}
      </div>
    </DefaultPublicLayout>
  )
}

export default HomeScreen
