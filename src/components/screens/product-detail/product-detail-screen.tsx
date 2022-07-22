import DefaultPublicLayout from 'components/templates/public-layout/default-public-layout'
import { Container, Row } from 'components/toolkit'
import ProductDetailsBox from 'features/product-details/product-detail-box'
import ProductDetailsPageCategoriesBox from 'features/product-details/product-details-page-categories-menu-box'
import ProductImageAndDescriptionBox from 'features/product-details/product-image-and-description-box'
import React from 'react'

export interface ProductDetailScreenProps {
  slug: string
}
const ProductDetailScreen: React.FC<ProductDetailScreenProps> = () => {
  return (
    <DefaultPublicLayout title="Detalhes do produto">
      <Container>
        <section className="flex flex-col space-y-4 pt-3 text-gray-700 overflow-hidden">
          <ProductDetailsPageCategoriesBox />
          <Row className="space-x-6 bg-white shrink-0">
            <Row className="pl-4 max-w-full mr-12 resize-none">
              <ProductImageAndDescriptionBox />
              <div className="max-w-sm pr-4 mt-8">
                <ProductDetailsBox />
              </div>
            </Row>
          </Row>
        </section>
      </Container>
    </DefaultPublicLayout>
  )
}

export default ProductDetailScreen
