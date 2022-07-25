import { Column, Row } from 'components/toolkit'
import Button from 'components/toolkit/button/button'
import React from 'react'

const CartBoxFirstTab: React.FC = () => {

  return (
    <Column className='w-full'>
      <Column className="flex flex-col">
        <Row className="space-x-20">
          <div>Component do produto</div>
        </Row>
        <Row className="pt-16 justify-end border-b pb-10">
          <div>Component de preços</div>
        </Row>
      </Column>
      <Row className="pt-16 justify-end">
        <Button shape="rounded" variant='light' size='md' className='mr-2'>Cancelar a compra</Button>
        <Button shape="rounded" variant='info' size='md'>Continuar a compra</Button>
      </Row>
    </Column >
  )
}

export default CartBoxFirstTab
