import React from 'react'
import { CartContext } from '../contexts/cart-context'
import CartReducer, { defaultCartReducerValue } from '../reducers/cart-reducer'

interface CartContextProviderProps {
  children?: React.ReactNode
}

const CartContextProvider: React.FC<CartContextProviderProps> = ({
  children,
}) => {
  const [cartContext, dispatch] = React.useReducer(
    CartReducer,
    defaultCartReducerValue
  )

  return (
    <CartContext.Provider value={{ items: cartContext, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
