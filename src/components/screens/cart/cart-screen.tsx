import DefaultPublicLayout from 'components/templates/public-layout/default-public-layout'
import { Column, Row } from 'components/toolkit'
import CartBox from 'features/cart/components/cart-box/cart-box'
import React from 'react'

// export interface CartScreenProps {}
const CartScreen: React.FC = () => {
  return (
    <DefaultPublicLayout title="cart" mainBackgroung="bg-gray pt-6">
      {/* <Column className={classNames('items-center')}>Carregando...</Column> */}
      <Column className="flex h-full shadow-xl bg-light">
        <Row className="bg-red h-96 w-full">
          <CartBox className="w-full" />
        </Row>
      </Column>
    </DefaultPublicLayout>
  )
}

export default CartScreen
