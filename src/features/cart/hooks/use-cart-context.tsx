import React from 'react'
import { CartContext } from '../contexts/cart-context'

const useCartContext = () => {
  const cartContext = React.useContext(CartContext)
  if (cartContext === undefined)
    throw new Error('useCartContext was used outside of its Provider')
  return cartContext
}

export default useCartContext
