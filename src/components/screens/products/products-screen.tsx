import DefaultPublicLayout from 'components/templates/public-layout/default-public-layout'
import { Column, Container, Row, Spinner } from 'components/toolkit'
import { classNames } from 'core/helpers/class-names'
import { ProductsList } from 'features/category'
import CategoryLateralMenuLayout from 'features/category/components/category-lateral-menu-layout/category-lateral-menu-layout'
import RelatedSearches from 'features/category/components/related-searches/related-searches'
import { useGetAllProducts } from 'features/product/hooks/use-get-all-products'

const ProductsScreen: React.FC = () => {
  const { isLoading } = useGetAllProducts()

  return (
    <DefaultPublicLayout title="Compre Fácil | Produtos">
      <Container>
        <RelatedSearches />
        <Row className="grid-cols-2">
          <Row className="shrink-0">
            <CategoryLateralMenuLayout />
          </Row>
          {isLoading && (
            <Column className={classNames('items-center')}>
              <Spinner color="black" size={100} />
              Carregando...
            </Column>
          )}
          <Row className="">
            <ProductsList />
          </Row>
        </Row>
      </Container>
    </DefaultPublicLayout>
  )
}

export default ProductsScreen
