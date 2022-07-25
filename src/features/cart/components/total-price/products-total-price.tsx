import { ChevronDownIcon } from '@heroicons/react/outline'
import { Column as Column, Row, Text } from 'components/toolkit'
import React from 'react'

export interface ProductsTotalPriceProps {}
const ProductsTotalPrice: React.FC<ProductsTotalPriceProps> = () => { 
  return (
    <Row className="gap-12">
      <Column className="text-end gap-1">
        <Text textType="normal">Produtos (1)</Text>
        <Row>
          <Text className="flex" textType="categoryProductListLink">
            Envio para Avenida do Porto 280, Colombo
            <ChevronDownIcon className="w-5" />
          </Text>
        </Row>
        <Text textType="normal">Total</Text>
      </Column>
      <Column>
        <Row>
          <Text textType="normal">R$ 45</Text>
          <Text textType="expandedCardCents">90</Text>
        </Row>
        <Row>
          <Text textType="normal">R$ 45</Text>
          <Text textType="expandedCardCents">90</Text>
        </Row>
        <Row>
          <Text textType="expandedCardCurrency">R$ 45</Text>
          <Text textType="expandedCardCents">90</Text>
        </Row>
      </Column>
    </Row>
  )
}

export default ProductsTotalPrice