import { Column, Flex, Image, Text } from 'components/toolkit'
import Badge from 'components/toolkit/badge'
import ProductPrice from 'features/product/components/product-card/product-price'
import { Product } from 'features/product/types/product'
import React from 'react'

export interface ProductDetailsProps {
  product: Product
}
const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <Column className="bg-white rounded-md">
      <div className="h-60 border-b-2">
        <Image src={product?.imageUrl} alt="Imagem do produto" />
      </div>

      <Column className="h-50 p-4">
        <Text as="p" className="text-sm text-gray-500">
          {product.condition ? (
            <>
              {product?.condition} | {product?.soldAmount}
            </>
          ) : null}
          {product?.soldAmount ? ' vendido(s)' : null}
        </Text>
        <Text as="p" className="text-lg font-semibold">
          {product?.name}
        </Text>
        <Flex>
          {product.price ? (
            <>
              <ProductPrice price={product.price}/>
            </>
          ) : null}
        </Flex>
        <Text as="p" className="text-green-500 pb-2">
          {product?.installmentsInfo}
        </Text>
        <Flex className="flex-wrap gap-2">
          {product?.categoryId && (
            <Badge variant="gray">{product?.categoryId}</Badge>
          )}

          {typeof product?.categories === 'string' &&
            product?.categories
              ?.trim()
              .split(',')
              .filter(Boolean)
              .map(
                (category: string) =>
                  category && (
                    <Badge key={category} variant="gray">
                      {category}
                    </Badge>
                  )
              )}
        </Flex>
      </Column>
    </Column>
  )
}

export default ProductDetails
