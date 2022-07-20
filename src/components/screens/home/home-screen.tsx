import { useGetAllCategories } from 'api-hook/category/use-get-all-categories'
import DefaultPublicLayout from 'components/templates/public-layout/default-public-layout'
import CategoryProductsList from 'features/product/product-list/category-products-list'
import React from 'react'

// export interface HomeScreenProps {}
const HomeScreen: React.FC = () => {
  const { isLoading, data: categories } = useGetAllCategories()

  return (
    <DefaultPublicLayout title="Home">
      {isLoading && <div>Carregando...</div>}
      {categories?.map((category) => (
        <CategoryProductsList
          key={category.name}
          categoryName={category.displayName}
          categoryId={category.id}
        />
      ))}
    </DefaultPublicLayout>
  )
}

export default HomeScreen
