import DefaultPublicLayout from 'components/templates/public-layout/default-public-layout'
import { Column, Container, Row } from 'components/toolkit'
import NewProductForm from 'features/admin/components/new-product-form/new-product-form'
import ProductDetails from 'features/admin/components/product-details/product-details'
import { Product } from 'features/product/types/product'
import React from 'react'

const NewProductScreen: React.FC = () => {
  const [product, setProduct] = React.useState<Product>({} as Product)
  const handleNewProduct = (value: Product) => {
    setProduct(value)
  }

  return (
    <DefaultPublicLayout>
      <Container>
        <Row className="h-full w-full my-4">
          <Column className="w-60 drop-shadow hidden md:block">
            <ProductDetails product={product} />
          </Column>
          <Column className="m-auto md:ml-8 md:grow basis-2/3 rounded-sm bg-white h-fit drop-shadow">
            <NewProductForm handleNewProduct={handleNewProduct} />
          </Column>
        </Row>
      </Container>
    </DefaultPublicLayout>
  )
}

export default NewProductScreen
