import { Card, Column, Text } from 'components/toolkit'
import Link from 'next/link'
import { Product } from 'types/product'
import ProductImage from './product-image'
import ProductPrice from './product-price'

export interface ProductCardProps {
  className?: string
  product?: Product
  variant?: 'compressed' | 'detailed'
}
const ProductCard: React.FC<ProductCardProps> = ({
  // variant = 'compressed',
  product,
}) => {
  return (
    <Link href="#">
      <Card className="divide-y">
        <ProductImage src={product?.imageUrl} alt={product?.name} />
        <Column className="flex-grow p-5 group-active:bg-gray-100">
          <ProductPrice price={product?.price} />
          <Text textType="cardInstallment">{product?.installmentsInfo}</Text>
        </Column>
      </Card>
    </Link>
  )
}

export default ProductCard
