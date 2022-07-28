import { ChevronDownIcon } from '@heroicons/react/outline'
import { Column, Row, Text } from 'components/toolkit'
import React from 'react'

export interface ProductsTotalPriceProps {
  value?: string
}
const ProductsTotalPrice: React.FC<ProductsTotalPriceProps> = () => {
  return (
    <Row className="gap-12">
      <Column className="text-end gap-1">
        <Text as="p">Produtos (1)</Text>
        <Row>
          <Text as="p" className="flex text-sky-500">
            Envio para Avenida do Porto 280, Colombo
            <ChevronDownIcon className="w-5" />
          </Text>
        </Row>
        <Text as="p" className="pt-2">
          Total
        </Text>
      </Column>
      <Column>
        <Row className="justify-end">
          <Text as="p" className="text-lg">
            R$ 45
          </Text>
          <Text as="p" className="text-xs">
            90
          </Text>
        </Row>
        <Row className="justify-end">
          <Text as="p" className="text-lg">
            R$ 45
          </Text>
          <Text as="p" className="text-xs">
            90
          </Text>
        </Row>
        <Row>
          <Text as="p" className="text-4xl">
            R$ 45
          </Text>
          <Text as="p" className="text-xl">
            90
          </Text>
        </Row>
      </Column>
    </Row>
  )
}

export default ProductsTotalPrice
