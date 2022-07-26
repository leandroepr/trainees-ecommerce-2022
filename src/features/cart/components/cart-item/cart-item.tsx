import { Column, Row, Text } from 'components/toolkit'
import Placeholder from 'components/toolkit/placeholder/placeholder'
import React from 'react'

const CartItem: React.FC = () => {
  return (
    <Row className="">
      <Placeholder text="" width="82" height="82"></Placeholder>
      <Column className="ml-1 h-32 w-auto">
        <Text as="h1" className="font-bold text-lg">
          Camiseta Hering Super Cotton - Unisex
        </Text>
        <Row className="items-center">
          <Text as="p">Lorem ipsum dolor sit amet consectetur</Text>
          <a href="">
            <p className="text-info text-xs mx-4">Alterar</p>
          </a>
        </Row>
        <Text as="span" className="text-success text-xs my-1">
          em 10x R$ 5,65
        </Text>
        <Row className="my-2">
          <a href="">
            <p className="text-info text-xs">Mais produtos do vendedor</p>
          </a>
          <a href="">
            <p className="text-info text-xs mr-4 ml-4">Comprar agora</p>
          </a>
          <a href="">
            <p className="text-info text-xs mr-4">Salvar para depois</p>
          </a>
          <a href="">
            <p className="text-info text-xs mr-4">Excluir</p>
          </a>
        </Row>
      </Column>
      <Column className="items-center justify-center w-64 h-24">Button</Column>
      <Column className="items-center justify-center w-32 h-20">Valor</Column>
    </Row>
  )
}

export default CartItem
