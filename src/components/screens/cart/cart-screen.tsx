import DefaultPublicLayout from 'components/templates/public-layout/default-public-layout'
import { Column, Row } from 'components/toolkit'
import React from 'react'

// export interface CartScreenProps {}
const CartScreen: React.FC = () => {
  return (
    <DefaultPublicLayout title="cart" mainBackgroung="bg-gray pt-6">
      {/* <Column className={classNames('items-center')}>Carregando...</Column> */}
      <Column className="flex h-full shadow-xl bg-light">
        <Row className="w-64 bg-red h-96"></Row>
      </Column>
    </DefaultPublicLayout>
  )
}

export default CartScreen
