import { useGetAllCategories } from 'api-hook/category/use-get-all-categories'
import DefaultPublicLayout from 'components/templates/public-layout/default-public-layout'
import { Column } from 'components/toolkit'
import Spinner from 'components/toolkit/spinner/spinner'
import CategoryProductsList from 'features/product/product-list/category-products-list'
import { classNames } from 'helpers/class-names'
import React from 'react'

// export interface HomeScreenProps {}
const HomeScreen: React.FC = () => {
  const { isLoading, data: categories } = useGetAllCategories()

  return (
    <DefaultPublicLayout className="space-y-12 py-12" title="Home">
      {isLoading && <Column className={classNames('items-center')}><Spinner color="black" size={100} />Carregando...</Column>}
      {categories?.map((category) => (
        <CategoryProductsList
          key={category.name}
          categoryName={category.displayName}
          categoryId={category.id}
          categoryPageLink={category.id}
        />
      ))}
    </DefaultPublicLayout>
  )
}

export default HomeScreen