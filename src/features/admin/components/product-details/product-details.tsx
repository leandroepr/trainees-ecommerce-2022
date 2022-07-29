import { Column, Flex, Image, Text } from 'components/toolkit'
import Badge from 'components/toolkit/badge'
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
              <Text className="text-2xl pr-1">R$ </Text>
              <Text className="text-2xl ">
                {String(product?.price).split(/[,.\s]/)[0]}
              </Text>
              <Text className="text-md">
                {String(product?.price).split(/[,.\s]/)[1]}
              </Text>
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
