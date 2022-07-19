import DefaultPublicLayout from 'components/templates/public-layout/default-public-layout'
import React from 'react'

export interface ProductDetailScreenProps {
  slug: string
}
const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({ slug }) => {
  return (
    <DefaultPublicLayout title="Detalhes do produto">
      <div>O slug do produto é {slug}</div>
    </DefaultPublicLayout>
  )
}

export default ProductDetailScreen
