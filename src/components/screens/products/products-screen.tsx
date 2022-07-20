import CategoryLateralMenuLayout from 'components/category-lateral-menu-layout/category-lateral-menu-layout'
import DefaultPublicLayout from 'components/templates/public-layout/default-public-layout'
import { Row } from 'components/toolkit'
import { ProductsList } from 'features/category'
import RelatedSearches from 'features/related-searches/related-searches'

const ProductsScreen: React.FC = () => {
  return (
    <DefaultPublicLayout>
      <RelatedSearches />
      <Row className="justify-between mb-2">
        <CategoryLateralMenuLayout />
        <ProductsList />
      </Row>
    </DefaultPublicLayout>
  )
}

export default ProductsScreen
