import { ChevronDownIcon } from '@heroicons/react/outline'
import { Column, Row, Text } from 'components/toolkit'
import useCartContext from 'features/cart/hooks/use-cart-context'
import ProductPrice from 'features/product/components/product-card/product-price'
import React from 'react'
import CartAmount from '../cart-amount'

export interface ProductsTotalPriceProps {
  value?: string
}
const ProductsTotalPrice: React.FC<ProductsTotalPriceProps> = () => {
  const { items } = useCartContext()

  const calculatePrice = () => {
    let totalPrice = 0
    items.forEach((item) => {
      totalPrice += item.amount * item.product.price
    })
    return totalPrice
  }

  const SHIPMENT_PRICE = items.length > 0 ? 10 : 0

  return (
    <Row className="gap-12">
      <Column className="text-end gap-1">
        <Text as="p">Produtos ({<CartAmount />})</Text>
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
          <ProductPrice price={calculatePrice()} />
        </Row>
        <Row className="justify-end">
          <ProductPrice price={SHIPMENT_PRICE} />
        </Row>
        <Row>
          <ProductPrice price={calculatePrice() + SHIPMENT_PRICE} />
        </Row>
      </Column>
    </Row>
  )
}
export default ProductsTotalPrice
