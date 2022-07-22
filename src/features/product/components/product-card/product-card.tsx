import { Card, Column, Row, Text } from 'components/toolkit'
import Badge from 'components/toolkit/badge'
import { BadgeVariant } from 'components/toolkit/badge/badge'
import { classNames } from 'core/helpers/class-names'
import { Product } from 'features/product/types/product'
import React from 'react'
import ProductImage from './product-image'
import ProductInstallment from './product-installment'
import ProductPrice from './product-price'

export interface ProductCardProps {
  className?: string
  product?: Product
  variant?: 'compressed' | 'detailed'
}
const ProductCard: React.FC<ProductCardProps> = ({
  className,
  variant = 'compressed',
  product,
}) => {
  const adaptCategories = (input: string[]) => {
    const result: { variant: BadgeVariant; content: string }[] = [
      {
        variant: 'info',
        content: 'Enviando normalmente',
      },
    ]
    input.forEach((value) => {
      result.push({
        variant: 'gray',
        content: value,
      })
    })
    return result
  }
  const adaptedCategories = product && adaptCategories(product.categories)
  const infoBadges = adaptedCategories?.filter(
    (badge) => badge.variant === 'info'
  )

  return (
    <Card className={classNames('divide-y', className)}>
      <ProductImage src={product?.imageUrl} alt={product?.name} />
      <Column className="flex-grow p-5 space-y-3">
        <Column>
          <ProductPrice
            price={product?.price}
            size={variant === 'compressed' ? 'small' : 'medium'}
          />
          <ProductInstallment
            installmentsInfo={product?.installmentsInfo}
            size={variant === 'compressed' ? 'medium' : 'small'}
            color={variant === 'compressed' ? 'gray' : 'dark'}
          />
        </Column>
        {variant === 'detailed' && (
          <React.Fragment>
            {(infoBadges?.length || 0) > 0 && (
              <Row className="gap-1 overflow-hidden min-w-fit">
                {infoBadges?.map((badge) => (
                  <Badge variant="info" key={badge.content}>
                    {badge.content}
                  </Badge>
                ))}
              </Row>
            )}
            <Text className="text-slate-500 tracking-tight text-sm break-words line-clamp-3">
              {product?.name}
            </Text>
          </React.Fragment>
        )}
      </Column>
    </Card>
  )
}

export default ProductCard
