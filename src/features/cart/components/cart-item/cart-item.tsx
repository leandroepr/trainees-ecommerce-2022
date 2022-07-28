import { Column, Row, Text } from 'components/toolkit'
import { CartItemType } from 'features/cart/types/cart-item-type'
import ProductPrice from 'features/product/components/product-card/product-price'
import React from 'react'
import CountButton from '../count-button/count-button'

export interface CartItemProps {
  item: CartItemType
  handleItem: (type: string) => void
}

const CartItem: React.FC<CartItemProps> = ({ item, handleItem }) => {
  const { product, amount } = item
  return (
    <Row className="w-full">
      <Column className="ml-1 h-32 w-full">
        <Text as="h1" className="font-bold text-lg">
          {product.name}
        </Text>
        <Row className="items-center">
          <Text as="p">Lorem ipsum dolor sit amet consectetur</Text>
          <a href="">
            <p className="text-info text-xs mx-4">Alterar</p>
          </a>
        </Row>
        <Text as="span" className="text-success text-xs my-1">
          {product.installmentsInfo}
        </Text>
        <Row className="my-2">
          <a href="">
            <p className="text-info text-xs">Mais produtos do vendedor</p>
          </a>
          <a href="">
            <p className="text-info text-xs mr-4 ml-4">Comprar agora</p>
          </a>
          <button onClick={() => handleItem('save')}>
            <p className="text-info text-xs mr-4">Salvar para depois</p>
          </button>
          <button onClick={() => handleItem('delete')}>
            <p className="text-info text-xs mr-4">Excluir</p>
          </button>
        </Row>
      </Column>
      <Column className="items-center justify-center w-1/5 h-24">
        <CountButton handleAmount={(type) => handleItem(type)}>
          {amount}
        </CountButton>
      </Column>
      <Column className="items-center justify-center w-1/5 h-20">
        <ProductPrice price={product.price * amount} />
      </Column>
    </Row>
  )
}

export default CartItem
