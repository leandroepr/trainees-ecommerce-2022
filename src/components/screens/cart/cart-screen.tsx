import DefaultPublicLayout from 'components/templates/public-layout/default-public-layout'
import CartBox from 'features/cart/components/cart-box/cart-box'
import React from 'react'

// export interface CartScreenProps {}
const CartScreen: React.FC = () => {
  return (
    <DefaultPublicLayout title="cart">
      <CartBox />
    </DefaultPublicLayout>
  )
}

export default CartScreen
