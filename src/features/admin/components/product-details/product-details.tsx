import { Column, Flex, Text } from 'components/toolkit'
import Badge from 'components/toolkit/badge'
import React from 'react'

export interface ProductDetailsProps {}
const ProductDetails: React.FC<ProductDetailsProps> = () => { 
  return (
    <Column className="bg-white rounded-md">
      <div className="h-60 border-b-2">
      </div>
      <Column className="h-50 p-4">
        <Text as="p" className="text-sm text-gray-500">
          Novo │ 1 vendidos
        </Text>
        <Text as="p" className="text-lg font-semibold">
          Nome do produto detalhado
        </Text>
        <Flex>
          <Text className='text-2xl font-medium'>R$ 99 </Text>
          <Text className='font-medium'>99</Text>
        </Flex>
        <Text as="p" className='text-green-500 pb-2'>em 10x R$9,99 sem juros</Text>
        <Flex className='gap-2'>
          <Badge>Categoria</Badge>
          <Badge>Subcategoria</Badge>
          <Badge>Tag1</Badge>
          <Badge>TagN</Badge>
        </Flex>
      </Column>
    </Column>
  )
}

export default ProductDetails