import { ChevronDownIcon } from '@heroicons/react/outline'
import { Column, Row, Text } from 'components/toolkit'
import React from 'react'

export interface ProductsTotalPriceProps {}
const ProductsTotalPrice: React.FC<ProductsTotalPriceProps> = () => {
  return (
    <Row className="gap-12">
      <Column className="text-end gap-1">
        <Text>Produtos (1)</Text>
        <Row>
          <Text className="flex">
            Envio para Avenida do Porto 280, Colombo
            <ChevronDownIcon className="w-5" />
          </Text>
        </Row>
        <Text>Total</Text>
      </Column>
      <Column>
        <Row>
          <Text>R$ 45</Text>
          <Text>90</Text>
        </Row>
        <Row>
          <Text>R$ 45</Text>
          <Text>90</Text>
        </Row>
        <Row>
          <Text>R$ 45</Text>
          <Text>90</Text>
        </Row>
      </Column>
    </Row>
  )
}

export default ProductsTotalPrice
