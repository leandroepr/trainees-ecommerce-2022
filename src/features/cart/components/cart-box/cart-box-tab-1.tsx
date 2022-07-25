import { Column, Row } from 'components/toolkit'
import Button from 'components/toolkit/button/button'
import React from 'react'

const CartBoxFirstTab: React.FC = () => {
  return (
    <Column className="w-full">
      <Column className="flex flex-col">
        <Row className="space-x-20">
          <div>Component do produto</div>
        </Row>
        <Row className="pt-16 justify-end border-b pb-10">
          <div>Component de preços</div>
        </Row>
      </Column>
      <Row className="pt-16 justify-end">
        <Button className="mr-2 border border-info text-info py-1 px-4 rounded">
          Cancelar a compra
        </Button>
        <Button className="bg-info text-light py-1 px-4 rounded">
          Continuar a compra
        </Button>
      </Row>
    </Column>
  )
}

export default CartBoxFirstTab
