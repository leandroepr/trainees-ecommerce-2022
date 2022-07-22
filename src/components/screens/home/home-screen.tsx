import DefaultPublicLayout from 'components/templates/public-layout/default-public-layout'
import { Column, Container } from 'components/toolkit'
import Spinner from 'components/toolkit/spinner/spinner'
import { classNames } from 'core/helpers/class-names'
import { useGetAllCategories } from 'features/category/hooks/use-get-all-categories'
import CategoryProductsList from 'features/product/components/product-list/category-products-list'
import React from 'react'

// export interface HomeScreenProps {}
const HomeScreen: React.FC = () => {
  const { isLoading, data: categories } = useGetAllCategories()

  return (
    <DefaultPublicLayout title="Home">
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
