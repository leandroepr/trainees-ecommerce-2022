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
        <Image src={product.imageUrl} alt="Qualquer imagem" />
      </div>

      <Column className="h-50 p-4">
        <Text as="p" className="text-sm text-gray-500">
          {product ? (
            <>
              {product?.condition} | {product?.soldAmount}
            </>
          ) : null}
        </Text>
        <Text as="p" className="text-lg font-semibold">
          {product?.name}
        </Text>
        <Flex>
          <Text className="text-2xl font-medium">
            {String(product?.price).split(/[,.\s]/)[0]}
            {String(product?.price).split(/[,.\s]/)[1]}
          </Text>
          <Text className="font-sm">
            {String(product?.price).split(/[,.\s]/)[2]}
          </Text>
        </Flex>
        <Text as="p" className="text-green-500 pb-2">
          {product?.installmentsInfo}
        </Text>
        <Flex className="flex-wrap gap-2">
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
