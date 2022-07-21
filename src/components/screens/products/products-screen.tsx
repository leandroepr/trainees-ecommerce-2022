import DefaultPublicLayout from 'components/templates/public-layout/default-public-layout'
import { Column, Row } from 'components/toolkit'
import Spinner from 'components/toolkit/spinner/spinner'
import { classNames } from 'core/helpers/class-names'
import { ProductsList } from 'features/category'
import CategoryLateralMenuLayout from 'features/category/components/category-lateral-menu-layout/category-lateral-menu-layout'
import RelatedSearches from 'features/category/components/related-searches/related-searches'
import { useGetAllProducts } from 'features/product/hooks/use-get-all-products'

const ProductsScreen: React.FC = () => {
  const { isLoading } = useGetAllProducts()

  return (
    <DefaultPublicLayout>
      <RelatedSearches />
      <Row className="justify-between mb-2">
        <CategoryLateralMenuLayout />
        {isLoading && (
          <Column className={classNames('items-center')}>
            <Spinner color="black" size={100} />
            Carregando...
          </Column>
        )}
        <ProductsList />
      </Row>
    </DefaultPublicLayout>
  )
}

export default ProductsScreen
