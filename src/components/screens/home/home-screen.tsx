import DefaultPublicLayout from 'components/templates/public-layout/default-public-layout'
import { Column, Container, Spinner } from 'components/toolkit'
import { classNames } from 'core/helpers/class-names'
import { useGetAllCategories } from 'features/category/hooks/use-get-all-categories'
import { useGetAllCategoriesWithProducts } from 'features/category/hooks/use-get-all-categories-with-products'
import CategoryProductsList from 'features/product/components/product-list/category-products-list'
import React from 'react'

// export interface HomeScreenProps {}
const HomeScreen: React.FC = () => {
  const { isLoading, data: categories } = useGetAllCategories()
  const {
    data,
    isLoading: loadingCategories,
    error,
  } = useGetAllCategoriesWithProducts()

  React.useEffect(() => {
    console.log({
      log: 'Categories with products',
      data,
      isLoading: loadingCategories,
      error,
    })
  }, [data, loadingCategories, error])

  return (
    <DefaultPublicLayout title="Compre Fácil | Início">
      <Container className="space-y-12 py-12">
        {isLoading && (
          <Column className={classNames('items-center')}>
            <Spinner color="black" size={100} />
            Carregando...
          </Column>
        )}
        {categories?.map((category) => (
          <CategoryProductsList
            key={category.name}
            categoryName={category.displayName}
            categoryId={category.id}
            categoryPageLink={category.id}
          />
        ))}
      </Container>
    </DefaultPublicLayout>
  )
}

export default HomeScreen
