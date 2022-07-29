import {
  Badge,
  Card,
  Column,
  Row,
  SkeletonElement,
  Text,
} from 'components/toolkit'
import { BadgeVariant } from 'components/toolkit/badge'
import { classNames } from 'core/helpers/class-names'
import { Product } from 'features/product/types/product'
import React from 'react'
import ProductImage from './product-image'
import ProductInstallment from './product-installment'
import ProductPrice from './product-price'

export type ProductCardVariant = 'compressed' | 'detailed'
export interface ProductCardProps {
  className?: string
  product?: Product
  variant?: ProductCardVariant
  pending?: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({
  className,
  variant = 'compressed',
  product,
  pending = false,
}) => {
  const adaptCategories = (input: string | string[]) => {
    const adaptedInput = Array.isArray(input) ? input : [input]

    const result: { variant: BadgeVariant; content: string }[] = [
      {
        variant: 'info',
        content: 'Enviando normalmente',
      },
    ]
    adaptedInput.forEach((value) => {
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

  if (pending)
    return (
      <Column
        className={classNames(
          'bg-light border rounded-md overflow-hidden divide-y h-full w-full',
          className
        )}
      >
        <SkeletonElement className="aspect-square" />
        <Column className="flex-grow p-5 space-y-3">
          <Column className="space-y-2">
            <SkeletonElement
              as="span"
              order="secondary"
              className="h-8 w-1/3"
            />
            <SkeletonElement
              as="span"
              order="secondary"
              className={classNames(
                variant === 'compressed' ? 'h-5' : 'h-4',
                'w-2/3'
              )}
            />
          </Column>
          {variant === 'detailed' && (
            <React.Fragment>
              <Row className="space-x-1">
                {Array(3).fill(
                  <SkeletonElement
                    as="span"
                    order="secondary"
                    className="bg-gray-200 h-6 w-1/2"
                  />
                )}
              </Row>
              <Column className="space-y-1">
                {Array(2).fill(
                  <SkeletonElement
                    as="span"
                    order="secondary"
                    className="bg-gray-200 h-4 w-full"
                  />
                )}
              </Column>
            </React.Fragment>
          )}
        </Column>
      </Column>
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
            <Text className="tracking-tight text-sm break-words line-clamp-3">
              {product?.name}
            </Text>
          </React.Fragment>
        )}
      </Column>
    </Card>
  )
}

export default ProductCard
