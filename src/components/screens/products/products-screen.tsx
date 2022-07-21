import { useGetAllProducts } from 'api-hook/product/use-get-all-products'
import CategoryLateralMenuLayout from 'components/category-lateral-menu-layout/category-lateral-menu-layout'
import DefaultPublicLayout from 'components/templates/public-layout/default-public-layout'
import { Column, Row } from 'components/toolkit'
import Spinner from 'components/toolkit/spinner/spinner'
import { ProductsList } from 'features/category'
import RelatedSearches from 'features/related-searches/related-searches'
import { classNames } from 'helpers/class-names'

const ProductsScreen: React.FC = () => {
  const { isLoading } = useGetAllProducts()

  return (
    <DefaultPublicLayout>
      <RelatedSearches />
      <Row className="justify-between mb-2">
        <CategoryLateralMenuLayout />
        {isLoading && <Column className={classNames('items-center')}><Spinner color="black" size={100} />Carregando...</Column>}
        <ProductsList />
      </Row>
    </DefaultPublicLayout>
  )
}

export default ProductsScreen